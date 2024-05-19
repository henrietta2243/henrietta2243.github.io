const themesDivs = document.querySelectorAll(".themes-image")

themesDivs.forEach(div => {
    const img = div.querySelector("img")

    function loaded(){
        div.classList.add("loaded");
        div.style.backgroundImage='url("")';
        div.style.backgroundColor='aliceblue';
    }

    if (img.complete) {
        loaded()
    } else {
        img.addEventListener("load", loaded)
    }

    function nnxt() {
        div.classList.remove("nnxt")
    }

    if (img.complete) {
        nnxt()
    } else {
        img.addEventListener('load', nnxt)
    }

    function notFound(){
        div.style.backgroundImage='url("/img/404.png")';
    }

    if (img.error){
        notFound()
    } else {
        img.addEventListener("error", notFound)
    }

})

const relDivs = document.querySelectorAll(".rel-image")



const button1 = document.querySelectorAll(".show")
button1.forEach(div => {
    const img = document.querySelector(".imgDsp1")

    function active(){
        div.classList.add("active")
    }

    if (img.complete) {
        active()
    } else {
        img.addEventListener('load', active)
    }
})

const imgDsp = document.querySelector(".imgDsp")
imgDsp.addEventListener('load', function(){
    const show = document.getElementById("prev-btn1")
    show.classList.add("active")
})



const openNsfwBtn = document.querySelectorAll('[data-nsfw-target]')
const remNuxtBtn = document.querySelectorAll('[data-btn-rem]')

openNsfwBtn.forEach(button => {
    button.addEventListener('click', () => {
        const nsfw = document.querySelector(button.dataset.nsfwTarget)
        openNsfw(nsfw)
    })
})

remNuxtBtn.forEach(button => {
    button.addEventListener('click', () =>{
        const nuxt = document.querySelector(button.dataset.btnRem)
        remNuxt(nuxt)
    })
})

function openNsfw(nsfw){
    if (nsfw == null) return
    nsfw.classList.remove('nsfw')
    nsfw.classList.remove('nsfw1')
}

function remNuxt(nuxt){
    if (nuxt == null) return
    nuxt.classList.remove('show')
    nuxt.classList.remove('show1')
    nuxt.classList.add('nuxt')
}

const imageLink = document.querySelectorAll('.imgLnk')

imageLink.forEach(function(link) {
    const href = link.getAttribute('href')
    const img = link.querySelector('.imgDsp')
    img.setAttribute('src', href)
})
