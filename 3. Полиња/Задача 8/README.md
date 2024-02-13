# Интернет програмирање

# Полиња

# Задача 8

Да се направи веб страница која содржи текстуално поле за внесување на страта на квадрат и копче "Креирај квадрати".
При кликање на копчето се креира квадрат со соодветните страни. Доколку се внесени елементи кои
не се броеви, не се земаат во предвид (се филтрираат само броевите). Доколку страната е поголема од 300,
се заменува со 300, а доколку е помала од 100 се заменува со 100 (Максимална големина е 300px, а минимална 100px).
Елементите да се внесуваат одделени со празни места.
Да се направи и коче "Исчисти" кое ги брише сите претходно креирани квадрати.

![IMAGE](images/screenshot_8.png)

![IMAGE](images/screenshot_9.png)

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
        height: 140px;
        margin: auto;
        padding: 20px;
        border: 1px solid black;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        gap: 20px;
      }

      .square {
        border: 1px solid black;
        margin: 5px;
        background-color: dodgerblue;
      }

      #result {
        border: 1px solid black;
        padding: 20px;
        min-height: 315px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin: 10px auto auto;
        width: 1000px;
      }
    </style>
  </head>
  <body>
    <div id="container">
      <label for="array">Внеси ги страните на квадратите:</label>
      <input type="text" id="array" />
      <button class="btn" onclick="mapToSquares()">Креирај квадрати</button>
      <button class="btn" onclick="clearSquares()">Исчисти</button>
    </div>
    <div id="result"></div>
    <script type="text/javascript">
      function mapToSquares() {
        let res = document.getElementById("result");
        let input = document.getElementById("array");
        let arr = input.value.split(" ");
        console.log(arr);
        let elements = arr
          .filter((i) => !isNaN(parseInt(i)))
          .map((i) => {
            //ги филтрираме елементите од низата кои се броеви и ги мапираме
            if (i > 300) {
              //доколку елементот е поголем од 300, го менуваме во 300
              i = 300;
            }
            if (i < 100) {
              //доколку елементот е помал од 100, го менуваме во 100
              i = 100;
            }
            let el = document.createElement("div"); //креирање на div елемент кој го користиме како квадрат
            el.style.width = i + "px"; //поставување на висина колку што е вредноста на елементот
            el.style.height = i + "px"; //поставување на ширина колку што е вредноста на елементот
            el.setAttribute("class", "square");
            return el;
          });

        elements.forEach((i) => res.appendChild(i)); //ги додаваме новите квадрати во div елементот кој го користиме како контејнер за квадратите
        input.value = ""; //го бришеме текстуалното поле
      }

      function clearSquares() {
        document.getElementById("result").innerHTML = ""; //ги бришеме сите постоечки квадрати
      }
    </script>
  </body>
</html>
```
