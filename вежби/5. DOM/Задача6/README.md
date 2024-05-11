# Задача 6

Потребно е да се креира табела во која ќе се внесува име, емаил и телефонски број.
За овие податоци треба да се провери дали се сите внесени. 
Треба да се овозможи додавање на записи во HTML табелата.
Исто така треба да има функција која со клик на копче ќе може да брише редови. 
Потребно е да се ресетираат вредностите по внес.

  ![](img/image1.png)

# Решение:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Table Editor</title>
    <style>


        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f7f7f7;
            background-image: linear-gradient(to right, #667eea, #764ba2);
            color: #fff;
        }

        h1 {
            text-align: center;
            color: #fff;
            margin-bottom: 20px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
            background-color: rgba(255, 255, 255, 0.8);
        }

        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }

        th {
            background-color: #4a4a4a;
            color: #fff;
        }

        tr:nth-child(even) {
            background-color: #f2f2f2;
        }

        input[type="text"], input[type="email"], input[type="tel"] {
            width: calc(33.3% - 10px);
            padding: 8px;
            margin-right: 5px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 16px;
        }

        button {
            padding: 8px 15px;
            background-color: #4caf50;
            color: #fff;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
            transition: background-color 0.3s;
        }

        button:hover {
            background-color: #45a049;
        }

    </style>
</head>
<body>
<h1>Table Editor</h1>
<table id="dataTable">
    <thead>
    <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Action</th>
    </tr>
    </thead>
    <tbody>

    </tbody>
</table>
<br>
<div>
    <input type="text" id="nameInput" placeholder="Name">
    <input type="email" id="emailInput" placeholder="Email">
    <input type="tel" id="phoneInput" placeholder="Phone">
    <button onclick="addRow()">Add Row</button>
</div>

<script>

    function addRow() {
        var nameInput = document.getElementById("nameInput"); // земање на внесените информации
        var emailInput = document.getElementById("emailInput");
        var phoneInput = document.getElementById("phoneInput");

        var name = nameInput.value;
        var email = emailInput.value;
        var phone = phoneInput.value;

        if (name.trim() === "" || email.trim() === "" || phone.trim() === "") {
            alert("Please enter data for all columns!");// проверка дали се внесени сите информации
            return;
        }

        var tableBody = document.querySelector("#dataTable tbody");
        var newRow = document.createElement("tr"); // креирање нов ред
        newRow.innerHTML = `
    <td>${name}</td>
    <td>${email}</td>
    <td>${phone}</td>
    <td><button onclick="deleteRow(this)">Delete</button></td>`;
        tableBody.appendChild(newRow); // додавање на редот во табелата

        nameInput.value = "";// ресетирање на вредностите
        emailInput.value = "";
        phoneInput.value = "";
    }

    function deleteRow(button) { // функција за бришење на ред од табела
        var row = button.parentNode.parentNode; // земање на редот
        row.parentNode.removeChild(row); // бришење на редот
    }
</script>
</body>
</html>
```

