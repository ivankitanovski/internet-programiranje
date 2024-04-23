# Задача
Напишете функција која ќе треба да го смени моделот на дадениот објект Car, а потоа ќе ја смени вредноста на објектот на null. Името на новиот модел треба да се внесе од корисникот. Што ќе се случи откако ќе го направите објектот еднаков на null? На екран да се испечатат почетната вредност на моделот и изменетата вредност на моделот.
![Внесување на новиот модел](/img/slika1.png)
![Оригинален модел](/img/slika2.png)
![Решение](/img/slika3.png)
# Даден код
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Промена на модел на автомобил</title>
</head>
<body>
<script>
    const Car = {
        brand: "VolksWagen",
        Model: "Polo",
        Year: "2001"
    }
    
    // TODO
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
    <title>Промена на модел на автомобил</title>
</head>
<body>
<script>
    const Car = {
        brand: "VolksWagen",
        Model: "Polo",
        Year: "2001"
    }

    function changeModel(object, new_M){
        object.Model = new_M // ова ќе ја смени вредноста на моделот на автомобилот
        object = null // ова нема да направи ништо. Зошто?
    }

    new_model = prompt("Внесете име на новиот модел:")
    alert('Стариот модел: ' + Car.Model)
    changeModel(Car, new_model)
    alert('Новиот модел: ' + Car.Model)
</script>
</body>
</html>
```