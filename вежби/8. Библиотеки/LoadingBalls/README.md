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
        width: 50px;
        height: 50px;
        background-color: #3498db;
        border-radius: 50%;
        display: inline-block;
        margin: 5px;
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
      delay: anime.stagger(250),
      translateY: [0, -100],
    }).finished.then(() => {
      anime({
        targets: ".ball",
        translateY: [-100, 100, -100],
        easing: "linear",
        duration: 1000,
        loop: true,
        delay: anime.stagger(250),
      });
    });
  </script>
</html>
```

## Дополнителни барања
