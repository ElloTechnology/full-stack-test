import fileReader from "../utils/fileReader.js";
import pathBuilder from "../utils/pathBuilder.js";

export default async function fetchBookController(bookTitle: string) {
    const path: string = pathBuilder("../../resources/data.json", import.meta.url);

    const books: any = await fileReader(path);

    const arrayOfBooks: [string, any][] = Object.entries(books);

    const book = arrayOfBooks.find(([_, value]) => value.title === bookTitle)[1];

    return book;
}