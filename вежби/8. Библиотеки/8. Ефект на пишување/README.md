# Ефект на пишување на тастатура

#### Тежина: <span style="color: orange">Напредна</span>

Во оваа вежба, ќе креирате анимација на текст како да се пишува на тастатура користејќи ја библиотеката anime.js.

Вашата задача е да прикажете текст кој се појавува знак по знак, имитирајќи ефект на пишување на тастатура. Следете ги упатствата и користете ги обезбедените ресурси за да ја завршите вежбата.

Крајната анимација треба да ги задоволи следните критериуми:

- Текстот треба да се појавува знак по знак, имитирајќи ефект на пишување на тастатура.
- Како пример може да го користите текстот: `Интернет Програмирање на Клиентска Страна`.
- Анимацијата треба да трае 4 секунди за целиот текст.
- Кога текстот е целосно напишан, неговата боја треба да се промени во зелена со додатна анимација од 1 секунда.

> **Забелешка:** Anime.js нема готов начин за анимирање на текст знак по знак, па ќе треба да го имплементирате тоа сами

> **Помош:** Треба да ги користите основните методи за работа со стрингови и манипулација на DOM елементите.

### Почетен код

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Typewriter</title>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.2/anime.min.js"></script>
  </head>
</html>
```

### Очекуван резултат

![Typewriter example](./typewriter.gif)

### Корисни ресурси и насоки

- [Anime.js object transformations](https://animejs.com/documentation/#JSobjProp)

### Решение

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Typewriter</title>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.2/anime.min.js"></script>

    <style>
      body {
        background-color: #000;
        color: #fff;
        font-family: monospace;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin: 0;
        padding: 2rem;
        height: 100vh;
        box-sizing: border-box;
      }

      #typewriter {
        font-size: 24px;
      }
    </style>
  </head>

  <body>
    <div id="typewriter"></div>
  </body>

  <script>
    const textEl = document.getElementById("typewriter");
    const text = "Интернет Програмирање на Клиентска Страна";

    anime({
      targets: { count: 0 },
      count: [0, text.length],
      round: 1,
      easing: "linear",
      duration: 4000,
      update: function (anim) {
        const numCharacters = Math.round(anim.animations[0].currentValue);
        textEl.innerHTML = text.substring(0, numCharacters);
      },
      complete: function () {
        anime({
          targets: textEl,
          color: "#00cc00",
          duration: 1000,
          easing: "linear",
        });
      },
    });
  </script>
</html>
```

## Дополнителни барања

### Барање 1: Прикажување на random цитат

Во ова барање, ќе го измените и дополните вашиот код да прикажува random цитати од API-то [Quotable](https://github.com/lukePeavey/quotable) наместо предефинираниот текст.

> За да добиете случаен цитат, направете GET барање на `https://api.quotable.io/random`.

Содржината на цитатот треба да е во формат: `Цитат - Автор`.

Да се имплементираат следните функционалности:

- При стартување на апликацијата, да се прикаже random цитат.
- Текстот на цитатот да се прикаже со ефект на пишување на тастатура.
- Додадете копче `Show another quote` кое при клик ќе прикаже нов цитат со истата анимација.
- Копчето треба да биде оневозможено и скриено додека трае анимацијата, и да се појави повторно кога анимацијата ќе заврши. Појавувањето на копчето треба да биде анимирано.

![Typewriter example with random quote](./typewriter-quote.gif)

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Typewriter</title>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.2/anime.min.js"></script>

    <style>
      body {
        background-color: #000;
        color: #fff;
        font-family: monospace;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin: 0;
        padding: 2rem;
        height: 100vh;
        box-sizing: border-box;
      }

      #typewriter {
        font-size: 24px;
      }

      #btnNewQuote {
        padding: 8px 16px;
        opacity: 1;
        background: black;
        border: 1px solid gray;
        color: gray;
        cursor: pointer;
        font-size: 12px;
      }
    </style>
  </head>

  <body>
    <div id="typewriter"></div>

    <button id="btnNewQuote">Show another quote</button>
  </body>

  <script>
    const textEl = document.getElementById("typewriter");
    const btnNewQuote = document.getElementById("btnNewQuote");

    function showNewQuote() {
      // Ги стопираме старите анимации доколку се активни
      anime.remove([textEl, btnNewQuote]);

      // Го празниме полето за текст
      textEl.innerHTML = "";

      // Го криеме и оневозможуваме копчето за нов цитат
      btnNewQuote.style.opacity = 0;
      btnNewQuote.disabled = true;

      // Правиме повик за нов рандом цитат од API-то за цитати
      fetch("https://api.quotable.io/random")
        .then((response) => response.json())
        .then((data) => {
          const quote = data.content + " - " + data.author;

          anime({
            targets: { count: 0 },
            count: [0, quote.length],
            round: 1,
            easing: "linear",
            duration: 4000,
            update: function (anim) {
              const numCharacters = anim.animations[0].currentValue;
              textEl.innerHTML = quote.substring(0, numCharacters);
            },
            complete: function () {
              btnNewQuote.disabled = false;

              anime({
                targets: btnNewQuote,
                opacity: 1,
                easing: "linear",
                duration: 1000,
              });
            },
          });
        })
        .catch(() => {
          textEl.innerHTML = "Unexpected error occurred";
        });
    }

    btnNewQuote.addEventListener("click", showNewQuote);

    showNewQuote();
  </script>
</html>
```

### Барање 2: Анимација - дешифрирање

Во ова барање, ќе создадете анимација која прво прикажува случајни знаци пред да го открие вистинскиот текст, имитирајќи ефект на дешифрирање.

Користете ги следните специјални знаци: `!<>-_\\/[]{}—=+*^?#_`.

