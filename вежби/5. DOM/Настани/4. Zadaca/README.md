# Интернет програмирање

# Настани

# Задача 4

Креирајте веб страна каде ќе имате кутија со на почеток црвена боја, од како ќе hover-ните со покажувачот врз кутијата ќе добије некоја случајна боја, исто и кога ќе се остране покажувачот од кутијата.

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
