# Задача

Да се напише програма со која ќе се отпечати максимумот од два броја чии вредности се читаат од тастатура.

![image](img/screen1.png)

![image](img/screen2.png)

![image](img/screen3.png)



# Решение
```html
<!DOCTYPE html>
<html>
<head>
</head>
<body>
<script type="text/javascript">
var a = prompt("Vnesete vrednost za 'a'");
var b = prompt("Vnesete vrednost za 'b'");
a = parseInt(a); // konvertira vo string vo broj
b = parseInt(b); // ima i parseFloat() za decimalni broevi
if (!isNaN(a) && !isNaN(b)) { // proveruva dali se broevi
	if(a>b) {
	   document.write("Vrednosta na maksimumot e " + a);
	}
	else {
	   document.write("Vrednosta na maksimumot e " + b);
	}
} else {
	document.write("Ne ste vnesile cel broj!")
}
</script>
</body>
</html>

```
