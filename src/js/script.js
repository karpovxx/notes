'use strict'
const inputElement = document.getElementById('title'),
	createBtn = document.getElementById('create'),
	listElement = document.getElementById('list')

// Функция для генерации HTML-шаблона заметки
let getNoteTemplate = note => {
	return `<li class="list-group-item d-flex justify-content-between align-items-center">
              <span class="${
								note.completed ? 'text-decoration-line-through' : ''
							}">${note.title}</span>
              <span>
                <span class="btn btn-small btn-success">&check;</span>
                <span class="btn btn-small btn-danger">&times;</span>
              </span>
            </li>`
}

// Массив заметок
const notes = [
	{ title: 'bread', completed: false },
	{ title: 'apple', completed: true },
]

// Функция для рендера списка
let render = () => {
	listElement.innerHTML = '' // Очищаем список перед ререндерингом
	for (let i = 0; i < notes.length; i++) {
		listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i])) // Передаем весь объект
	}
}

// Отображаем начальные заметки
render()

// Добавление новой заметки
createBtn.onclick = () => {
	if (inputElement.value.length === 0) {
		return
	}

	// Добавляем новую заметку в массив
	notes.push({ title: inputElement.value, completed: false })

	// Перерисовываем список
	render()

	// Очищаем поле ввода
	inputElement.value = ''
}
