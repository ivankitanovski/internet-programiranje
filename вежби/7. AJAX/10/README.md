<h1>Вежба 10:</h1>

 **Модул за изработка на предмети**

**• Тежина: 10/10**

**ЗАБЕЛЕШКА: ЗА ОВАА ЗАДАЧА ЗАДОЛЖИТЕЛЕН Е САМО ПРВИОТ ДЕЛ, ОСТАНАТИТЕ ДЕЛОВИ СЕ ОПЦИОНАЛНИ**

<h3>Дел I:</h3>

**Преглед**: Во оваа вежба, ќе дизајнираатe и имплементираат модул за „изработка на предмети “(Item Crafting) за вашата нова игра. Изработувачката (crafting) табла се состои од 6 слотови подредени во 2x3 табела, со дополнителен слот за прашок (визуелно претставен со розова рамка). Резултантниот предмет се прикажува во слотот за резултат.

Постојат два типа предмети: материјали и прашаци. На почеток, на корисниците им се обезбедени основни материјали (дрво, метал, камен и вечен пламен) и прашаци (син и црвен). Овие предмети се прикажани во долниот лев агол од страницата. Изработените (crafted) предмети, т.е. нивните рецепти се зачувуваат во 10 слотови од дното на страницата именувани како слотови за “изработени предмети“.

**Како работи механизмот за изработка на предмети (item crafting):**


 - Корисниците добиваат JSON низа со “crafting” рецепти кои содржат детали за предметот кои се изработува.
 - Секој рецепт специфицира предмет кој треба да се изработи и неговиот рецепт, детално опишувајќи ги материјалите или прашаци потребни за секој слот.
 - И материјалите и прашаци можат да се постават во 6 “crafting” слотови, додека само прашаци може да се стават во слотот за прашак.
 - Секој предмет од рецептите се прикажува во еден од 10-те слотови за "изработени предмети". При десен клик на предметот се прикажува “blueprint“ на crafting таблата, прикажувајќи избледени слики од предметите потребни за негова изработка.
 - Изработка на даден предмет е можна само ако корисникот претходно кликне со десниот клик на предметот, отркивајќи го неговиот “избледен рецепт“ (blueprint) . Ако се стават точните предмети на точните места на таблата, резултирачкиот предмет се појавува во слотот за резултат.
 - Обидот за изработка на предмет без прикажување на неговиот blueprint не резултира со успешна изработка на предметот.

**Итеракции со таблата за изработика (crafting board):**

- За да се стават предмети на таблата, корисниците кликаат на предмет за да го направат активен, а потоа кликаат на саканиот слот на таблата.
- Доколку се кликни со десниот клик на предмет којшто е веќе на таблата, предметот се отстранува од тој слот.
- **РЕЦЕПТИТЕ ОД JSON НИЗА МОЖЕ ДА ВКЛУЧУВААТ ПРЕТХОДНО НАУЧЕНИ РЕЦЕПТИ, ПРАВЕЈЌИ ЈА ИМПЛЕМЕНТАЦИЈА НА МЕХАНИЗМОТ ЗА ИЗРАБОТКА ПОИНТЕРЕСНА И ПОСЛОЖЕНА**.

**Консумација на изработени предмети**:

- Кликање на слотот за резултат го активира. Следно кликање на еден од 10-те слотови за "изработени предмети", дури и ако е зафатен, го заменува предметот во тој слот со изработениот предмет.
- По консумирање на изработен предмет, таблата се чисти. Активниот слот по консумацијата станува слотот во којшто е поставен изработениот предмет.

**Претставување на предметите:**

- **pictureURL**-то на предметот се корисни за негово визуелно претставува на страницата.
- Името на предметот служи како уникатен идентификатор за секој предмет и <a name="_hlk157969156"></a>се прикажува како наслов кога се позиционираме со покажувачот над сликата од предметот.
- Типот на предметот одредува дали предметот може да се постави во слотот за прашак.

**Ефекти на слотот за прашак:**

