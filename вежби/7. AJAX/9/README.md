<h1>Вежба 9:</h1>

**Едноставна апликација за уредување на филмови** 

- **Тежина: 9/10**

**ЗАБЕЛЕШКА: ЗА ОВАА ЗАДАЧА ЗАДОЛЖИТЕЛЕН Е САМО ПРВИОТ ДЕЛ, ОСТАНАТИТЕ ДЕЛОВИ СЕ ОПЦИОНАЛНИ**

<h3>Дел I (Основна имплементација):</h3>

**Преглед**: Во овој почетен дел од вежбата, ќе ја поставите основата за едноставна апликација за уредување на филмови. Апликацијата е организирана во различни таб-ови, секој со специфична намена - од управување со папки и фајлови до функционалности за зачувување на проекти. Како дел од задачата, ќе добиете **root-folder.json** фајл, во кој има папки со „филмови“. Вашата задача вклучува рендерирање на папки во таб-от „Folders“, овозможувајќи на корисниците да кликанат на секоја папка и да ги разгледуваат соодветните филмови од таа папка прикажани во делот „Files“. Основната функционалност лежи во вчитувањето на избрани „активни“ фајлови на лента за едитирање (Т1 или Т2, изберете само еден), зачувување на проектот, креирање на нови проекти и можност за повторно вчитување на стари проекти.

**Инструкции**:

1. **HTML и CSS:**  
- Анализирајте ги дадените HTML и CSS фајлови за да ги разберете структурата и класите користени во апликацијата. Забележете дека дадениот HTML вклучува hard-code-ирана верзија на фајлови, папки, фајлови на лентата за едитирањеи и зачувани проекти. Ова служи како визуелна референца за тоа како треба да изгледа апликацијата откако динамичката имплементација ќе биде завршена. Запомнете да ги отстраните хард-кодираните делови откако успешно ќе ја имплементирате динамичката функционалност.
2. **Преглед на таб-овите:**  
- Апликацијата вклучува повеќе таб-ови, и тоа:  
  1. Folders
  1. Files
  1. Project Info
  1. Saved Projects
  1. Save Progress
  1. Preview
  1. Ленди за едитирање (T1 и T2)
  1. Buttons Section
3. **Вчитување од JSON:**  
- Вчитајте го root-folder.json фајлот, кој содржи низа на папки.  
- Секоја папка има име на папка, идентификатор на папка и низа на фајлови (филмови).
- Секој фајл има име на фајл, траење, previewURL и thumbnailURL.
4. **Прикажување на папки и фајлови:**  
- Прикажете ги сите папки од root папката во таб-от „Folders“.  
- Кликање на папка треба да ја направи активна, прикажувајќи ги нејзините фајлови (филмови) во „Files“.  
- Кликање на фајл треба да го направи активен.
5. **Ленти за едитирање**:  
- Изберете папка, па фајл за да го направите активен.  
- Кликнете на лентата за едитирање (изберете само една лента, Т1 или Т2 и работете само со неа) за да го вчитате фајлот на лентата.  
- Пресметајте го процентот на траење на фајлот спрема 15-минутната лента за едитирање и вметнете црвен div со ширина еднаква на пресметаниот процент. Пр. Ако фајлот има траење од 360 секунди (6 минути), тоа е 40 % од 15 минутната лента за едитирање, па треба да се вметни црвен div со ширина еднака на 40% 
- Името на фајлот треба да се наоѓа во средината од div-от
6. **Зачувување на проекти**:  
- Вметнете го името на проектот во таб-от „Project Info“.  
- Кликнете на копчето „Save Project“ во делот со копчиња.  
- Зачуваниот проект се прикажува во таб-от „Saved Projects“.  
- По зачувувањето, исчистетe ја лентата за едитирање.
7. **Вчитување на зачуван проект:**  
- Кликнете на зачуван проект во таб-от „Saved Projects“. 
- Проектот се вчитува, прикажувајќи ги фајловите користени на лентата за едитирање.  
- Постоечките фајлови на лентата за едитирање пред вчитувањето треба да бидат исчистени. 

