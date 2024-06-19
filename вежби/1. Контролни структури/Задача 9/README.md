# Задача 9

Да се напише програма во која преку prompt ќе се внесат два броја,
потоа ќе се внесе оператор (+, -, * или /) и добиениот резултат од
операцијата ќе се прикаже во конзола.

~~~
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Simple Calculator</title>
</head>
<body>
<script>
  let a = prompt("Внеси го првиот број:")
  let b = prompt("Внеси го вториот број:")
  let o = prompt("Внеси оператор:")
  a = parseInt(a)
  b = parseInt(b)
  if (o === "*") {
    console.log(a * b) //Печатиме во конзола
  } else if (o === "/") {
    console.log(a / b)
  } else if (o === "+") {
    console.log(a + b)
  } else if (o === "-") {
    console.log(a - b)
  } else {
    console.log("Невалиден оператор")
  }
</script>
</body>
</html>
~~~