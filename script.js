document.getElementById('addTaskBtn').addEventListener('click', function () {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  // Create a new task item
  const taskItem = document.createElement('li');

  // Task text
  const taskSpan = document.createElement('span');
  taskSpan.textContent = taskText;

  // Tick button
  const tickBtn = document.createElement('button');
  tickBtn.innerHTML = '&#10003;'; // Checkmark symbol
  tickBtn.addEventListener('click', function () {
    taskSpan.classList.toggle('completed');
  });

  // Delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '&#10060;'; // Cross symbol
  deleteBtn.addEventListener('click', function () {
    taskItem.remove();
  });

  // Append elements
  taskItem.appendChild(taskSpan);
  taskItem.appendChild(tickBtn);
  taskItem.appendChild(deleteBtn);
  document.getElementById('taskList').appendChild(taskItem);

  // Clear input
  taskInput.value = '';
});
