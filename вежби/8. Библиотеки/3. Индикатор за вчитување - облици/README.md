# Индикатор за вчитување - топчиња

#### Тежина: <span style="color: green">Лесна</span>

Во оваа вежба, ќе креирате индикатор за вчитување со топчиња користејќи ја библиотеката anime.js.

Создадете четири сини топчиња кои се движат постојано во насока нагоре-надолу, создавајќи ефект на вчитување. Следете ги упатствата и користете ги обезбедените ресурси за да ја завршите вежбата.

Анимацијата треба да ги има следните карактеристики:

- Топчето да се движи вертикално, прво нагоре, па надолу, и да се врати на почетната позиција.
- Разликата во почетокот (задоцнувањето) на анимацијата за секое топче треба да биде `250` милисекунди, така што секое топче ќе започне со анимација по претходното.
- Анимацијата за едно топче да трае `1000` милисекунди.
- Анимацијата да се извршува во постојан циклус.

### Почетен код

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Loading balls</title>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.2/anime.min.js"></script>
  </head>

  <body>
    <!-- TODO: Add your code here -->
  </body>
</html>
```

### Очекуван резултат

![Loading spinner](./img/loading-balls.gif)

### Корисни ресурси и насоки

### Решение

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Loading balls</title>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.2/anime.min.js"></script>

    <style>
      body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
      }

      .ball {
        margin: 5px;
        border: 25px solid #3498db;
        border-radius: 50%;
      }
    </style>
  </head>

  <body>
    <div class="ball"></div>
    <div class="ball"></div>
    <div class="ball"></div>
    <div class="ball"></div>
  </body>

  <script>
    anime({
      targets: ".ball",
      translateY: [0, -100, 100, 0],
      delay: anime.stagger(250),
      duration: 1000,
      easing: "linear",
      loop: true,
    });
  </script>
</html>
```

## Дополнителни барања

### Барање 1: Анимација во форма на синусоида

Во ова барање, ќе ја измените анимацијата каде топчињата сега ќе се движат во форма на синусоидна функција.
Секое топче ќе има уникатно движење засновано на синусна функција.

Синусоидната функција е дефинирана како:

```
y = A * sin(F * x)
```

- A = амплитуда - најголемата вредност на функцијата.
- F = фреквенција - колку циклуси се појавуваат во единица време или растојание.

Анимацијата треба да ги има следните карактеристики:

- Бројот на топчиња да биде `16`.
- Топчињата да се движат во форма на синусоидна функција на вертикална оска.
- Бојата на топчињата да се менува `од сина во црвена`.
- Разликата во почетокот (задоцнувањето) на анимацијата за секое топче треба да биде `100` милисекунди.
- Анимацијата за едно топче да трае `250` милисекунди.
- Штом анимацијата заврши повторно да се изврши во обратна насока.
- Анимацијата да се извршува во постојан циклус.

![Loading sine](./img/loading-sine.gif)

```js
anime({
  targets: ".ball",
  translateY: function (ball, index, numBalls) {
    const amplitude = 100;
    const frequency = 0.6;
    return amplitude * Math.sin(frequency * index);
  },
  borderColor: "#ff0000",
  delay: anime.stagger(100),
  endDelay: 500,
  duration: 250,
  easing: "linear",
  direction: "alternate",
  loop: true,
});
```

### Барање 2: Анимирање со промена на облик и боја

Во ова барање, ќе додадете анимации кои ги менуваат формата и бојата на топчињата. Секое топче ќе се трансформира во различна форма и ќе ја менува својата боја.

[Цртање облици со CSS - www.w3schools.com/howto/howto_css_shapes.asp](https://www.w3schools.com/howto/howto_css_shapes.asp)

Анимацијата треба да ги содржи следните трансформации:

- **Топче 1**: се трансформира од син круг во црвен квадрат и се придвижува горе-десно, завршувајќи во горниот лев агол
- **Топче 2**: се трансформира од син круг во жолт триаголник насочен надолу и се придвижува надолу, завршувајќи во долниот лев агол
- **Топче 3**: се трансформира од син круг во зелен триаголник насочен нагоре и се придвижува нагоре, завршувајќи во горниот десен агол
- **Топче 4**: се трансформира од син круг во виолетов квадрат и се придвижува долу-лево, завршувајќи во долниот десен агол

Анимацијата треба да ги има следните карактеристики:

- Должината да биде `2000` милисекунди.
- Начинот на движење на анимацијата да биде еластичен.
- Штом анимацијата заврши повторно да се изврши во обратна насока.
- Анимацијата да се извршува во постојан циклус.

![Loading shapes](./img/loading-shapes.gif)

```js
const balls = document.querySelectorAll(".ball");

// Заеднички параметри за сите анимации
const shared = {
  duration: 2000,
  easing: "easeInOutElastic",
  direction: "alternate",
  loop: true,
};

anime({
  ...shared,
  targets: balls[0],

  // Анимирај ја позицијата
  translateX: 60,
  translateY: -30,

  // Анимирај од круг во квадрат
  borderRadius: ["50%", "0%"],
  borderColor: "#ff0000", // Анимирај во црвена боја
});

anime({
  ...shared,
  targets: balls[1],

  // Анимирај ја позицијата
  translateY: 30,

  // Анимирај од круг во триаголник свртен надолу
  borderRadius: ["50%", "0%"],
  borderTopWidth: [25, 50],
  borderBottomWidth: [25, 0],

  borderTopColor: "#ffff00", // Анимирај во жолта боја
  borderBottomColor: "#ffffff",
  borderLeftColor: "#ffffff",
  borderRightColor: "#ffffff",
});

anime({
  ...shared,
  targets: balls[2],

  // Анимирај ја позицијата
  translateY: -30,

  // Анимирај од круг во триаголник свртен нагоре
  borderRadius: ["50%", "0%"],
  borderTopWidth: [25, 0],
  borderBottomWidth: [25, 50],

  borderTopColor: "#ffffff",
  borderBottomColor: "#00ff00", // Анимирај во зелена боја
  borderLeftColor: "#ffffff",
  borderRightColor: "#ffffff",
});

anime({
  ...shared,
  targets: balls[3],

  // Анимирај ја позицијата
  translateX: -60,
  translateY: 30,

  // Анимирај од круг во квадрат
  borderRadius: ["50%", "0%"],
  borderColor: "#ff00ff", // Анимирај во магента боја
});
```
