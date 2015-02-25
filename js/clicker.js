
var kittens = [];

createMenu = function() {
	for (var i = 0, length = kittens.length; i < length; i++) {
		createItem(kittens[i].name);
	}
}

createItem = function(catName) {
	var item = document.createElement("li");
	item.className = 'catItem';
	var link = document.createElement("a");
	link.id = 'link' + catName;
	link.innerHTML = catName;
	link.href = '';
	item.appendChild(link);

	link.addEventListener('click', handleMenuClick, false);

	var ul = document.getElementsByClassName('catsList')[0];
	ul.appendChild(item);
}

getCat = function(catName) {
	for (var i = 0, length = kittens.length; i < length; i++)
		if(kittens[i].name === catName)
			return kittens[i];
}

handleMenuClick = function(e) {
	document.getElementsByTagName("main")[0].innerHTML = '';
	var newCat = getCat(this.innerHTML);
	newCat.createCatDOM();
}

window.onload = function() {
	kittens.push(new Cat('Sassy', 'img/sassy.jpg', 'Sassy, a white and strawberry fat tabby cat'));
	kittens.push(new Cat('Mattie', 'img/mattie.jpg', 'Mattie, a white and orange fat tabby cat'));
	kittens.push(new Cat('Felix', 'img/sassy.jpg', 'Sassy, a white and strawberry fat tabby cat'));
	kittens.push(new Cat('Silvestre', 'img/mattie.jpg', 'Mattie, a white and orange fat tabby cat'));
	kittens.push(new Cat('Tom', 'img/sassy.jpg', 'Sassy, a white and strawberry fat tabby cat'));
	createMenu();
	kittens[0].createCatDOM();
}


var Cat = function(name, src, alt) {
	this.name = name;
	this.img = this.getImage(src, alt);
	this.numClicks = 0;
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

	var message1 = document.createTextNode('You\'ve petted ' + this.name + ' ');
	var message2 = document.createTextNode(' times!');
	p.appendChild(message1);
	p.appendChild(span);
	p.appendChild(message2);

	return p;
}
