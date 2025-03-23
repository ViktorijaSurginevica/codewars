//CRUD

// Проектируем данные

const data = {
  course: {
    // Данные нужны для отображения нашего курса
    title: "Основы Fron-end разработки",
    lessons: [
      { id: 1, title: "Введение в JavaScript", isDone: false },
      { id: 2, title: "Операторы, сравнение, ветвление", isDone: false },
      { id: 3, title: "Функции", isDone: true },
      { id: 4, title: "Массивы", isDone: false },
      { id: 5, title: "Объекты", isDone: false },
    ],
  },
  render() {
    console.log(this.course); // команда для вывода курса
  },
};

// методы, которые будут работать с нашими данными

deleteLesson(lessonId){

}
