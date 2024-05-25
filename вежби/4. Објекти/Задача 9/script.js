function difference(...objects) {
  let newObject = {};
  let duplicates = []; // за после додавање да се извадат тие што се појавиле повеќе од еднаш

  objects.forEach((object) => {
    for (const property in object) {
      if (property in newObject && !(property in duplicates))
        // за да не се повторуваат елементи во листата
        duplicates.push(property);
      else newObject[property] = object[property];
    }
  });

  duplicates.forEach((duplicate) => delete newObject[duplicate]); // ги брише сите дупликати во објектот

  return newObject;
}

// Пример објекти
const object1 = {
  name: "Adam",
  age: 17,
};

const object2 = {
  name: "Paul",
  country: "Denmark",
  print: function () {
    console.log("Example print");
  },
};

const example = difference(object1, object2);

console.log(example);
