import fileReader from "./fileReader.js";
import fs from "node:fs/promises";
import pathBuilder from "./pathBuilder.js";

export default async function fileMerger(filePathOne: string, filePathTwo: string) {
    const filePath: string = pathBuilder("../../resources/data.json", import.meta.url);
    const folderPath: string = pathBuilder("../../dist/resources", import.meta.url); 
    const filePathPrime: string = pathBuilder("../../dist/resources/data.json", import.meta.url);


    try {
        const bookOne = await fileReader(filePathOne);
        const bookTwo = await fileReader(filePathTwo);

        const data = { bookOne, bookTwo }

        await fs.writeFile(filePath, JSON.stringify(data));
        await fs.mkdir(folderPath);
        await fs.writeFile(filePathPrime, JSON.stringify(data));
    } catch (e) {
        console.log(e)
        throw e;
    }
}