
import { addObserver, appState } from "../../store/store"; // addObserver para observar cambios en el estado global, y appState para acceder al estado actual.
import Product, { Attribute } from "../productItem/productItem"; 
import "../TaskItem/index"; 

class TaskList extends HTMLElement {
	// Definimos una lista de elementos TaskItem que contendrá las tareas.
	taskItems: TaskItem[] = []

	constructor() {
		super(); // Llamada al constructor de HTMLElement.
		this.attachShadow({ mode: 'open' }); // Adjuntamos el Shadow DOM para encapsular el componente.
		addObserver(this); // Registramos este componente como observador de los cambios en el estado global.

		// Recorremos las tareas en el estado global y creamos un TaskItem por cada una.
		appState.tasks.forEach((task) => {
			const { id, title, state } = task; // Desestructuramos las propiedades de la tarea (id, title, state).
			
			// Creamos un nuevo elemento personalizado 'task-item' para cada tarea.
			const taskItem = this.ownerDocument.createElement('task-item') as TaskItem;

			// Establecemos los atributos del TaskItem utilizando las propiedades de la tarea.
			taskItem.setAttribute(Attribute.image, id); 
			taskItem.setAttribute(Attribute.titlee, title); 
			taskItem.setAttribute(Attribute.description, state); 
            taskItem.setAttribute(Attribute.category, state); 
            taskItem.setAttribute(Attribute.description, state); 

			// Añadimos el TaskItem creado a la lista de taskItems.
			this.taskItems.push(taskItem);
		});
	}

	
	connectedCallback() {
		this.render(); // 
	}


	render() {
		
		if (this.shadowRoot) {
			
			this.taskItems.forEach((taskItem) => {
				this.shadowRoot?.appendChild(taskItem); 
			});
		}
	}
}


customElements.define('task-list', TaskList);
export default TaskList; 