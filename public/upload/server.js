//definisikan dependency
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
//multer
const multer = require("multer");
//menambahkan path
const path = require("path");
const { userInfo } = require("os");

app.use('/upload', express.static(path.join(__dirname, 'upload')));

//lokasi unggah
const diskStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "public/upload"));
    },
    filename: function (req, file, cb) {
        cb( 
            null,
            file.fieldname + "-" + Date.now() + path.extname(file.originalname)
        );
    },
});






app.put(
    "/movies/upload",
    multer({ storage: diskStorage }).single("photo"),
    (req, res) => {
        const file = req.file.path;
        console.log(file);
        if (!file) {
            res.status(400).send({
                status: false,
                data: "No File Is Selected",
            });
        }
        movies[req.query.index].photo = req.file.path;
        res.send(file);

    }
);

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on Port:" + PORT);
});