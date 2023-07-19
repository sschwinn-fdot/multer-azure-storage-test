import dotenv from "dotenv";
dotenv.config({path: './.env'});

import express from 'express';
import { uploadAd, uploadBack, uploadConn, uploadSas, uploadV1 } from './middleware/UploadMiddleware';


const app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.send('Server is up and running!');
});

app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});

app.post('/uploadAd', uploadAd.any(), (req, res) => {
    const message = `File uploaded via version 2 azure AD auth, to ${req.files[0].blobName}`;
    console.log(message);
    res.send(message);
});
app.post('/uploadBack',uploadBack.any(), (req, res) =>{
    const message = `File uploaded via version 2 with no auth specified, to ${req.files[0].blobName}`;
    console.log(message);
    res.send(message);
});;
app.post('/uploadConn',uploadConn.any(), (req, res) =>{
    const message = `File uploaded via version 2 with connection string, to ${req.files[0].blobName}`;
    console.log(message);
    res.send(message);
});
app.post('/uploadSas',uploadSas.any(), (req, res) =>{
    const message = `File uploaded via version 2 with SAS token, to ${req.files[0].blobName}`;
    console.log(message);
    res.send(message);
});
app.post('/uploadV1',uploadV1.any(), (req, res) =>{   
    const message = `File uploaded via version 1, to ${req.files[0].blobName}`;
    console.log(message);
    res.send(message);
});
