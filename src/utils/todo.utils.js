export const generateTodoId = () => {
  const timestamp = new Date().getTime();
  const randomNumber = Math.floor(Math.random() * 10000);

  const todoId = "TD-" + timestamp + randomNumber;
  return todoId;
};
