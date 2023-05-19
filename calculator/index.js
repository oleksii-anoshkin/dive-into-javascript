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

// get states
function getResult() {
  return document.querySelector(`.${RESULT_CLASS}`);
}

function getHistory() {
  return document.querySelector(`.${HISTORY_CLASS}`);
}

function getHistoryArr() {
  return document.querySelector(`.${HISTORY_CLASS}`).innerHTML.split(" ");
}

// calculator functions
function addNumber(id) {
  const result = getResult();
  const history = getHistory();

  switch (true) {
    case result.innerHTML === "0":
      setNumber(history, result, getNumber(id));
      break;

    case result.innerHTML === getHistoryArr()[0]:
      setNumber(history, result, getNumber(id));
      break;

    case history.innerHTML.includes("sqr"):
      setNumber(history, result, getNumber(id), false, true);
      break;

    case history.innerHTML.includes("√"):
      setNumber(history, result, getNumber(id), false, true);
      break;

    case history.innerHTML.includes("1/"):
      setNumber(history, result, getNumber(id), false, true);
      break;

    case getHistoryArr().length === 2 &&
      getHistoryArr()[0] === result.innerHTML:
      setNumber(history, result, getNumber(id));
      break;

    default:
      setNumber(history, result, getNumber(id), true);
      break;
  }
}

function setNumber(history, result, number, add, clear) {
  add ? (result.innerHTML += number) : (result.innerHTML = number);
  clear ? (history.innerHTML = "") : (history.innerHTML = history.innerHTML);
}

function clear() {
  getResult().innerHTML = "0";
}

function deepClear() {
  getResult().innerHTML = "0";
  getHistory().innerHTML = "";
}

function deleteNumber() {
  const result = getResult();
  result.innerHTML = result.innerHTML.slice(0, result.innerHTML.length - 1);
}

function addPoint() {
  const result = getResult();
  if (!result.innerHTML.includes(".")) {
    result.innerHTML += ".";
  }
}

function modul() {
  const result = getResult();
  result.innerHTML = String(Number(result.innerHTML) * -1);
}

function percent() {
  const result = getResult();
  const newResult = String(Number(result.innerHTML) / 100);
  result.innerHTML = checkOutput(newResult);
  getHistory().innerHTML = newResult;
}

function oneDivideX() {
  const result = getResult();
  getHistory().innerHTML = `1/ ( ${result.innerHTML} )`;
  result.innerHTML = checkOutput(String(1 / Number(result.innerHTML)));
}

function sqr() {
  const result = getResult();
  getHistory().innerHTML = `sqr ( ${result.innerHTML} )`;
  result.innerHTML = checkOutput(String(Math.pow(Number(result.innerHTML), 2)));
}

function radical() {
  const result = getResult();
  const history = getHistory();

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
  const result = getResult();
  const history = getHistory();

  switch (true) {
    case history.innerHTML.length === 0:
      setHistory(history, result, getSing(id));
      break;

    case Boolean(Number(history.innerHTML)):
      setHistory(history, result, getSing(id));
      break;

    case history.innerHTML.includes("="):
      setHistory(history, result, getSing(id));
      break;

    case history.innerHTML.includes("sqr"):
      setHistory(history, result, getSing(id));
      break;

    case history.innerHTML.includes("√"):
      setHistory(history, result, getSing(id));
      break;

    case history.innerHTML.includes("1/"):
      setHistory(history, result, getSing(id));
      break;

    case history.innerHTML.includes("+"):
      calculate(history, result, getSing(id));
      break;

    case history.innerHTML.includes("-"):
      calculate(history, result, getSing(id));
      break;

    case history.innerHTML.includes("÷"):
      calculate(history, result, getSing(id));
      break;

    case history.innerHTML.includes("x"):
      calculate(history, result, getSing(id));
      break;

    default:
      break;
  }
}

function setHistory(history, result, operation) {
  history.innerHTML = `${result.innerHTML} ${operation}`;
}

function calculate(history, result, operation) {
  const secondOperand = result.innerHTML;
  const resultValue = calcFunc(
    getHistoryArr()[1],
    getHistoryArr()[0],
    result.innerHTML
  );

  operation
    ? (history.innerHTML = `${resultValue} ${operation}`)
    : (history.innerHTML = `${history.innerHTML} ${result.innerHTML} =`);

  result.innerHTML = checkOutput(resultValue);
  logger(getHistoryArr(), "", secondOperand, resultValue);
}

function equals() {
  const result = getResult();
  const history = getHistory();

  switch (true) {
    case history.innerHTML.length === 0:
      equalItself(history, result);
      break;

    case history.innerHTML.includes("="):
      equalItself(history, result);
      break;

    case history.innerHTML.includes("sqr"):
      equalItself(history, result);
      break;

    case history.innerHTML.includes("√"):
      equalItself(history, result);
      break;

    case history.innerHTML.includes("1/"):
      equalItself(history, result);
      break;

    case Boolean(Number(history.innerHTML)):
      equalItself(history, result);
      break;

    case history.innerHTML.includes("x"):
      calculate(history, result);
      break;

    case history.innerHTML.includes("+"):
      calculate(history, result);
      break;

    case history.innerHTML.includes("-"):
      calculate(history, result);
      break;

    case history.innerHTML.includes("÷"):
      calculate(history, result);
      break;

    default:
      break;
  }
}

function equalItself(history, result) {
  history.innerHTML = `${result.innerHTML} =`;
  logger([result.innerHTML], "", "", result.innerHTML);
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
function getNumber(id) {
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
  }
}

function getSing(id) {
  switch (id) {
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
    Operation: ${history[1] ? getOperation(history[1]) : "equals"}
    Result: ${result}
    `;
  console.log(msg);
}

function getOperation(key) {
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
