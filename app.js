const form = document.querySelector("form");
// TODO: add delete button and its functionality.
const tableBody = document.querySelector(".table-body");
const addBookButton = document.querySelector(".add-book");

let myLibrary = [new Book("The Great Gatsby", "F. Scott Fitzgerald", 218, true)];

function resetInputs() {
	form.reset();
}

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

function addBookToLibrary(titleValue, authorValue, pagesValue, readValue) {
	if (titleValue.trim() === "" || authorValue.trim() === "" || pagesValue.trim() === "") {
		alert("Please enter the required information.");
		return;
	}
	myLibrary.push(new Book(titleValue, authorValue, pagesValue, readValue));
	addBooksToTable();
	resetInputs();
}

function addBooksToTable() {
	tableBody.innerHTML = "";

	for (let i = 0; i < myLibrary.length; i++) {
		const book = myLibrary[i];

		const newRow = document.createElement("tr");

		const titleCell = document.createElement("td");
		titleCell.textContent = book.title;

		const authorCell = document.createElement("td");
		authorCell.textContent = book.author;

		const pagesCell = document.createElement("td");
		pagesCell.textContent = book.pages;

		const readCell = document.createElement("td");
		readCell.textContent = book.read ? "Yes" : "No";

		const statusCell = document.createElement("td");
		const removeButton = document.createElement("button");
		removeButton.type = "button";
		removeButton.className = "remove-btn";
		removeButton.innerHTML = '<span class="material-symbols-sharp"> delete </span>';
		statusCell.appendChild(removeButton);

		// Append the cells to the new row
		newRow.appendChild(titleCell);
		newRow.appendChild(authorCell);
		newRow.appendChild(pagesCell);
		newRow.appendChild(readCell);
		newRow.appendChild(statusCell);

		// Append the new row to the table body
		tableBody.appendChild(newRow);
	}
}

addBookButton.addEventListener("click", (event) => {
	event.preventDefault();
	const title = document.getElementById("title");
	const author = document.getElementById("author");
	const pages = document.getElementById("pages");
	const read = document.getElementById("read");
	addBookToLibrary(title.value, author.value, pages.value, read.checked);
});
