var app = angular.module('store', ['ngRoute']);

app.controller('StoreController', function() {
    this.memoryCardsData = sd;
    this.usbDrivesData = pd;
    this.powerBanksData = pb;
    this.speakersData = sp;
    this.memoryCards = true;
    this.usbDrives = false;
    this.powerBanks = false;
    this.speakers = false;
    this.show= false;
    this.hidePaymentButton = function(){
 	console.log("function called");
 	var myEl = angular.element( document.querySelector( '#paymentButton' ) );
myEl.css('display','none');
 };
  });


app.controller('DetailsController', ['$routeParams','$http', function($routeParams,$http) {
 this.pid = $routeParams.pid;
 this.type = $routeParams.type;
 this.memoryCardsData = sd;
 this.usbDrivesData = pd;
 this.powerBanksData = pb;
 this.speakersData = sp;
 this.imageSource = "1";
 this.showPaymentButton = function(id){
 	console.log("displaying button for "+id);
 	var div = angular.element( document.querySelector( '#paymentButton' ) );
	div.css('display','block');
	var evo8 = angular.element( document.querySelector( '#evo8' ) );
	var evo16 = angular.element( document.querySelector( '#evo16' ) );
	var evo32 = angular.element( document.querySelector( '#evo32' ) );
	var evo64 = angular.element( document.querySelector( '#evo64' ) );
	var san8 = angular.element( document.querySelector( '#san8' ) );
	var san16 = angular.element( document.querySelector( '#san16' ) );
	var san32 = angular.element( document.querySelector( '#san32' ) );
	var san64 = angular.element( document.querySelector( '#san64' ) );
	var pd8 = angular.element( document.querySelector( '#pd8' ) );
	var pd16 = angular.element( document.querySelector( '#pd16' ) );
	var pd32 = angular.element( document.querySelector( '#pd32' ) );
	var pd64 = angular.element( document.querySelector( '#pd64' ) );
	var rs699 = angular.element( document.querySelector( '#rs699' ) );
	if(id=='evo8'){
		evo8.css('display','block');
		evo16.css('display','none');
		evo32.css('display','none');
		evo64.css('display','none');
		san8.css('display','none');
		san16.css('display','none');
		san32.css('display','none');
		san64.css('display','none');
		pd8.css('display','none');
		pd16.css('display','none');
		pd32.css('display','none');
		pd64.css('display','none');
		rs699.css('display','none');
	};
 	if(id=='evo16'){
 		rs699.css('display','none');
 		san8.css('display','none');
		san16.css('display','none');
		san32.css('display','none');
		san64.css('display','none');
		evo8.css('display','none');
		evo16.css('display','block');
		evo32.css('display','none');
		evo64.css('display','none');
		pd8.css('display','none');
		pd16.css('display','none');
		pd32.css('display','none');
		pd64.css('display','none');
 	};
 	if(id=='evo32'){
 		rs699.css('display','none');
 		san8.css('display','none');
		san16.css('display','none');		
		san32.css('display','none');
		san64.css('display','none');
		evo8.css('display','none');
		evo16.css('display','none');
		evo32.css('display','block');
		evo64.css('display','none');
		pd8.css('display','none');
		pd16.css('display','none');
		pd32.css('display','none');
		pd64.css('display','none');
 	};
 	if(id=='evo64'){
 		rs699.css('display','none');
 		san8.css('display','none');
		san16.css('display','none');
		san32.css('display','none');
		san64.css('display','none');
		evo8.css('display','none');
		evo16.css('display','none');
		evo32.css('display','none');
		evo64.css('display','block');
		pd8.css('display','none');
		pd16.css('display','none');
		pd32.css('display','none');
		pd64.css('display','none');
 	};
 	if(id=='san8'){
 		rs699.css('display','none');
 		san8.css('display','block');
		san16.css('display','none');
		san32.css('display','none');
		san64.css('display','none');
		evo8.css('display','none');
		evo16.css('display','none');
		evo32.css('display','none');
		evo64.css('display','none');
		pd8.css('display','none');
		pd16.css('display','none');
		pd32.css('display','none');
		pd64.css('display','none');
 	};
 	if(id=='san16'){
 		rs699.css('display','none');
 		san8.css('display','none');
		san16.css('display','block');
		san32.css('display','none');
		san64.css('display','none');
		evo8.css('display','none');
		evo16.css('display','none');
		evo32.css('display','none');
		evo64.css('display','none');
		pd8.css('display','none');
		pd16.css('display','none');
		pd32.css('display','none');
		pd64.css('display','none');
 	};
 	if(id=='san32'){
 		rs699.css('display','none');
 		san8.css('display','none');
		san16.css('display','none');
		san32.css('display','block');
		san64.css('display','none');
		evo8.css('display','none');
		evo16.css('display','none');
		evo32.css('display','none');
		evo64.css('display','none');
		pd8.css('display','none');
		pd16.css('display','none');
		pd32.css('display','none');
		pd64.css('display','none');
	};
 	if(id=='san64'){
 		rs699.css('display','none');
 		san8.css('display','none');
		san16.css('display','none');
		san32.css('display','none');
		san64.css('display','block');
		evo8.css('display','none');
		evo16.css('display','none');
		evo32.css('display','none');
		evo64.css('display','none');
		pd8.css('display','none');
		pd16.css('display','none');
		pd32.css('display','none');
		pd64.css('display','none');
	};
 	if(id=='sanpd8'){
 rs699.css('display','none');
 		san8.css('display','none');
		san16.css('display','none');
		san32.css('display','none');
		san64.css('display','none');
		evo8.css('display','none');
		evo16.css('display','none');
		evo32.css('display','none');
		evo64.css('display','none');
		pd8.css('display','block');
		pd16.css('display','none');
		pd32.css('display','none');
		pd64.css('display','none');
	};
 	if(id=='sanpd16'){
 	rs699.css('display','none');
 		san8.css('display','none');
		san16.css('display','none');
		san32.css('display','none');
		san64.css('display','none');
		evo8.css('display','none');
		evo16.css('display','none');
		evo32.css('display','none');
		evo64.css('display','none');
		pd8.css('display','none');
		pd16.css('display','block');
		pd32.css('display','none');
		pd64.css('display','none');
	};
 	if(id=='sanpd32'){
 	rs699.css('display','none');
 		san8.css('display','none');
		san16.css('display','none');
		san32.css('display','none');
		san64.css('display','none');
		evo8.css('display','none');
		evo16.css('display','none');
		evo32.css('display','none');
		evo64.css('display','none');
		pd8.css('display','none');
		pd16.css('display','none');
		pd32.css('display','block');
		pd64.css('display','none');
	};
 	if(id=='sanpd64'){
 	rs699.css('display','none');
 		san8.css('display','none');
		san16.css('display','none');
		san32.css('display','none');
		san64.css('display','none');
		evo8.css('display','none');
		evo16.css('display','none');
		evo32.css('display','none');
		evo64.css('display','none');
		pd8.css('display','none');
		pd16.css('display','none');
		pd32.css('display','none');
		pd64.css('display','block');
	};
 	if(id=='mi20000'||id=='jbl_go'){
 		rs699.css('display','block');
 		san8.css('display','none');
		san16.css('display','none');
		san32.css('display','none');
		san64.css('display','none');
		evo8.css('display','none');
		evo16.css('display','none');
		evo32.css('display','none');
		evo64.css('display','none');
		pd8.css('display','none');
		pd16.css('display','none');
		pd32.css('display','none');
		pd64.css('display','none');
 	};
 };
 this.showPaymentButton(this.pid);
 this.hidePaymentButton = function(){
 	console.log("function called");
 	var myEl = angular.element( document.querySelector( '#paymentButton' ) );
	myEl.css('display','none');
 };
 this.getType = function(){
 	if (this.type=='sd') {return this.memoryCardsData};
 	if (this.type=='pd') {return this.usbDrivesData};
 	if (this.type=='pb') {return this.powerBanksData};
 	if (this.type=='sp') {return this.speakersData};
 };
}]);