- Ако рецептот вклучува син прашак, резултирачкиот предмет станува "Mythical". Нa митичките предмети им се додава "mythical" на нивното име, а при визуелното прикажување на нивната слика потребно е да се користи и СЅЅ класата “blue-filter“
- Ако рецептот вклучува цврен прашак, резултирачкиот предмет станува "Legendary". Нa легендарните предмети им се додава "legendary" на нивното име, а при визуелното прикажување на нивната слика потребно е да се користи и СЅЅ класата “red-filter“.

**Дополнителни забелешки:**

- Материјалите, прашаци и изработените предмети не се консумираат; корисникот има бесконечна залиха од секој предмет.
- Различните верзии (регуларна, митички, легендарни) на еден ист предметот се сметаат за различни. Пр. Доколку рецепт вклучува регуларна верзија од предмет, не може да се искористи неговата легендарна верзија за изработка на бараниот предмет.
- *Дадена ви е почетната HTML структура. Добро анализирајте ја и заклучете како визуелтно е претставен секој предмет. Почетниот HTML содржи во себе hard-coded предмети поставени во таблата и слотовите за “изработени предмети“. Користете го почетниот HTML или пак започнетe од  самиот почеток, сами дефинирајќи ја HTML структурата.*

**Пример сценарио:**

![image](Content/readme-images/Aspose.Words.f46e98da-bee0-4d38-acc8-ad9c2bfd8425.001.png)

**Објаснување:** 

- Секој рецепт за изработка вклучува "предмет" (item) и <a name="_hlk157969544"></a>рецепт-објект (recipe).
- Предметот (item) содржи информации за резултирачкиот предмет, како што се неговото име, тип и URL на сликата.
- Рецепт-објектот специфицира кои предмети на кои слотови е потребно да се става за успешна изработка на резултирачкиот предмет.
- Во дадениот пример, се вклучени два рецепти за изработка на предмети со имиња "Metal" и "Magical Metal".
- Обата предмети се од тип "материјал" (material), а нивните слики се претставени со истата слика (metal.png).
- Рецептите за изработка покажуваат дека обата предмети бараат "син прашок" во слотот за прашаци.
- Имињата на предметите се различни.
- Првиот предмет (“Metal“) се користи при изработката на вториот ("Magical Metal") бидејќи првиот предмет станува “Mythical Metal “ затоа што во неговиот рецепт има син прашок, иако името му е само “Metal“.

**НАПОМЕНА**: Во дадениот JSON, се користи camel case за имињата на предметите, за едноставно ракување со имињата.

**Fetch From**:

**crafting-recipes.json**: https://raw.githubusercontent.com/Itonkdong/JSON/main/crafting-recipes.json

<h3>Дел II:</h3>

**Модул за креирање рецепти** 

**Преглед**: Во модулот за креирање рецепти, корисниците можат да ја искористат својата креативноста за креирање на нови рецепти за предмети. Вклучувањето на "Crator Mode" им овозможува на корисниците да дизајнираат уникатни рецепти со стратегиско поставување на предмети во слотовите за изработка. Кога ќе бидат задоволни со изборот на предмети и слотовите во коишто тие се поставени, корисниците го внесуваат името на предметот и URL-то на сликата, и со клик на копчето "Create Item" го креираат предметот.

**Што треба да се имплементира:**

1. **Вклучувањето на "Crator Mode"**

   • Кога корисникот ќе кликне на копчето "Crator Mode", прекинување или вклучување на режимот  за креирање на нови рецепти. 

   • Ако режимот за креирање е вклучен, исчистете ја таблата од преостанатите предмети и поставете портокалова рамка на слотовите од таблата – сигнализирајќи дека режимот е вклучен.

   • Ако режимот за креирање е исклучен, отстранете ја портокаловата рамка и овозможете обична изработка на предмети.

