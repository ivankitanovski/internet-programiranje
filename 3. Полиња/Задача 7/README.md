# Интернет програмирање

# Полиња

# Задача 7

Да се направи веб страница која содржи две текстуални полиња
за внесување на елементите на две низи и копче за спојување на низите - "concat".
При кликање на копчето двете низи се спојуваат во една и се прикажуваат во текстуално поле.
Елементите да се внесуваат одделени со празни места, а при прикажувањето да бидат одделени со запирка

![IMAGE](images/screenshot_7.png)

# Решение:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Задача 7</title>
    <style>
      #container {
        width: 300px;
        height: 200px;
        margin: auto;
        padding: 20px;
        border: 1px solid black;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      #concat {
        margin-left: auto;
        margin-right: 5px;
        width: 70px;
      }
    </style>
  </head>
  <body>
    <div id="container">
      <label for="first-array">Внеси ја првата низа:</label>
      <input type="text" id="first-array" />
      <label for="second-array">Внеси ја втората низа:</label>
      <input type="text" id="second-array" />
      <button id="concat" onclick="concatArrays()">concat</button>
      <label for="result">Резултат:</label>
      <input id="result" disabled="disabled" />
    </div>
    <script type="text/javascript">
      function concatArrays() {
        let res = document.getElementById("result");
        let firstArr = document.getElementById("first-array").value.split(" ");
        let secondArr = document
          .getElementById("second-array")
          .value.split(" ");
        let resultArr = firstArr.concat(secondArr); //спојување на двете низи во новата низа resultArr
        res.value = resultArr.join(", "); //ги прикажуваме елементите на екран одделени со запирка
      }
    </script>
  </body>
</html>
```
