import fileReader from "./fileReader.js";
import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "path";

export default async function fileMerger(filePathOne: string, filePathTwo: string) {

    const filename = fileURLToPath(import.meta.url);
    const dir = dirname(filename);
    const filePath = resolve(dir, "../../resources/data.json");

    try {
        const bookOne = await fileReader(filePathOne);
        const bookTwo = await fileReader(filePathTwo);

        const data = { bookOne, bookTwo }

        await fs.writeFile(filePath, JSON.stringify(data));
    } catch (e) {
        console.log(e)
        throw e;
    }
}