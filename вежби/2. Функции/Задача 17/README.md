# Задача
Да се напише функција која ќе врати збир на сите пратени аргументи. Аргументите се праќаат при повик на функцијата. Кога ја дефинирате функцијата не треба да ставите влезни аргументи. Пример: функцијата ќе биде дефинирана како "function sumAll()", а ќе биде повикана на следниот начин: "alert(sumAll(1, 2, 4, 5))" по што на екран ќе се испечати збирот 12.
![Резултат](/img/slika1.png)
# Решение
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Сума на сите аргументи</title>
</head>
<body>
<script>
    function sumAll(){
        let sum = 0
        for (let i = 0; i < arguments.length; i++) {
            sum += arguments[i]
        }
        return sum
    }

    alert('Сума: ' + sumAll(1, 2, 4, 5))

</script>
</body>
</html>
```