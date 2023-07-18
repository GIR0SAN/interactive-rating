const ratingCard = document.querySelector('.l-rates')
const ratingValues = document.querySelectorAll('.c-rating__number')
const button = document.querySelector('.c-submit')
const popup = document.querySelector('.l-modal')
const pickedRating = document.querySelector('.user-value')
let rating

let parseRating = (e) => {
  ratingValues.forEach(item => item.classList.remove('active-rate'))
  e.target.classList.add('active-rate')
  rating = e.target.innerText
}

ratingCard.addEventListener('click', parseRating)

button.addEventListener('click', ()=> {
  popup.style.display = "flex"
  pickedRating.innerText = `$(rating)`
})
