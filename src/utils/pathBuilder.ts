import { dirname, resolve } from "path";
import { fileURLToPath } from "node:url";

//Builds a path to a file or directory, relative to the file using it
export default function pathBuilder(path: string, fileUrl: string): string {
    const filename = fileURLToPath(fileUrl);
    const dir = dirname(filename)

    return resolve(dir, path)
}