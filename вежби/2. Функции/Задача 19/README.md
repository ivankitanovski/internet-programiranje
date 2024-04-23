# Задача
Напишете функција која за внесени име, презиме и возраст, ќе испечати порака "Здраво јас сум {ime} {prezime} и имам {vozrast} години.". Ако било кој аргумент е погрешно внесен, да се испечати стандардна порака "Здраво јас сум Џон Доу и имам 40 години.". Функцијата треба да може да се повика без аргументи.
![Име](/img/slika1.png)
![Презиме](/img/slika2.png)
![Возраст](/img/slika3.png)
# Решение
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>John Doe</title>
</head>
<body>
<script>
    function createPerson(name = 'John', surname = 'Doe', age = 40){
        alert(`Здраво јас сум ${name} ${surname} и имам ${age} години.`)
    }

    let name = prompt("Внесете име:")
    let surname = prompt("Внесете име:")
    let age = parseInt(prompt("Внесете име:"))
    if (name!=='' && surname !== '' && !isNaN(age)){
        createPerson(name, surname, age)
    }else{
        createPerson()
    }

</script>
</body>
</html>
```
