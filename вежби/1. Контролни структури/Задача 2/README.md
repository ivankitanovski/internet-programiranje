# Задача 2

Да се напише програма во која преку prompt ќе се внесе број. Да се
провери и со alert да се прикаже дали станува збор за "Armstrong number".
"Armstrong number" е број кој е еднаков на збирот на неговите цифри кренати
на степен на бројот на цифри кои ги има во бројот. \
Пр. бројот 153, бидејќи 1^3 + 5^3 + 3^3 = 153

# Решение

~~~
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Armstrong Number</title>
</head>
<body>
<script>
  var a = prompt("Внеси број:")
  var tmp = parseInt(a), counter = 0, sum = 0
  while (tmp > 0) { //Ги броиме цифрите во бројот
    counter++
    tmp = parseInt(tmp / 10)
  }
  for (var i = 0; i < a.length; i++) {
    sum += Math.pow(parseInt(a.at(i)), counter) //Во збирот ја додаваме секоја цифра крената на степен на бројот на цифри
  }
  if (parseInt(a) === sum) {
    alert("Armstrong number")
  } else {
    alert("Not an Armstrong number")
  }
</script>
</body>
</html>
~~~