**НАПОМЕНА**: Кога ќе вчитате зачуван проект и додадете нови фајлови на тој проект, проектот се деактивира (деселектира), што покажува дека овие промени не се зачувани во ниту еден проект. Ако сакате да ги зачувате овие модификации, треба да креирате нов проект со внесување на име на проект и кликање на копчето „Save Project“.

Примерен Сценарио: 

Замислете дека имате колекција на видеа од одмор категоризирани во папки. Сакате да креирате проект наречен "Летни Спомени". Започнете со избирање на папката "Family Vacation", изберете го фајлот "beach\_day.mp4" и вчитајте го на лентата за едитирање Т1. Продолжете со додавање на уште фајлови од различни папки за да креирате динамичен низа. Зачувајте го вашиот проект, а подоцна вчитајте го за да ги прегледате вашите омилени моменти.

**Fetch From**:

**root-folder.json**: https://raw.githubusercontent.com/Itonkdong/JSON/main/root-folder.json


<h3>Дел II (Подобрување на корисничкото искуство со подобрен UI):</h3>

**Преглед**: Во овој втор дел од вежбата, ќе го подобриме корисничкото искуство со имплементирање на дополнителни функции за подобрување на корисничкиот интерфејс на апликацијата за уредување на филмови. Секој фајл има две URL адреси: previewURL и thumbnailURL. ThumbnailURL ќе служи како позадина за секој фајл прикажан во таб-от "Files", слично на типичен thumbnail. Дополнително, кога фајлот ќе се вчита на лентата за едитирање, наместо div со црвена позадина, позадината сега ќе биде сликата од previewURL, повторена ако траењето на фајлот ја надминува ширината на сликата. Дополнително, уредувачкиот фајл на лентата за едитирање сега може да стане активен. Секој пат кога нов фајл се додава на лентата, тој уредувачки фајл станува активен (последниот додаден). Можете да го промените активниот уредувачки фајл со кликање на кој било друг уредувачки фајл. Кога е активен уредувачкиот фајл, неговата preview слика се прикажува во таб-от "Preview" од апликацијата. 

**Нови Функции:**

1. **Thumbnail слика:**  
- Користете ја thumbnailURL сликата како позадина за секој фајл прикажан во таб-от " Files".
2. **Preview слика:**  
- Наместо div со црвена позадина, користете ја previewURL сликата како позадина за уредувачки фајл на лентата за едитирање. Повторете ја сликата ако траењето на фајлот ja надмине ширината на сликата.
3. **Активен уредувачки фајл:**  
- Направете го последно додадениот фајл на лентата за едитирање активен уредувачки фајл.  
- Кликнете на кој било уредувачки фајл за да го направите активен.  
- Preview сликата на активниот уредувачки фајл се прикажува во таб-от "Preview".  
- При вчитување на зачуван проект, последниот уредувачки фајл на проектот станува активен.
4. **Бришење на уредувачки фајлови:**  
- Избришете уредувачки фајл со тоа што ќе го направите активен и кликнете на копчето "Delete Element" во таб-от "Buttons".  
- Кога уредувачкиот фајл се брише не треба да има активен уредувачки фајл. 
- Таб-от "Preview" треба ова да го одразува со неприкажување на никаква слика, се додека корисникот не кликне на некој уредувачки фајл, правејќи го акитвен. 

<h3>Дел III (Подобрување на можности):</h3>

**Преглед**: Во овој трет дел од вежбата, ќе ги дополниме можностите на апликацијата за уредување на филмови. Сега корисниците може да изберат помеѓу 15-минутна и 20-минутна трака со кликање на радио копчето во таб-от "Project Info". Дополнително, корисниците можат да ги персонализираат своите проекти со избор на боја на позадина. Оваа боја ќе биде применета како боја на позадина на зачуваниот проект "div" во таб-от "Saved Projects". Во овој дел, ќе го дефинираме и однесувањето кога нема да име повеќе простор на лентата за едитирање. Во тој случај, треба да се прикаже alert прозорче, информирајќи го корисникот дека вметнувањето на фајл во лентата за едитирање не е можно бидејќи ќе го надмине одреденото траење на проектот. 

