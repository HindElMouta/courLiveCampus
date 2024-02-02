function chargement() {
    alert("page chargée")
}

function clic() {
    // Récupère le 1er élément correspondant
    // const div1 = document.getElementById('div1')
    const div1 = document.querySelector('.btn')

    // Récupère une liste avec tous les éléments correspondant
    // const div1 = document.getElementsByTagName('div')
    // const div1 = document.getElementsByClassName('btn')
    // const div1 = document.querySelectorAll('.btn')

    // div1.innerHTML = "<script>alert('site hacké')</script><h1>texte ajouté par js</h1>"
    div1.innerText = "<script>alert('site hacké')</script><h1>texte ajouté par js</h1>"


}

function btn2() {
    const div1 = document.querySelector('.btn')
    // div1.className = "bold italic"
    div1.classList.toggle('bold')
    div1.classList.toggle('italic')
    div1.style.color = "red"
}

function btn3() {
    const h1 = document.createElement('h1')
    h1.innerHTML = "Hello World !"
    const test = document.querySelector('.test')
    test.appendChild(h1)
}

function btn4() {
    const btnp = document.querySelector('.btnp')
    btnp.remove()
}