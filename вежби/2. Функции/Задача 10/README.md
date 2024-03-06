# Задача
Да се напише функција која ќе генерира нов параграф на страната со случајна боја на позадина, случајна боја на текст, и кој ќе содржи реченица од десет случајни зборови. Даден е почетен код во кој е дадена низа на зборови од кои треба да изберете 10 кои ќе бидат дел од реченицата. Дополнете го кодот за правилно работење на задачата.
![Почетна состојба](/img/slika1.png)
![Генериран параграф](/img/slika2.png)
# Почетен код
```angular2html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Случаен ДИВ</title>
</head>
<body>
<button onclick="generate()">Генерирај параграф</button>
<script>
    function generate() {
        let words = ['cultural', 'bar', 'these', 'responsibility', 'Mr', 'risk', 'together', 'model', 'key', 'personal', 'body', 'must', 'place', 'today', 'star', 'response', 'bed', 'write', 'never', 'boy', 'exactly', 'listen', 'follow', 'enough', 'power', 'present', 'feel', 'trip', 'rich', 'strategy', 'number', 'on', 'week', 'brother', 'free', 'woman', 'seven', 'cultural', 'so', 'something', 'responsibility', 'statement', 'international', 'peace', 'carry', 'plan', 'research', 'visit', 'put', 'marriage', 'say', 'poor', 'country', 'fund', 'standard', 'onto', 'other', 'fish', 'and', 'near', 'break', 'even', 'color', 'especially', 'huge', 'song', 'of', 'paper', 'control', 'second', 'learn', 'than', 'notice', 'name', 'executive', 'will', 'billion', 'think', 'back', 'cause', 'life', 'second', 'them', 'similar', 'seven', 'population', 'which', 'hope', 'shoulder', 'involve', 'father', 'it', 'yes', 'you', 'owner', 'traditional', 'image', 'main', 'national', 'great']
        // TODO
    }
</script>
</body>
</html>
```
# Решение
```angular2html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Случаен ДИВ</title>
</head>
<body>
<button onclick="generate()">Генерирај параграф</button>
<script>
    function generate() {
        let words = ['cultural', 'bar', 'these', 'responsibility', 'Mr', 'risk', 'together', 'model', 'key', 'personal', 'body', 'must', 'place', 'today', 'star', 'response', 'bed', 'write', 'never', 'boy', 'exactly', 'listen', 'follow', 'enough', 'power', 'present', 'feel', 'trip', 'rich', 'strategy', 'number', 'on', 'week', 'brother', 'free', 'woman', 'seven', 'cultural', 'so', 'something', 'responsibility', 'statement', 'international', 'peace', 'carry', 'plan', 'research', 'visit', 'put', 'marriage', 'say', 'poor', 'country', 'fund', 'standard', 'onto', 'other', 'fish', 'and', 'near', 'break', 'even', 'color', 'especially', 'huge', 'song', 'of', 'paper', 'control', 'second', 'learn', 'than', 'notice', 'name', 'executive', 'will', 'billion', 'think', 'back', 'cause', 'life', 'second', 'them', 'similar', 'seven', 'population', 'which', 'hope', 'shoulder', 'involve', 'father', 'it', 'yes', 'you', 'owner', 'traditional', 'image', 'main', 'national', 'great']
        // TODO
        // случајни вредности за бојата на позадината
        let R = Math.floor(Math.random() * 255)
        let G = Math.floor(Math.random() * 255)
        let B = Math.floor(Math.random() * 255)
        let bgColor = `rgb(${R}, ${G}, ${B})` // стринг кој ќе се внесе како in-line style за позадина на параграфот
        // случајни вредности за бојата на параграфот
        R = Math.floor(Math.random() * 255)
        G = Math.floor(Math.random() * 255)
        B = Math.floor(Math.random() * 255)
        let color = `rgb(${R}, ${G}, ${B})` // style за боја на параграфот
        let randomWords = ''
        for (let i = 0; i < 10; i++) {
            if (i !== 9) randomWords += words[Math.floor(Math.random() * words.length)] + ' '
            else randomWords += words[Math.floor(Math.random() * words.length)]
        }
        randomWords = randomWords.substring(0, 1).toUpperCase() + randomWords.substring(1) + '.' // Реченица од десет случајни зборови генерирана од дадените зборови каде првата буква е голема и има точка на крај
        document.body.innerHTML += `<p style="background-color:${bgColor}; color: ${color}"> ${randomWords} </p>` // додавање на параграфот на body елементот
    }
</script>
</body>
</html>
```