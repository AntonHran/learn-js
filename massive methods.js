// callback function

function greet(name) {
  console.log(`Ласкаво просимо ${name}.`);
}

// higher order function
function registerGuest(name, callback) {
  console.log(`Реєструємо гостя ${name}.`);
  callback(name);
}

registerGuest("Манго", greet);

// Передаємо інлайн функцію greet у якості колбека
registerGuest("Манго", function greet(name) {
  console.log(`Ласкаво просимо ${name}.`);
});

// Передаємо інлайн функцію notify у якості колбека
registerGuest("Полі", function notify(name) {
  console.log(`Шановний(а) ${name}, ваш номер буде готовий за 30 хвилин.`);
});

// several callbacks
function processCall(recipient, onAvailable, onNotAvailable) {
  // Імітуємо доступність абонента випадковим числом
  const isRecipientAvailable = Math.random() > 0.5;

  if (!isRecipientAvailable) {
    onNotAvailable(recipient);
    return;
  }

  onAvailable(recipient);
}

function takeCall(name) {
  console.log(`З'єднуємо з ${name}, очікуйте...`);
  // Логіка прийняття дзвінка
}

function activateAnsweringMachine(name) {
  console.log(`Абонент ${name} недоступний, залиште повідомлення.`);
  // Логіка активації автовідповідача
}

function leaveHoloMessage(name) {
  console.log(`Абонент ${name} недоступний, записуємо голограму.`);
  // Логіка запису голограми
}

processCall("Манго", takeCall, activateAnsweringMachine);
processCall("Полі", takeCall, leaveHoloMessage);