**Нови Функции:**

1. **Изберете траење на лентанта:**  
- Кликнување на радио копчињата во таб-от "Project Info", им овозможува на корисниците да изберат помеѓу 15-минутнa и 20-минутнa лента за едитирање.
2. **Изберете боја за проектот:**  
- Имплементирајте ја опцијата за корисниците да изберат боја на позадина за своите проекти во таб-от "Project Info".
3. **Боја на позадина за зачуваниот проект:** 
- Применете ја избраната боја на позадина како боја на позадина на зачуваниот проект "div" во таб-от "Saved Projects".
4. **Alert за полна лента за едитирање:**
- Кога корисникот се обидува да вметнете фајл во лентата за едитирање при што го надминува одреденото траење на проектот, потребно е да се појави alert прозорец и да се спречи акцијата.

**НАПОМЕНА**: Ако корисникот се обиде да вчита проект на лента со помало траење од вкупното траење на проектот, треба да се прикаже alert прозорче и акцијата треба да биде блокирана. 

Исто така, ако корисникот во моментот уредува фајлови на лентата (на пример, со траење од 20 минути) и се обиде да се префрли на помала лента (на пример, 15 минути) каде што вкупното траење на проектот го надминува новото траење на лентата (15 минути), треба да се прикаже alert прозорче и акцијата треба да биде блокирана. 

<h3>Дел IV (Симулирање на реално однесување):</h3>

**Преглед**: Во овој последен, краток, но влијателен дел од вежбата, ќе симулираме период на чекање што е потребен пред зачувувањето на проектот, што симулира време за рендерирање. Времето за рендерирање се пресметува врз основа на вкупното времетрање во секунди на уредувачките фајлови на лентата за едитирање, поделено со 100. За време на овој период на чекање, прогресната лента во таб-от "Save Progress" (веќе вметната во HTML и CSS) треба да започне да се пополнува, како типичната прогресна лента. Проектот се зачувува само кога прогресната лента е наполнета целосно. Кога корисникот ќе се обиде да вчита проект додека има фајлови на лентата за едитирање, прозорец за потврда треба да го праша корисникот дали сака да го отфрли незачуваниот проект (уредувачките фајловите на лентата за едитирање). Ако корисникот кликне "OK", уредувачките фајлови се отфрлаат, и избраниот зачуван проект се вчитува на лентата за едитирање. Ако корисникот кликне "Cancel", процесот на вчитување се откажува и не се прават промени. Дополнително, сите проекти сега е потребно да се зачувуваат и во local storage.

**Нови Функции:**

1. **Симулирано време за рендерирање:**  
- Пресметајте го времето за рендерирање на основа на вкупното времетраење во секунди на уредувачките фајлови на лентата за едитирање, поделено со 100.  
- Имплементирајте прогресна лента во таб-от "Save Progress" која започнува да се пополнува за време на времето за рендерирање.  
- Проектот се зачувува само кога прогресната лента е наполнета целосно.
2. **Потврда за отфрлање на незачуваниот проект:**  
- Кога се обидувате да вчитате проект, а притоа имате незачувани фајлови на лентата за едитирање, потребно е да се појави потврден прозорец за корисникот.  
- Ако корисникот кликне "OK", незачуваниот проект се отфрла (избришете ги уредувачките фајлови) и вчитајте го избраниот зачуван проект на лентата за едитирање.  
- Ако корисникот кликне "Cancel", процесот на вчитување се откажува без да се направат какви било промени.
3. **Зачувување на проектите во local storage:** 
- Кога корисникот ќе кликне на копчето "Save Project", потребно е проектот да се зачувава и во local storage.  
- Сите зачувани проекти во local storage потребно е да се вчитаат кога апликацијата се иницијализира или освежува.
4. **Копче за бришење на сите проекти:**  
- Имплементирајте го копчето "Delete All Projects" кое ги отстранува сите проекти од апликацијата за уредување на филмови.  
- Оваа акција треба да ги избрише проектите од local storage и визуелно на UI-то.  Пред извршувањето на оваа акција, потребно е да се појави потврден прозорец за да се осигурате дека корисниците сакаат да ги избришат сите проекти.  

