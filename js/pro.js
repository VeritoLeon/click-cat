var adminView = {
	init: function() {
		this.adminForm = $('#adminPanel');
		this.render();
		this.handleSave();
		this.handleCancel();
	},
	render: function() {
		var cat = octopus.getCurrentCat();
		var htmlStr = '<input id="adminName" type="text" placeholder="name" value="' + cat.name + '">' +
				'<input id="adminImg" type="text" placeholder="image source" value="' + cat.src + '">' +
				'<input id="adminClicks" type="number" placeholder="clicks number" value="' + cat.clicks + '">' +
				'<input id="saveCat" type="button" value="Save">' +
				'<input id="cancelCat" type="button" value="Cancel">';
		this.adminForm.html(htmlStr);
		this.adminName = $('#adminName');
		this.adminImg = $('#adminImg');
		this.adminClicks = $('#adminClicks');
	},
	handleSave: function(){
		this.saveBtn = $('#saveCat');
		this.saveBtn.click(function(e) {
				var cat = octopus.getCurrentCat();
				cat.name = adminView.adminName.val();
				cat.src = adminView.adminImg.val();
				cat.clicks = adminView.adminClicks.val();
				adminView.adminForm.html('');

				octopus.saveCat(cat);
		});
	},
	handleCancel: function() {
		this.cancelBtn = $('#cancelCat');
		this.cancelBtn.click(function(e) {
				adminView.adminForm.html('');
		});
	}
};