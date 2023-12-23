// let listKota = [];
class DataKota {

    static async logMovies() {
        // ambil data dari api
        const data = (await fetch('http://www.emsifa.com/api-wilayah-indonesia/api/provinces.json')).json()
        
        // return hasil dari get api
        return data

    }

    static async SearchKota(key) {

        // simpan hasil get data ke dalam variable list kota
        const listKota = await this.logMovies()
       await listKota.map((kota)=>{
        Object.assign(kota, {img: `./data/img/${kota.name}.jpg`});
        })

    console.log(listKota);
        // filter data di list kota nerdasarkan key yang dimasukan
        const data = await listKota.filter((kota) => {
            // return hasil dari filter
            return kota.name.includes(key.toUpperCase())
        })

        // return haisl filter sehingga bisa digunakan di app.js
        return data
    }
}


export default DataKota;