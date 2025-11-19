let nombre = "";
let apellido = "";
let estudiantes = [];


function guardarDatos() {
    nombre = document.getElementById("id_nombre").value;
    apellido = document.getElementById("id_apellido").value; 
    document.getElementById("id_tabla_nombre").innerText = nombre;
    document.getElementById("id_tabla_apellido").innerText = apellido; 
    limpiarFormulario();
    mostrarDatosTabla();
}
function limpiarFormulario(){
    document.getElementById("id_nombre").value = "";
    document.getElementById("id_apellido").value = "";
    
}
function mostrarDatosTabla(){
    document.getElementById("id_tabla_nombre").innerText = nombre;
    document.getElementById("id_tabla_apellido").innerText = apellido;
}

function guardarEstudiante(){
    let estudiante = {
        nombre: document.getElementById("id_nombre").value,
        apellido: document.getElementById("id_apellido").value
    };
    estudiantes.push(estudiante);
    console.log(estudiantes);
    limpiarFormulario();
    mostrarEstudiantesTabla();
}
function mostrarEstudiantesTabla(){
    let tbody = document.getElementById("id_tbody");
    tbody.innerHTML = "";
    estudiantes.forEach(estudiante => {
        let fila = `<tr>
                        <td>${estudiante.nombre}</td>
                        <td>${estudiante.apellido}</td>
                    </tr>`;
        tbody.innerHTML += fila;
    });

}