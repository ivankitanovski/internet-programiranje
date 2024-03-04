# Задача
Да се напише функција за генерирање на силен пасворд со дадена должина која се внесува од корисникот. Пасвордот може да содржи мали и големи латинични букви и бројќи од 0 до 9. Користете Math.random() за избор на случајните карактери.
![Внесување на должина](/img/slika1.png)
![Резултат](/img/slika2.png)
![Невалиден внес](/img/slika3.png)
# Решение
```angular2html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Силен пасворд</title>
</head>
<body>
<script>
    let length = prompt("Внесете должина на пасвордот")
    length = parseInt(length) // парсирање на должината во int
    if (isNaN(length)) alert("Невалидна должина. Внесете цел број.") // се спречува понатамошно извршување ако не е внесена коректна вредност за должината
    else
        alert(generatePassword(length)) // повик до функцијата за генерирање на пасворд

    function generatePassword(length) {
        const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789' // множество од можни букви и бројќи за пасвордот
        let pass = ''
        for (let i = 0; i < length; i++) {
            pass += charset.charAt(Math.floor(Math.random() * charset.length)) // се додава случаен карактер од множеството на новиот пасворд
        }
        return pass
    }
</script>
</body>
</html>
```