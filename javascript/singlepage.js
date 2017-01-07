function newvalue(){
	let novoli = document.getElementById('novoli').value;
	if(novoli === ''){
		alert("preencha algo para incluir.");
		return false;
	}

	let namesList = document.getElementById('names');
	let list = document.createElement('li');
	list.innerHTML = novoli;
	namesList.appendChild(list);

	limparNovoli();

	$('#names > li').on('click', function(e){
		this.remove();
	});	
};

function ordenar(){
	var arr = [];
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

	$('#names > li').on('click', function(e){
		this.remove();
	});
}

$('#names > li').on('click', function(e){
	this.remove();
});

function limparNovoli(){
	document.getElementById('novoli').value = "";
}