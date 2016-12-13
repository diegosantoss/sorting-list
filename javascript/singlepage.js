function newvalue(){
	let novoli = document.getElementById('novoli').value;
		if(novoli === ''){
			alert("preencha algo para incluir.");
		}

	let namesList = document.getElementById('names');
	let list = document.createElement('li');
	console.log(list.innerHTML = novoli);
	namesList.appendChild(list);

};

function ordenar(){
	let arr = [];
	let namesList = document.getElementById("names");
	let list = namesList.getElementsByTagName("li");
	for (var i = 0; i < list.length; i++) {
	    let z = list[i].innerText;
	    arr.push(z);
	    arr.sort();
	}
	$('li').remove();
	arr.forEach(function(index, val) {
		namesList.innerHTML = namesList.innerHTML + '<li>' + arr[val] + '</li>';
	});
}
