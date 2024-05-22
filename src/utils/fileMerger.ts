import fileReader from "./fileReader";
import fs from "node:fs/promises";

export default async function fileMerger(filePathOne: string, filePathTwo: string) {
    try {
        const bookOne = await fileReader(filePathOne);
        const bookTwo = await fileReader(filePathTwo);

        const data = [...bookOne, ...bookTwo];

        await fs.writeFile("../../resources/data.json", data);
    } catch (e) {
        console.log(e)
    }
}