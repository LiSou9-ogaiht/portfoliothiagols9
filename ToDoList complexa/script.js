// Seletores
const taskInput = document.getElementById('taskInput');
const priorityInput = document.getElementById('priorityInput');
const taskList = document.getElementById('taskList');

// Carregar tarefas do localStorage ao iniciar
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function saveAndRender() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}

// Adicionar Tarefa
function addTask() {
    const text = taskInput.value;
    const priority = priorityInput.value;
    if (text === '') return;

    const newTask = {
        id: Date.now(),
        text: text,
        priority: priority,
        completed: false
    };

    tasks.push(newTask);
    taskInput.value = '';
    saveAndRender();
}

// Renderizar Tarefas
function renderTasks(filter = 'all') {
    taskList.innerHTML = '';
    let filteredTasks = tasks;
    
    if (filter === 'pending') filteredTasks = tasks.filter(t => !t.completed);
    if (filter === 'completed') filteredTasks = tasks.filter(t => t.completed);

    filteredTasks.forEach(task => {
        const li = document.createElement('li');
        li.className = `priority-${task.priority} ${task.completed ? 'completed' : ''}`;
        li.innerHTML = `
            <span onclick="toggleTask(${task.id})">${task.text}</span>
            <button class="delete-btn" onclick="deleteTask(${task.id})">X</button>
        `;
        taskList.appendChild(li);
    });
}

// Marcar como Concluída
function toggleTask(id) {
    tasks = tasks.map(task => 
        task.id === id ? {...task, completed: !task.completed} : task
    );
    saveAndRender();
}

// Deletar Tarefa
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    saveAndRender();
}

// Filtros
function filterTasks(type) {
    renderTasks(type);
}

// Iniciar
renderTasks();

// Seletores adicionais
const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');

function updateProgress() {
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);
    
    progressBar.style.width = `${percentage}%`;
    progressText.innerText = `${percentage}% concluído`;
}

// Renderizar Tarefas (Atualizada com Botão Editar e Barra de Progresso)
function renderTasks(filter = 'all') {
    taskList.innerHTML = '';
    let filteredTasks = tasks;
    
    if (filter === 'pending') filteredTasks = tasks.filter(t => !t.completed);
    if (filter === 'completed') filteredTasks = tasks.filter(t => t.completed);

    filteredTasks.forEach(task => {
        const li = document.createElement('li');
        li.className = `priority-${task.priority} ${task.completed ? 'completed' : ''}`;
        
        li.innerHTML = `
            <div style="flex-grow: 1; display: flex; align-items: center;">
                <span id="text-${task.id}" onclick="toggleTask(${task.id})" style="cursor:pointer">${task.text}</span>
            </div>
            <div>
                <button class="edit-btn" onclick="editTask(${task.id})">Editar</button>
                <button class="delete-btn" onclick="deleteTask(${task.id})">X</button>
            </div>
        `;
        taskList.appendChild(li);
    });
    
    updateProgress();
}

// Função de Edição
function editTask(id) {
    const task = tasks.find(t => t.id === id);
    const textSpan = document.getElementById(`text-${id}`);
    
    // Cria um input dinamicamente
    const input = document.createElement('input');
    input.type = 'text';
    input.value = task.text;
    input.className = 'edit-input';
    
    // Substitui o span pelo input
    textSpan.replaceWith(input);
    input.focus();

    // Salva ao sair do input ou apertar Enter
    input.addEventListener('blur', () => finishEdit(id, input.value));
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') finishEdit(id, input.value);
    });
}

function finishEdit(id, newText) {
    if (newText.trim() === '') return renderTasks();
    tasks = tasks.map(task => 
        task.id === id ? { ...task, text: newText } : task
    );
    saveAndRender();
}

// Chame updateProgress no início também
renderTasks();
