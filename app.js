


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

