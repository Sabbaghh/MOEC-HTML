const btns = document.querySelectorAll('.btn');
const dialog = document.querySelector('.dialog');
const pdfObject = document.querySelector('.pdf-obj');
const closeButtton = document
	.querySelector('.close-btn')
	.addEventListener('click', () => {
		dialog.classList.add('close');
	});
btns.forEach((btn) => btn.addEventListener('click', () => onBtnClick(btn)));
const onBtnClick = (btn) => {
	const data = btn.getAttribute('data');
	dialog.classList.remove('close');
	let path = `./files/pdfs/${data}.pdf`;
	pdfObject.setAttribute('data', path);
	dialog.classList.remove('close');
};
