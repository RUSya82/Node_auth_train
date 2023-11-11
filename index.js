import express from 'express';
import mongoose from "mongoose";

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());

const start = async () => {
    try{
        await mongoose.connect('mongodb+srv://asusalimrr:scdXYlTJWX1pPIxe@cluster0.pxqhgca.mongodb.net/?retryWrites=true&w=majority');
        app.listen(PORT, () => {
            console.log('Server started at port ' + PORT);
        });
    } catch (e){
        console.log(e)
    }
}
start();
