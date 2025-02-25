'use strict'
const inputElement = document.getElementById('title'),
	createBtn = document.getElementById('create'),
	listElement = document.getElementById('list')

// Функция для генерации HTML-шаблона заметки
let getNoteTemplate = (note, index) => {
	return `<li class="list-group-item d-flex justify-content-between align-items-center">
              <span class="${
								note.completed ? 'text-decoration-line-through' : ''
							}">${note.title}</span>
              <span>
                <span class="btn btn-small btn-${
									note.completed ? 'warning' : 'success'
								}" data-index="${index}" data-type="toggle">&check;</span>
                <span class="btn btn-small btn-danger" data-type="remove" data-index="${index}">&times;</span>
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
	listElement.innerHTML = ''
	if (notes.length === 0) {
		listElement.innerHTML = 'Нет элементов'
	} // Очищаем список перед ререндерингом
	for (let i = 0; i < notes.length; i++) {
		listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i], i)) // Передаем объект и индекс
	}
}

// Отображаем начальные заметки
render()

// Добавление новой заметки
createBtn.onclick = () => {
	if (inputElement.value.length === 0) {
		return
	}
	const newNote = {
		title: inputElement.value,
		completed: false,
	}
	// Добавляем новую заметку в массив
	notes.push(newNote)
	render()

	// Очищаем поле ввода
	inputElement.value = ''
}

// Обработчик кликов на списке
listElement.onclick = event => {
	if (event.target.dataset.index) {
		const index = +event.target.dataset.index // Преобразуем индекс в число
		const type = event.target.dataset.type // Получаем тип действия

		if (type === 'toggle') {
			// Переключаем статус завершения заметки
			notes[index].completed = !notes[index].completed
			console.log('toggle', index)
			render()
		} else if (type === 'remove') {
			console.log('remove', index)
			// Удаляем заметку из массива
			notes.splice(index, 1) //Что удалить и сколько
			render()
		}
	}
}
