class PrintEditionItem{
    constructor(name, releaseDate, pagesCount, state = 100){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = null;
    }

    set state(value) {
        if (value < 0) {
            this._state = 0;
        }
        else if (value > 100) {
            this._state = 100;
        }
        else {
            this._state = value;
        }
    }

    get state(){
        return this._state;
    }
    
    fix(){
        this.state = this.state * 1.5;
    }
}


class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100) {
        super(name, releaseDate, pagesCount, state = 100);
        this.type = "magazine"
    }
}


class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state = 100){
        super(name, releaseDate, pagesCount, state = 100);
        this.author = author;
        this.type = "book";
    }
}


class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100){
        super(author, name, releaseDate, pagesCount, state = 100);
        this.type = "novel";
    }
}


class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100){
        super(author, name, releaseDate, pagesCount, state = 100);
        this.type = "fantastic";
    }
}


class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100){
        super(author, name, releaseDate, pagesCount, state = 100);
        this.type = "detective";
    }
}


class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        for (let book of this.books) {
            if(book[type] === value) {
                return book;
            }
        }
        return null;
    }

    giveBookByName(bookName) {
        for (let book of this.books) {
            if(book.name === bookName) {
                let index = this.books.indexOf(book);
                this.books.splice(index, 1);
                return book;
            }
        }
        return null;
    }
}


library = new Library("Горьковская библиотека");

library.addBook(new FantasticBook("Филип К. Дик", "Мечтают ли андроиды об элекстроовцах?", 1968, 320));
library.addBook(new NovelBook("Эрих Мария Ремарк", "Три товарища", 1936, 480));
library.addBook(new Magazine("Мурзилка", 1924, 60));

book = library.findBookBy("releaseDate", "1919");
if(book === null) {
    library.addBook(new NovelBook("Герман Гессе", "Демиан: История юности, написанная Эмилем Синклером", 1919, 224));
}

givenBook = library.giveBookByName("Демиан: История юности, написанная Эмилем Синклером");

givenBook.state = 30;
givenBook.fix();

library.addBook(givenBook);
