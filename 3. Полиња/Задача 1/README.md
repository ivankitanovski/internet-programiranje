# Интернет програмирање

# Полиња

# Задача 1

Да се напише javascript код за поделба на првите n-броеви во две низи,
парни и непарни броеви, а потоа да се испечата во конозола

# Решение:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Задача 1</title>
  </head>
  <body>
    <script type="text/javascript">
      let n = 50;
      let odd = [];
      let even = [];

      for (let i = 0; i < n; i++) {
        if (i % 2 === 0) {
          //проверка дали бројот е парен
          even.push(i); //додавање на бројот во низата на парни броеви
        } else {
          odd.push(i); //додавање на бројот во низата на непарни броеви
        }
      }
      console.log("Парни броеви:");
      even.forEach((i) => console.log(i)); //печатење на парните броеви во козола
      console.log("Неарни броеви:");
      odd.forEach((i) => console.log(i)); //печатење на непарните броеви во козола
    </script>
  </body>
</html>
```
