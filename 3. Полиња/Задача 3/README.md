# Интернет програмирање

# Полиња

# Задача 3

Да се напише JavaScript код кој пресметува просек на елементите
во една низа со употреба на методот reduce.

# Решение:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Задача 3</title>
  </head>
  <body>
    <script type="text/javascript">
      let arr = [3, 6, 12, 51, 2, 87, 21, 38];
      let sum = arr.reduce((accumulator, item) => {
        //со употреба на reduce , во accumulator се собираат елементите од низата
        return (accumulator += item);
      });
      let avg = sum / arr.length; //го пресметуваме просекот како количник од сумата на елементите и бројот на елементите
      console.log(avg);
    </script>
  </body>
</html>
```
