// Проверка логина

// Напишите код, который будет спрашивать логин с помощью prompt.
// Если посетитель вводит «Админ», то prompt запрашивает пароль, 
// если ничего не введено или нажата клавиша Esc – показать «Отменено», 
// в противном случае отобразить «Я вас не знаю».

// Пароль проверять так:
// Если введён пароль «Я главный», то выводить «Здравствуйте!»,
// Иначе – «Неверный пароль»,
// При отмене – «Отменено».
// Блок-схема:

// Для решения используйте вложенные блоки if. Обращайте внимание на стиль и читаемость кода.
// Подсказка: передача пустого ввода в приглашение prompt возвращает пустую строку ''. Нажатие клавиши Esc во время запроса возвращает null.


const loginAdmin = 'Админ';
const passwordAdmin = 'Я главный';

let loginUser = prompt('Введите Ваш логин', '');

if (loginUser === loginAdmin) {
  let passwordUser = prompt('Введите Ваш пароль', '');

  if (passwordUser == passwordAdmin) {
    alert('Здравствуйте!');
  } else if (!passwordUser) {
    alert('Отменено');
  } else {
    alert('Неверный пароль');
  } 

} else if (!loginUser) {
  alert('Отменено');
} else {
  alert('Я вас не знаю');
}