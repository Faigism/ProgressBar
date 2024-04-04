const nextBtn = document.querySelector('.nextBtn')
const prevBtn = document.querySelector('.prevBtn')
const line = document.querySelectorAll('.line')
const line2 = document.querySelectorAll('.line2')
const progressNumbers = document.querySelectorAll('.progNum li')

let currentStep = 1
let currentStep2 = 0

nextBtn.addEventListener('click', () => {
  line2[currentStep2].style.border = '1px solid #000'
  line2[currentStep2].style.width = '50px'
  line2[currentStep2].style.opacity = '1'
  currentStep2++
  progressNumbers[currentStep].classList.add('active')
  currentStep++
  if (currentStep === progressNumbers.length) {
    nextBtn.setAttribute('disabled', true)
  }
  if (currentStep > 1) {
    prevBtn.removeAttribute('disabled')
  }
})
prevBtn.addEventListener('click', () => {
  if (currentStep > 1) {
    currentStep--
    if (currentStep === 1) {
      prevBtn.setAttribute('disabled', true)
    }
    currentStep2--
    progressNumbers[currentStep].classList.remove('active')
    line2[currentStep2].style.border = '1px solid #c0b9b9'
    line2[currentStep2].style.width = '0'
    line2[currentStep2].style.opacity = '0'
  }
  if (currentStep < progressNumbers.length) {
    nextBtn.removeAttribute('disabled')
  }
})
