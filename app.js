//variables
const formulario = document.querySelector("#formulario");
const listaIdeas = document.querySelector("#lista-ideas");
let ideas = [];

//eventos
eventListeners();
function eventListeners() {
	formulario.addEventListener("submit", agregarIdea);
}

//funciones
function agregarIdea(e) {
	e.preventDefault();
	//textarea donde usuario escribe
	const idea = document.querySelector("#textArea").value;

	//validación
	if (idea === "") {
		mostrarError("Una idea no puede ser vacía");
		return; //evita que se ejecuten más líneas de código
	}
	console.log("agregando idea...");
}

//mostrar mensaje de error
function mostrarError(error) {
	const mensajeError = document.createElement("p");
	mensajeError.textContent = error;
	mensajeError.classList.add("error");

	//insertar en el contenido
	const contenido = document.querySelector("#contenido");
	contenido.appendChild(mensajeError);

	//elimina el mensaje de error después de 3 segundos
	setTimeout(() => {
		mensajeError.remove();
	}, 3000);
}
