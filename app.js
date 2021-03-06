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
    this.customers = cust;
       this.checkOrder = function(email){
    	for (var i = 0; i < this.customers.length; i++) {
    		if(this.customers[i].email == email){
    			return false;
    		}
    	}
	       return true;
    };
  });


app.controller('DetailsController', ['$routeParams','$http','$sce', function($routeParams,$http,$sce) {
 this.pid = $routeParams.pid;
 this.type = $routeParams.type;
 this.memoryCardsData = sd;
 this.usbDrivesData = pd;
 this.powerBanksData = pb;
 this.speakersData = sp;
 this.imageSource = "1";

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
   controllerAs: 'track'
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
		"description":"Samsung Evo Microsdhc Flash Memory Card Comes With 8gb Memory Size And Has Class 10/uhs-i Speed Rating.",
		"similarItems":[
			"evo16",
			"evo32",
			"evo64",
			"evo128"
		],
		"paymentUrl":"https://imjo.in/jkqVm9"
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
		"description":"Are you planning to buy a new mobile phone and you have tons of data, songs, and videos that you require? Then this memory card from Samsung might be something you need to easily transfer all the data. Capacity: It has a capacity of 16GB, so you can easily store data from your smartphone, tablet and laptop. It works perfectly even with advanced devices and allows you to transfer pictures two times faster than a regular microSD card. Faster Transfer With a transfer speed of up to 48MB per second, this memory card lets you transfer up to 360 photos per minute, so now spend less time transferring pictures.",
		"similarItems":[
			"evo8",
			"evo32",
			"evo64",
			"evo128"
		],
		"paymentUrl":"https://imjo.in/ZH5CR2"
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
		"description":"Save pictures and transfer files faster with this Samsung Evo 32GB Micro SDHC Class 10 memory card. This Ultra High Speed memory card is UHS-enabled which means it’s faster and more efficient than your average microSD card. Plus, it’s water and temperature proof!",
		"similarItems":[
			"evo8",
			"evo16",
			"evo64",
			"evo128"
		],
		"paymentUrl":"https://imjo.in/grp4nR"
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
		],
		"paymentUrl":"https://imjo.in/Aktash"
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
		"description":"Free up your devices with the largest capacity and highest read/write speeds in Samsung's class, perfect for 4K UHD video - with astonishing performance and reliability, Evo lets you save and treasure the richness of life Record and play 4K UHD video - with ultra-fast read and write speeds up to 100mbps and 90mbps respectively (Depends on your device, it may or may not come), the 128GB Evo lets you transfer a 3GB video to your notebook in just 38 seconds (May or May not, depends on Device) Never worry about space again - with massive amounts of storage the 128GB Evo is enough memory for up to 6 hours of 4K UHD video, 17 hours of full HD video, 27,600 photos or 11,500 songs Compatible with a wide range of devices for both SD and micro SD You can even capture detailed 4K UHD video The included SD adapter fits most devices under almost every brand name, while preserving all of Evo outstanding speed and performance Interface: UHS-I, compatible to HS interface.",
		"similarItems":[
			"evo8",
			"evo16",
			"evo32",
			"evo64"
		],
		"paymentUrl":""
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
		"description":"Now you can capture FHD videos and high-resolution photographs with your camcorder, tablet or smartphone. The Sandisk Mobile Ultra (SDSDQUA-008G-U46A) Class 10 UHS-I micro SDHC Memory Card offers you 8 GB storage capacity to let you store a great number of videos, images, songs, files and more on your several multimedia devices. You can record full HD videos with up to 1080p resolution as well as click high-resolution pictures. You can save up to 80 minutes long videos and up to 8000 photographs in this Mobile Ultra Class 10 UHS-I micro SDHC Memory Card.",
		"similarItems":[
			"san16",
			"san32",
			"san64",
			"san128"
		],
		"paymentUrl":"https://imjo.in/XvRKCs"
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
		"description":"Record and store high-definition videos, photos, thousands of songs and e-books, and you will still have space for more on your Android smartphone with this SanDisk Ultra 16GB microSDHC memory card. Since it is waterproof, temperature-proof, shock-proof and X-ray-proof, this class 10 memory card will keep your files secure and safe.",
		"similarItems":[
			"san8",
			"san32",
			"san64",
			"san128"
		],
		"paymentUrl":"https://imjo.in/hgP2dv"
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
		"description":"Fast Data Transfer: With transfer speeds of up to 80MB/s, the card brings faster read speeds so you can save time transferring data. Take Better Pictures and Capture Full HD Video: Maximize the performance of your camera or camcorder with the SanDisk Ultra microSD Class 10 UHS-I Memory Card. Ideal for compact to mid-range point-and-shoot cameras, camcorders and laptops. Save time moving content from your card to your PC or other devices with fast transfer speeds and Class 10 supports Full HD (1080p) video capture.",
		"similarItems":[
			"san8",
			"san16",
			"san64",
			"san128"
		],
		"paymentUrl":"https://imjo.in/AHVGNQ"
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
		"description":"Capacity: 64GB;SanDisk Ultra microSDXC and microSDHC cards are fast for better pictures, app performance, and Full HD video.1 Ideal for Android smartphones and tablets, these A1-rated cards load apps faster for a better smartphone experience.3 With up to 256GB* capacity, you have the capacity to take more pictures and Full HD video and capture life at its fullest. Built to perform in harsh conditions, SanDisk Ultra microSD cards are waterproof, temperature proof, shockproof, and X-ray proof.2 The microSD card is also rated Class 10 for Full HD video recording performance and a 10-year limited warranty4.",
		"similarItems":[
			"san8",
			"san16",
			"san32",
			"san128"
		],
		"paymentUrl":"https://imjo.in/nxVXrG"
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
		"description":"Capture beautiful memories and shoot Full HD videos on your smartphone or tablet, without worrying about storage space, by inserting the SanDisk 128 GB microSDXC card. With a transfer speed of up to 95 MB/s, this microSDXC card allows you to transfer files quickly.",
		"similarItems":[
			"san8",
			"san16",
			"san32",
			"san64",
		],
		"paymentUrl":""
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
		],
		"paymentUrl":"https://imjo.in/eSUYPB"
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
		"description":"Featuring a sleek, compact body, the SanDisk Cruzer Blade pen drive can easily fit into the pocket of your jeans or your bag and accompany you everywhere. Also, you can attach a strap to it to easily carry it along. It comes with 16 GB of storage capacity that offers enough room for your photos, movies, music and personal data.",
		"similarItems":[
			"sanpd8",
			"sanpd32",
			"sanpd64"
		],
		"paymentUrl":"https://imjo.in/METDq2"
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
		"description":"Meet the SanDisk Cruzer Blade 32 GB pendrive - your friendly storage device. Store all that you want, from movies to songs, pictures to videos, PDF files to documents, this in USB 2.0.",
		"similarItems":[
			"sanpd8",
			"sanpd16",
			"sanpd64"
		],
		"paymentUrl":"https://imjo.in/97fjGj"
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
		"description":"Backing up, transferring, sharing, and storing files is convenient with this SanDisk Blade 64GB pendrive.Easy to use Compact in design and with generous storage space, this flash drive lets you start storing and transferring files immediately.",
		"similarItems":[
			"sanpd8",
			"sanpd16",
			"sanpd32"
		],
		"paymentUrl":"https://imjo.in/ZKmWww"
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
		"inStock":false,
		"description":"",
		"similarItems":[
			""
		],
		"paymentUrl":""
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
		"inStock":false,
		"description":"If you unexpectedly happen to end up at a house party on a Friday night and your friends don't have any sound system to play tunes on, this speaker will be a saviour and take the party on all night long.",
		"similarItems":[
			""
		],
		"paymentUrl":""
	}
];


