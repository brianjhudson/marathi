const AWS = require('aws-sdk');
const Keys = require("../../config/amazonConfig");

AWS.config.update({
    accessKeyId: Keys.accessKey
  , secretAccessKey: Keys.secretAccessKey
  , region: Keys.amazonRegion
});

const s3 = new AWS.S3();

module.exports = {
    postLessonPhoto: (req, res) => {
        const buf = new Buffer(req.body.imageBody.replace(/^data:image\/\w+;base64,/, ""), 'base64');

         var params = {
            Bucket: Keys.bucketName
            , Key: req.body.imageName
            , Body: buf
            , ContentType: 'image/' + req.body.imageExtension
            , ACL: 'public-read'
        };

        s3.upload(params, function (err, data) {
            console.log(err, data);
            if (err) return res.status(500).send(err);

            // TODO: save data to mongo
            return res.status(201).json(data);
        });

    },
}
