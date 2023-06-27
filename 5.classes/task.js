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