var cust = [
	{
		"id":"1",
		"name":"Ravi Singh",
		"paymentId":"MOJO8222005W25422228",
		"amount":699,
		"phone":7877536205,
		"email":"daljeetee45@gmail.com",
		"date":"22-Feb-2018",
		"status":"Delivered [To: SELF]",
		"expectedDeliveryDate":"27-Feb-2018",
		"IsDelivered":true,
		"deliveryDate":"28-Feb-2018"
	},
	{
		"id":"2",
		"name":"Pushparaj",
		"paymentId":"MOJO8225005N56879917",
		"amount":339,
		"phone":8056356400,
		"email":"venkatanarayann@gmail.com",
		"date":"25-Feb-2018",
		"status":"Refunded",
		"expectedDeliveryDate":"29-Feb-2018",
		"IsDelivered":false,
		"deliveryDate":""
	},
	{
		"id":"3",
		"name":"Amit Kumar Verma",
		"paymentId":"MOJO8226005A34197976",
		"amount":270,
		"phone":9953965296,
		"email":"weblink.amitkumar@gmail.com",
		"date":"26-Feb-2018",
		"status":"Refunded",
		"expectedDeliveryDate":"03-Mar-2018",
		"IsDelivered":false,
		"deliveryDate":""
	},
	{
		"id":"4",
		"name":"Dilshad",
		"paymentId":"MOJO8227005A18483869",
		"amount":320,
		"phone":7462985253,
		"email":"muhammadil591@gmail.com",
		"date":"27-Feb-2018",
		"status":"Refunded",
		"expectedDeliveryDate":"04-Mar-2018",
		"IsDelivered":false,
		"deliveryDate":""
	},
	{
		"id":"5",
		"name":"Sandeep Kumar",
		"paymentId":"MOJO8227005W18505941",
		"amount":339,
		"phone":7204929281,
		"email":"sandeepdeshwal9540@gmail.com",
		"date":"27-Feb-2018",
		"status":"Refunded",
		"expectedDeliveryDate":"04-Mar-2018",
		"IsDelivered":false,
		"deliveryDate":""
	},
	{
		"id":"6",
		"name":"GAGAN SINGH",
		"paymentId":"MOJO8228005D65895483",
		"amount":196,
		"phone":8191921401,
		"email":"minakshykumari01995@gmail.com",
		"date":"28-Feb-2018",
		"status":"Refunded",
		"expectedDeliveryDate":"05-Mar-2018",
		"IsDelivered":false,
		"deliveryDate":""
	},
	{
		"id":"7",
		"name":"Panyam Suresh",
		"paymentId":"MOJO8308005N86074906",
		"productId":"evo32",
		"productName":"Sandisk 32gb class 10 memory card",
		"amount":270,
		"phone":8608418266,
		"email":"p_suresh2011@hotmail.com",
		"date":"08-Mar-2018",
		"status":"In Transit",
		"expectedDeliveryDate":"13-Mar-2018",
		"IsDelivered":false,
		"deliveryDate":""
	},
	{
		"id":"8",
		"name":"Shashikant Ojha",
		"paymentId":"MOJO8308005W86082041",
		"productId":"evo64",
		"productName":"Sandisk 64gb class 10 memory card",
		"amount":320,
		"phone":9953568922,
		"email":"sk.ojha1984@gmail.com",
		"date":"08-Mar-2018",
		"status":"In Transit",
		"expectedDeliveryDate":"13-Mar-2018",
		"IsDelivered":false,
		"deliveryDate":""
	},
	{
		"id":"9",
		"name":"Ashish Kumar",
		"paymentId":"MOJO8311005N53663151",
		"productId":"pd",
		"productName":"Sandisk Cruzer Blade 8GB",
		"amount":180,
		"phone":9466063289,
		"email":"ashupakasma@gmail.com",
		"date":"11-Mar-2018",
		"status":"In Transit",
		"expectedDeliveryDate":"16-Mar-2018",
		"IsDelivered":false,
		"deliveryDate":""
	},
	{
		"id":"10",
		"name":"krishna murari",
		"paymentId":"MOJO8312005D84193876",
		"productId":"san64",
		"productName":"Sandisk 64gb memory card",
		"amount":339,
		"phone":8100043723,
		"email":"kmkiem12345@gmail.com",
		"date":"12-Mar-2018",
		"status":"In transit",
		"expectedDeliveryDate":"17-Mar-2018",
		"IsDelivered":false,
		"deliveryDate":""
	},
	{
		"id":"11",
		"name":"Shailendra singh",
		"paymentId":"MOJO8314005A94811141",
		"productId":"evo64",
		"productName":"Samsung Evo 64gb memory card",
		"amount":320,
		"phone":8010138094,
		"email":"raghavshailendra81@gmail.com",
		"date":"14-Mar-2018",
		"status":"Processing Order",
		"expectedDeliveryDate":"19-Mar-2018",
		"IsDelivered":false,
		"deliveryDate":""
	}
];
