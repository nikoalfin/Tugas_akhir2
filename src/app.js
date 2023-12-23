import DataKota from "../data/Search-kota.js";
import '../component/header_component.js';
import '../component/search_component.js';
import './style/style.css';
import './style/search.css';
import './style/kotalist.css';

const main = () => {
    const search_input = document.querySelector('search-data');
    const output_search = document.querySelector('#list');
    const buttonSearch = document.querySelector('#klik-search');

    const onButtonSearchclicked = async () => {

        // result akan menyimpan data dari hasil function search kota yagn sudah dibuat di searh_kota.js
        const result = await DataKota.SearchKota(search_input.value)

        // ceck hasil nya
        if (result.length === 0) {
            // jika datanya 0 atau kosong maka akan mengbalikan error
            return fallbackResult(`Error "${search_input.value}" tidak terdefinisi`)
        }

        // render hasil data yang sudah kita dapatkan hari function search kota
        return await renderResult(result)

    }

    const renderResult = async results => {
        output_search.innerHTML = '';
        results.forEach(element => {

            const { img, name } = element;

            const daftarKota = document.createElement('div');
            daftarKota.setAttribute('class', 'edit_kota');

            daftarKota.innerHTML =
                `<img class="fan-art-club" src="${img}" alt="Fan Art">\n` +
                `<h2>PROVINSI ${name}</h2>`

            output_search.appendChild(daftarKota);
        });

        return
    }
    const fallbackResult = message => {
        output_search.innerHTML = '';
        output_search.innerHTML = '<p class="placeholder">' + message + '</p>';
        return
    }
    search_input.clickEvent = onButtonSearchclicked
}

document.addEventListener('DOMContentLoaded', main);