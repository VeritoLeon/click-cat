
	var Cat = function(name, src, alt) {
		this.name = name,
		this.src = src,
		this.alt = alt,
		this.clicks = 0
	};

	var model = {
		currentCat: null,
		cats: [
			new Cat('Sassy', 'img/sassy.jpg', 'Sassy, a white and strawberry fat tabby cat'),
			new Cat('Mattie', 'img/mattie.jpg', 'Mattie, a white and orange fat tabby cat'),
			new Cat('Felix', 'img/sassy.jpg', 'Sassy, a white and strawberry fat tabby cat'),
			new Cat('Silvestre', 'img/mattie.jpg', 'Mattie, a white and orange fat tabby cat'),
			new Cat('Tom', 'img/sassy.jpg', 'Sassy, a white and strawberry fat tabby cat')
		],
		getCat: function(name) {
			var cats = this.getAllCats();
			for(var prop in cats) {
				if(cats[prop].name === name) {
					return cats[prop];
				}
			}
		}
	};

	var octopus = {
		init: function() {
			this.setCurrentCat(model.cats[0]);
            listView.init();
            detailsView.init();
        },
        getCurrentCat: function(){
        	return model.currentCat;
        },
        setCurrentCat: function(cat){
        	model.currentCat = cat;
        },
        getAllCats: function() {
        	return model.cats;
        },
        getCat: function(name) {
        	return model.getCat(name);
        },
        clickCat: function(name) {
        	this.getCurrentCat().clicks++;
        },
        showAdminPanel: function() {
        	adminView.init();
        },
        saveCat: function(cat) {
        	detailsView.render();
			listView.render();
        }
	};
	var listView = {
		init: function() {
			listView.render();
		},
		render: function() {
			this.catList = $('#catsList');
			var htmlStr = '';
            octopus.getAllCats().forEach(function(cat){
                htmlStr += '<li class="catItem"> <a id="cat'+
                        cat.name + '">'+ cat.name +
                    '</a></li>';
            });
            this.catList.html( htmlStr );
            this.handleSelection();
		},
		handleSelection: function() {
         	octopus.getAllCats().forEach(function(cat){
                $('#cat' + cat.name).click(function(e) {
                	octopus.setCurrentCat(cat);
                	detailsView.render();
                	e.preventDefault();
				});
         		
         	});
		}

	};
	var detailsView = {
		init: function() {
			this.title = $( '.name' );
			this.message = $( '.message' );
			this.picture = $( '#catPic' );
			this.adminBtn = $( '.admin' );
			this.render();
			this.handleClick();
			this.handleAdmin();
		},
		render: function() {
			var cat = octopus.getCurrentCat();
			var htmlStr = 'You\'ve petted ' + cat.name + '<span id="pettings' + cat.name + '" class="counter">' + cat.clicks + '</span> times!';
			this.message.html( htmlStr );
			this.title.html(cat.name);
			this.picture.attr('src', cat.src);
			this.picture.attr('alt', cat.alt);
		},
		handleClick: function() {
			this.picture.click(function(e) {
				var cat = octopus.getCurrentCat();
            	octopus.clickCat();
            	$('#pettings' + cat.name).html(cat.clicks);
			});
		},
		handleAdmin: function() {
			this.adminBtn.click(function(e) {
				octopus.showAdminPanel();
			});
		}
	};

	octopus.init();
