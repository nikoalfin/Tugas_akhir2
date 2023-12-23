class HeaderBar extends HTMLElement{
connectedCallback(){
    this.render();
    return
}
render(){
    this.innerHTML='<h2>Provinsi Indonesia</h2>'
    return
}
}

customElements.define('header-bar', HeaderBar);