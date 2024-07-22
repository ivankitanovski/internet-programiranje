# Задача 17

Напишете програма што проверува дали даден стринг е палиндром (се чита исто напред и назад).

![image](img/img.png)

![image](img/img_1.png)

# Решение

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
  </head>
  <body>
    <script>
      let str = prompt("Внесете стринг:");
      let reversed = str.split("").reverse().join("");
      if (str === reversed) {
        alert("Внесениот стринг е палиндром");
      } else {
        alert("Внесениот стринг НЕ е палиндром");
      }
    </script>
  </body>
</html>
```
