# Задача
Да се напише функција која ќе испечати внесена низа во обратен редослед. Низата се внесува од корисникот и може да содржи броеви и зборови.
![Внесување големина](/img/slika1.png)
![Грешка при внес на големина на низа](/img/slika2.png)
![Нулти елемент](/img/slika3.png)
![Прв елемент](/img/slika4.png)
![Втор елемент](/img/slika5.png)
![Резултат](/img/slika6.png)
# Решение
```angular2html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Превртена низа</title>
</head>
<body>
<script>
    let n = prompt("Големина на низата")
    if (isNaN(n)) alert("Внесете цел број за големина на низата.")
    let arr = [n] // креирање на низа со големина n
    for (let i = 0; i < n; i++) {
        arr[i] = prompt(i) // внесување на i-тиот елемент
    }
    reverse(arr) // повик до функцијата која ќе ја преврти низата

    function reverse(arr) {
        alert(arr.reverse()) // се печати низата во обратен редослед
    }
</script>
</body>
</html>
```