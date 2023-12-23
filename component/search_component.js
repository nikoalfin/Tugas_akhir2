class SearchData extends HTMLElement {
    connectedCalback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
        return
    }
    get value() {
        return this.querySelector('#search').value;
    }
    render() {
        this.innerHTML = `
        <div class="container-search">
                <input type="search" placeholder="Search city" id="search">
                <button type="submit" id="klik-search">search</button>
        </div>
        `;

        this.querySelector('#klik-search')
            .addEventListener('click', this._clickEvent)

        return
    }

};
customElements.define('search-data', SearchData);