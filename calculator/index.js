"use strict";

// ----------------------------------------------------------------
// data
const CONTAINER_CLASS = "container";
const RESULT_CLASS = "numbers__bot-text";
const HISTORY_CLASS = "numbers__top-text";

const ID_KEYS = {
  changeThemeId: "theme",
  percent: "percent",
  clear: "clear",
  deepClear: "deep-clear",
  delete: "delete",
  sqr: "sqr",
  radical: "radical",
  divide: "divide",
  multiply: "multiply",
  subtract: "subtract",
  add: "add",
  modul: "modul",
  point: "point",
  equals: "equals",
  one: "one",
  two: "two",
  three: "three",
  four: "four",
  five: "five",
  six: "six",
  seven: "seven",
  eight: "eight",
  nine: "nine",
  zero: "zero",
  oneDivideX: "one-divide-x",
};

const CONTAINERS = [
  {
    contClass: `${CONTAINER_CLASS} text-center dark`,
    parentClass: "wrap",
  },
  {
    contClass: "row",
    parentClass: "container",
  },
  {
    contClass: "col",
    parentClass: "row",
  },
  {
    contClass: "col-md-auto",
    parentClass: "row",
  },
  {
    contClass: "col",
    parentClass: "row",
  },
  {
    contClass: "container-fluid",
    parentClass: "col-md-auto",
  },
  {
    contClass: "top__bar",
    parentClass: "container-fluid",
  },
  {
    contClass: "numbers__container",
    parentClass: "container-fluid",
  },
  {
    contClass: "buttons__container",
    parentClass: "container-fluid",
  },
  {
    contClass: "top__box",
    parentClass: "top__bar",
  },
  {
    contClass: "numbers__top",
    parentClass: "numbers__container",
  },
  {
    contClass: "numbers__bot",
    parentClass: "numbers__container",
  },
];

const ELEMENTS = [
  {
    elemTag: "span",
    elemClass: "material-symbols-outlined",
    parentClass: "top__box",
    elemText: "calculate",
  },
  {
    elemTag: "p",
    elemClass: "top__text",
    parentClass: "top__box",
    elemText: "Calculator",
  },
  {
    elemTag: "p",
    elemClass: "numbers__top-text",
    parentClass: "numbers__top",
    elemText: "",
  },
  {
    elemTag: "p",
    elemClass: "numbers__bot-text",
    parentClass: "numbers__bot",
    elemText: "0",
  },
];

