//CRUD

// Проектируем данные

const data = {
  course: {
    // Данные нужны для отображения нашего курса
    title: "Основы Fron-end разработки",
    lessons: [
      { id: crypto.randomUUID(), title: "Введение в JavaScript", isDone: true },
      {
        id: crypto.randomUUID(),
        title: "Операторы, сравнение, ветвление",
        isDone: false,
      },
      { id: crypto.randomUUID(), title: "Функции", isDone: false },
      { id: crypto.randomUUID(), title: "Массивы", isDone: false },
      { id: crypto.randomUUID(), title: "Объекты", isDone: false },
    ],
  },
  render() {
    console.log(this.course); // команда для вывода курса
  },

  // методы, которые будут работать с нашими данными

  deleteLesson(lessonId) {
    this.course.lessons = this.course.lessons.filter((l) => l.id !== lessonId); // в новый массив мы будем брать l.id который не равен lessonId
    this.render();
  },

  addLesson(lessonTitle) {
    const newLesson = {
      id: crypto.randomUUID(),
      title: lessonTitle,
      isDone: false,
    };
    this.course.lessons.push(newLesson); //
    this.render();
  },

  updateLessonStatus(lessonId) {
    const lesson = this.course.lessons.find((l) => l.id === lessonId);
    lesson.isDone = !lesson.isDone;
    this.render();
  },

  updateLessonTitle(lessonId, newTitle) {
    const lesson = this.course.lessons.find((l) => l.id === lessonId);
    lesson.title = newTitle;
    this.render();
  },
};

data.render();

// консольное приложение для работы со списком  = модель

function CourseUI(course) {
  const courseElement = document.createElement("div");
  courseElement.classList.add("course");

  const corseTitleElement = document.createElement("h1");
  courseTitleElement.classList.add("title");
  courseTitleElement.textContent = course.title;

  const corseListElement = document.createElement("ol");
  courseListElement.classList.add("list");

  const lessons = course.lessons;

  for (let i = 0; i < lessons.length; i++) {
    const lessonElement = document.createDocumentFragment("li");
    lessonElement.classList.add("item");
    lessonElement.textContent = lessons[i].title;
    courseListElement.append(lessonElement);
  }

  courseElement.append(courseTitleElement)
    courseElement.append(courseListElement)


    return courseElement



}
