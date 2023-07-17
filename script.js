var rate = document.getElementById('um')

const button = document.getElementById('button')
const popup = document.getElementById('modal')


rate.addEventListener('click', ()=>{
  rate.style.backgroundColor = "var(--Orange)"
})

button.addEventListener('click', ()=>{
  popup.style.display = 'flex'
})