const cowsay = require("cowsay");

const appName = "Городской квест";
const student = "Студент";

function showMessage(text) {
    console.log(
        cowsay.say({
            text: text
        })
    );
}

showMessage(`${appName} запущен!`);
showMessage(`Добро пожаловать, ${student}!`);

console.log(
    cowsay.think({
        text: `${appName} завершил работу.`
    })
);