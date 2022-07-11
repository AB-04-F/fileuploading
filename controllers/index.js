var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
var db = require("../models");
var file = db.files;

const index = require("../index");

router.get("/", function(req, res) {
    res.render("index");
});

router.post("/upload", (req, res) => {
    if (!req.files) {
        res.send("No File Upload!");
    } else {
        console.log(req.files);
        let myFile = req.files.myFile;
        let filename = myFile.name;
        console.log(filename);
        console.log(myFile);

        myFile.mv("./uploads/" + filename, function(err) {
            if (err) {
                res.send(err);
            } else {
                res.send("file is uploaded Successfully!");
            }
        });
    }
});

router.post("/file", jsonParser, function(req, res, next) {
    console.log(req.body);
    file
        .create({})

    .then(function(result) {
            if (result) {
                res.json({ success: true, message: "file is  upload successfully..!" });
            } else {
                res.json({ success: false, message: "file is  not upload ..!" });
            }
        })
        .catch(function(err) {
            console.log(err);
            res.json({
                success: false,
                message: "err while uploading a file ..!",
            });
        });
});

router.get("/file/:id", jsonParser, function(req, res, next) {
    console.log(req.params);
    file
        .findOne({
            where: {
                id: req.params.id,
            },
        })
        .then(function(results) {
            if (results) {
                console.log(results);
                res.json({ success: true, message: "file is found!" });
            } else {
                res.json({ success: false, message: "file is not found!" });
            }
        })
        .catch(function(err) {
            console.log(err);
            res.json({ success: false, message: "error while found file!" });
        });
});

router.get("/files", jsonParser, function(req, res, next) {
    file
        .findAll({})
        .then(function(results) {
            if (results) {
                res.json(results);
            } else {
                res.json([]);
            }
        })
        .catch(function(err) {
            console.log(err);
            res.json({ success: false, message: "error while found file!" });
        });
});

router.put("/file/:id", jsonParser, function(req, res, next) {
    console.log(req.body);
    file
        .update(req.body, {
            where: {
                id: req.params.id,
            },
        })
        .then(function(results) {
            if (results) {
                res.json({ succes: true, message: "file updated!" });
            } else {
                res.json({ success: false, message: "file is not updated!" });
            }
        })
        .catch(function(err) {
            console.log(err);
            res.json({ success: false, message: "error while is updating file!" });
        });
});

router.delete("/file/:id", jsonParser, function(req, res, next) {
    file
        .destroy({
            where: {
                id: req.params.id,
            },
        })
        .then(function(results) {
            if (results) {
                res.json({ succes: true, message: "file deleted!" });
            } else {
                res.json({ success: false, message: "file is not deleted!" });
            }
        })
        .catch(function(err) {
            console.log(err);
            res.json({ success: false, message: "error while is deleting file!" });
        });
});

module.exports = router;