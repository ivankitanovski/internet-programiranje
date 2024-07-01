<h1>Вежба 3:</h1>

**Модул за приказ на информации за студенти**

- **Тежина: 2/10**

**Преглед**: Една студентска установа бара ваша помош во развивањето на модул за нивната апликација. Модулот е дизајниран за приказ на информации за сите студенти и нивните соодветни студентски картички. Вежбата вклучува работа со две JSON датотеки: едната е листата на сите студенти, а другата содржи информации за студентските картички.

**students.json**: Вклучува низа од ID на студенти.

**cards.json**: JSON-от за картички е во формат:

{"studentId": [низа од JSON објекти за картичка за тој студент]}

Секој JSON објект за картичка одговара на специфичен вид на студентска картичка. Постојат следниве видови на студентски картички: Дебитна студентска картичка, Студентска картичка за кино, Студентска картичка за оброк, Студентска картичка за превоз и Специјална студентска картичка.

Типови на картички и нивните податоци:

- **Student Debit Card:**
  - Fields: Card Number, Card Holder Name, Date of Expiration, Balance
- **Student Movie Card:**
  - Fields: Card Number, Student Name, Student's University, Balance
- **Student Meal Card:**
  - Fields: Card Number, Student Name, Daily Limit, Balance
- **Student Travel Card:**
  - Fields: Card Number, Student Name, University, Trips Left
- **Special Student Card:**
  - Fields: Card Number, Student Name, University, Purpose (e.g., Student Card for the student organization BESTAA)

**Инструкции**:

1. Вчитајте ја листата на сите студенти
1. Прикажете ги сите студенти во "Students" табот на апликацијата
1. По кликнување на студент, студентот станува активен, по што се преземаат информациите за неговите студентски картички
1. Динамички прикажете го секој вид на студентска картичка со соодветните полиња во табот „Cards“.

**ЗАБЕЛЕШКА**: Даден ви е почетниот HTML и CSS

<a name="_hlk158398999"></a>**Fetch From:**

**cards.json** : https://raw.githubusercontent.com/Itonkdong/JSON/main/cards.json

**students.json**: https://raw.githubusercontent.com/Itonkdong/JSON/main/students.json

![image](Content/readme-images/Aspose.Words.2109666b-c0e0-49f9-8363-42a28763036d.001.png)

Слика 1. Успешно вчитани и прикажани сите студенти

![image](Content/readme-images/Aspose.Words.2109666b-c0e0-49f9-8363-42a28763036d.002.png)

Слика 2. При клик на студент, успешно прикажани информациите за сите негови картички
<hr>

<h1>Exercise 3:</h1>

**Student Service Module For Displaying Student Information**

- **Difficulty Level:** 2/10

**Overview:** A student service requires your assistance in developing a module for their app. The module is designed to display information about all students and their respective student cards. This exercise focuses on fetching data from multiple JSON files and utilizing the information to build a dynamic display. There are two JSON files involved: one for the list of all students and another for student cards.

- **Students JSON:** The students JSON includes an array of student IDs
- **Student Cards JSON:** The cards JSON is of the format:

{"studentId": [array of card JSONs for that student]} , // Additional entries for other students] 

Each card JSON corresponds to a specific type of student card, including Student Debit Card, Student Movie Card, Student Meal Card, Student Travel Card, and Specific Student Card.

- **Card Types and Fields:**
  - **Student Debit Card:**
    - Fields: Card Number, Card Holder Name, Date of Expiration, Balance
  - **Student Movie Card:**
    - Fields: Card Number, Student Name, Student's University, Balance
  - **Student Meal Card:**
    - Fields: Card Number, Student Name, Daily Limit, Balance
  - **Student Travel Card:**
    - Fields: Card Number, Student Name, University, Trips Left
  - **Special Student Card:**
    - Fields: Card Number, Student Name, University, Purpose (e.g., Student Card for the student organization BESTAA)
- **Features:**
  - Fetch the list of all students from the students JSON.
  - Display all students in the "Students" tab of the app.
  - Upon clicking on a student, fetch and display the information of their student cards from the cards JSON.
  - Dynamically display each type of student card with the respective fields, adhering to the provided HTML and CSS.

**Fetch From:**

**cards.json** : https://raw.githubusercontent.com/Itonkdong/JSON/main/cards.json

**students.json**: https://raw.githubusercontent.com/Itonkdong/JSON/main/students.json

