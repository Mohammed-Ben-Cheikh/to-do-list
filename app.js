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
const valid1 = document.getElementById('submit');

function addtask() {

    let taskTitre = document.getElementById("titre").value;
    let taskDescription = document.getElementById("description").value;
    let taskDate = document.getElementById("date").value;
    let taskDate2 = document.getElementById("date2").value;
    let taskPriorite = document.getElementById("Priorite").value;
    let taskStatut = document.getElementById("statut").value;


    const newDiv = document.createElement('div');
    newDiv.className = 'rounded-2xl flex w-[87%] h-[70%] bg-yellow-700 m-6';
    newDiv.innerHTML = ` 
     <div class="font-bold textbl">
      ${taskTitre}
     </div>

     <div class="font-bold textbl">
      ${taskDescription}
     </div>

    `;
    
    if (taskStatut === 'todo') {
        document.getElementById('to-do').appendChild(newDiv);
    } else if (taskStatut === 'doing') {
        document.getElementById('do-ing').appendChild(newDiv);
    } else if (taskStatut === 'done') {
        document.getElementById('do-ne').appendChild(newDiv);
    }

    document.getElementById('form').classList.add('hidden');
}


valid1.addEventListener('click', addtask);
//////////////////////////////////////////////////////////////////////////