// scripts

// corusel left margin
const screenWidth = window.innnerWidth || document.documentElement.clientWidth || document.body.clientWidth
const marginLeft = (screenWidth * 0.080)
jsItems = document.querySelectorAll('.corusel__item')

jsCorusel.setAttribute('style', `transform: translateX(8vw);`)

const allButtons = document.querySelectorAll('.corusel__button')
let number = 1

jsRightButton.onclick = () => {
	if(number <= 2) {
		let dimension = number * 29
		jsCorusel.setAttribute('style', `transform: translateX(-${dimension}vw);`)

		jsItems[number - 1].classList.remove('active-user')
		jsItems[number].classList.add('active-user')

		allButtons[number - 1].classList.remove('active-button')
		allButtons[number].classList.add('active-button')
		
		number++

	}
	else {
		number = 1
	}
}

jsLeftButton.onclick = () => {
	jsCorusel.setAttribute('style', `transform: translateX(8vw);`)
	// console.log(number)

	jsItems[number - 1].classList.remove('active-user')
	jsItems[0].classList.add('active-user')

	allButtons[number-1].classList.remove('active-button')
	allButtons[number-number].classList.add('active-button')
}