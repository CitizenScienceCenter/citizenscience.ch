var Minio = require("minio");

// Instantiate the minio client with the endpoint
// and access keys as shown below.

// TODO: Change minio server by S3 one and env 
export const minio = new Minio.Client({
  endPoint: "play.min.io",
  port: 9000,
  useSSL: true,
  accessKey: "Q3AM3UQ867SPQQA43P2F",
  secretKey: "zuf+tfteSlswRu7BJ86wekitnifILbZam1KYY3TG",
});