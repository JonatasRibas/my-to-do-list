const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const datetimeInput = document.getElementById('todo-datetime');
const list = document.getElementById('todo-list');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const task = input.value.trim();
  const datetime = datetimeInput.value;

  if (!task || !datetime) return;

  // Formatando a data escolhida
  const dateObj = new Date(datetime);
  const options = {
    day: '2-digit', month: '2-digit', year: 'numeric',
    hour: '2-digit', minute: '2-digit'
  };
  const formattedDatetime = dateObj.toLocaleString('pt-BR', options);

  // Criar item
  const li = document.createElement('li');

  const wrapper = document.createElement('div');
  wrapper.classList.add('text-wrapper');

  const taskText = document.createElement('span');
  taskText.textContent = task;

  const dateInfo = document.createElement('small');
  dateInfo.classList.add('task-date');
  dateInfo.textContent = `para: ${formattedDatetime}`;

  wrapper.appendChild(taskText);
  wrapper.appendChild(dateInfo);

  const delBtn = document.createElement('button');
  delBtn.innerHTML = '🗑️';
  delBtn.title = 'Remover';
  delBtn.addEventListener('click', () => li.remove());

  li.appendChild(wrapper);
  li.appendChild(delBtn);
  list.appendChild(li);

  input.value = '';
  datetimeInput.value = '';
});
