//contador
let idCounter = 0;
//seleccionamos el input type = text
const input = document.querySelector("input[type='text']");
//capturamos el evento
userInput.addEventListener("submit", (event) => {
    event.preventDefault();//para que no se nos borre el mensaje de consola
    console.log('Hola desde el formulario');
    addTask();
});

// escucha evento para ejecutar accion
list.addEventListener ("click",(event)=>{
    //console.log (event);
    //console.log (event.srcElement.nodeName);
    if (event.srcElement.nodeName == "INPUT"){//si se marca la casilla se llama a la funcion axtualizarStats
        actualizarStats();
    } else if (event.srcElement.nodeName == "IMG"){
        //console.log(event.srcElement.parentNode.id);
        deleteTarea(event.srcElement.parentNode.id);//si se presiona la imagen se llama a la fucion deleteTarea

    }
});

//funcion para añadir mas tareas
function addTask (){//para no poder añadir una tarea sin escribir nada
    idCounter++;
    let newvalue = input.value;
    if (input.value !=""){
    list.innerHTML += 
    `<div class="task-container" id='${idCounter}'>
    <label>
        <input type="checkbox">
        ${newvalue}
    </label>
    <img src="img/cubo-de-basura.webp" class="close-btn">
</div>`
input.value="";
actualizarStats();
}};

//funcion para actualizar stats 
function actualizarStats() {
   
    let elementList = list.querySelectorAll("div");
    let checkbox = list.querySelectorAll('input[type="checkbox"]:checked');
    let TareaPendientes = elementList.length-checkbox.length; 
    stats.innerHTML = `<p>Tareas pendientes: ${TareaPendientes} Tareas completadas: ${checkbox.length}</p>`   
};
    
//para eliminar la tarea al presionar el cubo
function deleteTarea (id) {
    let tareaBorrada = document.getElementById (id);
    list.removeChild (tareaBorrada);
    actualizarStats();
};