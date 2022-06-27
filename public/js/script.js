window.addEventListener('load', () => {
	const form = document.querySelector("#form");
	const input = document.querySelector("#input");
	const list = document.querySelector("#tasks");

    //listening for submit in form
	form.addEventListener('submit', (e) => {
		//cancels the event if it is cancelable
		e.preventDefault();

		let task = input.value;

		//creating a div element and adding a class of 'task' to it
		let taskElement = document.createElement('div');
		taskElement.classList.add('task');

		//creating a div element and adding a class of 'content' to it
		let taskContent = document.createElement('div');
		taskContent.classList.add('content');
		
		taskElement.appendChild(taskContent);

		//create element input w/ a class of 'text'
		let taskInput = document.createElement('input');
		taskInput.classList.add('text');
		taskInput.type = 'text';
		taskInput.value = task;
		taskInput.setAttribute('readonly', 'readonly');

		taskContent.appendChild(taskInput);

		let taskActions = document.createElement('div');
		taskActions.classList.add('actions');
		
		let taskEdit = document.createElement('button');
		taskEdit.classList.add('edit');
		taskEdit.innerText = 'Edit';

		let taskDelete = document.createElement('button');
		taskDelete.classList.add('delete');
		taskDelete.innerText = 'Delete';

		taskActions.appendChild(taskEdit);
		taskActions.appendChild(taskDelete);

		taskElement.appendChild(taskActions);

		list.appendChild(taskElement);

		input.value = '';

		taskEdit.addEventListener('click', (e) => {
			if (taskEdit.innerText.toLowerCase() == "edit") {
				taskEdit.innerText = "Save";
				taskInput.removeAttribute("readonly");
				taskInput.focus();
			} else {
				taskEdit.innerText = "Edit";
				taskInput.setAttribute("readonly", "readonly");
			}
		});

		taskDelete.addEventListener('click', (e) => {
			list.removeChild(taskElement);
		});
	});
});
