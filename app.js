//variables
const formulario = document.querySelector("#formulario");
const listaIdeas = document.querySelector("#lista-ideas");
let ideas = [];

//eventos
eventListeners();
//cuando el usuario agrega una nueva idea
function eventListeners() {
	formulario.addEventListener("submit", agregarIdea);

	//cuando el documento está listo
	document.addEventListener("DOMContentLoaded", () => {
		ideas = JSON.parse(localStorage.getItem("ideas")) || [];
		console.log(ideas);
		crearHTML();
	});
}

//funciones
function agregarIdea(e) {
	e.preventDefault();

	//textarea donde usuario escribe
	const idea = document.querySelector("#textArea").value;

	//validación campo vacío
	if (idea === "") {
		mostrarError("Escribe un mensaje válido");
		return; //evita que se ejecuten más líneas de código
	}
	const ideaObj = {
		id: Date.now(),
		idea,
	};

	//añadir al arreglo de ideas
	ideas = [...ideas, ideaObj];

	//crear html con las ideas escritas por el usuarios
	crearHTML();

	//reiniciar el formulario
	formulario.reset();
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

//muestra un listado de las ideas
function crearHTML() {
	limpiarHTML();
	if (ideas.length > 0) {
		ideas.forEach((idea) => {
			//crea el html
			const li = document.createElement("li");

			//añadir el texto
			li.innerText = idea.idea;

			//insertarlo en html
			listaIdeas.appendChild(li);
		});
	}
	sincronizarStorage();
}

//agregar ideas a local storage
function sincronizarStorage() {
	localStorage.setItem("ideas", JSON.stringify(ideas));
}

//limpiar el html
function limpiarHTML() {
	while (listaIdeas.firstChild) {
		listaIdeas.removeChild(listaIdeas.firstChild);
	}
}
