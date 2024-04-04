let weight = document.getElementById("weight")
let age = document.getElementById("age")
let height = document.getElementById("height")
let resultTitle = document.getElementById("resulttitle")
let resultNumber = document.getElementById("resultnumber")
let resultDesc = document.getElementById("resultdesc")
let resultRange = document.getElementById("resultrange")
let suggest = document.getElementById("suggest")
let pria = document.getElementById("r1")
let wanita = document.getElementById("r2")
let additional = document.getElementById("additional")


// untuk memilih jenis kelamin
function checkedPria(){
    pria.checked = true
    wanita.checked = false
}

function checkedWanita(){
    wanita.checked = true
    pria.checked = false
    
}

//function ketika klik Hitung BMI, lalu akan tampil hasilnya

function submitBMI() {

    if (weight.value == 0) {
        alert("Data kosong: mohon input berat badan")
    } else if (height.value == 0){
        alert("Data kosong: mohon input tinggi badan")
    } else if(pria.checked == false && wanita.checked == false){
        alert("Data kosong: mohon pilih jenis kelamin")
    } else if(age.value == 0){
        alert("Data kosong: mohon input usia Anda")
    } else {
        additional.style.display = "none"
        let heightConv = height.value / 100
        let BMI = (weight.value / (heightConv * heightConv)).toFixed(2)
        lowBMI = Math.floor(BMI)
        highBMI = Math.ceil(BMI)
        resultNumber.innerHTML = BMI
        resultNumber.className = "gradient" 
        resultNumber.style.fontSize = "4.6em"


        if (lowBMI == highBMI) {
            resultRange.innerHTML = `Hasil BMI adalah ${BMI}`
        } else {
            resultRange.innerHTML = `Hasil BMI diantara ${lowBMI} dan ${highBMI}`
        }
        if (BMI >= 30) {
            resultTitle.innerHTML = "Obesitas"
            resultDesc.innerHTML = "Anda mengalami kegemukan (obesitas)"
            suggest.innerHTML = `Anda berada dalam kategori obesitas atau kegemukan.<br/>
        Cara terbaik untuk menurunkan obesitas adalah dengan konsumsi sayur dan buah, membatasi tidur yang berlebihan,
        membatasi makanan yang mengandung gula, daram, dan lemak, serta berolahraga dengan teratur.
        Jika BMI Anda berada dalam kategori ini maka anda dianjurkan untuk segera menurunkan berat badan.`
        } else if (BMI >= 25 && BMI < 30) {
            resultTitle.innerHTML = "Berat Badan Lebih"
            resultDesc.innerHTML = "Anda kelebihan berat badan"
            suggest.innerHTML = `Anda berada dalam kategori overweight atau berat badan berlebih.<br/>
        Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalori makanan yang dikonsumsi dan berolahraga.
        Jika BMI Anda berada dalam kategori ini maka anda dianjurkan untuk menurunkan berat badan hingga batas normal.`
        } else if (BMI >= 18.5 && BMI < 25) {
            resultTitle.innerHTML = "Berat Badan Normal"
            resultDesc.innerHTML = "Anda memiliki berat badan normal"
            suggest.innerHTML = `Anda berada dalam kategori normal.<br/>
        Anda telah memelihara tubuh dengan baik. Tetap konsisten untuk makan makanan bergizi diiringi dengan olahraga teratur.
        Jika BMI Anda berada dalam kategori ini maka anda memiliki badan yang sehat. Pertahankan!`
        } else if (BMI < 18.5) {
            resultTitle.innerHTML = "Berat Badan Kurang"
            resultDesc.innerHTML = "Anda kekurangan berat badan"
            suggest.innerHTML = `Anda berada dalam kategori underweight atau kekurangan berat badan.<br/>
        Cara terbaik untuk menaikkan berat badan adalah dengan mengonsumsi makanan yang mengandung karbohidrat, seperti kentang, roti, dan nasi, 
        rutin berolahraga, serta memperbanyak minum air putih dan susu.
        Jika BMI Anda berada dalam kategori ini maka anda dianjurkan untuk menaikkan berat badan hingga batas normal.`
        }

    }



}

// function reset; mengosongkan semua nilai pada form

function reset() {
    pria.checked = false
    wanita.checked = false
    weight.value = ''
    age.value = ''
    height.value = ''
    resultTitle.innerHTML = `<i style="color:darkgray">Berat Badan Lebih/Kurang</i>`
    resultNumber.innerHTML = 0
    resultNumber.style.fontSize = "20px"
    resultNumber.style.color = "black"
    resultNumber.className =""
    resultRange.innerHTML = ""
    resultDesc.innerHTML = `<i style="color:darkgray">kondisi berat badan</i>`
    suggest.innerHTML = ""

}