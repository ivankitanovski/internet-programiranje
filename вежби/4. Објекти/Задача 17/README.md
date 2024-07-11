# Задача

Целта е да се напише програма која ќе чува информации за повеќе библиотеки. Потребно е да се напише класа Library која ќе има атрибути за име и листа на книги. Исто така е потребно да се напише класа Book која има атрибути за наслов, автор и број на страни.
Кога ќе се вчита страната излегува alert прозорец кој бара од корисникот да влезе број на библиотеки кои треба да се внесат и доколку не е валиден број, повторно се испраќа alert се додека не се внесе валиден број.
Откога ќе се внесе валиден број, се внесува информации во формат "[име на библиотека] [број на книги]", исто како и претходно, бројот на книги мора да е валиден. Потоа се внесуваат толку книги колку што е внесениот број во формат "[име на книга] [име на автор] [број на страни]".
Откога ќе се внесат информации, во section делот од html се печати библиотеката чиј вкупен број на страни од книги е најголем. Библиотеката се печати во следниот формат: "[име на библиотека]: {[[[име на книга 1] [автор на книга 1] [број на страни на книга 1], [име на книга 2] [автор на книга 2] [број на страни на книга 2]...]}, [број на вкупно страни на книгите во библиотеката]".

# Даден код:

```html
<!doctype html>
<head>
  <meta charset="UTF-8">
</head>
<body>
<section id="библиотека"></section>
<script type="text/javascript">
  // Напиши го твојот код за класите тука
  class Book {}
  class Library {}

  // Напиши го кодот за функцијата тука
  document.addEventListener('DOMContentLoaded', () => {

  }
</script>
</body>
</html>
```

# Решение

```html
<!doctype html>
<head>
  <meta charset="UTF-8">
</head>
<body>
<section id="библиотека"></section>
<script type="text/javascript">
  // Се иницијализира класата Book
  class Book {
    constructor(naslov, avtor, strani) {
      this.naslov = naslov;
      this.avtor = avtor;
      this.strani = strani;
    }
  }
  // Се иницијализира класата Library со методот vkupnoStrani()
  class Library {
    constructor(ime, knigi) {
      this.ime = ime;
      this.knigi = knigi;
    }

    vkupnoStrani() {
      return this.knigi.reduce((sum, kniga) => sum + kniga.strani, 0);
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    const section = document.getElementById('библиотека');
    // Се внесува бројот на библиотеки
    const brojNaLibraries = parseInt(prompt('Внеси го бројот на библиотеки:'));
    while(true) {
      // Доколку внесената вредност не е број или е негативен број, повторно се бара
      // од корисникот да внесе број.
      if (!isNaN(brojNaLibraries) || brojNaLibraries > 0) {
        break;
      } else {
        alert('Внесениот број е невалиден.');
      }
    }

    const libraries = [];
    // Внесување на информации за Library објектите
    for (let i = 0; i < brojNaLibraries; i++) {
      const libraryInfo = prompt(`Внеси име и број на книги:`).split(' ');
      const libraryName = libraryInfo[0];
      const broojNaBooks = parseInt(libraryInfo[1]);
      // Провери дали внесените информации се валидни, доколку не се се рестартира
      // циклусот за повторно да бидат внесени.
      if (!libraryName || isNaN(broojNaBooks) || broojNaBooks <= 0) {
        alert('Невалидни внесени информации.');
        i--;
        continue;
      }

      const books = [];
      // Внесување на информации за Book објектите во Library
      for (let j = 0; j < broojNaBooks; j++) {
        let validBook = false;
        while (!validBook) {
          const bookInfo = prompt(`Внеси информации за книга.`).split(' ');
          const bookNaslov = bookInfo[0];
          const bookAvtor = bookInfo[1];
          const brojNaStrani = parseInt(bookInfo[2]);
          // Провери дали внесените информации се валидни, доколку не се, се прекинува
          // циклусот и се бара од корисникот повторно да ги внеси информациите.
          if (typeof bookNaslov === 'string' &&
                  typeof bookAvtor === 'string' &&
                  !isNaN(brojNaStrani) && brojNaStrani > 0) {
            books.push(new Book(bookNaslov, bookAvtor, brojNaStrani));
            validBook = true;
          } else {
            alert('Невалидни внесени информации.');
          }
        }
      }

      libraries.push(new Library(libraryName, books));
    }

    const libraryWithMostPages = libraries.reduce((max, library) =>
            library.vkupnoStrani() > max.vkupnoStrani() ? library : max, libraries[0]);

    const booksInfo = libraryWithMostPages.knigi.map(book =>
            `${book.naslov} ${book.avtor} ${book.strani}`).join(', ');

    section.innerHTML = `${libraryWithMostPages.ime}: {${booksInfo}}<br>Total pages: ${libraryWithMostPages.vkupnoStrani()}`;
  });
</script>
</body>
</html>
```
