
import {  addProduct, deleteProducts, editProducts } from "../../store/actions"; 
import { addObserver, dispatch } from "../../store/store";

export enum Attribute {
    "image" = "image",
    "titlee" = "titlee",
    "description" = "description",
    "category" = "category",
    "price" = "price",
    "stock" = "stock",
}

class Product extends HTMLElement {
    image?: string;
    titlee?: string;
    description?: string;
    category?: string;
    price?: number;
    stock?: number;

    static get observedAttributes() {
        
        return Object.values(Attribute);
    }

    attributeChangedCallback(propName: Attribute, oldValue: string | undefined, newValue: string | undefined) {
        switch (propName) {
            case Attribute.price:
                this.price = newValue ? Number(newValue) : undefined;
                break;
            case Attribute.stock:
                this.stock = newValue ? Number(newValue) : undefined;
                break;
            default:
                this[propName] = newValue;
                break;
        }
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        addObserver(this);
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
                <link rel="stylesheet" href="../src/components/product/product.css">
                <div class="product">
                    <div class="image">
                        <img src="${this.image || 'No Image'}">
                    </div>
                    <div class="information">
                        <h3>${this.titlee || 'No Title'}</h3>
                        <p>Category: ${this.category || 'No Category'}</p>
                        <p>Description: ${this.description || 'No Description'}</p>
                        <p>Price: ${this.price || 'No Price'}</p>
                        <p>stock: ${this.stock || 'No stock'}</p>
                    </div>
                    <button id="edit">Editar</button>
                    <button id="borrar">Eliminar</button>
                </div>
            `;

          
            const deleteButton = this.shadowRoot?.querySelector('.borrar');
            deleteButton?.addEventListener('click', () => {
                console.log("click", this.titlee);
                dispatch(deleteProducts(this.titlee));
                dispatch(deleteProducts(this.category));
                dispatch(deleteProducts(this.description));
                dispatch(deleteProducts(this.price));
                dispatch(deleteProducts(this.stock?));
            });
            
        }
    }
}

customElements.define("product-card", Product);
export default Product;