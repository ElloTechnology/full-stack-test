import fs from "node:fs/promises";

export default async function fileReader(filePath: string): Promise<any> {
    let data: string;

    try {
        data = await fs.readFile(filePath, {encoding: "utf8"});
    } catch (e) {
        console.log(e);
        throw e;
    }

    return JSON.parse(data);
}