// Создать функцию-конструктор Tune(title, artist) для создания объектов с публичными свойствами title, artist и методом concat().
// Метод должен возвращать конкатенацию значений свойств title и artist.
// Создать несколько объектов. Вызвать их метод concat().

function Tune(title, artist) {
    this.title = title;
    this.artist = artist;
    
    this.concat = function() {
        return this.title + this.artist;
    };
}

const song = new Tune('MISSIO - ', 'Losing my Mind')
const song2 = new Tune('MGMT - ', 'Little Dark Age');

console.log(song.concat());
console.log(song2.concat());