# Задача 8

Да се напише програма во која преку prompt прво ќе се внесе број, потоа
ќе се внесе експонент, и преку alert ќе се прикаже внесениот број на
степен на внесениот експонент.

~~~
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Power Function</title>
</head>
<body>
<script>
    let num = parseInt(prompt("Внеси број:"))
    let exp = parseInt(prompt("Внеси експонент:"))
    let result = 1
    for (let i = 0; i < exp; i++) {
        result *= num
    }
    alert(result)
</script>
</body>
</html>
~~~