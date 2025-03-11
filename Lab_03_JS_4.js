function showAlert() {
    window.alert("Вас вітає JavaScript! Це повідомлення через alert.");
}

function writeToPage() {
    document.write("<h2>Цей текст виведено через document.write()</h2>");
}

function logToConsole() {
    console.log("Це повідомлення з'явилось у консолі браузера через console.log()");
}

function updateInnerHTML() {
    document.getElementById("output").innerHTML = "<strong>Цей текст додано через innerHTML</strong>";
}

document.getElementById("text").innerHTML = "<strong>Цей текст змінено через innerHTML</strong>";