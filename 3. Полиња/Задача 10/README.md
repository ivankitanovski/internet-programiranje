# Интернет програмирање

# Полиња

# Задача 10

Да се направи веб страница за креирање на корисници кои се зачувуваат во низа.
Страницата да содржи текстуални полиња за име, презиме, возраст, e-mail и копче за регистрација.
При клик на копчето корисникот се додава во низата на корисници.
Исто така да се направи и копче за приказ на корисниците. При клик на копчето
сите корисцниц се прикажуваат како картички кои ги содржат соодветните податоци.
Корисниците треба да бидат подредени по азбучен редослед според нивното име.

![IMAGE](images/screenshot_10.png)

![IMAGE](images/screenshot_11.png)

# Решение:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Задача 10</title>
    <style>
      *,
      h1,
      h2,
      h3,
      h4 {
        font-family: "Fira Code Medium", sans-serif;
      }

      #container {
        width: 300px;
        height: 220px;
        padding: 20px;
        border: 1px solid black;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      input {
        width: 100%;
      }

      #insert {
        color: green;
        font-weight: bold;
        font-size: 16px;
      }

      #show {
        scale: 1.5;
        margin: 20px 50px;
        color: dodgerblue;
        font-weight: bold;
      }

      .user-card {
        width: 330px;
        height: 230px;
        border: 1px solid black;
        border-radius: 5px;
        padding: 0 20px;
      }

      #result {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
      }
    </style>
  </head>
  <body>
    <div id="container">
      <span>Име: <input type="text" id="name" /></span>
      <span>Презиме: <input type="text" id="second-name" /></span>
      <span>Возраст: <input type="text" id="age" /></span>
      <span>E-mail: <input type="email" id="email" /></span>
      <button id="insert" onclick="registerUser()">Регистрирај корисник</button>
    </div>
    <button id="show" onclick="showUsers()">Прикажи кроисници</button>
    <div id="result"></div>

    <script type="text/javascript">
      let users = [];
      let counter = 1;

      function registerUser() {
        let name = document.getElementById("name");
        let secondName = document.getElementById("second-name");
        let age = document.getElementById("age");
        let email = document.getElementById("email");

        let uss = "user" + counter; //бројач кој го користиме за генерирање на userId
        counter++;

        users.push({
          //во низата "users" додаваме нов корисник како објект
          id: uss,
          name: name.value,
          secondName: secondName.value,
          age: age.value,
          email: email.value,
        });

        console.log(users);

        name.value = ""; //пребришување на текстуалните полиња
        secondName.value = "";
        age.value = "";
        email.value = "";
      }

      function showUsers() {
        users.sort((a, b) => a.name.localeCompare(b.name)); //сортирање на корисниците според азбучен редослед според името
        let res = document.getElementById("result");
        res.innerHTML = ""; //го бребришуваме претходниот приказ на корисниците
        users.forEach((user) => {
          //секој корисник го претставуваме како картичка
          let curr = document.createElement("div"); //картичката ја креираме како div
          curr.setAttribute("class", "user-card"); //додаваме класа "user-card" за да можеме да поставиме ист css на сите картички
          curr.innerHTML =
            `<h2>${user.id}</h2>` + //додавање на податоците за корисникот во картичката
            `<h4>Name: ${user.name}</h4>` +
            `<h4>Second name: ${user.secondName}</h4>` +
            `<h4>Age: ${user.age}</h4>` +
            `<h4>E-mail: ${user.email}</h4>`;
          res.appendChild(curr); //креираната картичка ја додаваме во резултантниот div
        });
      }
    </script>
  </body>
</html>
```
