import fileReader from "../utils/fileReader.js";

export default function fetchBooksController() {
    const books = fileReader("../../resources/data.json");

    return books;
}