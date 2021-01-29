import moment from "moment";

var Minio = require("minio");

// Instantiate the minio client with the endpoint
// and access keys as shown below.
const minioClient = new Minio.Client({
  endPoint: process.env.VUE_APP_MINIO_ENDPOINT,
  accessKey: process.env.VUE_APP_MINIO_ACCESS_KEY,
  secretKey: process.env.VUE_APP_MINIO_SECRET_KEY,
});

export const getRemoteFile = function(fname) {
  let data;
  const promise = new Promise(function(resolve, reject) {
    minioClient.getObject(process.env.VUE_APP_BUCKET_NAME, fname, function(
      err,
      dataStream
    ) {
      if (err) {
        reject(`Error retrieving file: ${err}`);
      }
      dataStream.on("data", function(chunk) {
        data += chunk;
      });
      dataStream.on("end", function() {
        const resp = JSON.parse(data.split("undefined")[1]);
        resolve(resp);
      });
      dataStream.on("error", function(err) {
        reject(`Error retrieving file: ${err}`);
      });
    });
  });
  return promise;
};

export const updateStringFile = async function(fname, fileContent) {
  var metaData = {
    "Content-Type": "application/json",
  };
  let fname_components = fname.split("/");
  const [folder, path] = [fname_components.pop(), fname_components.join("/")];

  // file name backup manipulation
  const backup = `backup/${path}/${folder}/${folder}_${moment().valueOf()}.json`;

  // add extension to file name
  fname = `${fname}.json`;
  const sourceObject = `/${process.env.VUE_APP_BUCKET_NAME}/${fname}`;
  try {
    // first generate a copy of the current file
    await copyRemoteFile(process.env.VUE_APP_BUCKET_NAME, backup, sourceObject);

    // after current file is copied, the new version file is submited
    await minioClient.putObject(
      process.env.VUE_APP_BUCKET_NAME,
      fname,
      fileContent,
      metaData,
      function(err) {
        if (err) {
          alert("Error updating file");
          return console.log(err);
        }
        alert("File successfully updated");
      }
    );
  } catch (error) {
    console.log(error);
  }
};

const copyRemoteFile = function(bucketName, objectName, sourceObject) {
  const promise = new Promise(function(resolve, reject) {
    let conds = new Minio.CopyConditions();
    minioClient.copyObject(
      bucketName,
      objectName,
      sourceObject,
      conds,
      function(err, data) {
        if (err) {
          reject(`Error copying file: ${err.message}`);
        } else {
          console.log(`File backup path on remote server: ${objectName}`);
          resolve(data);
        }
      }
    );
  });
  return promise;
};