1. **Креирање на нова рецепти:** 

   • Во режим на креатор, корисниците можат да изберат и стават предмети на таблата како и при обична изработка. Со оваа активност корисниците го дефинираат рецептот на новиот предмет.

   • По ставањето на предметите на таблата, корисникот треба да внесе име на предметот и URL на сликата од предметот.

   • Осигурајте се дека корисникот ги внел и името на предметот и сликата пред да им овозможите да го креираат предметот.

   • Кога корисникот ќе кликне на копчето "Create Item", нов предмет со специфицираното име и URL треба да се појави во првиот слободен слот за "Изработени Предмети".

   • Зачувајте го новиот рецепта во local storage за да обезбедите континуитет и при повторно вчитување на страницата. 

   • Спречете ги корисниците да го активираат “blueprint“-от на веќе постоечките предмети и да ги изработуваат кога се наоѓаат во режимот за креирање на нови рецепти.

1. **Вчитување на кориснички креирани рецепти:** 

   • Кога страницата се вчитува, земете ги рецептите и од JSON и корисничките креирани рецепти од local storage. 

   • Прикажете ги сите рецепти, вклучувајќи ги и оние создадени од корисникот, на страницата.

1. **Бришење на сите кориснички креирани рецепти:** 

   • При кликање на копчето “Clear All User Items”, избришете ги сите кориснички креирани рецепти зачувани во local storage 

   • Осигурајте дека оваа акција нема да влијае на преддефинираните рецепти за изработка од JSON-от.

1. **Прекинување на режим за креирање:** 

   • Обезбедете дека копчето "Creator Mode" работи како toggle копче, менувајќи ја состојбата од вклучено во исклучено, и обратно, при секој клик.

**Напомена**: Во модулот за креирање рецепти, е критично сите нови рецепти, односно предмети, да имаа различни и ункитани имиња. Иако новите предмети можат да споделуваат идентични рецепти со постоечките, тие мораат да имаат уникатни имиња. Ова е можено поради тоа што апликацијата користи механизам со “blueprint” изработка, обезбедувајќи дека само предметот со активен “blueprint” може да се изработи. 

**Пример сценарио** - *Предпоставете дека корисникот е во режим за креирање*:

- Корисникот стават дрво, метал и црвен прашак на таблата.
- Внесуваат "<a name="_hlk157973631"></a>Epic Axe" како име на предметот и даваат URL на неговата слика.
- Кликат "Crate Item". " Epic Axe " со специфицираната слика се појавува во првиот слободен слот од "Изработени Предмети".
- Новиот рецепт се зачувува во local storage.
- Повторното вчитување на страницата ги вчитува сите постоечки рецепти, вклучувајќи го и новиот рецепт за "Epic Axe" од local storage.

Напомена: Корисникот треба да го исклучи режимот на креирање за да изработува предмети на вообичаен начин.

![image](Content/readme-images/Aspose.Words.f46e98da-bee0-4d38-acc8-ad9c2bfd8425.002.png)

Слика 1. Почетен изглед на модулот

![image](Content/readme-images/Aspose.Words.f46e98da-bee0-4d38-acc8-ad9c2bfd8425.003.png)

Слика 2. Вчитување на почетните рецепти од дадениот JSON

![image](Content/readme-images/Aspose.Words.f46e98da-bee0-4d38-acc8-ad9c2bfd8425.004.png)

Слика 3. Активирање на предмет и негово поставување во еден од слотовите на таблата

![image](Content/readme-images/Aspose.Words.f46e98da-bee0-4d38-acc8-ad9c2bfd8425.005.png)

Слика 4. Активарање на blueprint – от на даден предмет

![image](Content/readme-images/Aspose.Words.f46e98da-bee0-4d38-acc8-ad9c2bfd8425.006.png)

Слика 5. Успешна изработка на предметот

![image](Content/readme-images/Aspose.Words.f46e98da-bee0-4d38-acc8-ad9c2bfd8425.007.png)

Слика 6. Активирање на успешно изработениот предмет

![image](Content/readme-images/Aspose.Words.f46e98da-bee0-4d38-acc8-ad9c2bfd8425.008.png)