const BTNS = [
  {
    btnId: ID_KEYS.changeThemeId,
    btnClass: "material-symbols-outlined",
    parentClass: "top__bar",
    btnText: "model_training",
  },
  {
    btnId: ID_KEYS.percent,
    btnClass: "btn-app funcs",
    parentClass: "buttons__container",
    btnText: "%",
  },
  {
    btnId: ID_KEYS.clear,
    btnClass: "btn-app funcs",
    parentClass: "buttons__container",
    btnText: "CE",
  },
  {
    btnId: ID_KEYS.deepClear,
    btnClass: "btn-app funcs",
    parentClass: "buttons__container",
    btnText: "C",
  },
  {
    btnId: ID_KEYS.delete,
    btnClass: "btn-app funcs",
    parentClass: "buttons__container",
    btnText: "Del",
  },
  {
    btnId: ID_KEYS.oneDivideX,
    btnClass: "btn-app funcs",
    parentClass: "buttons__container",
    btnText: `<sup id=${ID_KEYS.oneDivideX}>1</sup>/<sub id=${ID_KEYS.oneDivideX}>x</sub>`,
  },
  {
    btnId: ID_KEYS.sqr,
    btnClass: "btn-app funcs",
    parentClass: "buttons__container",
    btnText: `x<sup id=${ID_KEYS.sqr}>2</sup>`,
  },
  {
    btnId: ID_KEYS.radical,
    btnClass: "btn-app funcs",
    parentClass: "buttons__container",
    btnText: `<sup id=${ID_KEYS.radical}>2</sup>&#8730;x`,
  },
  {
    btnId: ID_KEYS.divide,
    btnClass: "btn-app funcs",
    parentClass: "buttons__container",
    btnText: "&#247;",
  },
  {
    btnId: ID_KEYS.seven,
    btnClass: "btn-app number",
    parentClass: "buttons__container",
    btnText: "7",
  },
  {
    btnId: ID_KEYS.eight,
    btnClass: "btn-app number",
    parentClass: "buttons__container",
    btnText: "8",
  },
  {
    btnId: ID_KEYS.nine,
    btnClass: "btn-app number",
    parentClass: "buttons__container",
    btnText: "9",
  },
  {
    btnId: ID_KEYS.multiply,
    btnClass: "btn-app funcs",
    parentClass: "buttons__container",
    btnText: "x",
  },
  {
    btnId: ID_KEYS.four,
    btnClass: "btn-app number",
    parentClass: "buttons__container",
    btnText: "4",
  },
  {
    btnId: ID_KEYS.five,
    btnClass: "btn-app number",
    parentClass: "buttons__container",
    btnText: "5",
  },
  {
    btnId: ID_KEYS.six,
    btnClass: "btn-app number",
    parentClass: "buttons__container",
    btnText: "6",
  },
  {
    btnId: ID_KEYS.subtract,
    btnClass: "btn-app funcs",
    parentClass: "buttons__container",
    btnText: "-",
  },
  {
    btnId: ID_KEYS.one,
    btnClass: "btn-app number",
    parentClass: "buttons__container",
    btnText: "1",
  },
  {
    btnId: ID_KEYS.two,
    btnClass: "btn-app number",
    parentClass: "buttons__container",
    btnText: "2",
  },
  {
    btnId: ID_KEYS.three,
    btnClass: "btn-app number",
    parentClass: "buttons__container",
    btnText: "3",
  },
  {
    btnId: ID_KEYS.add,
    btnClass: "btn-app funcs",
    parentClass: "buttons__container",
    btnText: "+",
  },
  {
    btnId: ID_KEYS.modul,
    btnClass: "btn-app number",
    parentClass: "buttons__container",
    btnText: `<sup id=${ID_KEYS.modul}>+</sup>/<sub id=${ID_KEYS.modul}>-</sub>`,
  },
  {
    btnId: ID_KEYS.zero,
    btnClass: "btn-app number",
    parentClass: "buttons__container",
    btnText: "0",
  },
  {
    btnId: ID_KEYS.point,
    btnClass: "btn-app number",
    parentClass: "buttons__container",
    btnText: ".",
  },
  {
    btnId: ID_KEYS.equals,
    btnClass: "btn-app equals",
    parentClass: "buttons__container",
    btnText: "=",
  },
];

// ----------------------------------------------------------------
// Calculator draw
(function drawPage() {
  CONTAINERS.forEach((container) =>
    createContainer(container.contClass, container.parentClass)
  );
  ELEMENTS.forEach((elem) =>
    createElement(elem.elemTag, elem.elemClass, elem.parentClass, elem.elemText)
  );
  BTNS.forEach((btn) =>
    createBtn(btn.btnId, btn.btnClass, btn.parentClass, btn.btnText)
  );
})();

// ----------------------------------------------------------------
// functions
// Create HTML elements
function createElement(elemTag, elemClass, parentClass, elemText) {
  const elem = document.createElement(elemTag);
  elem.setAttribute("class", elemClass);
  elem.insertAdjacentHTML("afterbegin", elemText);
  document.querySelector(`.${parentClass}`).append(elem);
}

function createContainer(contClass, parentClass) {
  const cont = document.createElement("div");
  cont.setAttribute("class", contClass);
  document.querySelector(`.${parentClass}`).append(cont);
}

function createBtn(btnId, btnClass, parentClass, btnText) {
  const btn = document.createElement("button");
  btn.setAttribute("id", btnId);
  btn.setAttribute("class", btnClass);
  btn.insertAdjacentHTML("afterbegin", btnText);
  document.querySelector(`.${parentClass}`).append(btn);
}

// Change theme color
function changeTheme() {
  const wrap = document.querySelector(`.${CONTAINER_CLASS}`);
  const classes = wrap.className
    .split(" ")
    .map((className) =>
      className === "dark" || className === "light"
        ? setTheme(className)
        : className
    );
  wrap.removeAttribute("class");
  wrap.setAttribute("class", classes.join(" "));
}

function setTheme(color) {
  return color === "dark" ? "light" : "dark";
}

// calculator functions
function addNumber(id) {
  const result = document.querySelector(`.${RESULT_CLASS}`);
  const history = document.querySelector(`.${HISTORY_CLASS}`);
  const historyArr = history.innerHTML.split(" ");
  const number = String(history.innerHTML.match(/[-+]?[0-9]*\.?[0-9]+/));

  switch (true) {
    case result.innerHTML === "0" || result.innerHTML === number:
      result.innerHTML = setString(id);
      break;

    case history.innerHTML.includes("sqr") ||
      history.innerHTML.includes("√") ||
      history.innerHTML.includes("1/"):
      result.innerHTML = setString(id);
      history.innerHTML = "";
      break;

    case historyArr.length === 2 && historyArr[0] === result.innerHTML:
      result.innerHTML = setString(id);
      break;

    default:
      result.innerHTML += setString(id);
      break;
  }
}

