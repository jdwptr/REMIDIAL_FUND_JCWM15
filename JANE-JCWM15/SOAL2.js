let dataProd = [
    {
        nomor: 1,
        name: 'Apel',
        price: '5000',
        category: 'food',
    },
    {
        nomor: 2,
        name: 'Milk',
        price: '7000',
        category: 'drink',
    },
    {
        nomor: 3,
        name: 'Tisu',
        price: '2000',
        category: 'other',
    },
]

let formProd = []

class ProdBaru {
    constructor (nomor, name, price, category) {
        this.nomor = nomor,
        this.name = name,
        this.price = price,
        this.category = category
    }
}

function showProd (idx) {
    let tabel = document.getElementById('daftarprod')
    let tbody = tabel.getElementsByTagName('tbody')[0]

    let tr = ''

    // looping untuk data satu satu
    for (let i = 0; i < dataProd.length; i++) {
        if (idx === i) {
            tr += `<tr>
                <td></td>
                <td>
                    <input type="text" id="namebaru" value=${dataProd[i].name}></td>
                <td>
                    <input type="text" id="hargabaru" value=${dataProd[i].price}></td>
                <td>
                    <form id="categbaru">
                        <label>Category</label>
                        <input type="radio" name='catebaru' value="food">
                        <label>Food</label>
                        <input type="radio" name='catebaru' value="drink">
                        <label>Drink</label>
                        <input type="radio" name='catebaru' value="other">
                        <label>Other</label>
                    </form>
                </td>
                <td>
                    <button onclick="btnSave(${i})">SAVE</button>
                    <button onclick="btnCancel(${i})">CANCEL</button>
                </td>
            </tr>`
        } else {
            tr += `<tr>
                <td>${i + 1}</td>
                <td>${dataProd[i].name}</td>
                <td>${dataProd[i].price}</td>
                <td>${dataProd[i].category}</td>
                <td>
                    <button onclick="btnEdit(${i})">EDIT</button>
                    <button onclick="btnDelete(${i})">DELETE</button>
                </td>
            </tr>`
        }
    }
    tbody.innerHTML = tr
}
showProd()

function btnAdd (event) {
    event.preventDefault()
    console.log('btn add di klik')

    // akses form, input, radio
    let form = document.getElementById('formAdd')
    let formCate = document.getElementById('categ')

    let inputCate = formCate.getElementsByTagName('input')
    console.log('input radio', inputCate)

    let hasilPilih
    for (let i = 0; i < inputCate.length; i++) {
        if (inputCate[i].checked) {
            hasilPilih = inputCate[i].value
        }
    }
    console.log('hasilpilihan : ', hasilPilih)


    let name = form['namaprod'].value
    let price = form['hargaprod'].value

    let buttonCate
            if (formCate['food'].checked) {
                buttonCate = formCate['food'].value
            } else if (formCate['drink'].checked) {
                buttonCate = formCate['drink'].value
            } else if (formCate['other'].checked) {
                buttonCate = formCate['other'].value
            } else {
                alert("INPUT MASIH KOSONG") //pake alert kalo ga mau pake checked di atas
            }

    if(name === '' || price === '' || buttonCate === '') {
        return alert ('INPUT MASIH KOSONG')
    } else {
        dataProd.push (new ProdBaru (
            dataProd.length + 1,
            form['namaprod'].value,
            form['hargaprod'].value,
            buttonCate
        ))
    }


    console.log(dataProd)
        // tampilkan lagi user
        showProd()

        // reset value di form abis di input ilang
        form['namaprod'].value = ''
        form['hargaprod'].value = ''
        inputCate['cate'].value = ''
}

function btnEdit (index) {
    console.log(`btn edit ke ${index}di klik`)

    showProd(index)
}

function btnDelete (index) {
    console.log(`btn delete ke ${index}di klik`)

    dataProd.splice(index, 1)
    showProd()
}

function btnSave (index) {
    console.log('save di klik')

    let nameBaru = document.getElementById('namebaru').value
    let hargaBaru = document.getElementById('hargabaru').value
    let formBaru = document.getElementById('categbaru')
    console.log(nameBaru)
    console.log(hargaBaru)
    console.log(formBaru)

    let inputCateBaru = formBaru.getElementsByTagName('input')
    console.log('input radio', inputCateBaru)

    let hasilPilihBaru
    for (let i = 0; i < inputCateBaru.length; i++) {
        if (inputCateBaru[i].checked) {
            hasilPilihBaru = inputCateBaru[i].value
        }
    }
    console.log('hasilpilihan : ', hasilPilihBaru)

    // EDIT DAFTAR PRODUK DENGAN VALUE YG BARU
        dataProd[index].name = nameBaru
        dataProd[index].price = hargaBaru
        dataProd[index].category = hasilPilihBaru

        showProd()
}

function btnCancel (index) {
    console.log('button cancel di klik')

        // tampilkan ulang produkya
        showProd()
}