![image](Content/readme-images/Aspose.Words.5e43a303-466a-4b89-890b-c9af3f76f3b3.001.png)

Слика 1. Успешно вчитани фолдери и прикажани во таб-от “Folders”

![image](Content/readme-images/Aspose.Words.5e43a303-466a-4b89-890b-c9af3f76f3b3.002.png)

Слика 2. Успешно вчитани фајлови од фолдерот “Family Vаcation” и прикажани во таб-от “Files”. При клик на првиот фајл, тој станува активен.

![image](Content/readme-images/Aspose.Words.5e43a303-466a-4b89-890b-c9af3f76f3b3.003.png)

Слика 3. Вметнување на повеќе фајлови на лентата за едитирање Т1. Успешно прикажување на соодветната слика на активниот уредувачки фајл во таб-от “Preview”.

![image](Content/readme-images/Aspose.Words.5e43a303-466a-4b89-890b-c9af3f76f3b3.004.png)

Слика 4. Внесување име на проектот, избирање времетраење на лентата за едитирање и избирање боја на проектот

![image](Content/readme-images/Aspose.Words.5e43a303-466a-4b89-890b-c9af3f76f3b3.005.png)

Слика 5. При клик на копчето “Save Project”, лента за прогрес започнува да се исполнува

![image](Content/readme-images/Aspose.Words.5e43a303-466a-4b89-890b-c9af3f76f3b3.006.png)

Слика 6. Успешно зачуван проект

![image](Content/readme-images/Aspose.Words.5e43a303-466a-4b89-890b-c9af3f76f3b3.007.png)

Слика 7. Успешно вчитување на зачуван проект

<hr>

<h1>Exercise 9:</h1>

**Simplified Movie Editing App** 

- **Difficulty Rating: 9/10**

**NOTE: ONLY PART ONE IS MANDATORY FOR THIS EXERCISE, THE OTHER PARTS ARE OPTIONAL**

<h3>Part I (Basic Implementation):</h3>

**Overview**: In this initial stage of the exercise, you'll lay the foundation for a simplified movie editing app. The app is organized into distinct tabs, each serving a specific purpose - from managing folders and files to project-saving functionalities. As part of the task, you'll fetch and parse data from a **root-folder.json** file, housing folders with sets of movie files. Your mission involves rendering folders in the "Folders" tab, allowing users to click and explore the associated files in the "Files" tab. The core functionality lies in loading selected files onto the editing bar (T1 or T2, choose only one), where the user can select a folder and a file, click the editing bar, and calculate the file's duration percentage relative to the 15-minute editing bar. The result is a red-background div, symbolizing the file's position. Additionally, you'll implement project-saving capabilities, prompting users to insert a project name and click the "Save Project" button. The saved project will appear in the "Saved Projects" tab, and editing bars will clear. To complete this part, users should be able to load a saved project, ensuring existing files on the editing bar are cleared before loading.

**Instructions:**

1. **HTML and CSS:**
   1. Examine the provided HTML and CSS files to understand the structure and classes used in the app. Note that the provided HTML includes a hard-coded version of files, folders, files in the editing bar, and saved projects. This serves as a visual reference for how the app should look once dynamic implementation is complete. Remember to remove the hard-coded sections once you have successfully implemented the dynamic functionality.
1. **Tabs Overview:**
   1. Familiarize yourself with the app's tabs, which include:
      1. <a name="_hlk158221934"></a>Folders
      1. Files
      1. Project Info
      1. Saved Projects
      1. Save Progress
      1. Preview
      1. Editing Section (T1 and T2 editing bars)
      1. Buttons Section
