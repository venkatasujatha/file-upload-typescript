import multer from "multer";

import Express from "express";
const router = Express.Router();
import path from "path";
import * as controller from "../controller/fileUploadController"

//SINGLE IMAGE UPLOAD

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./uploads");
  },
  filename: function (req, file, callback) {
    console.log(file)
    callback(null,  file.originalname);
  },
});

//apply filter for type of file and limit the size of file

//create multer constructor to initialize storage
//MULTER FOR SINGLE IMAGE STORAGE

// const filter = function (req:any, file: any, callback: any) {
//   console.log(file.mimetype);
//   if (file.mimetype == "application/vnd.ms-excel" || file.mimetype == "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
//     callback(null, true);
//   } else {
//     callback(new Error("file extension is not image "));
//   }
// };
const upload =multer({storage:storage})

//const upload =multer({storage:storage,fileFilter:filter})
router.post('/fileUpload',upload.single('path'),controller.fileUpload)

export { router };