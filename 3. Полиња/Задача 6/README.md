# Интернет програмирање

# Полиња

# Задача 6

Да се направи веб страница која содржи select мени од кое се избира дали ќе се
прикажат поголемите/помалите елементи од елементот кој го внесувате во следното текстуално поле.
При кликање на копчето "прикажи" се прикажуваат елементите.
Доколку елементот кој сте го внеле не постои во низата, се прикажува порака за грешка.

![IMAGE](images/screenshot_4.png)

![IMAGE](images/screenshot_5.png)

![IMAGE](images/screenshot_6.png)

# Решение:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Задача 6</title>
    <style>
      #container {
        width: 310px;
        margin: auto;
        padding: 20px;
        border: 1px solid black;
        border-radius: 5px;
      }

      #inp {
        width: 20px;
      }

      #choice {
        display: inline;
        width: 85px;
      }

      #result {
        width: 250px;
      }

      #show {
        margin-top: 3px;
      }
    </style>
  </head>
  <body>
    <div id="container">
      <span>Прикажи ги елементите </span>
      <select name="choice" id="choice">
        <option value="1">поголеми</option>
        <option value="2">помали</option>
      </select>
      <span> од </span>
      <input type="text" id="inp" />
      <br />
      <button id="show" onclick="showElements()">прикажи</button>
      <p id="result"></p>
    </div>
    <script type="text/javascript">
      let arr = [
        2, 4, -4, -72, 5, 6, 1, 3, -3, 5, -1, 41, 41, -32, 52, -13, 52, 102, -79,
      ];
      arr.sort((a, b) => {
        //сортирање на низата по вредност од најмал до најголем
        return a - b;
      });

      function showElements() {
        let choice = document.getElementById("choice").value;
        let n = document.getElementById("inp").value;
        let res = document.getElementById("result");

        if (arr.indexOf(parseInt(n)) === -1) {
          //проверка дали низата го содржи елементот
          alert("Внесовте непостоечки елемент");
        } else if (choice === "1") {
          //choice = 1 -> елементите поголоеми од елементот n
          let tmp = arr.slice(arr.indexOf(parseInt(n)), arr.length); //креирање на низа tmp во која ги зачувуваме елементите од n до крајот од низата
          res.innerText = tmp.join(","); //ги прикажуваме елементите од низата tmp
        } else if (choice === "2") {
          //choice = 2 -> елементите помали од елементот n
          let tmp = arr.slice(0, arr.indexOf(parseInt(n))); //креирање на низа tmp во која ги зачувуваме елементите од 0 до n
          res.innerText = tmp.join(","); //ги прикажуваме елементите од низата tmp
        }
      }
    </script>
  </body>
</html>
```
