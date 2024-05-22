import fileReader from "../utils/fileReader";

export default function fetchBooksController() {
    const books = fileReader("../../resources/data.json");

    return books;
}