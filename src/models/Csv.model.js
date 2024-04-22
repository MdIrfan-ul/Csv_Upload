import { CSVModel } from "./Csv.Schema.js";

export const create = async(file,results)=>{
    try {
        const newFile = new CSVModel({
            name: file.originalname,
            timestamp: Date.now(),
            size:file.size ,
            data:results
        });
    
        await newFile.save();
        return newFile;
    } catch (error) {
        console.error('Mongoose error:', error);
        throw new Error('Error creating file.');
    }
    
}
export const getAll = async ()=>{
    // console.log('Fetching all files...');
    const files = await CSVModel.find({});
    // console.log('Files fetched:', files);
    return files;
}

export const getById = async (id)=>{
    return await CSVModel.findById(id);
}