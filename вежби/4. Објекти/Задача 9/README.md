# Задача

Да се напише JavaScript програма која од група објекти, ќе врати нов објект со атрибутите кои се покажуваат само еднаш меѓу тие објекти.

# Решение

```js
function difference(...objects) {
  let newObject = {};
  let duplicates = []; // за после додавање да се извадат тие што се појавиле повеќе од еднаш

  objects.forEach((object) => {
    for (const property in object) {
      if (property in newObject && !(property in duplicates))
        duplicates.push(property);
      else newObject[property] = object[property];
    }
  });

  duplicates.forEach((duplicate) => delete newObject[duplicate]);

  return newObject;
}

// Пример објекти
const object1 = {
  name: "Adam",
  age: 17,
};

const object2 = {
  ...object1,
  country: "Denmark",
  print: function () {
    console.log("Example print");
  },
};

const example = difference(object1, object2, { a: "3", test: 4112 });

console.log(example);
```
