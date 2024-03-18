# Задача
Да се мапише функција за генерирање на 7 бинго броеви во опсег од 1 до 31. Броевите не смее да се повторуваат. Даден е почетен код кој треба да се дополни на соодветни места за да функционира задачата.
![Почетна состојба](/img/slika1.png)
![Генерирани броеви](/img/slika2.png)
# Почетен код
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Бинго</title>
</head>
<body>
<div>
    <p id="numbers">Бинго броеви: </p>
    <button onclick="add()">Додади</button>
</div>
<script>
    function add() {
        // TODO
    }
</script>
</body>
</html>
```
# Решение
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Бинго</title>
</head>
<body>
<div>
    <p id="numbers">Бинго броеви: </p>
    <button onclick="add()">Додади</button>
</div>
<script>
    function add() {
        let inputEl = document.getElementById("numbers") // се дефинира елементот каде ќе се додадат броевите
        // се пополнува низа со броеви од 1 до 31
        let numbers = []
        for (let i = 0; i < 31; i++) {
            numbers[i] = i + 1
        }
        let randomNumbers = '' // стринг кој ќе ги содржи бинго броевите
        for (let i = 0; i < 7; i++) {
            let choiceIndex = Math.floor(Math.random() * numbers.length) // се бира случаен индекс од должината на низата со броеви
            randomNumbers += numbers[choiceIndex] + ' ' // се додава бројот кој се наоѓа на тој индекс во решението
            numbers.splice(choiceIndex, 1) // се отстранува бројот за да не може да се повтори
        }
        inputEl.innerHTML = ' Бинго броеви: ' +  randomNumbers // се додава решението на параграф елементот
    }
</script>
</body>
</html>
```
