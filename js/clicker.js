var Cat = function(name, src, alt) {
	this.name = name;
	this.img = this.getImage(src, alt);
	this.numClicks = 0;
	this.createCatDOM();
	this.catClickListener();
}

Cat.prototype.catClickListener = function() {
	var cat = this;
	this.img.addEventListener('click', function() {
		cat.numClicks++;
		var counter = document.getElementById('pettings' + cat.name);
		counter.innerHTML = cat.numClicks;
	}, false);
}

addClick = function(cat) {
	console.log(cat);
	cat.numClicks++;
	var counter = document.getElementById('pettings' + cat.name);
	counter.innerHTML = cat.numClicks;
}

Cat.prototype.createCatDOM = function() {
	var article = document.createElement("article");
	article.className  = "cat";

	var imgWrapper = document.createElement("div");
	var nameTitle = this.getTitle();
	imgWrapper.appendChild(nameTitle);
	imgWrapper.appendChild(this.img);
	article.appendChild(imgWrapper);

	var messageWrapper = document.createElement("div");
	messageWrapper.appendChild(this.getMessage());
	article.appendChild(messageWrapper);

	document.getElementsByTagName("main")[0].appendChild(article);
}

Cat.prototype.getTitle = function() {
	var nameTitle = document.createElement("h2");
	nameTitle.className  = 'name';
	nameTitle.innerHTML = this.name;
	return nameTitle;
}

Cat.prototype.getImage = function(src, alt) {
	var img = document.createElement('img');
	img.id = 'cat' + this.name;
	img.className  = 'catImg';
	img.src = src;
	img.alt = alt!==null? alt : 'Cat image';
	return img;
}

Cat.prototype.getMessage = function() {
	var p = document.createElement('p');
	p.className = 'message';

	var span = document.createElement('span');
	span.id = 'pettings' + this.name;
	span.className = 'counter';
	span.innerHTML = this.numClicks;

	var message1 = document.createTextNode('You\'ve pet ' + this.name + ' ');
	var message2 = document.createTextNode(' times!');
	p.appendChild(message1);
	p.appendChild(span);
	p.appendChild(message2);

	return p;
}

var mattie = new Cat('Mattie', 'img/mattie.jpg', 'Mattie, a white and orange fat tabby cat');
var sassy = new Cat('Sassy', 'img/sassy.jpg', 'Sassy, a white and strawberry fat tabby cat');