var app = angular.module('app')

var jumbotron = $('.jumbotron')
var imgPath = 'url(../img/cosmos.jpg)'
var galleryCont = $('#galleryCont')
var testH2 = $('#testH2')
var secondTestH2 = $('#secondTestH2')
var backgroundImg = ''

app.controller('imgCtrl', function ($scope, $http) {

	$scope.$parent.mainMsg = "Gallery"
	$scope.imgs = imgs
	$scope.imageName = ''

	$scope.imgOver = function() {
		this.img.switch = true
	}
	$scope.imgLeave = function() {
		this.img.switch = false
	}

	$scope.setBackground = function() {
		var imgSliced = backgroundImg.slice(4)

		$http.post('/background' + imgSliced)
		
		$('body').css({
			'background-image': 'url(' + backgroundImg + ')',
			"background-size": "100vw 100vh",
			"background-attachment": "fixed"
		})
	}

	$scope.imgClick = function(obj) {
		modal.style.display = "block";
		modalImg.src = obj.currentTarget.attributes.src.nodeValue;
		backgroundImg = obj.currentTarget.attributes.src.nodeValue;
	    
	    var imgName = backgroundImg.slice(4, -4)
	    $scope.imageName = imgName.charAt(0).toUpperCase() + imgName.slice(1)
	}

	// MODAL JS
	var modal = document.getElementById('myModal');
	var modalImg = document.getElementById("modalImg");
	var span = document.getElementsByClassName("close")[0];
	

	span.onclick = function() {
	  modal.style.display = "none";
	}
})

var imgs = [
	{ name: 'img/crysis.jpg', switch: false },
	{ name: 'img/cosmos.jpg', switch: false },
	{ name: 'img/emailBirds.jpg', switch: false },
	{ name: 'img/treeSunset.jpg', switch: false },
	{ name: 'img/eveningTree.jpg', switch: false },
	{ name: 'img/forestTree.jpg', switch: false },
	{ name: 'img/tiger.jpg', switch: false },
	{ name: 'img/baloons.jpg', switch: false },
	{ name: 'img/nature.jpg', switch: false }
]
