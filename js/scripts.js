window.addEventListener('load', function(){
   
	let inp1 = document.querySelector('.inp1');
	let inp2 = document.querySelector('.inp2');
	let math = document.querySelector(".action")

	let btn = document.querySelector('.go');
	let res = document.querySelector('.res');

	btn.addEventListener('click', () => {
		let num1 = parseInt(inp1.value);
		let num2 = parseInt(inp2.value);

		if (math.value == "+") {
			total = num1 + num2;
		} else if (math.value == "-") {
			total = num1 - num2;
		} else if (math.value == "*") {
			total = num1 * num2;
		} else {
			total = num1 / num2;
		}
		res.innerHTML = total;
		btn.disabled = true;
	});

	function numberDetector() {
		this.value = this.value.replace(/[^\d]/g, '');
	}

	function toggleActive() {
		btn.disabled = false;
	}

	inp1.addEventListener("input", toggleActive);
	inp2.addEventListener("input", toggleActive);
	math.addEventListener("input", toggleActive);

	inp1.addEventListener("input", numberDetector);
	inp2.addEventListener("input", numberDetector);

});
