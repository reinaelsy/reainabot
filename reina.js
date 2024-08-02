const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")
const loaders = document.getElementById("loaders")
const container = document.getElementsByClassName("container")

let init = 0

const reinaSay = (data) => {
    return [
    "Halo, perkenalkan saya adalah reinabot, nama kamu siapa?",
    `Halo ${data?.nama}, sekarang kamu umur berapa?`,
    `Ohh ${data?.usia}, btw kamu ulang tahunnya tanggal berapa?`,
    `${data?.hbd} ya, kapan-kapan kita rayain ulang tahun kamu oke. udah punya pacar belum?`,
    `ohh ${data?.pacar}, hobi kamu apa?`,
    `ouh ya, nama orangtua kamu siapa?`
    ]
}

pertanyaan.innerHTML = reinaSay()[0]

let usersData = []

function botReina() {
    if(jawaban.value.length < 1) return alert ("silahkan di isi dulu..")
    init++
    if (init == 1) {
        reinaCd({ nama : jawaban.value })
    } else if (init == 2) {
        reinaCd({ usia : jawaban.value })
    }  else if (init == 3) {
        reinaCd({ hbd : jawaban.value })
    } else if (init == 4) {
        reinaCd({ pacar : jawaban.value })
    } else if (init == 5) {
        reinaCd({ ortu : jawaban.value })
    } else if (init == 6) {
        reinaFinish()
    } else {
        reinaEnd()
    }
}

function reinaCd(jawabanUser) {
    loaders.style.display = "block"
    container[0].style.filter = "blur(8px)"
    setTimeout(() => {
        loaders.style.display = "none"
        container[0].style.filter = "none"
        pertanyaan.innerHTML = reinaSay(jawabanUser)[init]
    }, [1250])
    
    usersData.push(jawaban.value)
    jawaban.value = ""
}

function reinaFinish() {
    pertanyaan.innerHTML = `ouh oke, lain kali kita ngobrol lagi ya. makasih ya udah mampir. love you ${usersData[0]}` 
    jawaban.value = "sama-sama"
}

function reinaEnd() {
    alert(`terimakasih ${usersData[0]}, sudah berkunjung di website kami`)
    window.location.reload()
    jawaban.value = ""
}