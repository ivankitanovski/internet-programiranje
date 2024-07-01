# Задача 2

Да се овозможи при кликање на копчето "Logo FINKI" да се појавува претходно креираното лого на екран со анимација. 
При повторно кликање на копчето потребно е да се отстрани логото од страницата. 
Притоа да се додаде логото на div елементот како child element. 
Да се користи transition: opacity 0.5s ease-in-out.

  ![](img/slika1.png)

# Решение:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Toggle Logo</title>
    <style>
        #Logo {
            opacity: 0;
            transition: opacity 0.5s ease-in-out;
        }

        .visible {
            opacity: 1 !important;
        }
    </style>
</head>
<body>
<button id="toggleButton">Logo FINKI</button>
<div id="logoContainer">

</div>

<script>

    const imageSrc = "https://www.finki.ukim.mk/Content/dataImages/downloads/logo-large-500x500_2.png"; // source URL
    //на сликата

    const divElement = document.getElementById("logoContainer");//земање на div елементот со функцијата getElementById

    const imgElement = document.createElement("img");// креирање на img елемент
    imgElement.id = "Logo"; // ставање на id-то на елементот да биде "Logo"
    imgElement.src = imageSrc; // ставање на source да биде линкот од горе

    divElement.appendChild(imgElement); // додавање на сликата на div елементот

    const toggleButton = document.getElementById("toggleButton");// земање на копчето со getElementById
    const logo = document.getElementById("Logo"); // земање на креираната слика со getElementById

    toggleButton.addEventListener('click', function() { // со кликање на копчето ќе се појавува или избришува
        //сликата соодветно со анимација
        logo.classList.toggle('visible');
    });
</script>
</body>
</html>
```