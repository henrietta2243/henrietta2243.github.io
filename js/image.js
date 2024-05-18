const themesDivs = document.querySelectorAll(".themes")

themesDivs.forEach(div => {
  const img = div.querySelector("img")

  function loaded(){
    div.classList.add("loaded")
  }

  if (img.complete) {
    loaded()
  }else {
    img.addEventListener("load", loaded)
  }

  img.onload = function(){
    const btn = div.querySelector("button")
    btn.classList.add("active")
  }

  function notFound(){
    div.style.backgroundImage='url("/Home-Page/img/404.png")';
  }

  if (img.error) {
    notFound()
  } else {
    img.addEventListener("error", notFound)
  }
})

const openNsfwBtn = document.querySelectorAll('[data-nsfw-target]')
const remNuxtBtn = document.querySelectorAll('[data-btn-rem]')

openNsfwBtn.forEach(button => {
  function openNsfw(nsfw){
    if (nsfw == null) return
    nsfw.classList.remove('nsfw')
  }

    button.addEventListener('click', () => {
        const nsfw = document.querySelector(button.dataset.nsfwTarget)
        openNsfw(nsfw)
    })
})

remNuxtBtn.forEach(button => {
  function remNuxt(nuxt){
    if (nuxt == null) return
    nuxt.classList.remove('show')
    nuxt.classList.add("nuxt")
  }
    button.addEventListener('click', () =>{
        const nuxt = document.querySelector(button.dataset.btnRem)
        remNuxt(nuxt)
    })
})