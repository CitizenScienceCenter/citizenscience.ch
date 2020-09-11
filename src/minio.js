var Minio = require("minio");

// Instantiate the minio client with the endpoint
// and access keys as shown below.

// TODO: Change minio server by S3 one and env
const minio = new Minio.Client({
  endPoint: "play.min.io",
  port: 9000,
  useSSL: true,
  accessKey: "Q3AM3UQ867SPQQA43P2F",
  secretKey: "zuf+tfteSlswRu7BJ86wekitnifILbZam1KYY3TG",
});

export const getRemoteFile = function (fname) {
  let data;
  const promise = new Promise(function(resolve, reject) {
    minio.getObject("test-10092020", fname, function(err, dataStream) {
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
