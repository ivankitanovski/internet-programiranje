# Интернет програмирање

# Настани

# Задача 4

Да се креира веб страница каде на почеток ќе има кутија со црвена боја. Откако со покажувачот ќе се позиционираме над кутијата, ќе се добие случајно генерирана боја. Исто и кога ќе се остране покажувачот од кутијата, пак да се промени бојата на кутијата со случајно генерирана боја.

![IMAGE](images/1.png)
![IMAGE](images/2.png)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      #box {
        width: 300px;
        height: 300px;
        background-color: red;
        transition: background-color 0.5s;
      }
      body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
      }
    </style>
  </head>
  <body>
    <div id="box" onmouseover="changeColor()" onmouseout="changeColor()"></div>

    <script>
      function changeColor() {
        // променлива randomColor која ја добиваме со помош на Math.random() и Math.floor() функциите
        // мноштвото со 100000 е за да го добиеме шестцифрениот број
        // го конвертираме во хексадецимален број
        let randomColor = Math.floor(Math.random() * 100000).toString(16);

        // го менуваме backgroundColor на div-от
        document.getElementById("box").style.backgroundColor =
          "#" + randomColor;
      }
    </script>
  </body>
</html>
```
