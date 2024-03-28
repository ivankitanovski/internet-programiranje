# Интернет програмирање

# Настани

# Задача 5

Креирај ЈavaScript програма каде корисникот при десен клик наместо да му се прикаже стандардното менито, да му се прикаже порака дека не смее да прави десен клик.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      // За да го спречиме десниот клик да го отвори контекст менито, користиме preventDefault() методот
      document.addEventListener("contextmenu", function (e) {
        e.preventDefault();

        alert("Неможе да се користи десниот клик на мојата страна!");
      });
    </script>
  </body>
</html>
```
