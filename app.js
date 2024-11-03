


//////////////////////////////////////////////////////////////////////////
let conFor0 = 0;
let conFor1 = 0;
let conFor2 = 0;

let con0 = document.getElementById("f1");
let con1 = document.getElementById("f2");
let con2 = document.getElementById("f3");

function saveCountersToLocalStorage() {
    localStorage.setItem('counterTodo', conFor0);
    localStorage.setItem('counterDoing', conFor1);
    localStorage.setItem('counterDone', conFor2);
}

function loadCountersFromLocalStorage() {
    conFor0 = parseInt(localStorage.getItem('counterTodo')) || 0;
    conFor1 = parseInt(localStorage.getItem('counterDoing')) || 0;
    conFor2 = parseInt(localStorage.getItem('counterDone')) || 0;

    updateCounterDisplay();
}

// Fonction pour mettre à jour l'affichage des compteurs
function updateCounterDisplay() {
    con0.innerHTML = conFor0;
    con1.innerHTML = conFor1;
    con2.innerHTML = conFor2;
}

// Charger les compteurs dès que la page est chargée
loadCountersFromLocalStorage();
loadTasks();

function updateCounters(status, increment) {
    if (status === 'todo') {
        conFor0 += increment;
    } else if (status === 'doing') {
        conFor1 += increment;
    } else if (status === 'done') {
        conFor2 += increment;
    }
}

//////////////////////////////////////////////////////////////////////////

const add = document.getElementById("Add");
const close = document.getElementById("btn_close");
const form = document.getElementById("form");
function showForm() {

        form.classList.remove("hidden");
    
}
function hideForm() {
    form.classList.add("hidden");
}
add.addEventListener("click", showForm);
close.addEventListener("click", hideForm);

//////////////////////////////////////////////////////////////////////////

const addPlus = document.getElementById("Add+");
const close3 = document.getElementById("btn_close2");
const form22 = document.getElementById("form22");
function showForm2() {
    let datetime = document.getElementById('datetime').value;
    if (datetime === '') {
        alert('cliquer sur le calendrier pour régler la date');
    } else {
        form22.classList.remove("hidden");
    }
}
function hideForm2() {
    form22.classList.add("hidden");
}
addPlus.addEventListener("click", showForm2);
close3.addEventListener("click", hideForm2);

//////////////////////////////////////////////////////////////////////////

const close2 = document.getElementById("btn_edit_close");
const form2 = document.getElementById("editForm");

function hideForm22() {
    form2.classList.add("hidden");
}

close2.addEventListener("click", hideForm22);

//////////////////////////////////////////////////////////////////////////

const valid1 = document.getElementById('submit');

function addtask() {
    let datetime = new Date().toISOString().slice(0, 10);
    // let datetime = document.getElementById('datetime').value;
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
    if (taskTitre === '' || taskDescription === '' || taskDate === '' || taskDate2 === '') {
        alert('Veuillez remplir tous les champs.');
    } else if (taskDate > taskDate2) {
        alert('La date de début doit être supérieure à la date de fin.');
    } else if (datetime > taskDate2) {
        if (taskStatut === 'done') {
            updateCounters(taskStatut, 1);
            updateCounterDisplay();
            saveCountersToLocalStorage();

            let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
            tasks.push(newTask);
            localStorage.setItem('tasks', JSON.stringify(tasks));

            renderTask(newTask);
            document.getElementById('form').classList.add('hidden');
            document.getElementById("titre").value = '';
            document.getElementById("description").value = '';
            document.getElementById("date").value = '';
            document.getElementById("date2").value = '';
        } else {
            alert('La date de fin de la tâche ne peut pas être dans le passé.');
        }
    } else {
        updateCounters(taskStatut, 1);
        updateCounterDisplay();
        saveCountersToLocalStorage();

        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(newTask);
        localStorage.setItem('tasks', JSON.stringify(tasks));

        renderTask(newTask);
        document.getElementById('form').classList.add('hidden');
        document.getElementById("titre").value = '';
        document.getElementById("description").value = '';
        document.getElementById("date").value = '';
        document.getElementById("date2").value = '';
    }

}

valid1.addEventListener('click', addtask);

//////////////////////////////////////////////////////////////////////////

const valid11 = document.getElementById('submit2');

function addtask2() {
    let datetime = new Date().toISOString().slice(0, 10);
    let taskTitre = document.getElementById("titre2").value;
    let taskDescription = document.getElementById("description2").value;
    let taskDate = document.getElementById("date3").value;
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
    
}

valid11.addEventListener('click', addtask2);

//////////////////////////////////////////////////////////////////////////

