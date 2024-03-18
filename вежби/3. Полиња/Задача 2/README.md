# Задача 2

Да се напише JavaScript код кој ќе го пресмета збирот на квадратите на елементите внесени преку prompt.
Елементите се одделени со ;.

**Да се користи методот reduce()**

# Решение

```html
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <script>
      let broevi = prompt("Внеси ги броевите:");
      broevi = broevi.split(";");
      let sum = broevi
        .map((x) => parseInt(x))
        .reduce((sum, num) => sum + num ** 2, 0); // num ** 2 е еквивалентно со Math.pow(num, 2), 0 е иницијалната вредност на акумулаторот.
      console.log(sum);
    </script>
  </head>
  <body></body>
</html>
```
