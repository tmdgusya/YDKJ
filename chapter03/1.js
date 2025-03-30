class Page {
    constructor(text) {
        this.text = text;
    }

    print() {
        console.log(this.text);
    }
}

class Notebook {
    constructor() {
        this.pages = [];
    }
    
    addPage(text) {
        this.pages.push(new Page(text));
    }

    print() {
        for (let page of this.pages) {
            page.print();
        }
    }
}

var mathNotes = new Notebook();
mathNotes.addPage("1 + 1 = 2");
mathNotes.addPage("2 + 2 = 4");
mathNotes.print();