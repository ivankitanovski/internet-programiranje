# Задача
Да се напише функција за наоѓање на аритметичка средина од низа на броеви со користење на prompt и alert. Се претпоставува дека секоја внесена вредност е валидна, односно нема потреба да се прави проверка дали внесот е број или не.
![Внесување на големина на низа](/img/slika1.png)
![Нулти елемент](/img/slika2.png)
![Прв елемент](/img/slika3.png)
![Втор елемент](/img/slika4.png)
![Резултат](/img/slika5.png)
# Решение
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Average</title>
</head>
<body>
<script>
    let n = prompt("Големина на низа: ")
    let arr = [n] // се креира низа со должина n
    for (let i = 0; i < n; i++) {
        arr[i] = parseInt(prompt(i+": ")) // се внесуваат елементите од низата
    }
    average(arr) // повик до функцијата која ќе го пресмета резултатот

    function average(arr){
        let sum = 0
        for (let i = 0; i < arr.length; i++) {
            sum+=arr[i] // се собираат елементите од низата во една сума
        }
        alert(sum/n) // се прикажува резултатот
    }
</script>
</body>
</html>
```