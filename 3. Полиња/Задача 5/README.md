# Интернет програмирање

# Полиња

# Задача 5

Да се направи веб страница која содржи ендо текстуално поле и пет копчиња: "Додади елемент",
"Избриши го првиот", "Избриши го последнио", "Преврти ја низата", "Сортирај ја низата".
Во текстуалното поле се внесува елемент и при клик на копчето се додава во нзиата. Останатите копчиња го прават она што е наведено во нивното име.
По кликање на било кое копче се ажурира низата и се прикажува под копчињата.
Доколку се обидеме да притиснеме некое копче додека низата е празна (освен "Додади елемент") да
се прикаже порака за грешка ("Низата е празна").

![IMAGE](images/screenshot_3.png)

# Решение:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Задача 5</title>
    <style>
      #container {
        width: 300px;
        min-height: 305px;
        margin: auto;
        padding: 20px;
        border: 1px solid black;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        gap: 20px;
      }

      #res {
        margin-bottom: -30px;
        font-weight: bold;
      }

      #element {
        width: 170px;
        display: inline;
      }

      label {
        display: inline-block;
        width: 110px;
      }
    </style>
  </head>
  <body>
    <div id="container">
      <div>
        <label for="element">Внеси елемент:</label>
        <input type="text" id="element" />
      </div>
      <button class="btn" onclick="addElement()">Додади елемент</button>
      <button class="btn" onclick="removeFirst()">Избриши го првиот</button>
      <button class="btn" onclick="removeLast()">Избриши го последниот</button>
      <button class="btn" onclick="reverseArray()">Прврти ја низата</button>
      <button class="btn" onclick="sortArray()">Сортирај ја низата</button>
      <span id="res">Низа:</span>
      <p id="result"></p>
    </div>
    <script type="text/javascript">
      let array = [];

      function updateArray() {
        //функција која ја ажурира низата при промени
        let res = document.getElementById("result");
        res.innerText = array.join(", ");
      }

      function addElement() {
        let input = document.getElementById("element");
        if (input.value === "") {
          alert("Немате внесенов вредност за елементот");
        } else {
          array.push(input.value); //додавање на нов елемент на крајот од низата
          input.value = "";
          updateArray();
        }
      }

      function removeFirst() {
        if (array.length === 0) {
          alert("Низата е празна");
        } else {
          array.shift(); //бришење на првиот елемент
          updateArray();
        }
      }

      function removeLast() {
        if (array.length === 0) {
          alert("Низата е празна");
        } else {
          array.pop(); //бришење на последниот елемент
          updateArray();
        }
      }

      function reverseArray() {
        if (array.length === 0) {
          alert("Низата е празна");
        } else {
          array.reverse(); //превртување на низата
          updateArray();
        }
      }

      function sortArray() {
        if (array.length === 0) {
          alert("Низата е празна");
        } else {
          array.sort(); //сортирање на низата
          updateArray();
        }
      }
    </script>
  </body>
</html>
```
