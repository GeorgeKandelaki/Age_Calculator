const dayInput = document.querySelector(".input-day");
const monthInput = document.querySelector(".input-month");
const yearInput = document.querySelector(".input-year");
const inputs = document.querySelectorAll("input");

const errorLabels = document.querySelectorAll("label");
const calcBtn = document.querySelector("img");

const year = new Date().getFullYear();

function daysInMonth(month, year) {
    // Zero means in Date Method The last Number of the
    // Month and getDate Method get the date.
    console.log(typeof month, typeof year, year, month);
    return new Date(year, month, 0).getDate();
}

let days;

function calculate() {
    const dayError = document.querySelector(".day-error");
    const monthError = document.querySelector(".month-error");
    const yearError = document.querySelector(".year-error");
    days = daysInMonth(Number(monthInput.value), Number(yearInput.value));
    console.log(days);

    if (
        dayInput.value === "" ||
        monthInput.value === "" ||
        yearInput.value === ""
    ) {
        dayError.textContent = "This Field is required.";
        monthError.textContent = "This Field is required.";
        yearError.textContent = "This Field is required.";

        inputs.forEach(function (input) {
            input.style.outline = "1px solid hsl(0, 100%, 67%)";
        });
        errorLabels.forEach(function (label) {
            label.style.color = "hsl(0, 100%, 67%)";
        });
    }

    if (dayInput.value > 31) {
        dayError.textContent = "Must be a valid day.";
        dayError.style.color = "hsl(0, 100%, 67%)";
        inputs.forEach(function (input) {
            input.style.outline = "1px solid hsl(0, 100%, 67%)";
        });
        errorLabels.forEach(function (label) {
            label.style.color = "hsl(0, 100%, 67%)";
        });
    }

    if (monthInput.value > 12 || monthInput.value < 1) {
        monthError.textContent = "Must be a valid month.";
        monthError.style.color = "hsl(0, 100%, 67%)";
        inputs.forEach(function (input) {
            input.style.outline = "1px solid hsl(0, 100%, 67%)";
        });
        errorLabels.forEach(function (label) {
            label.style.color = "hsl(0, 100%, 67%)";
        });
    }
    if (yearInput.value > year || yearInput.value < 0) {
        yearError.textContent = "Must be in the past.";
        yearError.style.color = "hsl(0, 100%, 67%)";
        inputs.forEach(function (input) {
            input.style.outline = "1px solid hsl(0, 100%, 67%)";
        });
        errorLabels.forEach(function (label) {
            label.style.color = "hsl(0, 100%, 67%)";
        });
    }
    if (
        dayInput.value < 31 &&
        monthInput.value < 13 &&
        yearInput.value < year &&
        dayInput.value > 1 &&
        monthInput.value > 1 &&
        yearInput.value > 1
    ) {
        inputs.forEach(function (input) {
            input.style.outline = "1px solid #eee";
        });
        errorLabels.forEach(function (label) {
            label.style.color = " hsl(0, 1%, 44%)";
        });
        yearError.textContent = "";
        monthError.textContent = "";
        dayError.textContent = "";

        document.querySelector(".year-text").textContent = `${
            year - yearInput.value - 1
        }`;

        document.querySelector(".month-text").textContent = `${
            12 - monthInput.value
        }`;

        document.querySelector(".day-text").textContent = `${
            days - dayInput.value + 10
        }`;
    }
}

calcBtn.addEventListener("click", calculate);
