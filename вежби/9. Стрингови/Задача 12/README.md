# Задача 12

Напишете програма што печати подстринг од даден стринг, почнувајќи од индекс x до индекс y.

![image](img/img.png)

![image](img/img_1.png)

![image](img/img_2.png)

![image](img/img_3.png)

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
      let x = parseInt(prompt("Внесете почетен индекс:"));
      let y = parseInt(prompt("Внесете краен индекс:"));
      alert("Подстрингот е: " + str.substring(x, y));
    </script>
  </body>
</html>
```
