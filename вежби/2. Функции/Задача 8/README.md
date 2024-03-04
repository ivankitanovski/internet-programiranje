# Задача
Да се напише функција за внесување на вредностите од инпут полињата во дадената табела. Даден е почетен код кој треба да се дополни на соодветни места означени со "TODO" за да се реши задачата. Откако ќе се внесе записот во табелата, инпут полињата треба да се ресетираат. Ако се направи обид за внес кога едно или повеќе од полињата се празни, се спречува внесување на таков запис и се печати соодветна порака.
![Внесување на податоци](/img/slika1.png)
![Додаден запис во табелата](/img/slika2.png)
![Невалиден внес](/img/slika3.png)
# Даден код
```angular2html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Инпут во табела</title>
    <style>
        table, td, th {
            border: 1px solid black;
        }

        table {
            border-collapse: collapse;
        }
    </style>
</head>
<body>
<div><label>Име: <input type="text" id="name"></label></div>
<div><label>Презиме: <input type="text" id="surname"></label></div>
<div><label>Индекс: <input type="text" id="index"></label></div>
<div><label>Посакувана оценка: <input type="text" id="grade"></label></div>
<div>
    <button onclick="add()">Додади</button>
</div>
<div>
    <table id="input_table">
        <tr>
            <th>Име</th>
            <th>Презиме</th>
            <th>Индекс</th>
            <th>Посакувана оценка</th>
        </tr>
    </table>
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
```angular2html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Инпут во табела</title>
    <style>
        table, td, th {
            border: 1px solid black;
        }

        table {
            border-collapse: collapse;
        }
    </style>
</head>
<body>
<div><label>Име: <input type="text" id="name"></label></div>
<div><label>Презиме: <input type="text" id="surname"></label></div>
<div><label>Индекс: <input type="text" id="index"></label></div>
<div><label>Посакувана оценка: <input type="text" id="grade"></label></div>
<div>
    <button onclick="add()">Додади</button>
</div>
<div>
    <table id="input_table">
        <tr>
            <th>Име</th>
            <th>Презиме</th>
            <th>Индекс</th>
            <th>Посакувана оценка</th>
        </tr>
    </table>
</div>
<script>
    function add() {
        // nameEl е елементот на инпут полето за името
        // name е вредноста земена од инпут полето
        // важи соодветно за сите други елементи и вредности
        let nameEl = document.getElementById("name")
        let name = nameEl.value
        let surnameEl = document.getElementById("surname")
        let surname = surnameEl.value
        let indexEl = document.getElementById("index")
        let index = indexEl.value
        let gradeEl = document.getElementById("grade")
        let grade = gradeEl.value
        let table = document.getElementById("input_table") // табелата во која треба да се додаде записот
        // се ресетираат инпут елементите
        nameEl.value = ''
        surnameEl.value = ''
        indexEl.value = ''
        gradeEl.value = ''
        // се прави проверка дали сите полиња имаат соодветни вредности
        // доколку фали некоја вредност се печати порака за невалидност
        if (name === '' || surname === '' || index === '' || grade === '') {
            alert("Невалидно внесени вредности")
            return
        }
        // се додава новиот запис во табелата
        table.innerHTML += '<tr>' +
            `<td>${name}</td>` +
            `<td>${surname}</td>` +
            `<td>${index}</td>` +
            `<td>${grade}</td>` +
            '</tr>'
    }
</script>
</body>
</html>
```