var call_number = "M266.D44 2014eb";
parser(call_number);

function parser (callNumber){
var level = [
	{"start": "L7", "end": "LA637", "image":"images/2s/2s_1.jpg"},
    {"start": "LA637", "end": "LB1025", "image":"images/2s/2s_2.jpg"},
    {"start": "LB1025", "end": "LB1050", "image":"images/2s/2s_2.jpg"},
    {"start": "LB1050", "end": "LB1139", "image":"images/2s/2s_1.jpg"},
    {"start": "LB1139", "end": "LB1631", "image":"images/2s/2s_3.jpg"},
    {"start": "LB1631", "end": "LB2331", "image":"images/2s/2s_4.jpg"},
    {"start": "LB2331", "end": "LB3012", "image":"images/2s/2s_4.jpg"},
    {"start": "LB3012", "end": "LC621", "image":"images/2s/2s_3.jpg"},
    {"start": "LC621", "end": "LC4818", "image":"images/2s/2s_5.jpg"},
    {"start": "LC4820", "end": "M200", "image":"images/2s/2s_6.jpg"},
    {"start": "M200", "end": "M1578", "image":"images/2s/2s_6.jpg"},
    {"start": "M1578", "end": "ML96", "image":"images/2s/2s_5.jpg"},
    {"start": "ML100", "end": "ML410", "image":"images/2s/2s_7.jpg"},
    {"start": "ML410", "end": "ML410", "image":"images/2s/2s_8.jpg"},
    {"start": "ML410", "end": "ML429", "image":"images/2s/2s_8.jpg"},
    {"start": "ML429", "end": "ML3524", "image":"images/2s/2s_7.jpg"},
    {"start": "ML3524", "end": "MT6", "image":"images/2s/2s_9.jpg"},
    {"start": "MT6", "end": "MT948", "image":"images/2s/2s_10.jpg"},
    {"start": "MT948", "end": "N5310", "image":"images/2s/2s_10.jpg"},
    {"start": "N5310", "end": "N6537", "image":"images/2s/2s_9.jpg"},
    {"start": "N6537" , "end": "N6988" , "image":"images/2s/2s_11.jpg"},
    {"start": "N6988", "end": "N8217", "image":"images/2s/2s_12.jpg"},
    {"start": "N8217", "end": "NA1153", "image":"images/2s/2s_12.jpg"},
    {"start": "NA1168", "end": "NB616", "image":"images/2s/2s_11.jpg"},
    {"start": "NB620", "end": "ND237", "image":"images/2s/2s_13.jpg"},
    {"start": "ND237", "end": "ND553", "image":"images/2s/2s_14.jpg"},
    {"start": "ND 553", "end": "ND1150", "image":"images/2s/2s_14.jpg"},
    {"start": "ND1150", "end": "NK4168", "image":"images/2s/2s_13.jpg"},
    {"start": "NK4177", "end": "P40", "image":"images/2s/2s_15.jpg"},
    {"start": "P40", "end": "P118", "image":"images/2s/2s_16.jpg"},
    {"start": "P118", "end": "PA3877" , "image":" images/2s/2s_16.jpg"},
    {"start": "PA3877", "end": "PA8310", "image": "images/2s/2s_15.jpg"},
    {"start": "PA8310", "end": "PE1408", "image": "images/2s/2s_17.jpg"},
    {"start": "PE1408", "end": "PG3325", "image": "images/2s/2s_18.jpg"},
    {"start": "PG3325", "end": "PG3476", "image": "images/2s/2s_18.jpg"},
    {"start": "PG3476", "end": "PJ5129", "image": "images/2s/2s_17.jpg"},
    {"start": "PJ5129", "end": "PL2735", "image": "images/2s/2s_19.jpg"},
    {"start": "PL2735", "end": "PN75", "image": "images/2s/2s_20.jpg"},
    {"start": "PN75", "end": "PN681", "image": "images/2s/2s_20.jpg"},
    {"start": "PN682", "end": "PN1661", "image":  "images/2s/2s_19.jpg"},
    {"start": "PN1664", "end": "PN1995", "image": "images/2s/2s_21.jpg"},
    {"start": "PN1995", "end": "PN1998", "image": "images/2s/2s_22.jpg"},
    {"start": "PN1998", "end": "PN2287", "image": "images/2s/2s_22.jpg"},
    {"start": "PN2287", "end": "PN3241", "image": "images/2s/2s_21.jpg"},
 	{"start": "PN3251", "end": "PN4874", "image": "images/2s/2s_23.jpg"},
 	{"start": "PN4874", "end": "PN6014", "image": "images/2s/2s_24.jpg"},
 	{"start": "PN6014", "end": "PN6726", "image": "images/2s/2s_24.jpg"},
 	{"start": "PN6726", "end": "PQ2011", "image": "images/2s/2s_23.jpg"},
 	{"start": "PQ2012", "end": "PQ2223", "image": "images/2s/2s_25.jpg"},
 	{"start": "PQ2223", "end": "PQ2349", "image": "images/2s/2s_26.jpg"},
 	{"start": "PQ2349", "end": "PQ2607", "image": "images/2s/2s_27.jpg"},
 	{"start": "PQ2607", "end": "PQ2631", "image": "images/2s/2s_28.jpg"},
 	{"start": "PQ2631", "end": "PQ3949", "image": "images/2s/2s_29.jpg"},
 	{"start": "PQ3949", "end": "PQ4809", "image": "images/2s/2s_30.jpg"},
 	{"start": "PQ4809", "end": "PQ6085", "image": "images/2s/2s_31.jpg"},
 	{"start": "PQ6089", "end": "PQ6555", "image": "images/2s/2s_32.jpg"},
 	{"start": "PQ6555", "end": "PQ7297", "image": "images/2s/2s_33.jpg"},
 	{"start": "PQ7297", "end": "PQ7390", "image": "images/2s/2s_34.jpg"},
 ];
 
//split the call number into an array and get the first index
 var loc = callNumber.split(".")[0];
 console.log(loc);
 
  
  //traversing the dictionary
  for(n = 0; n < level.length; n++){
  	currentStart = level[n].start;
  	currentEnd = level[n].end;
  	currentImg = level[n].image;
  	
  	var compare1 = loc.localeCompare(currentStart);
	var compare2 = loc.localeCompare(currentEnd);
	
	if((compare1 == 1 || compare1 == 0) && (compare2 == -1 || compare2 == 0)){
		addHeading();
		show_image(currentImg, "hi");
	}
  }
}

function addHeading() {
		var heading = document.createElement("H1");
		var t = document.createTextNode("Lower Level");
		heading.appendChild(t);
		document.body.appendChild(heading);
}
  
function show_image(src, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.alt = alt;

    // This next line will just add it to the <body> tag
    document.body.appendChild(img);
}
  
  
  