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

