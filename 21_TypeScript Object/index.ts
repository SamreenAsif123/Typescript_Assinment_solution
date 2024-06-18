//Interface for object (favBook)

interface book {
    Title: string;
    Author: string;
    Publication: string;
    PublicationYear: number;
    genre: string;

}

//Object which contain all information about the book
let favBook: book = {
    Title: 'A brief history of time',
    Author:'Stephen Hawking',
    Publication:'Bantam Books',
    PublicationYear: 1988,
    genre: 'Science',
}

//Print the book details using console.table()
console.table(favBook)