app.config(['$routeProvider', function($routeProvider) {
 $routeProvider
  .when('/details/:pid', {
   templateUrl: 'details.html',
   controller: 'DetailsController',
   controllerAs: 'detail'
  })
  .when('/', {
   templateUrl: 'store.html',
   controller: 'StoreController',
   controllerAs: 'store'
  })
  .when('/order/:type/:pid', {
   templateUrl: 'order.html',
   controller: 'DetailsController',
   controllerAs: 'detail'
  })
  .when('/track', {
   templateUrl: 'track.html',
   controller:  'StoreController' ,
   controllerAs: 'item'
  })
  .when('/contact', {
   templateUrl: 'contact.html',
   controller:  'StoreController' ,
   controllerAs: 'item'
  })
 .otherwise({
  template: '<h1>404 page not found</h1>'
 });
}])

var sd = [
	{
		"id":"evo8",
		"name":"Samsung Evo 8gb class 10 memory card",
		"price":160,
		"discount":10,
		"details":[
			"Capacity: 8 GB",
			"MicroSDHC",
			"Class 10",
			"Read Speed: 48 MB/s"
		],
		"inStock":true,
		"description":"Amazing Capacity - Save Upto 37270 Photos or 490 mins of Full HD Video or 1050 mins of HD Video or 15330 MP3 Songs, Durability: 10000 Mating Cycles , FCC, CE, VCCI, NATA Certification, Minimum Storage Temperature: -40 °C",
		"similarItems":[
			"evo16",
			"evo32",
			"evo64",
			"evo128"
		]
	},
	{
		"id":"evo16",
		"name":"Samsung Evo 16gb class 10 memory card",
		"price":200,
		"discount":10,
		"details":[
			"Capacity: 16 GB",
			"MicroSDHC",
			"Class 10",
			"Read Speed: 48 MB/s"
		],
		"inStock":true,
		"description":"Amazing Capacity - Save Upto 37270 Photos or 490 mins of Full HD Video or 1050 mins of HD Video or 15330 MP3 Songs, Durability: 10000 Mating Cycles , FCC, CE, VCCI, NATA Certification, Minimum Storage Temperature: -40 °C",
		"similarItems":[
			"evo8",
			"evo32",
			"evo64",
			"evo128"
		]
	},
	{
		"id":"evo32",
		"name":"Samsung Evo 32gb class 10 memory card",
		"price":300,
		"discount":10,
		"details":[
			"Capacity: 32 GB",
			"MicroSDHC",
			"Class 10",
			"Read Speed: 48 MB/s",
		],
		"inStock":true,
		"description":"Amazing Capacity - Save Upto 37270 Photos or 490 mins of Full HD Video or 1050 mins of HD Video or 15330 MP3 Songs, Durability: 10000 Mating Cycles , FCC, CE, VCCI, NATA Certification, Minimum Storage Temperature: -40 °C",
		"similarItems":[
			"evo8",
			"evo16",
			"evo64",
			"evo128"
		]
	},{
		"id":"evo64",
		"name":"Samsung Evo 64gb class 10 memory card",
		"price":400,
		"discount":20,
		"details":[
			"Capacity: 64 GB",
			"MicroSDHC",
			"Class 10",
			"Read Speed: 48 MB/s"
		],
		"inStock":true,
		"description":"Amazing Capacity - Save Upto 37270 Photos or 490 mins of Full HD Video or 1050 mins of HD Video or 15330 MP3 Songs, Durability: 10000 Mating Cycles , FCC, CE, VCCI, NATA Certification, Minimum Storage Temperature: -40 °C",
		"similarItems":[
			"evo8",
			"evo16",
			"evo32",
			"evo128"
		]
	},{
		"id":"evo128",
		"name":"Samsung Evo 128gb class 10 memory card",
		"price":1500,
		"discount":20,
		"details":[
			"Capacity: 128 GB",
			"MicroSDXC",
			"Class 10",
			"Read Speed: 48 MB/s"
		],
		"inStock":false,
		"description":"Amazing Capacity - Save Upto 37270 Photos or 490 mins of Full HD Video or 1050 mins of HD Video or 15330 MP3 Songs, Durability: 10000 Mating Cycles , FCC, CE, VCCI, NATA Certification, Minimum Storage Temperature: -40 °C",
		"similarItems":[
			"evo8",
			"evo16",
			"evo32",
			"evo64"
		]
	},{
		"id":"san8",
		"name":"Sandisk 8gb class 10 memory card",
		"price":168,
		"discount":10,
		"details":[
			"Capacity: 8 GB",
			"MicroSDHC",
			"Class 10",
			"Read Speed: 80 MB/s"
		],
		"inStock":true,
		"description":"Amazing Capacity - Save Upto 37270 Photos or 490 mins of Full HD Video or 1050 mins of HD Video or 15330 MP3 Songs, Durability: 10000 Mating Cycles , FCC, CE, VCCI, NATA Certification, Minimum Storage Temperature: -40 °C",
		"similarItems":[
			"san16",
			"san32",
			"san64",
			"san128"
		]
	},{
		"id":"san16",
		"name":"Sandisk 16gb class 10 memory card",
		"price":218,
		"discount":10,
		"details":[
			"Capacity: 16 GB",
			"MicroSDHC",
			"Class 10",
			"Read Speed: 98 MB/s"
		],
		"inStock":true,
		"description":"Amazing Capacity - Save Upto 37270 Photos or 490 mins of Full HD Video or 1050 mins of HD Video or 15330 MP3 Songs, Durability: 10000 Mating Cycles , FCC, CE, VCCI, NATA Certification, Minimum Storage Temperature: -40 °C",
		"similarItems":[
			"san8",
			"san32",
			"san64",
			"san128"
		]
	},{
		"id":"san32",
		"name":"Sandisk 32gb class 10 memory card",
		"price":312,
		"discount":10,
		"details":[
			"Capacity: 32 GB",
			"MicroSDHC",
			"Class 10",
			"Read Speed: 80 MB/s"
		],
		"inStock":true,
		"description":"Amazing Capacity - Save Upto 37270 Photos or 490 mins of Full HD Video or 1050 mins of HD Video or 15330 MP3 Songs, Durability: 10000 Mating Cycles , FCC, CE, VCCI, NATA Certification, Minimum Storage Temperature: -40 °C",
		"similarItems":[
			"san8",
			"san16",
			"san64",
			"san128"
		]
	},
	{
		"id":"san64",
		"name":"Sandisk 64gb class 10 memory card",
		"price":424,
		"discount":20,
		"details":[
			"Capacity: 64 GB",
			"MicroSDXC",
			"Class 10",
			"Read Speed: 98 MB/s"
		],
		"inStock":true,
		"description":"Amazing Capacity - Save Upto 37270 Photos or 490 mins of Full HD Video or 1050 mins of HD Video or 15330 MP3 Songs, Durability: 10000 Mating Cycles , FCC, CE, VCCI, NATA Certification, Minimum Storage Temperature: -40 °C",
		"similarItems":[
			"san8",
			"san16",
			"san32",
			"san128"
		]
	},
	{
		"id":"san128",
		"name":"Sandisk 128gb class 10 memory card",
		"price":1580,
		"discount":20,
		"details":[
			"Capacity: 128 GB",
			"MicroSDXC",
			"Class 10",
			"Read Speed: 80 MB/s"
		],
		"inStock":false,
		"description":"Amazing Capacity - Save Upto 37270 Photos or 490 mins of Full HD Video or 1050 mins of HD Video or 15330 MP3 Songs, Durability: 10000 Mating Cycles , FCC, CE, VCCI, NATA Certification, Minimum Storage Temperature: -40 °C",
		"similarItems":[
			"san8",
			"san16",
			"san32",
			"san64",
		]
	}
];

