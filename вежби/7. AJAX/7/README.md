<h1>Вежба 7:</h1>

**Eдноставен прикажувач на производи и скeнeр нa баркодoви**

- **Тежина: 6/10** 

**Преглед:** Замислете сценарио каде курир за испорака треба да собере производи од различни продавници. Вашата задача е да напишете модул за апликација што ќе прикажува информации за производите, генерира баркодови и наоѓа најблиска продавница за секој производ. Генерирањето на баркод се базира врз конвертирањето на идентификациониот број на производот во бинарен облик и визуелно прикажување со црни и бели вертикални ленти.

**Барања:**

1. **Добивање на информации за производ и продавница:**
   1. Информациите за сите производи се зачувани во датотеката **scans.json**.
   1. Информациите за сите продавници се зачувани во датотеката **shops.json**.
1. **Информации за производ:**
   1. Прикажување на детали за секој производ, вклучувајќи име, идентификационен број, цена, количина и големина.
   1. Прикажувањето на производите е во обратен редослед, т.е. прв се прикажува последниот производ од низата со производи, па претпоследниот итн..
1. **Генерирање на баркод:**
   1. Конвертирање на идентификациониот број на производ во бинарен облик.
   1. Генерирање на баркод претстава каде што секој бинарен знак се прикажува како вертикална лента (7px широка).
   1. Користење на црна за '0' и бела за '1'. Висината на лентите не е специфицирана.
1. **Процес на скиенирање:**
   1. Симулирајте процесот на скенирање со позиционирање со покажувачот над баркодот.
   1. Процесот на скенирање трае 1.3 секунди.
   1. Ако покажувачот остане над баркодот во текот на целиот период, скенирањето е успешно. По успешно скенирање, во периодот додека се чека вчитувањето на следниот производ, се оневозможува скенирање на веќе успешно скенираниот баркод.
   1. Ефектот на скенирање се визуелизира со намалување на непроѕирноста (opacity) во текот на 1.3 секунди.
   1. Ако покажувачот излезе од областа на баркодот, скенирањето се откажува.
1. **Достапност во продавница:**
   1. Проверка на достапноста на предметот во различни продавници.
   1. Предметот е достапен ако продавницата го поседува и има количина поголема или еднаква на потребната количина.
   1. Ако повеќе продавници го имаат истиот производ, прикажете ги информациите за најблиската продавница според растојанието.
   1. **Забелешка: Проверката на достапноста во продавниците се извршува САМО по успешно скенирање.**
1. **Слики на предмети:**
   1. Секој производ има придружена слика во папката **images**.
   1. Името на сликата се конструира на следниот начин: 
      "{име на производ}- {последните 5 цифри од ид-то}.jpg".
   1. Пример: 
      Производ: Retro Red Dress, со ID: 123456789. 
      Името на сликата е: dress-56789.jpg
1. **Пораки:**
   1. По успешно скенирање, прикажете информации за најблиската продавница каде што предметот е достапен.
      1. Форматот на пораката треба да биде: "Име на продавница, Улица на продавница, Број на улица, Skopje".
   1. Ако предметот не е достапен во ниту една продавница, прикажете порака: "The item is NOT available anywhere
1. **Автоматско прикажување на следен производ:**
   1. По успешно скенирање и прикажување на информации за продавницата, почекајте 3 секунди.
   1. Автоматски преминете на следниот производ и повторете го процесот.
1. **Циклично изминување на производи**:
   1. Доколку сите производи од **scans.json** датотеката се процесираат, процесот започнува од почеток, т.е. циклична имплементација.

**Насоки за имплементација:**

- Во прилог ви е даден почетниот HTML и CSS. Потребно е да ја напишете само JavaScript имплементацијата.

**Примерен Сценарио:**

1. Добивање на информации за производи и продавници од **scans.json** и **shops.json**.
1. Прикажување на детали за Производ 1, генерирање и прикажување на баркод, и прикажување на слика на предметот.
1. Позиционирање над баркодот за симулирање на скиенирање (1.3 секунди).
1. Ако скенирањето е успешно, наоѓање на најблиската продавница со производот, прикажување на информации за продавницата.
   1. Пример: "Продавница ABC, Главна Улица, 123, Скопје."
