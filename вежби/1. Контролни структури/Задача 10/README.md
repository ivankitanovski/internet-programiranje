# Задача 10

Да се напише програма во која преку prompt ќе се внесуваат непарни броеви
и во конзола ќе се печати нивниот квадрат. Кога ќе се внесе парен број
да се прикаже alert и програмата да престане.

~~~
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Squared Uneven Numbers</title>
</head>
<body>
<script>
  while (true) {
    let a = parseInt(prompt("Внесете број:"))
    if (a % 2 !== 0)
      console.log(Math.pow(a, 2))
    else
      break
  }
  alert("Внесовте парен број!")
</script>
</body>
</html>
~~~