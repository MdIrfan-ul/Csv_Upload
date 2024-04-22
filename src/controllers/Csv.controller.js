import fs from "fs";
import {  create, getAll, getById } from "../models/Csv.model.js";
import csvParser from "csv-parser";

export default class CsvController{

    async home(req,res,next){
        try {
            const files = await getAll(); 
            res.render("home",{files:files});
        } catch (error) {
            res.status(400).send("something went wrong while fetching files")
        }
       
    }
    async uploadDisplay(req, res, next) {
        // console.log('req.file:', req.file);

    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    const results = [];
    const filePath = req.file.path;

    fs.createReadStream(filePath)
        .pipe(csvParser())
        .on('data', (data) => results.push(data))
        .on('end', async () => {
            try {
                await create(req.file, results);
                res.redirect("/");
            } catch (error) {
                console.error('Error creating file:', error);
                res.status(500).send('Error creating file.');
            }
        })
        .on('error', (error) => {
            console.error('Error parsing CSV:', error);
            res.status(500).send('Error parsing CSV.');
        });
        
    }
    async getDetails(req,res,next){
        try {
            const fileId = req.params.id;
            const file = await getById(fileId);
    
            if (!file) {
                return res.status(404).send('File not found.');
            }
    
            res.render('fileDetails', { file: file });
        } catch (error) {
            console.error('Error fetching file:', error);
            res.status(500).send('Error fetching file.');
        }
    }

    

}