var pd = [
	{
		"id":"sanpd8",
		"name":"Sandisk Cruzer Blade USB Utility Pendrive 8 GB",
		"price":200,
		"discount":10,
		"details":[
			"USB 2.0|8 GB",
			"Plastic",
			"For Laptop, Desktop Computer",
			"Color: Multicolor"
		],
		"inStock":true,
		"description":"Invest in this SanDisk Cruzer 8GB pen drive so that you can carry important files with you without having to carry your laptop. It comes with a loophole that you can use to tie a lanyard so that you won't lose it.",
		"similarItems":[
			"sanpd16",
			"sanpd32",
			"sanpd64",
		]
	},
	{
		"id":"sanpd16",
		"name":"Sandisk Cruzer Blade 16 GB Utility Pendrive",
		"price":280,
		"discount":10,
		"details":[
			"USB 2.0|16 GB",
			"Plastic",
			"For Laptop, Desktop Computer",
			"Color: Multicolor"
		],
		"inStock":true,
		"description":"Featuring a sleek, compact body, the SanDisk Cruzer Blade pen drive can easily fit into the pocket of your jeans or your bag and accompany you everywhere. Also, you can attach a strap to it to easily carry it along. It comes with 16 GB of storage capacity that offers enough room for your photos, movies, music and personal data",
		"similarItems":[
			"sanpd8",
			"sanpd32",
			"sanpd64"
		]
	},
	{
		"id":"sanpd32",
		"name":"Sandisk Cruzer Blade 32 GB",
		"price":420,
		"discount":20,
		"details":[
			"USB 2.0|32 GB",
			"Plastic",
			"For Laptop, Desktop Computer",
			"Color: Multicolor"
		],
		"inStock":true,
		"description":"Meet the SanDisk Cruzer Blade 32 GB pendrive - your friendly storage device. Store all that you want, from movies to songs, pictures to videos, PDF files to documents, this in USB 2.0",
		"similarItems":[
			"sanpd8",
			"sanpd16",
			"sanpd64"
		]
	},{
		"id":"sanpd64",
		"name":"Sandisk Cruzer Blade 64 GB",
		"price":540,
		"discount":20,
		"details":[
			"USB 2.0|64 GB",
			"Plastic",
			"For Laptop, Desktop Computer",
			"Color: Multicolor"
		],
		"inStock":true,
		"description":"",
		"similarItems":[
			"sanpd8",
			"sanpd16",
			"sanpd32"
		]
	}
];

var pb = [
	{
		"id":"mi20000",
		"name":"Mi PLM05ZM 20000 mAh Power Bank",
		"price":999,
		"discount":30,
		"details":[
			"New Version : Mi Power Bank 2",
			"Weighs 330 g | Capacity: 20000 mAh",
			"Lithium Polymer Battery | Micro Connector",
			"Power Source: AC Adapter",
			"Charging Cable Included"
		],
		"inStock":true,
		"description":"",
		"similarItems":[
			""
		]
	}
];


var sp = [
	{
		"id":"jbl_go",
		"name":"JBL Go Portable Bluetooth Mobile/Tablet Speaker",
		"price":999,
		"discount":30,
		"details":[
			"Power Output: 3 W",
			"Power Source: Battery",
			"Wireless music streaming via Bluetooth"
		],
		"inStock":true,
		"description":"If you unexpectedly happen to end up at a house party on a Friday night and your friends don't have any sound system to play tunes on, this speaker will be a saviour and take the party on all night long.",
		"similarItems":[
			""
		]
	}
];
