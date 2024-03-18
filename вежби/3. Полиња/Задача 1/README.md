# Задача 1

Да се напише JavaScript код кој внесена низа стрингови ќе ја сортира според ASCII вредноста.
Стринговите се одделени со ;.

# Решение

```html
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <script>
      let strings = prompt("Внеси ги стринговите:"); // ги внесуваме стринговите во prompt
      strings = strings.split(";").sort();
      console.log(strings);
    </script>
  </head>
  <body></body>
</html>
```
