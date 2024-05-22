import fetchBookController from "../controllers/fetchBookController.js";
import fetchBooksController from "../controllers/fetchBooksController.js";

function fetchBooks() {
    return fetchBooksController();
}

function fetchBook(_, args) {
    return fetchBookController(args.title);
}

export default {
    fetchBooks,
    fetchBook
};