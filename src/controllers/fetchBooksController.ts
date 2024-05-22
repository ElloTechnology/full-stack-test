import fileReader from "../utils/fileReader.js";
import pathBuilder from "../utils/pathBuilder.js";

export default async function fetchBooksController() {
    const path: string = pathBuilder("../../resources/data.json", import.meta.url);

    const books: [string, any] = await fileReader(path);

    return books;
}