function renderTask(task) {
    const newDiv = document.createElement('div');
    if (task.priority === 'P1') {
        newDiv.className = 'rounded-2xl grid grid-cols-2 w-[87%] h-[80%] bg-white border-g-r m-6 p-4';
    } else if (task.priority === 'P2') {
        newDiv.className = 'rounded-2xl grid grid-cols-2 w-[87%] h-[80%] bg-white border-g-o m-6 p-4';
    } else if (task.priority === 'P3') {
        newDiv.className = 'rounded-2xl grid grid-cols-2 w-[87%] h-[80%] bg-white border-g-v m-6 p-4';
    }
    newDiv.id = task.id;

    // Animation de fade-in
    newDiv.style.opacity = 0;
    setTimeout(() => {
        newDiv.style.transition = 'opacity 0.5s';
        newDiv.style.opacity = 1;
    }, 0);

    newDiv.innerHTML = `
        <div class="font-bold col-span-2">Titre : <span class="task-title">${task.title}</span></div>
        <div class="mb-2 col-span-2 overflow-auto">Description : <div><p class="task-description">${task.description}</p></div></div>
        <div>Date Start : <p class="task-date">${task.dateStart}</p></div>
        <div>Date End : <p class="task-date2">${task.dateEnd}</p></div>
        <div>Priorité : <span class="task-priorite">${task.priority}</span></div>
        <div>Statut : <span class="task-statut">${task.status}</span></div>
        <div class="flex gap-2 col-span-2">
            <button class="bg-red-500 hover:bg-red-800 text-white px-2 py-1 rounded" onclick="deleteTask('${task.id}')">Delete</button>
            <button class="bg-yellow-400 hover:bg-yellow-300 text-black px-2 py-1 rounded" onclick="editTask1('${task.id}')">Edit</button>
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

//////////////////////////////////////////////////////////////////////////

function loadTasks() {
    let datetime = new Date().toISOString().slice(0, 10);
    document.getElementById("datetime").value = datetime;
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => renderTask(task));
}
//////////////////////////////////////////////////////////////////////////

function deleteTask(taskId) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskElement = document.getElementById(taskId);

    if (taskElement) {
        // Animation de fade-out avant suppression
        taskElement.style.transition = 'opacity 0.5s';
        taskElement.style.opacity = 0;

        setTimeout(() => {
            // Retirer l'élément après l'animation
            taskElement.remove();
        }, 500);
    }

    // Mettre à jour les données
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        updateCounters(task.status, -1);
        updateCounterDisplay();
        saveCountersToLocalStorage();
    }

    tasks = tasks.filter(t => t.id !== taskId);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
//////////////////////////////////////////////////////////////////////////

function editTask1(taskId) {
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

//////////////////////////////////////////////////////////////////////////

function editTask3(taskId) {
    let datetime = new Date().toISOString().slice(0, 10);
    let taskTitre2 = document.getElementById("editTitre").value;
    let taskDescription2 = document.getElementById("editDescription").value;
    let taskDate1 = document.getElementById("editDate").value;
    let taskDate22 = document.getElementById("editDate2").value;
    let taskPriorite2 = document.getElementById("editPriorite").value;
    let taskStatut2 = document.getElementById("editStatut").value;
    if (taskTitre2 === '' || taskDescription2 === '' || taskDate1 === '' || taskDate22 === '') {
        alert('Veuillez remplir tous les champs.');
    } else if (taskDate1 > taskDate22) {
        alert('La date de début doit être supérieure à la date de fin.');
    } else if (datetime > taskDate22) {
        if (taskStatut2 === 'done') {
            let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
            const taskIndex = tasks.findIndex(t => t.id === taskId);

            if (taskIndex > -1) {
                const oldStatus = tasks[taskIndex].status;
                tasks[taskIndex].title = taskTitre2; // Met à jour le titre
                tasks[taskIndex].description = taskDescription2; // Met à jour la description
                tasks[taskIndex].dateStart = taskDate1; // Met à jour la date de début
                tasks[taskIndex].dateEnd = taskDate22; // Met à jour la date de fin
                tasks[taskIndex].priority = taskPriorite2; // Met à jour la priorité
                tasks[taskIndex].status = taskStatut2; // Met à jour le statut


                if (oldStatus !== taskStatut2) {
                    updateCounters(oldStatus, -1);
                    updateCounters(taskStatut2, 1);
                }

                updateCounterDisplay();
                saveCountersToLocalStorage();

                localStorage.setItem('tasks', JSON.stringify(tasks));

                document.getElementById(taskId).remove();
                renderTask(tasks[taskIndex]);
            }
            document.getElementById('editForm').classList.add('hidden');
        } else {
            alert('La date de fin de la tâche ne peut pas être dans le passé.');
        }

    } else {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        const taskIndex = tasks.findIndex(t => t.id === taskId);

        if (taskIndex > -1) {
            const oldStatus = tasks[taskIndex].status;
            tasks[taskIndex].title = taskTitre2; // Met à jour le titre
            tasks[taskIndex].description = taskDescription2; // Met à jour la description
            tasks[taskIndex].dateStart = taskDate1; // Met à jour la date de début
            tasks[taskIndex].dateEnd = taskDate22; // Met à jour la date de fin
            tasks[taskIndex].priority = taskPriorite2; // Met à jour la priorité
            tasks[taskIndex].status = taskStatut2; // Met à jour le statut


            if (oldStatus !== taskStatut2) {
                updateCounters(oldStatus, -1);
                updateCounters(taskStatut2, 1);
            }

            updateCounterDisplay();
            saveCountersToLocalStorage();

            localStorage.setItem('tasks', JSON.stringify(tasks));

            document.getElementById(taskId).remove();
            renderTask(tasks[taskIndex]);
        }
        document.getElementById('editForm').classList.add('hidden');
    }


}

//////////////////////////////////////////////////////////////////////////
