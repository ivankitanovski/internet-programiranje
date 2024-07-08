function generate() {
  let newDiv = document.createElement("div");

  newDiv.setAttribute("class", "special");

  newDiv.style.backgroundColor =
    "rgb(" +
    getRandomColor() +
    "," +
    getRandomColor() +
    ", " +
    getRandomColor() +
    ")";

  console.log(newDiv);

  let shape = getRandomShape();

  let valid;
  switch (shape) {
    case 1:
      //Square
      valid = getRandomHeight();
      newDiv.style.height = valid + "px";
      newDiv.style.width = valid + "px";
      break;
    case 2:
      //Circle
      valid = getRandomHeight();
      newDiv.style.height = valid + "px";
      newDiv.style.width = valid + "px";
      newDiv.style.borderRadius = 3000 + "px";
      break;
    case 3:
      //Rectangle
      newDiv.style.height = getRandomHeight() + "px";
      newDiv.style.width = getRandomWidth() + "px";
      break;
    case 4:
      //Triangle
      valid = getRandomHeight().toFixed(0);
      newDiv.style.backgroundColor = "white";
      newDiv.style.width = "0px";
      newDiv.style.height = "0px";
      newDiv.style.borderRight =
        (valid / 2).toFixed(0) + "px solid transparent";
      newDiv.style.borderLeft = (valid / 2).toFixed(0) + "px solid transparent";
      newDiv.style.borderBottom =
        valid +
        "px solid rgb(" +
        getRandomColor() +
        "," +
        getRandomColor() +
        ", " +
        getRandomColor() +
        ")";
      break;
  }
  console.log(newDiv);

  newDiv.setAttribute("class", "special");

  let toAppend = document.getElementById("place_to_add");
  console.log(toAppend);
  toAppend.append(newDiv);
}

function getRandomWidth() {}

function getRandomHeight() {}

function getRandomShape() {}

function getRandomColor() {}
