const iconSun = document.querySelector('.ri-sun-fill');
const iconMoon = document.querySelector('.ri-moon-fill');
const textArea = document.querySelector('textarea');
const clearBtn = document.querySelector('.clear-btn');
iconSun.addEventListener('click', ()=>{

	textArea.style.backgroundColor="#ddd";
	textArea.style.color="#111";
})
iconMoon.addEventListener('click', ()=>{

	textArea.style.backgroundColor="#050016";
	textArea.style.color="#fff";
})
clearBtn.addEventListener('click', ()=>{
textArea.value='';
})
