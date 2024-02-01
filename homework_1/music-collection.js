"use strict";
/*
{
    title: "Название альбома",
    artist: "Исполнитель",
    year: "Год выпуска"
}*/

// let musicCollection = {
//   albums: [],
//   [Symbol.iterator]: function* () {
//     for (let album of this.albums) {
//       yield album;
//     }
//   },
// };

// musicCollection.albums.push({
//   title: "Название",
//   artist: "Исполнитель",
//   year: "Год",
// });

// for (let album of musicCollection) {
//   console.log(`${album.title} - ${album.artist} (${album.year})`);
// }

const albums = [
  { title: "Nevermind", artist: "Nirvana", year: "1991" },
  { title: "Thriller", artist: "Michael Jackson", year: "1982" },
  { title: "Abbey Road", artist: "The Beatles", year: "1969" },
];

const musicCollection = {
  albums: [...albums],
  [Symbol.iterator]() {
    let countAlbums = 0;
    return {
      next: () => {
        if (countAlbums < this.albums.length) {
          return { value: this.albums[countAlbums++], done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
};
// Используем цикл for...of для перебора альбомов в музыкальной коллекции и выводим их на консоль
for (const album of musicCollection) {
  console.log(`${album.title} - ${album.artist} (${album.year})`);
}
