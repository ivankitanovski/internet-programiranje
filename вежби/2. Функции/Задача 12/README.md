# Задача
Да се напише функција која ќе испечати внесена низа во обратен редослед. Низата се внесува од корисникот и може да содржи броеви и зборови.
![Прв број](/img/slika1.png)
![Втор број](/img/slika2.png)
![Резултат](/img/slika3.png)
# Решение
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Множење броеви</title>
</head>
<body>
<script>
    function multiply(a, b) {
        return a * b
    }

    let a = parseInt(prompt("Прв Број:"))
    let b = parseInt(prompt("Втор Број:"))
    if (isNaN(a)) alert("Внесете цел број за вредноста на а.")
    if (isNaN(b)) alert("Внесете цел број за вредноста на б.")
    alert(multiply(a, b))
</script>
</body>
</html>
```