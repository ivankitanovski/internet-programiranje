# Задача 1

Потребно е да се овозможи на елементот да може да му се менува стилот со клик на копчето Toggle Styles. 
Елементот ќе менува помеѓу два различни предефинирани CSS стилови. На почетокот елементот нема да има никаков стил, 
со клик на копчето ќе се менуваат двата стилови.
Подолу е даден изгледот на елементите пред и по кликање на копчето.

![](img/image1.png)

![](img/image2.png)

![](img/image3.png) 

# Решение:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Стилизирање</title>
    <style>
        #targetElement {
            width: 200px;
            height: 100px;
            border: 2px solid black;
            margin: 20px;
            padding: 10px;
            text-align: center;
        }

        .lightBlueStyles {
            background-color: lightblue;
            color: darkblue;
            font-size: 20px;
        }

        .darkRedStyles {
            background-color: darkred;
            color: white;
            font-size: 18px;
        }
    </style>
</head>
<body>
<div id="targetElement">Ова е елементот на кој ке му се смени стилот!</div>
<div>
    <button onclick="toggleStyles()">Toggle Styles</button>
</div>
<script>

    let isLightBlue = true; // променлива која е одговорна за стилот

    function toggleStyles() {
        let targetElement = document.getElementById('targetElement');// со getElementById се зема елементот

        if (isLightBlue) { // се проверува дали isLightBlue е true
            targetElement.classList.remove('lightBlueStyles');
            targetElement.classList.add('darkRedStyles');
        } else { // се менува помеѓу стиловите во зависност од тоа кој стил е во моментот
            targetElement.classList.remove('darkRedStyles');
            targetElement.classList.add('lightBlueStyles');
        }

        isLightBlue = !isLightBlue;
    }
</script>
</body>
</html>
```