Да се имплементираат следните чекори:

- Креирајте анимација каде што текстот е прво прикажан со случајни специјални зраци, кои постепено се заменуваат со вистинските знаци.
- Кога еден вистински знак е откриен, тој треба да остане како што е.
- Оваа анимација треба да трае 3 секунди.
- Кога текстот е целосно откриен, бојата треба да се смени во зелена со дополнителна анимација од 1 секунда.

![Typewriter example with decypher animation](./typewriter-decypher.gif)

```js
const textEl = document.getElementById("typewriter");
const text = "Интернет Програмирање на Клиентска Страна";
const characters = "!<>-_\\/[]{}—=+*^?#_";

// Креираме низа од booleans за да следиме кои знаци се откриени
const unscrambledChars = new Array(text.length).fill(false);

anime({
  easing: "linear",
  duration: 3000,
  update: function (anim) {
    const currentText = textEl.innerText;
    let newText = "";

    for (let i = 0; i < text.length; i++) {
      // Веќе откриените знаци остануваат како што се
      if (unscrambledChars[i]) {
        newText += currentText[i];
        continue;
      }

      const speed = 50; // Поголеми вредности имаат поголема веројатност за откривање
      const shouldUnscramble = Math.random() <= speed / anim.duration;

      // Дали треба да го откриеме знакот
      if (shouldUnscramble) {
        newText += text[i];
        unscrambledChars[i] = true;
      } else {
        // Ако не, замени го со нов случаен знак
        const randomIndex = anime.random(0, characters.length - 1);
        newText += characters[randomIndex];
      }
    }

    textEl.innerText = newText;
  },
  complete: function () {
    textEl.innerText = text;

    anime({
      targets: textEl,
      color: "#00cc00",
      duration: 1000,
      easing: "linear",
    });
  },
});
```

### Барање 3: ChatGPT

Во ова барање, ќе креирате анимација која симулира како ChatGPT пишува одговори во реално време.

Да се имплементираат следните чекори:

- Додадете два параграфи и користете произволни содржини за текстот.
- Креирајте анимација која постепено ги прикажува параграфите, како да ги пишува ChatGPT.
- Додадете бел курсор и позиционирајте го секогаш на крајот од текстот.
- На почетокот курсорот трепка со должина од 500ms, цели 2 секунди, и потоа се прикажува со полна боја кога текстот започнува со пишување.
- Анимацијата за пишување на текстот треба да започне 2 секунди по започнување на анимацијата.
- Пишувањето треба да биде со брзина од 50 знаци во секунда.
- Кога ќе се заврши со пишување на еден параграф, треба да се додаде нов ред и да се продолжи со пишување на следниот параграф.
- Кога текстот ќе заврши со пишување на сите параграфи, курсорот треба да се отстрани со анимација.

![ChatGPT typewriter example](./typewriter-chatgpt.gif)

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Chat GPT</title>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.2/anime.min.js"></script>

    <style>
      body {
        font-family: sans-serif;
        background: #222;
        margin: 0;
        padding: 50px 300px;
      }

      h1 {
        color: green;
        text-align: center;
        margin-bottom: 3rem;
      }

      .text-animation {
        color: white;
        font-size: 20px;
      }

      .cursor {
        display: inline-block;
        background: white;
        height: 15px;
        width: 15px;
        border-radius: 50%;
      }
    </style>
  </head>

  <body>
    <h1>ChatGPT</h1>
    <div id="container"></div>
  </body>

  <script>
    const container = document.getElementById("container");

    const contents = [
      `Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dolorem, quae dolor molestias magnam labore. reprehenderit alias asperiores dignissimos quo officiis, unde in! Nostrum ipsa at, suscipit eum soluta harum.`,

      `Hic tenetur numquam odio! Modi explicabo, fuga, iusto unde nihil corporis officia repellendus ab magni necessitatibus hic iure repellat accusamus officiis molestiae consequuntur vero incidunt quo. Amet unde architecto facere praesentium quaerat voluptate reiciendis.`,
    ];

    const TYPE_AFTER_MS = 2000;
    const LETTERS_PER_SECOND = 50; // брзина - букви во секунда

    function typeContent(index) {
      const content = contents[index];

      if (!content) {
        return;
      }

      const textEl = document.createElement("span");
      textEl.classList.add("text-animation");
      container.appendChild(textEl);

      const cursorEl = document.createElement("span");
      cursorEl.classList.add("cursor");
      container.appendChild(cursorEl);

      const blinkAnimation = anime({
        targets: cursorEl,
        loop: true,
        duration: 500,
        opacity: [1, 0],
        easing: "linear",
        direction: "alternate",
      });

      const duration = (content.length / LETTERS_PER_SECOND) * 1000;
      const delay = index === 0 ? TYPE_AFTER_MS : 0;

      anime({
        targets: { count: 0 },
        count: [0, content.length],
        round: 1,
        easing: "linear",
        duration: duration,
        delay: delay,
        changeBegin: function () {
          blinkAnimation.pause();
          anime.set(cursorEl, { opacity: 1 });
        },
        update: function (anim) {
          const numCharacters = Math.round(anim.animations[0].currentValue);
          textEl.innerHTML = content.substring(0, numCharacters);
        },
        complete: function () {
          cursorEl.remove();
          container.innerHTML += "<br><br>";
          typeContent(index + 1);
        },
      });
    }

    typeContent(0);
  </script>
</html>
```
