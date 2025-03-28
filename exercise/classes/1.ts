// You are building a system to manage books in a library. Each book has a
// title, an author, and a status indicating whether it is currently checked
// out or available. You'll create a class to represent a book, with methods to
// check the book out, return it, and display its information.
//
// Requirements:
// - Create a `Book` class with the following properties:
//   - `title`: A string representing the title of the book.
//   - `author`: A string representing the author of the book.
//   - `isCheckedOut`: A boolean indicating whether the book is checked out
//     (initially false).
// - Add a method `checkOut()` to the Book class that sets the `isCheckedOut`
//   property to true.
// - Add a method `returnBook()` to the Book class that sets the `isCheckedOut`
//   property to false.
// - Add a method displayInfo() to the Book class that prints out the `title`,
//   `author`, and `status` of the book.
// - Create an instance of the `Book` class, check it out, display its
//   information, return it, and then display its information again.


import { strict as assert } from "assert";

class Book {
    title: string;
    author: string;
    isCheckedOut = false;

    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }

    checkOut(): void {
        this.isCheckedOut = true;
    }

    returnBook(): void {
        this.isCheckedOut = false;
    }

    displayInfo(): void {
        const status = this.isCheckedOut ? "checked out" : "available"
        console.log(`The book "${this.title}" by ${this.author} is currently ${status}`);
    }
}

// Create an instance of the Book class.
//
// Replace `null` with your class instance.
//
const myBook = new Book("Anna Karenina", "Leo Tolstoy");

// Put your method calls to "check out" a book here.
// 
myBook.checkOut();
assert.equal(myBook.isCheckedOut, true);

// Put your method calls to "return" a book here.
//
myBook.returnBook();
assert.equal(myBook.isCheckedOut, false);

myBook.displayInfo();
