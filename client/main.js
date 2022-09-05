const btn = document.querySelector('.btn');
const aditionalComments = document.getElementById('box_comments')
const sexButtons = document.getElementsByClassName('test-button')
let comments = ''
const answers = {
	answer1: 0,
	answer2: 0,
	answer3: 0,
}
let sex = 1
const buttons = {
	answer1: [
		document.querySelector("#low"),
		document.querySelector("#medium"),
		document.querySelector("#high"),
	],
	answer2: [
		document.querySelector('#low2'),
		document.querySelector("#medium2"),
		document.querySelector("#high2")
	],
	answer3: [
		document.querySelector('#low3'),
		document.querySelector("#medium3"),
		document.querySelector("#high3")
	],
}
aditionalComments.addEventListener('input', handleChange);
btn.addEventListener('click', alert_message);

function saveSex(value) {
	sex = parseInt(value)
	sexButtons[0].classList.toggle('active')
	sexButtons[1].classList.toggle('active')
}

function handleChange(e) {
	comments = e.target.value
}

function saveAnswer(e, property, value){
	console.log(aditionalComments)
	console.log(axios)
	value = parseInt(value)
	answers[property] = value
	let currentButtons = buttons[property]
	for(let i = 0; i < currentButtons.length; i++) {
		console.log(value,i)
		if(value === i) {
			currentButtons[i].style.opacity = 1
		} else {
			currentButtons[i].style.opacity = 0.5
		}
	}
}
async function test4() {
	const test = await axios.get('http://localhost:3000/answers')
	console.log(test.data)
}

async function alert_message(){
	const body = {
		...answers,
		comments,
		sex
	}
	console.log(body)
	const test = await axios.post('http://localhost:3000/answers', body)
	setTimeout(test4, 2000)
}

console.log(this)
