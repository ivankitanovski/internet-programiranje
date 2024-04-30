# Progress bar

#### Тежина: <span style="color: green">Лесна</span>

Во оваа вежба, ќе креирате индикатор и состојба за вчитување користејќи ја библиотеката anime.js. Да се креира loading bar која ќе се прикажува на екранот и ќе се пополнува со боја како што се зголемува вредноста на прогресот. Прогресот може да се зголемува со клик на копчето.

### Почетен код

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Progress bar</title>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.2/anime.min.js"></script>
  </head>

  <body>
    <!-- TODO: Add your code here -->
  </body>
</html>
```

### Очекуван резултат

![Progressbar](./loading-bar.gif)

### Корисни ресурси и насоки

### Решение

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Progress bar</title>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.2/anime.min.js"></script>

    <style>
      .container {
        display: inline-block;
        width: 500px;
        height: 25px;
        border: 1px solid lightgray;
        border-radius: 25px;
        overflow: hidden;
      }

      #progress {
        width: 0%;
        height: 100%;
        background-color: #ff0000;
      }
    </style>
  </head>

  <body>
    <div class="container">
      <div id="progress"></div>
    </div>
    <span id="percentage">0%</span>
  </body>

  <script>
    const duration = 3000;

    anime({
      targets: "#progress",
      width: ["0%", "100%"],
      backgroundColor: ["#ff0000", "#ffff00", "#00ff00"],
      easing: "linear",
      duration: duration,
    });

    anime({
      targets: "#percentage",
      innerHTML: ["0%", "100%"],
      easing: "linear",
      round: 1,
      duration: duration,
    });
  </script>
</html>
```

## Дополнителни барања

### Користејки ја `update` методата

```js
anime({
  targets: "#progress",
  width: ["0%", "100%"],
  easing: "linear",
  duration: duration,
  update: function (anim) {
    const percentageElement = document.getElementById("percentage");
    percentageElement.textContent = Math.round(anim.progress) + "%";
  },
});
```

###

![Progressbar](./loading.gif)

```html
<style>
  #progress {
    width: 30%;
    height: 100%;
    background-color: #3498db;
    border-radius: 25px;
  }

  #percentage {
    display: none;
  }
</style>

<script>
  anime({
    targets: "#progress",
    translateX: [-250, 500],
    backgroundColor: ["#3498db", "#2ecc71"],
    easing: "linear",
    duration: 2500,
    loop: true,
  });
</script>
```

### Patterns

[Css gradients patterns - https://cssgradient.io/blog/gradient-patterns/](https://cssgradient.io/blog/gradient-patterns/)

![Progressbar](./loading-lines.gif)

```html
<style>
  #progress {
    width: 0%;
    height: 100%;
    background-color: #00ccd6;
    background-image: linear-gradient(
      90deg,
      transparent 50%,
      rgba(255, 255, 255, 0.5) 50%
    );
    background-size: 25px 25px;
  }
</style>
```

---

![Progressbar](./loading-zigzag.gif)

```html
<style>
  #progress {
    width: 0%;
    height: 100%;
    background-color: #ec173a;
    background:
      linear-gradient(135deg, #eceddc 25%, transparent 25%) -12.5px 0,
      linear-gradient(225deg, #eceddc 25%, transparent 25%) -12.5px 0,
      linear-gradient(315deg, #eceddc 25%, transparent 25%),
      linear-gradient(45deg, #eceddc 25%, transparent 25%);
    background-size: 25px 25px;
  }
</style>
```
