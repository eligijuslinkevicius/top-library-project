const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const read = document.getElementById("read");

const addBookButton = document.querySelector(".add-book");

let myLibrary = [];

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.info = function () {
		if (this.read) return `${this.title} by ${this.author}, ${this.pages} pages, already read`;
		else return `${this.title} by ${this.author}, ${this.pages} pages, not read yet`;
	};
}

function addBookToLibrary() {
	myLibrary.push(new Book(title.value, author.value, pages.value, read.checked));

	resetInputs();
}

addBookButton.addEventListener("click", (event) => {
	event.preventDefault();
	addBookToLibrary();
});

function resetInputs() {
	title.value = "";
	author.value = "";
	pages.value = "";
	read.checked = false;
}
