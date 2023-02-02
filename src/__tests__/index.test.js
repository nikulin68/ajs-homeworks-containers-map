import ErrorRepository from '../index';

test.each([
  [101, 'Переменная не объявлена'],
  [202, 'Некорректное имя'],
  [303, 'Ошибка доступа'],
  [404, 'Unknown error'],
])('Проверка ошибок', (code, description) => {
  expect(new ErrorRepository().translate(code)).toBe(description);
});