Слика 7. Конзумирање на изработениот предмет и негово поставување во еден oд слотовите за “изработени предмети“

![image](Content/readme-images/Aspose.Words.f46e98da-bee0-4d38-acc8-ad9c2bfd8425.009.png)

Слика 8. Вклучување на режимот за креирање на рецепти

![image](Content/readme-images/Aspose.Words.f46e98da-bee0-4d38-acc8-ad9c2bfd8425.010.png)

Слика 9. Креирање на рецепт, доделување име на новиот предмет и поставување URL од сликата што ќе се користи за визуелно претставување на предметот.

![image](Content/readme-images/Aspose.Words.f46e98da-bee0-4d38-acc8-ad9c2bfd8425.011.png)

Слика 10. Успешно креирање на нов предмет

![image](Content/readme-images/Aspose.Words.f46e98da-bee0-4d38-acc8-ad9c2bfd8425.012.png)

Слика 11. При повторно вчитување на страницата, вчитување и на кориснички дефинираниот рецепт. При десен клик на него, активирање на неговиот blueprint.

<hr>

<h1>Exercise 10:</h1>

**Item Crafting App Module**

- **Difficulty Level: 10/10**

**NOTE: ONLY PART ONE IS MANDATORY FOR THIS EXERCISE, THE OTHER PARTS ARE OPTIONAL**

<h3>Part I:</h3>

**Overview:** In this exercise, students will design and implement an "Item Crafting" app module for a new survival mythic game. The crafting board consists of 6 slots arranged in a 2x3 grid, with an additional powder slot (visually represented with a pink dashed border). The resulting item is displayed in the result slot. Two types of items exist: materials and powders.

At the beginning, users are provided with basic materials (wood, metal, stone, and eternal flame) and powders (blue and red). These items are displayed in the bottom left corner of the crafting board. Crafted items are stored in 10 designated slots.

**Crafting Mechanism:**

- Both materials and powders can be placed in the 6 crafting slots, while only powders can go into the powder slot.
- Users receive a JSON array of crafting recipes containing item details and crafting requirements.
- Each crafting recipe specifies the item to be crafted and its recipe, detailing the materials or powders needed for each slot.
- The crafting process involves showing each item from the recipe in one of the 10 "crafted items" slots. Right-clicking a crafted item reveals a blueprint on the crafting board, displaying faded item pictures needed for crafting.
- Crafting is only possible after the user right-clicks a crafted item to reveal the blueprint. If the correct items in the correct positions are placed on the board, the resulting item appears in the result slot.
- Attempting to craft an item without displaying its blueprint results in no item being shown in the result slot, making the exercise manageable.

**Board Interaction:**

- To place items on the board, users click an item to make it active and then click the desired board slot.
- Right-clicking an item already on the board removes it.
- **RECIPES CAN INCLUDE PREVIOUSLY LEARNED RECIPES, CREATING A HIERARCHY OF CRAFTING POSSIBILITIES**.

**Consuming Crafted Items:**

- Clicking the resulting slot activates it. Subsequently clicking one of the 10 "crafted items" slots, even if occupied, replaces the item in that slot with the resulting item.
- After consuming a crafted item, the board is cleared. The active slot after consumption is not specified.

**Item Representation:**

- The pictureURL visually represents the item on the page.
- The itemName acts as a unique identifier for each item and is displayed as a title when hovering over the item picture.
- The item type determines whether the item can be placed in the powder slot.

**Powder Slot Effects:**

- If a recipe includes a powder, the resulting item becomes either "Mythical" or "Legendary."
- Blue powder results in a "Mythical" item, and red powder results in a "Legendary" item.
- Mythical items have "mythical" added to their names and display the "blue-filter" CSS class.
- Legendary items have "legendary" added to their names and display the "red-filter" CSS class.

**Additional Notes:**

