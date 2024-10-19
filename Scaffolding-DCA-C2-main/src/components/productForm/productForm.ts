


import { addObserver, Appstate, Actions, Screens } from "../../store/store";
class TaskForm extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
        addObserver(this)
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) this.shadowRoot.innerHTML = `
      <form class="task-form">
<h3>Title</h3>
<input type="text" id="text-input" placeholder="Escriba el titulo" required /> 
<h3>Descripcion</h3>
<input type="text" id="text-input-description" placeholder="Escriba su Descripcion" required /> 
<h3>Price</h3>
<input type="text" id="text-input-price" placeholder="Precio" required /> 
<h3>Category</h3>
<input type="text" id="text-input-category" placeholder="Nombre de Categoria" required /> 
<h3>Rating Rate</h3>
<input type="text" id="text-input-rate" placeholder="Nombre de tarea" required /> 
<h3>Image</h3>
<img src="" alt="AnyImage">
<button type="submit" id="add-btn">añadir</button> 

</form>}
        `;

        const formElement = this.shadowRoot?.querySelector('.task-form') 


        
        
        formElement?.addEventListener("submit", (e) => {
            e.preventDefault() 
            
            const inputValue = this.shadowRoot?.querySelector("#text-input") as HTMLInputElement 
            const inputValue = this.shadowRoot?.querySelector("#text-input") as HTMLInputElement 
            const inputValue = this.shadowRoot?.querySelector("#text-input") as HTMLInputElement 
            const inputValue = this.shadowRoot?.querySelector("#text-input") as HTMLInputElement 
            const inputValue = this.shadowRoot?.querySelector("#text-input") as HTMLInputElement 
        
            const newTask: Task = {
                id: new Date().getTime(),
                
                title: inputValue.value,
                state: false
            }

             
            
        })

		
		}
	
}

customElements.define('task-form', TaskForm);
export default TaskForm;