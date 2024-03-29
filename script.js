const widthGreenLine = (elems) => {
  for (let elem of elems) {
    elem.querySelector('.growLine').style.width =
      elem.previousElementSibling.querySelector('.rateLine').innerHTML + '%';
  }
};
widthGreenLine(document.querySelectorAll('.baseLine'));
document.querySelector('.milleseconds').innerHTML = parseInt(
  (Date.now() - new Date(2018, 0, 28)) / 86400000
);
// document.querySelector('.milleseconds').innerHTML = Date.now() - new Date(2017)
document.querySelector('.year').innerHTML = new Date().getFullYear();
// document.querySelector('.expYear').innerHTML = new Date().getFullYear() - 2017 + '+'
const Slider = (options) => {
  let elems = options.elems,
    prev = options.prev,
    next = options.next,
    count = 0;
  const slide = () => {
    for (let elem of elems) {
      elem.classList.add('hidden');
    }
    elems[count].classList.remove('hidden');
  };
  slide();
  prev.onclick = () => {
    count <= 0 ? (count = elems.length - 1) : count--;
    slide();
  };
  next.onclick = () => {
    count >= elems.length - 1 ? (count = 0) : count++;
    slide();
  };
};
Slider({
  elems: document.querySelectorAll('.slider > div'),
  prev: document.querySelector('.prev'),
  next: document.querySelector('.next'),
});
let arrow = document.getElementById('arrowUp');
window.addEventListener('scroll', () => {
  arrow.hidden =
    document.documentElement.clientHeight / 2 >
    document.documentElement.scrollTop;
});
document.addEventListener('click', (e) => {
  if (e.target.dataset.section) {
    e.preventDefault();
    window.scrollBy({
      top: document
        .querySelector(`.${e.target.dataset.section}`)
        .getBoundingClientRect().top,
      behavior: 'smooth',
    });
  } else if (e.target.closest('#arrowUp')) {
    window.scrollBy({
      top: -window.scrollY,
      behavior: 'smooth',
    });
  }
});
/*
arrowUp.onclick = function (e) {
	let start = Date.now()
	let timer = setTimeout(function func() {
		let diff = start - Date.now()
		window.scrollBy(0, diff)
		timer = setTimeout(func, 25)
		if (window.pageYOffset < 1) clearTimeout(timer)
	}, 25)
	/*			let timer = setInterval(function() {
					let diff = start - Date.now()
					window.scrollBy(0, diff)
					if (window.pageYOffset < 1) clearInterval(timer)
				},25)*/
// }
// btnSubmit.onclick = function (e) {
// 	// e.preventDefault()
// 	let width = document.documentElement.clientWidth
// 	let right = parseInt(getComputedStyle(arrowUp).right)
// 	showCover(width, right)
// 	let form = document.createElement('div')
// 	form.id = 'modalId'
// 	form.insertAdjacentHTML('beforeend', '<button id="ok">Thanks!</button>')
// 	document.body.append(form)
// 	ok.onclick = function () {
// 		hideCover(width, right)
// 	}
// 	document.onkeydown = function (e) {
// 		if (e.key == 'Escape') {
// 			hideCover(width, right)
// 		}
// 	}
// }
