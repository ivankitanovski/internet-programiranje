# Задача
Да се напише функција која ќе го испечати бројот на зборови за дадена реченица. Реченицата се внесува од корисникот.
![Внесување на реченицата](/img/slika1.png)
![Печатење на бројот на зборови](/img/slika2.png)
# Решение
```angular2html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Број на зборови</title>
</head>
<body>
<script>
    let str = prompt("Внесете реченица") // внес на реченица
    countNumberOfWords(str) // повик на функција за решение

    function countNumberOfWords(str) {
        alert(str.split(/\s/).length) // печати број на зборови така што ја дели реченизата секаде каде што има празно место
    }
</script>
</body>
</html>
```