- Materials, powders, and crafted items are not consumed; the user has an infinite supply.
- Different versions (regular, Mythical, Legendary) of the same item are considered distinct for crafting purposes.

Example Scenario:

![image](Content/readme-images/Aspose.Words.f46e98da-bee0-4d38-acc8-ad9c2bfd8425.013.png)

Explanation:

- Each crafting recipe includes an "item" and a "recipe" object.
- The "item" object contains information about the resulting item, such as its name, type, and picture URL.
- The "recipe" object specifies the crafting requirements for the resulting item.
- In the provided example, two crafting recipes are included for materials named "Metal" and "Magical Metal."
- Both materials are of the "material" type, and their pictures are represented by the same image (metal.png).
- The crafting recipes indicate that both materials require "BluePowder" in the powder slot for crafting.
- The item names are distinct, allowing for different crafting outcomes.
- The first item ('Metal') is used in the crafting of the second ('Mythical Metal') because the first item becomes 'Mythical Metal' due to having blue powder in its recipe, even though its name is only 'Metal'.

**NOTE**: In the provided JSON, a camel case is used for the item names, for simple name handling.

**Fetch From**:

**crafting-recipes.json**: https://raw.githubusercontent.com/Itonkdong/JSON/main/crafting-recipes.json

<h3>Part II:</h3>

**Recipe Creation Module**

**Overview:** In the Recipe Creation Module, users can unleash their creativity by creating new items recipes for the crafting board. Toggling "Creator Mode" allows users to design unique recipes by strategically placing items on the crafting slots. Once satisfied with the arrangement, users provide an item name and a picture URL, hitting the "Create Item" button to materialize their creation.

1. **Toggling Creator Mode:**
   1. When the user clicks the "Creator Mode" button, toggle the creator mode on or off.
   1. If the creator mode is on, clear the board of any remaining items and highlight the crafting slots with an orange border.
   1. If the creator mode is off, remove the orange border and allow regular crafting.
1. **Creating a New Recipe:**
   1. In creator mode, users can select and put items on the board as they would for crafting.
   1. After placing the items on the board, the user needs to input an item name and a picture URL.
   1. Ensure that the user has inserted both the item name and the item picture before allowing them to create the item.
   1. When the user clicks the "Create Item" button, a new item with the specified name and picture URL should appear in the "Crafted Items" slot.
   1. Store the new recipe in local storage for persistence across page refreshes.
   1. Prevent users from activating the blueprint of already existing items and crafting them in creator mode.
1. **Loading User-Created Recipes:**
   1. When the page loads, fetch both the recipes from the JSON and the user-created recipes from local storage.
   1. Display all the recipes, including the ones created by the user, on the page.
1. **Clearing All User-Created Items:**
   1. Provide a "Clear All User Items" button.
   1. Upon clicking this button, delete all user-created recipes stored in local storage.
   1. Ensure that this action does not affect the pre-defined crafting recipes from the JSON.
1. **Local Storage:**
   1. Implement a mechanism to store and retrieve user-created recipes in local storage.
   1. Use local storage to persist user-created recipes across page refreshes.
1. **Creator Mode Toggle:**
   1. Make sure that the "Creator Mode" button acts as a toggle, switching between on and off states with each click.

Note:  In the Recipe Creation Module, it's crucial to understand the distinction between item names and recipes. While new items can share identical recipes with existing ones, they must have unique names. This is because the app utilizes a blueprint crafting mechanism, ensuring that only the item with the active blueprint can be crafted. This restriction ensures clarity in blueprint crafting, where the app distinguishes between items based on their unique names. 

**Example Scenario**

Suppose the user is in creator mode:

- They place wood, metal, and red powder on the board.
- Input "EpicSword" as the item name and provide a picture URL.
- Click "Create Item."
- "EpicSword" with the specified picture appears in the "Crafted Items" slot.
- The new recipe is stored in local storage.
- Refreshing the page loads all existing recipes, including "EpicSword," from the JSON and local storage.

Note: The user needs to toggle off creator mode to craft items normally.

