const task = {id: 1, title: "learn next lesson", isDone: false}
const MOCK_TASKS = [
    { id: 1, title: 'Изучить паттерн MVC', isDone: false },
    { id: 2, title: 'Подготовить моковые данные', isDone: true },
]

// хранение данных, бизнес-логика
const model = {
    tasks: MOCK_TASKS
  }
 
// отображение данных: рендер списка задач, размещение обработчиков событий
const view = {
    tasks: MOCK_TASKS
}
 
// обработка действий пользователя, обновление модели
const controller = {}
 