function clear() {
  document.querySelector(`.${RESULT_CLASS}`).innerHTML = "0";
}

function deepClear() {
  document.querySelector(`.${RESULT_CLASS}`).innerHTML = "0";
  document.querySelector(`.${HISTORY_CLASS}`).innerHTML = "";
}

function deleteNumber() {
  const result = document.querySelector(`.${RESULT_CLASS}`);
  result.innerHTML = result.innerHTML.slice(0, result.innerHTML.length - 1);
}

function addPoint() {
  const result = document.querySelector(`.${RESULT_CLASS}`);
  if (!result.innerHTML.includes(".")) {
    result.innerHTML += ".";
  }
}

function modul() {
  const result = document.querySelector(`.${RESULT_CLASS}`);
  result.innerHTML = String(Number(result.innerHTML) * -1);
}

function percent() {
  const result = document.querySelector(`.${RESULT_CLASS}`);
  const newResult = String(Number(result.innerHTML) / 100);
  result.innerHTML = checkOutput(newResult);
  document.querySelector(`.${HISTORY_CLASS}`).innerHTML = newResult;
}

function oneDivideX() {
  const result = document.querySelector(`.${RESULT_CLASS}`);
  document.querySelector(
    `.${HISTORY_CLASS}`
  ).innerHTML = `1/ ( ${result.innerHTML} )`;
  result.innerHTML = checkOutput(String(1 / Number(result.innerHTML)));
}

function sqr() {
  const result = document.querySelector(`.${RESULT_CLASS}`);
  document.querySelector(
    `.${HISTORY_CLASS}`
  ).innerHTML = `sqr ( ${result.innerHTML} )`;
  result.innerHTML = checkOutput(String(Math.pow(Number(result.innerHTML), 2)));
}

function radical() {
  const result = document.querySelector(`.${RESULT_CLASS}`);
  const history = document.querySelector(`.${HISTORY_CLASS}`);

  if (Number(result.innerHTML) > 0) {
    history.innerHTML = `√ ( ${result.innerHTML} )`;
    result.innerHTML = checkOutput(
      String(Math.sqrt(Number(result.innerHTML), 2))
    );
  } else {
    result.innerHTML = "0";
    history.innerHTML = "";
  }
}

function arithmeticFunc(id) {
  const result = document.querySelector(`.${RESULT_CLASS}`);
  const history = document.querySelector(`.${HISTORY_CLASS}`);
  const historyArr = history.innerHTML.split(" ");
  let resultValue;

  switch (true) {
    case history.innerHTML.length === 0 ||
      history.innerHTML.includes("=") ||
      history.innerHTML.includes("sqr") ||
      history.innerHTML.includes("√") ||
      history.innerHTML.includes("1/") ||
      Boolean(Number(history.innerHTML)):
      history.innerHTML = `${result.innerHTML} ${setString(id)}`;
      break;

    case history.innerHTML.includes("+") ||
      history.innerHTML.includes("-") ||
      history.innerHTML.includes("÷") ||
      history.innerHTML.includes("x"):
      const secOperand = result.innerHTML;
      resultValue = calcFunc(historyArr[1], historyArr[0], result.innerHTML);
      history.innerHTML = `${resultValue} ${setString(id)}`;
      result.innerHTML = checkOutput(resultValue);
      logger(historyArr, "", secOperand, resultValue);
      break;

    default:
      break;
  }
}

function equals() {
  const result = document.querySelector(`.${RESULT_CLASS}`);
  const history = document.querySelector(`.${HISTORY_CLASS}`);
  const historyArr = history.innerHTML.split(" ");
  let resultValue;
  let secOperand;

  switch (true) {
    case history.innerHTML.length === 0 || history.innerHTML.includes("="):
      history.innerHTML = `${result.innerHTML} =`;
      logger([result.innerHTML], "", "", result.innerHTML);
      break;

    case history.innerHTML.includes("+") ||
      history.innerHTML.includes("-") ||
      history.innerHTML.includes("÷") ||
      history.innerHTML.includes("x"):
      secOperand = result.innerHTML;
      resultValue = calcFunc(historyArr[1], historyArr[0], result.innerHTML);
      history.innerHTML = `${historyArr.join(" ")} ${result.innerHTML} = `;
      result.innerHTML = checkOutput(resultValue);
      logger(historyArr, "", secOperand, resultValue);
      break;

    case history.innerHTML.includes("sqr") ||
      history.innerHTML.includes("√") ||
      history.innerHTML.includes("1/") ||
      Boolean(Number(history.innerHTML)):
      history.innerHTML = `${result.innerHTML} =`;
      logger([result.innerHTML], "", "", result.innerHTML);
      break;

    default:
      break;
  }
}

