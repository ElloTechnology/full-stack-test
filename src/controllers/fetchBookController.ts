import fileReader from "../utils/fileReader.js";

export default function fetchBooksController(bookTitle: string) {
    const books = fileReader("../../resources/data.json");

    return books.then((books) => books.find((book) => book.title === bookTitle));
}