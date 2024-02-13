# Интернет програмирање

# Полиња

# Задача 2

Да се напише javascript код кој елементите од една низа ги
зголемува за 1 и ги зачувува во нова низа со употреба на методот map

# Решение:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Задача 2</title>
  </head>
  <body>
    <script type="text/javascript">
      let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      let modified = arr.map((i) => i + 1); //секој елемент од низата arr се зголемува за еден и се додава во новата низа modified
      modified.forEach((i) => console.log(i)); //во конзола се печати секој елемент од новата низа
    </script>
  </body>
</html>
```