1. **Fetch and Parse JSON:**
   1. Fetch and parse the **root-folder.json** file, which contains an array of folders.
   1. Each folder has a folder name, folder id, and an array of files (movies).
   1. Each file has a file name, duration, previewURL, and thumbnailURL.
1. **Render Folders and Files:**
   1. Render all folders from the root folder in the "Folders" tab.
   1. Clicking on a folder should make it active, displaying its files (movies) in the "Files" tab.
   1. Clicking on a file should make it active.
1. **Editing Bars:**
   1. Select a folder, then a file to make it active.
   1. Click on only one of the two editing bars (T1 or T2) to load the file onto the bar.
   1. Calculate the file's duration percentage relative to the 15-minute editing bar and insert a red-background div with width equal to the calculated percentage.
1. **Project Saving:**
   1. Insert a project name in the "Project Info" tab.
   1. Click the "Save Project" button in the "Buttons" tab.
   1. The saved project is displayed in the "Saved Projects" tab.
   1. After saving, clear the editing bars.
1. **Loading Saved Project:**
   1. Click on a saved project in the "Saved Projects" tab.
   1. The project loads, displaying the files used in the T1 editing bar.
   1. Existing files on the editing bar before loading should be cleared.

**NOTE**: When you load a saved project and add new files to that project, the project becomes deactivated (deselected), indicating that these changes are not saved in any project. If you wish to save these modifications, you need to create a new project by entering a project name and clicking the "Save Project" button.

Example Scenario:

Imagine you have a collection of vacation videos categorized into folders. You want to create a project named "Summer Memories." Start by selecting the "Family Vacation" folder, choose the "beach\_day.mp4" file, and load it onto the T1 editing bar. Continue adding more files from various folders to create a dynamic sequence. Save your project, and later, load it to revisit those cherished moments.

**Fetch From**:

**root-folder.json**: https://raw.githubusercontent.com/Itonkdong/JSON/main/root-folder.json

<h3>Part II (Enhancing User-Friendly UI):</h3>

**Overview:** In this second part of the exercise, you'll elevate the user experience by implementing additional features to enhance the user interface of the movie editing app. Each file now has two URLs: preview and thumbnail. The thumbnail will serve as the background for each file displayed in the "Files" section, resembling a typical video thumbnail. Additionally, when a file is loaded onto the editing bar, instead of a red background div, the background will now be an image of the **previewURL**, repeating if the file's duration exceeds the image width.

Furthermore, an editing file on the editing bar can now become active. Each time a new file is added to the bar, that editing file becomes active (the last one added). You can change the active editing file by clicking on any other editing file. When an editing file is active, its preview image is displayed in the "Preview" tab of the app.

**New Features:**

1. **Thumbnail as Background:**
   1. Use the thumbnail URL as the background for each file displayed in the "Files" section.
1. **Preview Image on Editing Bar:**
   1. Instead of a red background div, use the **previewURL** as the background for an editing file on the editing bar. Repeat the image if the file's duration exceeds the image width.
1. **Active Editing File:**
   1. Make the last added file on the editing bar the active editing file.
   1. Click on any editing file to make it active.
   1. The active editing file's preview image is shown in the "Preview" tab.
   1. When loading a saved project, the last editing file of the project becomes the active editing file.
1. **Deleting Editing Files:**
   1. Delete an editing file by making it active and clicking the "Delete Element" button in the "Buttons" tab.
   1. When an editing file is deleted by making it active and clicking the "Delete Element" button in the "Buttons" tab, there should not be an active editing file afterward. The "Preview" tab should reflect this by displaying no image until a new editing file becomes active.

**Example Scenario:** Now, when you load a file onto the editing bar, not only does its **previewURL** become the background, but you can also make it active to see its preview image in the "Preview" tab. Moreover, you have the flexibility to delete an editing file directly from the editing bar, streamlining the editing process.


<h3>Part III (Improving Capabilities):</h3>

**Overview:** In this third part of the exercise, you'll further enhance the capabilities of the movie editing app. Users can now choose between a 15-minute and a 20-minute track by clicking the radio button in the "Project Info" tab. Additionally, users can personalize their projects by choosing a background color. This color will be applied as the background color of the saved project "div" in the "Saved Projects" tab.

