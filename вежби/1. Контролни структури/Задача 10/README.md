10 Задача

Да се напише програма во која преку prompt ќе се внесе еден цел број, а во alert прозорец ќе се прикажат сите броеви во интервалот од 1 до внесениот број кои се деливи со цифрата на единиците на внесениот број.

![image](img/10.1.png)

![image](img/10.2.png)

![image](img/10.3.png)

![image](img/10.4.png)





# Решение
```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
</body>
<script>
    let number = prompt("Enter an integer number:");
    number = parseInt(number);
    let digit = number % 10;
    let result = "";
    for (let i = 1; i <= number; i++) {

        // Проверка за деливост со цифрата на единиците
        if (i % digit === 0) {
            result += i + " ";
        }
    }

    // Приказ на резултатот
    alert(result);
</script>
</html>

```
