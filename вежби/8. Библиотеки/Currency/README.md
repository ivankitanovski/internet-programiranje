# Курсна листа

#### Тежина: <span style="color: orange">Напредна</span>

Во оваа вежба, ќе креирате индикатор и состојба за вчитување користејќи ја библиотеката anime.js. Ќе дизајнирате визуелно привлечни и функционални индикатори кои обезбедуваат повратни информации до корисникот за напредокот на тековните задачи или процеси. Следете ги упатствата и користете ги обезбедените ресурси и совети за да ја завршите вежбата.

Листата на потребните валути, нивните информации и почетни вредности ви е дадена подолу

| Знаме | Име               | Код | Почетна вредност |
| ----- | ----------------- | --- | ---------------- |
| 🇪🇺    | Евро              | EUR | 61.58            |
| 🇺🇸    | Американски долар | USD | 57.77            |
| 🇬🇧    | Британска фунта   | GBP | 71.38            |
| 🇨🇦    | Канадски долар    | CAD | 42.19            |

### Почетен код

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Курсна листа</title>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.2/anime.min.js"></script>
  </head>
</html>
```

### Очекуван резултат

![Currency rates](./currency.gif)

### Корисни ресурси и насоки

- [Anime.js transformations](https://animejs.com/documentation/#CSStransforms)
- [Anime.js easing functions](https://animejs.com/documentation/#easings)
- [Anime.js animation parameters](https://animejs.com/documentation/#animationParameters)

### Решение

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Курсна листа</title>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.2/anime.min.js"></script>

    <style>
      body {
        font-family: sans-serif;
      }

      h2 {
        text-align: center;
      }

      .card {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        width: 380px;
        border-radius: 20px;
        padding: 26px 28px;
        box-shadow: inset 0 0 0 12px #658ac7;
        margin: auto;
        margin-bottom: 8px;
      }

      .card-name {
        font-size: 18px;
        font-weight: normal;
        line-height: 23px;
        margin: 0;
      }

      .card-code {
        font-size: 12px;
        color: gray;
      }

      .card-value {
        font-weight: bold;
        font-size: 26px;
        font-family: monospace;
      }
    </style>
  </head>

  <body>
    <h2>Курсна листа</h2>

    <div id="container"></div>
  </body>

  <script>
    const currencies = [
      {
        code: "EUR",
        name: "Евро",
        flag: "🇪🇺",
        value: 61.58,
      },
      {
        code: "USD",
        name: "Американски долар",
        flag: "🇺🇸",
        value: 57.77,
      },
      {
        code: "GBP",
        name: "Британска фунта",
        flag: "🇬🇧",
        value: 71.38,
      },
      {
        code: "CAD",
        name: "Канадски долар",
        flag: "🇨🇦",
        value: 42.19,
      },
    ];

    const container = document.getElementById("container");

    // Додади картички за секоја валута
    for (const currency of currencies) {
      const card = `
        <div id=${currency.code} class="card">
          <div class="card-info">
            <h4 class="card-name">${currency.name}</h4>
            <span class="card-code">${currency.flag} ${currency.code}</span>
          </div>

          <strong class="card-value">MKD ${currency.value}</strong>
        </div>
      `;

      container.innerHTML += card;
    }

    for (const currency of currencies) {
      // Пронајди ги елементите на картичката и вредноста за сегашната валута
      const card = document.getElementById(currency.code);
      const cardValue = card.querySelector(".card-value");

      // Одбери насока и нова рандом вредност
      const direction = anime.random(0, 1) === 1 ? "up" : "down";
      const diff = anime.random(1, 10);

      currency.value += direction === "up" ? diff : -diff;

      const speed = (diff / 4) * 1000;

      // Анимирај ја вредноста на валутата
      anime({
        targets: cardValue,
        innerHTML: `MKD ${currency.value}`,
        color: direction === "up" ? "#00FF00" : "#FF0000",
        round: 100,
        easing: "linear",
        duration: speed,
      });
    }
  </script>
</html>
```

## Дополнителни барања

### Ажурирање со актуелни податоци

`https://api.exchangerate-api.com/v4/latest/MKD`

![Currency rates with update button example](./currency-update.gif)

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Курсна листа</title>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.2/anime.min.js"></script>

    <style>
      body {
        font-family: sans-serif;
      }

      h2 {
        text-align: center;
      }

      #btnUpdate {
        display: block;
        margin: auto;
      }

      .card {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        width: 380px;
        border-radius: 20px;
        padding: 26px 28px;
        box-shadow: inset 0 0 0 12px #658ac7;
        margin: auto;
        margin-bottom: 8px;
      }

      .card-name {
        font-size: 18px;
        font-weight: normal;
        line-height: 23px;
        margin: 0;
      }

      .card-code {
        font-size: 12px;
        color: gray;
      }

      .card-value {
        font-weight: bold;
        font-size: 26px;
        font-family: monospace;
      }
    </style>
  </head>

  <body>
    <h2>Курсна листа</h2>

    <div id="container"></div>

    <button id="btnUpdate">Ажурирај</button>
  </body>

  <script>
    const currencies = [
      {
        code: "EUR",
        name: "Евро",
        flag: "🇪🇺",
        value: 61.58,
      },
      {
        code: "USD",
        name: "Американски долар",
        flag: "🇺🇸",
        value: 57.77,
      },
      {
        code: "GBP",
        name: "Британска фунта",
        flag: "🇬🇧",
        value: 71.38,
      },
      {
        code: "CAD",
        name: "Канадски долар",
        flag: "🇨🇦",
        value: 42.19,
      },
    ];

    const container = document.getElementById("container");

    // Додади картички за секоја валута
    for (const currency of currencies) {
      const card = `
        <div id=${currency.code} class="card">
          <div class="card-info">
            <h4 class="card-name">${currency.name}</h4>
            <span class="card-code">${currency.flag} ${currency.code}</span>
          </div>

          <strong class="card-value">MKD ${currency.value}</strong>
        </div>
      `;

      container.innerHTML += card;
    }

    document.getElementById("btnUpdate").addEventListener("click", async () => {
      const response = await fetch(
        "https://api.exchangerate-api.com/v4/latest/MKD",
      ).then((res) => res.json());
      const rates = response.rates;

      for (const currency of currencies) {
        // Пронајди ги елементите на картичката и вредноста за сегашната валута
        const card = document.getElementById(currency.code);
        const cardValue = card.querySelector(".card-value");

        // Одбери насока и нова вредност
        const newValue = 1 / rates[currency.code];

        const direction = newValue > currency.value ? "up" : "down";
        const diff = Math.abs(newValue - currency.value);
        const speed = diff * 1000;

        // Анимирај ја вредноста на валутата
        anime({
          targets: cardValue,
          innerHTML: `MKD ${newValue}`,
          color: direction === "up" ? "#00FF00" : "#FF0000",
          round: 100,
          easing: "linear",
          duration: speed,
        });
      }
    });
  </script>
</html>
```
