# Интернет програмирање

# Полиња

# Задача 3

a) Да се напише JavaScript код кој пресметува просек на елементите
во една низа со употреба на методот reduce.
b) Да се напише JavaScript код кој пресметува сума на елементите
во една низа зголемена за n со употреба на методот reduce.

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
      let sum = arr.reduce(
        //со употреба на reduce , во accumulator се собираат елементите од низата
        (accumulator, item) => {
          return (accumulator += item);
        },
      ); //initial value не е поставена и се зема default-ната 0
      let avg = sum / arr.length; //го пресметуваме просекот како количник од сумата на елементите и бројот на елементите
      console.log(avg);

      let n = 5;
      let increasedSum = arr.reduce((accumulator, item) => {
        return (accumulator += item);
      }, n); //initial value е поставена на n, што значи дека сумата ќе се зголеми за n
      console.log(increasedSum);
    </script>
  </body>
</html>
```