In this part, you'll also define the behavior when there is no more space on the editing bar. An alert pop-up should be displayed, informing the user that inserting the file into the editing bar is not possible because it will exceed the specified project duration.

**New Features:**

1. **Choose Track Duration:**
   1. Take in mind the radio buttons in the "Project Info" tab allowing users to choose between a 15-minute and a 20-minute track duration.
1. **Choose Project Color:**
   1. Implement the option for users to choose a background color for their projects in the "Project Info" tab.
1. **Background Color for Saved Project:**
   1. Apply the chosen background color as the background color of the saved project "div" in the "Saved Projects" tab.
1. **Alert for Full Editing Bar:**
   1. Implement an alert pop-up when attempting to insert a file into the editing bar if it would exceed the specified project duration.

**NOTE**: If the user attempts to load a project on a track with a shorter duration than the total duration of the project, a pop-up alert should be displayed, and the action should be blocked.

Similarly, if the user is currently editing files on a track (e.g., with a duration of 20 minutes) and tries to switch to a shorter track (e.g., 15 minutes) where the project's total duration exceeds the new track duration (15 minutes), an alert popup should be shown, and the action should be blocked.

**Example Scenario:** Now, users have the flexibility to choose the duration of their project and personalize it with a background color. When attempting to insert a file into the editing bar, they will be alerted if it would exceed the specified project duration, ensuring a seamless editing experience.

<h3>Part IV (Simulating Real Behavior):</h3>

**Overview:** In this short yet impactful part of the exercise, you will simulate a waiting period that is required before a project is saved, simulating a render time. The render time is calculated based on the total length in seconds of the editing files on the editing bar, divided by 100. During this waiting period, a progress bar in the "Save Progress" tab (already hard-coded in the HTML and CSS) should start filling up, resembling a typical progress bar. The project is saved only when the progress bar is fully filled.

When attempting to load a project while there are files on the editing bar, a prompt (or a similar popup window) will ask the user whether they want to discard the unsaved project (files on the editing bar). If the user clicks "OK," the editing files are discarded, and the chosen saved project is loaded onto the editing bar. If the user clicks "Cancel," the loading process is canceled, and no changes occur. Additionally,  the user's progress will be retained even after refreshing the page through local storage

**New Features:**

1. **Simulated Render Time:**
   1. Calculate the render time based on the total length in seconds of the editing files on the editing bar, divided by 100.
   1. Implement a progress bar in the "Save Progress" tab that starts filling up during the render time.
   1. Save the project only when the progress bar is fully filled.
1. **Confirm Discarding Unsaved Project:**
   1. When attempting to load a project with unsaved files on the editing bar, prompt the user with a confirmation window.
   1. If the user clicks "OK," discard the unsaved project (delete editing files) and load the chosen saved project onto the editing bar.
   1. If the user clicks "Cancel," cancel the loading process without making any changes.
1. **Local Storage for Saved Projects**:
   1. Save each project in local storage when the user clicks the "Save Project" button.
   1. Retrieve and load saved projects from local storage when the app is initialized or refreshed.
1. **Delete All Projects Button:**
   1. Implement the "Delete All Projects" button that removes all projects from the movie editing app.
   1. This action should clear projects from local storage, visually on the UI, and also update the JavaScript array holding the projects.
   1. Before performing this action, consider displaying a confirmation prompt to ensure users intend to delete all projects.
   1. **NOTE**: This feature is here for those moments when the difficulty of the task feels a bit overwhelming. A metaphorical "rage quit" button, because let's face it, movie editing app can be a challenging adventure!

**Example Scenario:** Now, users will experience a simulated render time before their project is saved, giving them a more realistic feel for the editing process. Additionally, when loading a project with unsaved files on the editing bar, they have the option to confirm or cancel the loading process. The local storage implementation ensures that saved projects persist even after refreshing the page, providing a seamless user experience.

