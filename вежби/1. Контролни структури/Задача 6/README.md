# Задача 6

Да се напише програма во која преку prompt ќе се внесе број. Со alert
да се прикаже дали бројот е палиндром или не.

~~~
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Palindrome Checker</title>
</head>
<body>
<script>
  var a = prompt("Внеси број:")
  var reversed = ""
  for (var i = a.length - 1; i >= 0; i--) {
    reversed += a.at(i) //Го превртуваме внесениот број
  }
  if (a !== reversed) { //Проверуваме дали превртениот број е еднаков со внесениот
    alert("Внесениот број не е палиндром")
  } else {
    alert("Внесениот број е палиндром")
  }
</script>
</body>
</html>
~~~