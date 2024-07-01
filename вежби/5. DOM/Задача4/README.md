# Задача 4

Потребно е да се креира HTML структура која ќе содржи div каде ќе има наслов, еден параграф и една листа со 3 елементи. 
Резултатот е прикажан на следната слика:

![](img/image1.png)

# Решение:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script>
    function create() {
        let container = document.createElement('div');//се прави div
        container.id = 'container';

        let heading = document.createElement('h1');//се прави наслов
        heading.textContent = 'Hello';

        let paragraph = document.createElement('p');//се прави параграф
        paragraph.textContent = 'Ова е вежба за креирање на DOM структура во JavaScript.';

        let ul = document.createElement('ul');//се прави unordered list

        let items = ['Item1', 'Item2', 'Item3']; // се прави листа од елементи

        items.forEach(item => { // се става содржината на листата во unordered list
            let li = document.createElement('li');
            li.textContent = item;
            ul.appendChild(li);
        });

        container.appendChild(heading); // со функцијата аppend се додаваат елементите
        container.appendChild(paragraph);
        container.appendChild(ul);

        document.body.appendChild(container);// со функцијата append се додава контејнерот на body
    }

    create();//повикување на функцијата
</script>
</body>
</html>
```