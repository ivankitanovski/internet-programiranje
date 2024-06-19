# Задача 7

Да се напише програма во која преку prompt ќе се внесе број. Со alert
да се прикаже дали бројот е совршен (Perfect number) или не.
Perfect number е број кој е еднаков на збирот на неговите делители.
Пр. бројот 6 е совршен бидејќи 1 + 2 + 3 е 6

~~~
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Perfect Number</title>
</head>
<body>
<script>
  let a = parseInt(prompt("Внеси број:"))
  let sum = 0
  for (let i = 1; i < a; i++) {
    if (a % i === 0) {
      sum += i //Ако најдеме делител на бројот го додаваме во збирот
    }
  }
  if (a === sum) { //Проверуваме дали збирот на делители е еднаков на внесениот број
    alert("Бројот е совршен")
  } else {
    alert("Бројот не е совршен")
  }
</script>
</body>
</html>
~~~