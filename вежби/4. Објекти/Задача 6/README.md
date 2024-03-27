# Задача

Да се креира објект `Animal` кој содржи име, звук и метод `makeSound()` што ги печати истите. Да се креира објект `Cat` кој го наследува `Animal` и го препокрива методот.

# Решение

```html
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
  </head>
  <body>
    <script type="text/javascript">
      class Animal {
        constructor(name, sound) {
          this.name = name;
          this.sound = sound;
        }

        makeSound() {
          console.log(`${this.name}: ${this.sound}`);
        }
      }

      // ја наследува
      class Cat extends Animal {
        constructor(name, age) {
          super(name, "meow");
          this.age = age;
        }

        makeSound() {
          console.log(`${this.name}: ${this.sound} (age: ${this.age})`);
        }
      }

      // без користење на класи
      // function Animal(name, sound) {
      //     this.name = name;
      //     this.sound = sound;
      //
      //     this.makeSound = function() {
      //         console.log(`${this.name}: ${this.sound}`);
      // 	   }
      // }
      //
      // function Cat(name, age) {
      //     Animal.call(this, name, "meow");
      //     this.age = age;
      //
      //     this.makeSound = function() {
      //         console.log(`${this.name}: ${this.sound} (age: ${this.age})`);
      // 	   }
      // }

      new Animal("Poppy", "woof").makeSound();
      new Cat("Whiskers", 3).makeSound();
    </script>
  </body>
</html>
```
