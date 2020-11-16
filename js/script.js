console.log("Up and running!");

let array = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

const getSleepHours = (day) => {
  let days = day.toLowerCase();
  let result = [];
  switch (days) {
    case "monday": {
      return parseInt(document.getElementById("monday").value);
      break;
    }

    case "tuesday": {
      return parseInt(document.getElementById("tuesday").value);
      break;
    }

    case "wednesday": {
      return parseInt(document.getElementById("wednesday").value);

      break;
    }

    case "thursday": {
      return parseInt(document.getElementById("thursday").value);
      break;
    }

    case "friday": {
      return parseInt(document.getElementById("friday").value);
      break;
    }

    case "saturday": {
      return parseInt(document.getElementById("saturday").value);
      break;
    }

    case "sunday": {
      return parseInt(document.getElementById("sunday").value);
      break;
    }
  }
};

const getActualSleepHours = () => {
  return (
    getSleepHours(array[0]) +
    getSleepHours(array[1]) +
    getSleepHours(array[2]) +
    getSleepHours(array[3]) +
    getSleepHours(array[4]) +
    getSleepHours(array[5]) +
    getSleepHours(array[6])
  );
};

const getIdealSleepHours = () => {
  let input = parseInt(document.getElementById("idealSleeping").value);

  return input * 7;
};

const calculateSleepDebt = () => {
  actualSleepHours = getActualSleepHours();
  idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    document.getElementById("finalResult").innerHTML =
      "You have got the perfect amount of sleep.";
  } else if (actualSleepHours > idealSleepHours) {
    document.getElementById(
      "finalResult"
    ).innerHTML = `You have got more sleep than needed: ${
      actualSleepHours - idealSleepHours
    } hour(s) more.`;
  } else if (idealSleepHours > actualSleepHours) {
    document.getElementById(
      "finalResult"
    ).innerHTML = `You should get some rest: ${
      idealSleepHours - actualSleepHours
    } hour(s) more.`;
  }
};

const display = () => {
  hide("sundayBox");
  show("confirmInputs");
  document.getElementById("header").innerHTML =
    "What is you ideal amount of sleep for a day";

  show("header");
};

const confirmDetails = () => {
  document.getElementById(
    "actualSleep"
  ).innerHTML = `${getActualSleepHours()} hour(s)`;
  document.getElementById(
    "idealSleep"
  ).innerHTML = `${getIdealSleepHours()} hour(s)`;
  document.getElementById("header").innerHTML = "Confirm these entered details";
  show("header");
};
// onclick functions:
let error = document.createElement("P");

const controlstructure = () => {
  let input1 = parseInt(document.getElementsByClassName("inputField").value);
  error.innerHTML = "";
  if (
    input1 > 24 ||
    input1 <= 0 ||
    input1 === "" ||
    typeof input1 !== "number" ||
    input1 === null
  ) {
    error.innerHTML =
      "You must enter a valid input. Unvalid inputs are: 0 or less, more than 24, no input at all or strings";

    document.getElementById("test").appendChild(error);
  } else {
    hide("Mondaybox");
    show("tuesdayBox");
  }
};
const hide = (element) => {
  document.getElementById(element).style.display = "none";
};

const show = (element) => {
  document.getElementById(element).style.display = "flex";
};

document.getElementById("ctaStart").onclick = function () {
  hide("startMainframe"), show("calcMF");
};

document.getElementById("confirmMonday").onclick = function () {
  controlstructure();
};

document.getElementById("confirmTuesday").onclick = function () {
  controlstructure(), hide("tuesdayBox"), show("wednesdayBox");
};

document.getElementById("confirmWednesday").onclick = function () {
  hide("wednesdayBox"), show("thursdayBox");
};

document.getElementById("confirmThursday").onclick = function () {
  hide("thursdayBox"), show("fridayBox");
};

document.getElementById("confirmFriday").onclick = function () {
  hide("fridayBox"), show("saturdayBox");
};

document.getElementById("confirmSaturday").onclick = function () {
  hide("saturdayBox"), show("sundayBox");
};

document.getElementById("confirmSunday").onclick = function () {
  display();
};

document.getElementById("confirmIdealSleep").onclick = function () {
  hide("confirmInputs"), show("showResult"), confirmDetails();
};

document.getElementById("finalConfirm").onclick = function () {
  hide("showResult"),
    show("finalContainer"),
    hide("header"),
    calculateSleepDebt();
};
