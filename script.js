class myBookList {
    constructor() {

    }
    addBook(AuthorName, BookName, ISBN) {
        const removeButton = document.createElement('div');
        removeButton.className = 'exit';
        const newPlace = document.createElement('tr');
        for (let x = 0; x < 4; x++) {
            const TH = document.createElement('th')
            newPlace.append(TH)
        }
        //adding text to tr childrens
        newPlace.children[0].textContent = BookName.value
        newPlace.children[1].textContent = AuthorName.value
        newPlace.children[2].textContent = ISBN.value
        newPlace.children[3].append(removeButton);
        Table.append(newPlace);
        //event to call remove function
        removeButton.addEventListener('click', () => {
            myList.removeBook(removeButton)
        })
    }
    removeBook(button) {
        for (let x of Table.childNodes) {
            if (x.contains(button)) {
                Table.removeChild(x);
            }
        }

    }
}
//General Variables
const Table = document.querySelector('.book-table');
const addButoon = document.querySelector('.main-button');

//information
const Author = document.querySelector('.author-text');
const Title = document.querySelector('.title-text');
const isbn = document.querySelector('.isbn-text');

//new Object
const myList = new myBookList

//eventListeners
addButoon.addEventListener('click', () => {
    if (Author.value == '' || Title.value == '' || isbn.value == '') {
        alert('You must fill the Brackets')
    } else {
        myList.addBook(Author, Title, isbn);
        Author.value = ''
        Title.value = ''
        isbn.value = ''
    }
})