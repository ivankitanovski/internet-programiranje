# Интернет програмирање

# Полиња

# Задача 9

Да се направи веб страница која содржи текстуално поле за внесување
елементите на една низа (елементите се внесуваат одделени со празно место), копче "Внеси"
за зачувување на елементите во низа, две текстуални полиња - едното за почетен, другото за краен индекс
и копче "Прикажи" за прикажување на елементите од почетниот до крајниот индекс.
Доколку се внесе елеменет поголем од должината на низата, се прикажуваат елеменетите до крајот на низата,
а ако се внесе негативен број се прикажуваат елеменетите почнувајќи од почеток.

![IMAGE](images/screenshot_12.png)

# Решение:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Задача 8</title>
    <style>
      #container {
        width: 300px;
        min-height: 250px;
        margin: auto;
        padding: 20px;
        border: 1px solid black;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        gap: 20px;
      }

      #result {
        border: 1px solid black;
        padding: 20px;
        min-height: 20px;
        margin: 10px auto auto;
        width: 85%;
      }
    </style>
  </head>
  <body>
    <div id="container">
      <label for="array">Внеси ги елементите:</label>
      <input type="text" id="array" />
      <button class="btn" onclick="insertElements()">Внеси</button>
      <span>
        <label for="from">Почетен индекс:</label>
        <input type="text" id="from" />
      </span>
      <span>
        <label for="to">Краен индекс:</label>
        <input type="text" id="to" />
      </span>
      <button id="show" onclick="showResult()">Прикажи</button>
      <div id="result"></div>
    </div>

    <script type="text/javascript">
      let arr = [];

      function insertElements() {
        let input = document.getElementById("array");
        arr = input.value.split(" ");
      }

      function showResult() {
        let res = document.getElementById("result");
        let from = document.getElementById("from").value;
        let to = document.getElementById("to").value;

        if (from < 0) from = 0;
        if (to > arr.length) to = arr.length;

        res.innerHTML = arr.slice(from, to).join(", ");
      }
    </script>
  </body>
</html>
```
