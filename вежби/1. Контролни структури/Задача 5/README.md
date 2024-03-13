# Задача 5

Да се напише програма во која преку prompt ќе се внесува број.
Со alert треба да се прикаже факториелот на тој број.
Да се прикаже грешка доколку е внесено нешто различно од број.

~~~
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Factorial Calculator</title>
</head>
<body>
<script>
    var a = prompt("Внеси број:")
    var fact = 1
    if (isNaN(a)) {
        alert("Потребно е да внесете број!")
    } else {
        var tmp = parseInt(a)
        while (tmp > 0) {
            fact *= tmp
            tmp--
        }
        alert("Факториел на бројот " + a + " e " + fact)
    }
</script>
</body>
</html>
~~~