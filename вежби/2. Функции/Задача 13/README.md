# Задача
Замислете дека работите на групен проект, во кој што треба да пристапите до некоја функција, чие име на вас ви е непознато. Вие знаете дека постои функција која ќе ви го даде името на таа функција. Напишете ја функцијата која ќе го врати името на непознатата функција.
![Резултат](/img/slika1.png)
# Решение
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Име на функција</title>
</head>
<body>
<script>
    alert("Name of unknown function: " + nameOfUnknownFunction())
    function nameOfUnknownFunction(){
        return knownFunction()
    }

    function knownFunction(){
        return arguments.callee.name
    }
</script>
</body>
</html>
```