let con0 = document.getElementById("f1").value;
let con1 = document.getElementById("f2").value;
let con2 = document.getElementById("f3").value;
console.log(con0, con1, con2);

const add = document.getElementById("Add");
const close = document.getElementById("btn_close");
const form = document.getElementById("form");

// Afficher le formulaire
function showForm() {
    form.classList.remove("hidden");
}

// Cacher le formulaire
function hideForm() {
    form.classList.add("hidden");
}


add.addEventListener("click", showForm);
close.addEventListener("click", hideForm);

//////////////////////////////////////////////////////////////////////////

const addPlus = document.getElementById("Add+");
const close3 = document.getElementById("btn_close2");
const form22 = document.getElementById("form22");

// Afficher le formulaire
function showForm3() {
    form22.classList.remove("hidden");
}

// Cacher le formulaire
function hideForm3() {
    form22.classList.add("hidden");
}

addPlus.addEventListener("click", showForm3);
close3.addEventListener("click", hideForm3);


//////////////////////////////////////////////////////////////////////////

const valid1 = document.getElementById('submit');

function addtask() {
    let taskTitre = document.getElementById("titre").value;
    let taskDescription = document.getElementById("description").value;
    let taskDate = document.getElementById("date").value;
    let taskDate2 = document.getElementById("date2").value;
    let taskPriorite = document.getElementById("Priorite").value;
    let taskStatut = document.getElementById("statut").value;

    const taskId = `task-${Date.now()}`;
    const newTask = {
        id: taskId,
        title: taskTitre,
        description: taskDescription,
        dateStart: taskDate,
        dateEnd: taskDate2,
        priority: taskPriorite,
        status: taskStatut
    };

    // Enregistrer la tâche dans le localStorage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    renderTask(newTask);

    document.getElementById('form').classList.add('hidden');
}

valid1.addEventListener('click', addtask);

//////////////////////////////////////////////////////////////////////////

const valid11 = document.getElementById('submit2');

function addtask2() {
    let taskTitre = document.getElementById("titre2").value;
    let taskDescription = document.getElementById("description2").value;
    let taskDate = document.getElementById("date2").value;
    let taskDate2 = document.getElementById("date22").value;
    let taskPriorite = document.getElementById("Priorite2").value;
    let taskStatut = document.getElementById("statut2").value;

    const taskId = `task-${Date.now()}`;
    const newTask = {
        id: taskId,
        title: taskTitre,
        description: taskDescription,
        dateStart: taskDate,
        dateEnd: taskDate2,
        priority: taskPriorite,
        status: taskStatut
    };

    // Enregistrer la tâche dans le localStorage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    renderTask(newTask);
}

valid11.addEventListener('click', addtask2);

//////////////////////////////////////////////////////////////////////////

function renderTask(task) {

    const newDiv = document.createElement('div');
    if (task.status === 'todo') {
        newDiv.className = 'rounded-2xl grid grid-cols-2 w-[87%] h-[80%] bg-white border-g-r m-6 p-4';
    } else if (task.status === 'doing') {
        newDiv.className = 'rounded-2xl grid grid-cols-2 w-[87%] h-[80%] bg-white border-g-o m-6 p-4';
    } else if (task.status === 'done') {
        newDiv.className = 'rounded-2xl grid grid-cols-2 w-[87%] h-[80%] bg-white border-g-v m-6 p-4';
    }
    newDiv.id = task.id;
    newDiv.innerHTML = `
        <div class="font-bold col-span-2">
            Titre : <span class="task-title">${task.title}</span>
        </div>
        <div class="mb-2 col-span-2">
            Description : <span class="task-description">${task.description}</span>
        </div>
        <div>
            Date : <span class="task-date">${task.dateStart}</span>
        </div>
        <div>
            Date 2 : <span class="task-date2">${task.dateEnd}</span>
        </div>
        <div>
            Priorité : <span class="task-priorite">${task.priority}</span>
        </div>
        <div>
            Statut : <span class="task-statut">${task.status}</span>
        </div>
        <div class="flex gap-2 col-span-2">
            <button class="bg-red-500 hover:bg-red-800 text-white px-2 py-1 rounded " onclick="deleteTask('${task.id}')">Delete</button>
            <button class="bg-yellow-400 hover:bg-yellow-300 text-black px-2 py-1 rounded " onclick="editTask1('${task.id}')">Edit</button>
        </div>
    `;

    if (task.status === 'todo') {
        document.getElementById('to-do').appendChild(newDiv);
    } else if (task.status === 'doing') {
        document.getElementById('do-ing').appendChild(newDiv);
    } else if (task.status === 'done') {
        document.getElementById('do-ne').appendChild(newDiv);
    }
}

// Fonction pour charger les tâches depuis le localStorage
function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => renderTask(task));
}

// Fonction pour supprimer une tâche et mettre à jour le localStorage
function deleteTask(taskId) {
    const taskDiv = document.getElementById(taskId);
    if (taskDiv) {
        taskDiv.remove();
    }
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(task => task.id !== taskId);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Fonction pour afficher le formulaire d'édition et charger les données de la tâche
function editTask1(taskId) {
    const taskElement = document.getElementById(taskId);
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const task = tasks.find(t => t.id === taskId);

    if (task) {
        document.getElementById("editTitre").value = task.title;
        document.getElementById("editDescription").value = task.description;
        document.getElementById("editDate").value = task.dateStart;
        document.getElementById("editDate2").value = task.dateEnd;
        document.getElementById("editPriorite").value = task.priority;
        document.getElementById("editStatut").value = task.status;

        document.getElementById("editForm").classList.remove("hidden");

        const valid11 = document.getElementById('editSubmit');
        valid11.onclick = function () {
            editTask3(taskId);
        };
    }
}

// Fonction pour mettre à jour la tâche et le localStorage
function editTask3(taskId) {
    let taskTitre2 = document.getElementById("editTitre").value;
    let taskDescription2 = document.getElementById("editDescription").value;
    let taskDate1 = document.getElementById("editDate").value;
    let taskDate22 = document.getElementById("editDate2").value;
    let taskPriorite2 = document.getElementById("editPriorite").value;
    let taskStatut2 = document.getElementById("editStatut").value;

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskIndex = tasks.findIndex(t => t.id === taskId);

    if (taskIndex > -1) {
        tasks[taskIndex] = {
            id: taskId,
            title: taskTitre2,
            description: taskDescription2,
            dateStart: taskDate1,
            dateEnd: taskDate22,
            priority: taskPriorite2,
            status: taskStatut2
        };
        localStorage.setItem('tasks', JSON.stringify(tasks));

        document.getElementById(taskId).remove();
        renderTask(tasks[taskIndex]);
    }

    document.getElementById('editForm').classList.add('hidden');
}

const close2 = document.getElementById("btn_edit_close");
const form2 = document.getElementById("editForm");

function hideForm2() {
    form2.classList.add("hidden");
}

close2.addEventListener("click", hideForm2);
// Charger les tâches au démarrage de la page
window.onload = loadTasks;
