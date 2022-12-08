import { Request, Response } from "express";
import fs from "fs";
import * as ExcelJS from "exceljs";
import * as path from "path";
import { filePath } from "../server";
import { json } from "body-parser";
import * as CircularJSON from "circular-json";

const fileUpload = async (req: Request, res: Response) => {
  try {
    let file = req.file?.path;
    console.log("result", req.file);


    const workbook = new ExcelJS.Workbook();
     const resp=  await workbook.xlsx.readFile(filePath);
     console.log(resp)
    workbook.eachSheet(function (workSheet) {

      workSheet.eachRow(function (row) {

        let value = JSON.stringify(row.values);

        let value2 = JSON.parse(value);

         console.log(value2);

      

      });

    });
    // let fpath = req.file?.path || "";
   
    
   

    //console.log("resp",resp);

    // workbook.eachSheet((worksheet)=>{
    //   console.log(worksheet)
    //   worksheet.eachRow((row)=>{
    //     row.eachCell((value)=>{
    //       console.log("result1",value)
    //     })
    //   })

    //   })

    res.status(200).json({
      message: "file uploaded successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(400).json({
      response: error,
    });
  }
};
export { fileUpload };
