# Задача

# Решение

```html
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
  </head>
  <body>
    <script type="text/javascript">
      function merge(object1, object2) {
        for (const property in object2) {
          object1[property] = object2[property];
        }

        return object1;
      }

      const object1 = {
        a: 1,
        b: 2,
        c: 3,
      };

      const object2 = {
        d: 4,
        e: 5,
        f: 6,
      };

      console.log(merge(object1, object2));
    </script>
  </body>
</html>
```