function calcFunc(key, firstNumb, secondNumb) {
  switch (key) {
    case "+":
      return String(Number(firstNumb) + Number(secondNumb));

    case "-":
      return String(Number(firstNumb) - Number(secondNumb));

    case "x":
      return String(Number(firstNumb) * Number(secondNumb));

    case "÷":
      return String(Number(firstNumb) / Number(secondNumb));

    default:
      break;
  }
}

// helper function
function setString(id) {
  switch (id) {
    case ID_KEYS.nine:
      return "9";

    case ID_KEYS.eight:
      return "8";

    case ID_KEYS.seven:
      return "7";

    case ID_KEYS.six:
      return "6";

    case ID_KEYS.five:
      return "5";

    case ID_KEYS.four:
      return "4";

    case ID_KEYS.three:
      return "3";

    case ID_KEYS.two:
      return "2";

    case ID_KEYS.one:
      return "1";

    case ID_KEYS.zero:
      return "0";

    case ID_KEYS.add:
      return "+";

    case ID_KEYS.subtract:
      return "-";

    case ID_KEYS.multiply:
      return "x";

    case ID_KEYS.divide:
      return "÷";
  }
}

function checkOutput(result) {
  return result.length > 11 ? String(Number(result).toExponential(6)) : result;
}

// logger
function logger(history, firstOperand, secOperand, result) {
  const msg = `
    First operand: ${history[0] ? history[0] : firstOperand}
    Second operand: ${secOperand ? secOperand : ""}
    Operation: ${history[1] ? setOperation(history[1]) : "equals"}
    Result: ${result}
    `;
  console.log(msg);
}

function setOperation(key) {
  switch (key) {
    case "+":
      return "add, '+'";

    case "-":
      return "subtract, '-'";

    case "÷":
      return "divide, '÷'";

    case "x":
      return "multiply, 'x'";

    default:
      break;
  }
}

// ----------------------------------------------------------------
// listeners
document.addEventListener("click", function (e) {
  switch (e.target.id) {
    case ID_KEYS.changeThemeId:
      changeTheme();
      break;

    case ID_KEYS.nine:
      addNumber(e.target.id);
      break;

    case ID_KEYS.eight:
      addNumber(e.target.id);
      break;

    case ID_KEYS.seven:
      addNumber(e.target.id);
      break;

    case ID_KEYS.six:
      addNumber(e.target.id);
      break;

    case ID_KEYS.five:
      addNumber(e.target.id);
      break;

    case ID_KEYS.four:
      addNumber(e.target.id);
      break;

    case ID_KEYS.three:
      addNumber(e.target.id);
      break;

    case ID_KEYS.two:
      addNumber(e.target.id);
      break;

    case ID_KEYS.one:
      addNumber(e.target.id);
      break;

    case ID_KEYS.zero:
      addNumber(e.target.id);
      break;

    case ID_KEYS.clear:
      clear();
      break;

    case ID_KEYS.deepClear:
      deepClear();
      break;

    case ID_KEYS.delete:
      deleteNumber();
      break;

    case ID_KEYS.point:
      addPoint();
      break;

    case ID_KEYS.modul:
      modul();
      break;

    case ID_KEYS.percent:
      percent();
      break;

    case ID_KEYS.oneDivideX:
      oneDivideX();
      break;

    case ID_KEYS.sqr:
      sqr();
      break;

    case ID_KEYS.radical:
      radical();
      break;

    case ID_KEYS.add:
      arithmeticFunc(e.target.id);
      break;

    case ID_KEYS.multiply:
      arithmeticFunc(e.target.id);
      break;

    case ID_KEYS.divide:
      arithmeticFunc(e.target.id);
      break;

    case ID_KEYS.subtract:
      arithmeticFunc(e.target.id);
      break;

    case ID_KEYS.equals:
      equals();
      break;

    default:
      break;
  }
});

// ----------------------------------------------------------------
