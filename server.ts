import express,{Request,Response} from 'express';
import { router } from './router/router';
import bodyPaser from 'body-parser';
const app =express();
import path from 'path'
const filePath = path.join(__dirname, 'uploads/sujatha.xlsx');
const port =3000;
app.use(bodyPaser.urlencoded({extended:true}))
app.use(bodyPaser.json());
app.use('/',router);

app.get('/get',(req:Request,res:Response)=>{
    res.send("hello world")
})
app.listen(port,()=>{
    console.log(`server listening on port ${port}`)
})
export{filePath}