1. После 3 секунди, автоматски преминување на следниот производ и повторување на процесот.

Имплементирајте ја апликацијата според вашето разбирање и стил, обезбедувајќи дека податоците се добиваат од JSON датотеките.

**Fetch From**:

**scans.json**: https://raw.githubusercontent.com/Itonkdong/JSON/main/scans.json

**shops.json**: https://raw.githubusercontent.com/Itonkdong/JSON/main/shops.json

Пример слики:

![image](Content/readme-images/Aspose.Words.47e89dcc-7359-43b0-b0db-d1921db7163a.001.png)

Слика 1. Успешно прикажани информации за производ и успешно изгенериран баркод.

![image](Content/readme-images/Aspose.Words.47e89dcc-7359-43b0-b0db-d1921db7163a.002.png)

Слика 2. Избледување на баркодот при негово скенирање.

![image](Content/readme-images/Aspose.Words.47e89dcc-7359-43b0-b0db-d1921db7163a.003.png)

Слика 3. Успешно скниран баркод и прикажување на информации за неговата достапност.

![image](Content/readme-images/Aspose.Words.47e89dcc-7359-43b0-b0db-d1921db7163a.004.png)

Слика 4. После 3 секунди, успешно вчитан следен производ.

<hr>

<h1>Exercise 7:</h1>

**Build a Simplified Barcode Scanner for Shipping Courier**

- **Difficulty Level: 6/10**

**Overview:** Imagine a scenario where a shipping courier needs to collect items from various shops. Your task is to build a module for an application that displays item information, generates item barcodes, and finds the closest shop for each item. The barcode generation is based on converting the item ID to binary and visually representing it with black and white vertical bars.

**Requirements:**

1. **Fetch Item and Shop Information:**
   1. Fetch item information from the **scans.json** file.
   1. Fetch shop information from the **shops.json** file.
1. **Item Information:**
   1. Display the details of each item, including item name, ID, price, amount, and size.
1. **Barcode Generation:**
   1. Convert the item ID to binary.
   1. Generate a barcode representation where each binary digit is displayed as a vertical bar (7px wide).
   1. Use black for '0' and white for '1'. The height of the bars is not specified.
1. **Scanning Process:**
   1. Simulate the scanning process by hovering over the barcode.
   1. The scanning process takes 1.3 seconds.
   1. If the mouse remains over the barcode for the entire duration, the scanning is successful.
   1. The scanning effect is visualized by decreasing opacity over the 1.3 seconds.
   1. If the mouse leaves the barcode area, the scanning is canceled.
1. **Shop Availability:**
   1. Check the availability of the item in various shops.
   1. An item is considered available if the shop has it and has an amount greater than or equal to the required amount.
   1. If multiple shops have the same item, display information from the closest shop based on distance.
   1. **Note: Shop availability check is performed after a successful scan.**
1. **Item Pictures:**
   1. Every item has an associated picture in the **images** folder.
   1. The picture name is constructed as follows: "itemName-last 5 digits of ID.jpg".
1. **Messages:**
   1. After a successful scan, display information about the closest shop where the item is available.
      1. The message format should be: "Shop Name, Shop Street Name, Street Number, Skopje".
   1. If an item is not available in any shop, show the message: "The item is NOT available anywhere."
1. **Automatic Item Display:**
   1. After a successful scan and displaying shop information, wait for 3 seconds.
   1. Automatically move to the next item and repeat the process.
1. **Cyclic iteration of products:**
- If all products from the scans.json file are processed, the process starts from the beginning, ie. cyclic implementation.

**Implementation Guidelines:**

The initial HTML and CSS are provided. You only need to write the JavaScript implementation.

**Example Scenario:**

1. Fetch item and shop information from **scans.json** and **shops.json**.
1. Display Item 1 details, generate and display the barcode, and show the item picture.
1. Hover over the barcode to simulate scanning (1.3 seconds).
1. If successful, find the closest shop with the item, display shop information, and wait for 3 seconds.
   1. Example: "ABC Store, Main Street, 123, Skopje."
1. Automatically move to the next item and repeat the process.

**Fetch From**:

**scans.json**: https://raw.githubusercontent.com/Itonkdong/JSON/main/scans.json

**shops.json**: https://raw.githubusercontent.com/Itonkdong/JSON/main/shops.json



