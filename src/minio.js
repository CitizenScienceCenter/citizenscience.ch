var Minio = require("minio");

// Instantiate the minio client with the endpoint
// and access keys as shown below.
const minio = new Minio.Client({
  endPoint: process.env.VUE_APP_MINIO_ENDPOINT,
  accessKey: process.env.VUE_APP_MINIO_ACCESS_KEY,
  secretKey: process.env.VUE_APP_MINIO_SECRET_KEY,
});

export const getRemoteFile = function (fname) {
  let data;
  const promise = new Promise(function(resolve, reject) {
    minio.getObject(process.env.VUE_APP_BUCKET_NAME, fname, function(err, dataStream) {
      if (err) {
        reject(`Error reteiving object: ${err}`);
      }
      dataStream.on("data", function(chunk) {
        data += chunk;
      });
      dataStream.on("end", function() {
        const resp = JSON.parse(data.split("undefined")[1]);
        resolve(resp);
      });
      dataStream.on("error", function(err) {
        reject(`Error reteiving object: ${err}`);
      });
    });
  });
  return promise;
};
