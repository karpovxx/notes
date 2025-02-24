'use strict'
const inputElement = document.getElementById('title'),
	createBtn = document.getElementById('create'),
	listElement = document.getElementById('list')

const notes = ['bread', 'apple', 'chocolate']
let getNoteTemplate = title => {
	return `<li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <span>${title}</span>
          <span>
            <span class="btn btn-small btn-success">&check;</span>
            <span class="btn btn-small btn-danger">&times;</span>
          </span>
        </li>`
}
let render = () => {
	for (let i = 0; i < notes.length; i++) {
		listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i]))
	}
}
render()
createBtn.onclick = () => {
	//Условие, которое не дет добавлять пустой input
	if (inputElement.value.length === 0) {
		return
	}
	listElement.insertAdjacentHTML(
		'beforeend',
		getNoteTemplate(inputElement.value)
	)

	//Чистка окна ввода после добавления заметки
	inputElement.value = ''
}
