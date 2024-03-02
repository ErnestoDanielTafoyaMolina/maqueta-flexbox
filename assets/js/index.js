class AppComponent extends HTMLElement {
    constructor(){
        super();
        let shadow = this.attachShadow({ mode:'open' });
        this.divHeader = document.createElement('div');
        this.divHeader.innerHTML = `Hola mundo, soy un componente`;

        shadow.appendChild(this.divHeader);
    };
    
}


customElements.define("app-component", AppComponent);
const article1=document.querySelector("#article1");
for(let i=1; i <= 2; i++){
    
    article1.innerHTML+=`<app-component />`;
}