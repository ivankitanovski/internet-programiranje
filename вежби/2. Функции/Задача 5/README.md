# Задача
Да се напише функција која за даден стринг ќе врати стринг во кој секој од зборовите во реченицата се со почетна голема буква. Стрингот се внесува од корисникот.
![Внесување на реченицата](/img/slika1.png)
![Решение](/img/slika2.png)
# Решение
```angular2html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Реченица со големи букви</title>
</head>
<body>
<script>
    let str = prompt("Внеси реченица")
    alert(formatString(str))

    function formatString(str) {
        let words = str.split(/\s/) // ја дели реченицата на зборови
        for (let i = 0; i < words.length; i++) {
            words[i] = words[i].substring(0, 1).toUpperCase() + words[i].substring(1) // ја зема првата буква од зборот, ја прави голема и го додава останатиот дел од зборот
        }
        return words.join(" ") // ги соединува сите зборови во една реченица со празни места помеѓу
        // алтернативно решение со regex наместо со for
        // return sentence.toLowerCase().replace(/(^|\s)\S/g, (firstLetter) => firstLetter.toUpperCase());
    }
</script>
</body>
</html>
```