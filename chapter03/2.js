function Publication(title, author, pubDate) {
    var publicAPI = {
        print() {
            console.log(`
                Title: ${title}
                Author: ${author}
                Published: ${pubDate}
            `);
        }
    };

    return publicAPI;
}

function Book(bookDetails) {
    var pub = Publication(bookDetails.title, bookDetails.author, bookDetails.pubDate);

    var publicAPI = {
        print() {
            pub.print();
            console.log(`
                Publisher: ${bookDetails.publisher}
                ISBN: ${bookDetails.isbn}
            `);
        }
    };

    return publicAPI;
}

function BlogPost(title, author, pubDate, URL) {
    var pub = Publication(title, author, pubDate);

    var publicAPI = {
        print() {
            pub.print();
            console.log(`URL: ${URL}`);
        }
    };

    return publicAPI;
}