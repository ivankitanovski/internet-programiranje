# Loading balls

#### Тежина: <span style="color: green">Лесна</span>

Во оваа вежба, ќе креирате индикатор и состојба за вчитување користејќи ја библиотеката anime.js. Да се креираат четири loading balls кои ќе се движат во круг. Секоја од топките треба да се движи со различна брзина и да се движи во различна насока.

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

![Loading spinner](./loading-balls.gif)

### Корисни ресурси и насоки

- [Цртање облици со CSS - www.w3schools.com/howto/howto_css_shapes.asp](https://www.w3schools.com/howto/howto_css_shapes.asp)

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

### Барање 1: Анимација синусоида

![Loading sine](./loading-sine.gif)

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

![Loading shapes](./loading-shapes.gif)

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
