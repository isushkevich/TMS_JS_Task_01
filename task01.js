var book1 = {
  author: "Franz Kafka",
  name: "The Metamorphosis",
  nameOriginal: "Die Verwandlung",
  year: 1915,
  available: true,
  genres: [ "novella", "horror", "absurdist fiction" ]
};

var book2 = {
  author: "Franz Kafka",
  name: "The Trial",
  nameOriginal: "Der Prozess",
  year: 1925,
  available: false,
  genres: [ "novel", "satire", "absurdist fiction" ]
};


var book3 = {
  author: "J. R. R. Tolkien",
  name: "The Lord of the Rings",
  nameOriginal: null,
  year: 1954,
  available: true,
  genres: [ "novel", "high-fantasy", "adventure fiction" ]
};

var book4 = {
  author: "Albert Camus",
  name: "The Stranger",
  nameOriginal: "L'Étranger",
  year: 1942,
  available: false,
  genres: [ "novel", "crime fiction", "existiential fiction" ]
};

var arrBooks = [ book1, book2, book3, book4 ];

console.log( arrBooks );