var Cat = function(name, src, alt) {
	var self = this;
	self.catName = ko.observable(name);
	self.url = ko.observable(src);
	self.desc = ko.observable(alt);
	self.clicksNumber = ko.observable(0);
	self.displayLevel = ko.pureComputed(function() {
		if(self.clicksNumber() < 5)
			return "not amused";
		else if(self.clicksNumber() < 20)
			return "kind of purring";
		else if(self.clicksNumber() < 50)
			return "purring";
		else if(self.clicksNumber() < 100)
			return "purring loudly";
		else if(self.clicksNumber() < 200)
			return "dozing off";
		else if(self.clicksNumber() < 250)
			return "asleep";
		else if(self.clicksNumber() < 500)
			return "getting pissed off";
		else if(self.clicksNumber() < 505)
			return "bitting you";
	}, self);
	this.clickCat = function() {
		self.clicksNumber(self.clicksNumber() + 1);
	};
};

var ViewModel = function () {
	var self = this;
	self.cats = ko.observableArray(
		[
			new Cat('Sassy', 'img/sassy.jpg', 'Sassy, a white and strawberry fat tabby cat'),
			new Cat('Mattie', 'img/mattie.jpg', 'Mattie, a white and orange fat tabby cat'),
			new Cat('Felix', 'img/sassy.jpg', 'Sassy, a white and strawberry fat tabby cat'),
			new Cat('Silvestre', 'img/mattie.jpg', 'Mattie, a white and orange fat tabby cat'),
			new Cat('Tom', 'img/sassy.jpg', 'Sassy, a white and strawberry fat tabby cat')
		]
	);
	self.currentCat = ko.observable(self.cats()[0]);
	self.setCurrentCat = function(obj) {
		for(var cat in self.cats()) {
			if(self.cats()[cat].catName() === obj.catName()) {
				return self.currentCat(self.cats()[cat]); 
			}
		}
	}
};
ko.applyBindings(new ViewModel());