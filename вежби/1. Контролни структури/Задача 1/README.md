# Задача 1

Да се напише програма во која преку prompt ќе се внесе температура
во целзиусови степени, а потоа преку alert ќе се прикаже температурата
во фаренхајтови. \
Формулата за претворање е: F = (9 / 5 * C) + 32

~~~
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Temperature Converter</title>
</head>
<body>
<script>
    //Преку prompt ја внесуваме температурата
    var temp = prompt("Внеси температура во целзиусови степени:")
    temp = parseInt(temp) //Ја парсираме температурата од String во Integer
    var fahrenheit = (9 / 5 * temp) + 32
    alert("Температурата во фаренхајтови е: " + fahrenheit)
</script>
</body>
</html>
~~~