<h1>Вежба 4:</h1>

**Телефонска апликација - Преглед на историјата на повици**

- **Тежина: 3/10**

**Преглед**: Во оваа вежба, ќе имплементирате модул за телефонска апликација која ја вчитува историјата на повици и успешно го мапира секој контакт (телефонскиот број) во името под кое е зачуван, според профилот кој е акитвен.

**Влезни JSONs**:

1. **JSON со историја на повици (call-history.json): JSON датотеката содржи низа на записи за историјата на повици структурирани на следниот начин:**

   ![image](Content/readme-images/Aspose.Words.fdd22241-2e9c-4ea6-bbb0-241ea773b4f9.001.png)

2. **JSON за профили (accounts.json): JSON датотеката содржи низа на записи за профили структурирани на следниот начин:**

   ![image](Content/readme-images/Aspose.Words.fdd22241-2e9c-4ea6-bbb0-241ea773b4f9.002.png)

**Инструкции**:

1. **Претставување на историјата на повици:**
- Прикажете ги сите повици од call-history.json во посебни блокови (во еден блок се групирани контактите во еден датум).
- Организирајте ги повиците по датум, со најновите на врвот.
- Во секој блок по датум, прикажете ги повиците сортирани по време, со најновите на врвот.
2. **Мапирање на контактите на имиња:**
- Во делот "Accounts" потребно е да се прикажат сите профили и нивните е-маил адреси. Еден профил визуелно се прикажува така што во средината од елементот (пр. div) е поставена првата буква од маилот, а при позиционирање на покажувачит над профилот, како наслот (title), се појаува целосната е-маил адреса.
- Кога ќе биде избран профил, тој станува активен и се прави мапирање на секој телефонски број од историјата на повици во неговото соодветно име базирано на зачуваните контакти во избраниот профил.
- Измапираната историја на повици се прикажува во делот за повици
- За секој повик треба да се прикаже измапираното име и времетраењето на разговорот во формат mm:ss (mm-минути, ss-секунди)

**Примерен сценарио:**

1. Вчитајте ги профилите од **accounts.json**.
2. Прикажете ги профилите во делот "Accounts".
3. Вчитајте ја историјата на повици од **call-history.json**.
4. Кога ќе биде избран профил, мапирајте ги телефонските броеви во соодветното имиња.
5. Прикажете ја мапираната историја на повици во делот за повици.

**ЗАБЕЛЕШКА**: Повиците во **call-history.json** веќе се сортирани според времето и датумот. Почетниот HTML и CSS ви е даден. Фокусирајте се на имплементирање на мапирачката логика и точното прикажување на информациите базирани на дадената структура.

**Fetch From**:

**call-history.json**: https://raw.githubusercontent.com/Itonkdong/JSON/main/call-history.json

**accounts.json**: https://raw.githubusercontent.com/Itonkdong/JSON/main/accounts.json

![image](Content/readme-images/Aspose.Words.fdd22241-2e9c-4ea6-bbb0-241ea773b4f9.003.png)

Слика 1. Успешно вчитани и прикажани профили

![image](Content/readme-images/Aspose.Words.fdd22241-2e9c-4ea6-bbb0-241ea773b4f9.004.png)

Слика 2. Успешно измапирани контактите според зачуваните записи во првиот профил и успешно прикажани во делот за повици

<hr>

<h1>Exercise 4:</h1>

**Phone App - Call History Mapping**

- **Difficulty Level:** **3/10**

**Overview:** In this exercise, students will implement a module for a phone app that loads call history and successfully maps each contact based on the associated account.

- **Input JSONs:**
  - **Call History JSON (call-history.json):** The JSON file contains an array of call history entries structured as follows:

![image](Content/readme-images/Aspose.Words.fdd22241-2e9c-4ea6-bbb0-241ea773b4f9.001.png)

- **Accounts JSON (accounts.json):** The JSON file contains an array of account entries structured as follows:

![image](Content/readme-images/Aspose.Words.fdd22241-2e9c-4ea6-bbb0-241ea773b4f9.002.png)


- **Tasks:**
1. **Rendering Call History:**
   - Display all calls from the **call-history.json** in separate blocks on the appropriate part of the app.
   - Organize the calls by date, with the most recent at the top.
   - Within each date block, display calls sorted by time, with the most recent at the top.
1. **Mapping Contacts to Names:**
   - Implement the "Accounts" tab to show all accounts and their email addresses.
   - A profile is visually displayed such that the first letter of the email is placed in the middle of the element (eg. div), and when the pointer is positioned over the profile, the full email address appears as the title.
   - When an account is selected, make it active and translate/map each phone number from the call history to its associated name based on the saved contacts in the selected account.
   - Display the mapped call history on appropriate part of the app.
   - For each call, the mapped name and duration of the conversation should be displayed in mm:ss format (mm-minutes, ss-seconds)
- **Example Scenario:**
  - Load call history from **call-history.json**.
  - Display calls on the "Call History" tab, organized by date and time.
  - Load accounts from **accounts.json**.
  - Display accounts on the "Accounts" tab.
  - When an account is selected, map phone numbers to contact names in the call history.
  - Display the mapped call history on the "Call History" tab.

**NOTE**: The calls in the call-history.json are already sorted by time and date. Students are expected to correctly parse and render the call history without the need for additional sorting. The starting HTML and CSS are provided. Focus on implementing the mapping logic and displaying the information accurately based on the provided structure.

**Fetch From**:

**call-history.json**: https://raw.githubusercontent.com/Itonkdong/JSON/main/call-history.json

**accounts.json**: https://raw.githubusercontent.com/Itonkdong/JSON/main/accounts.json
