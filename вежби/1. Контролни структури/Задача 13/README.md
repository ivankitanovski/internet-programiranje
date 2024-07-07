# Задача 13

Да се напише програма во која преку prompt ќе се внесат тежината (во kg)
и висината (во m) на корисникот, потоа ќе се пресмета BMI индексот користејќи
ја следната формула: BMI = weight / (height * height) \
Преку alert да се прикаже резултатот според следните интервали на BMI: \
18.5 - 24.9 Normal weight \
25.0 - 29.9 Overweight \
повеќе од 30.0 Obese

~~~
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>BMI Calculator</title>
</head>
<body>
<script>
  let height = parseFloat(prompt("Внеси висина во m:")) //Парсирање на децимални броеви
  let weight = parseInt(prompt("Внеси тежина во kg:"))
  let bmi = weight / (height * height)
  bmi = parseFloat(bmi)
  if (bmi >= 18.5 && bmi <= 24.9) {
    alert(bmi + " - Normal weight")
  } else if (bmi >= 25.0 && bmi <= 29.9) {
    alert(bmi + " - Overweight")
  } else if (bmi >= 30.0) {
    alert(bmi + " - Obese")
  }
</script>
</body>
</html>
~~~