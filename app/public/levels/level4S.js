var call_number = "DK266.D44 2014eb";
parser(call_number);

function parser (callNumber){ 
var level = [
	{"start": "DC17", "end": "DC203", "image":"images/4s/4s_1.jpg"},
    {"start": "DC203", "end": "DC801", "image":"images/4s/4s_2.jpg"},
    {"start": "DC801", "end": "DD247", "image":"images/4s/4s_2.jpg"},
    {"start": "DD247", "end": "DF214", "image":"images/4s/4s_1.jpg"},
    {"start": "DF214", "end": "DG552", "image":"images/4s/4s_3.jpg"},
    {"start": "DG552", "end": "DK33", "image":"images/4s/4s_4.jpg"},
    {"start": "DK33", "end": "DK265", "image":"images/4s/4s_4.jpg"},
    {"start": "DK265", "end": "DK771", "image":"images/4s/4s_3.jpg"},
    {"start": "DK859", "end": "DR38", "image":"images/4s/4s_5.jpg"},
    {"start": "DR38", "end": "DS107", "image":"images/4s/4s_6.jpg"},
    {"start": "DS107", "end": "DS135", "image":"images/4s/4s_6.jpg"},
    {"start": "DS135", "end": "DS288", "image":"images/4s/4s_5.jpg"},
    {"start": "DS292", "end": "DS518", "image":"images/4s/4s_7.jpg"},
    {"start": "DS518", "end": "DS712", "image":"images/4s/4s_8.jpg"},
    {"start": "DS712", "end": "DS786", "image":"images/4s/4s_8.jpg"},
    {"start": "DS786", "end": "DT31", "image":"images/4s/4s_7.jpg"},
    {"start": "DT31", "end": "DT516", "image":"images/4s/4s_9.jpg"},
    {"start": "DT516", "end": "DU29", "image":"images/4s/4s_10.jpg"},
    {"start": "DU29", "end": "E78", "image":"images/4s/4s_10.jpg"},
    {"start": "E78", "end": "E99", "image":"images/4s/4s_9.jpg"},
    {"start": "E99", "end": "E169", "image":"images/4s/4s_11.jpg"},
    {"start": "E169", "end": "E176", "image":"images/4s/4s_12.jpg"},
    {"start": "E176", "end": "E183", "image":"images/4s/4s_12.jpg"},
    {"start": "E183", "end": "E184", "image":"images/4s/4s_11.jpg"},
    {"start": "E184", "end": "E185", "image":"images/4s/4s_13.jpg"},
    {"start": "E185", "end": "E185", "image":"images/4s/4s_14.jpg"},
    {"start": "E185", "end": "E199", "image":"images/4s/4s_14.jpg"},
    {"start": "E199", "end": "E302", "image":"images/4s/4s_13.jpg"},
    {"start": "E302", "end": "E354", "image":"images/4s/4s_15.jpg"},
    {"start": "E354", "end": "E445", "image":"images/4s/4s_16.jpg"},
    {"start": "E445", "end": "E457", "image":"images/4s/4s_16.jpg"},
    {"start": "E457", "end": "E487", "image":"images/4s/4s_15.jpg"},
    {"start": "E487", "end": "E672", "image":"images/4s/4s_17.jpg"},
    {"start": "E672", "end": "E748", "image":"images/4s/4s_18.jpg"},
    {"start": "E748", "end": "E807", "image":"images/4s/4s_18.jpg"},
    {"start": "E807", "end": "E855", "image":"images/4s/4s_17.jpg"},
    {"start": "E855", "end": "F97", "image":"images/4s/4s_19.jpg"},
    {"start": "F97", "end": "F128", "image":"images/4s/4s_20.jpg"},
    {"start": "F128", "end": "F229", "image":"images/4s/4s_20.jpg"},
    {"start": "F229", "end": "F484", "image":"images/4s/4s_19.jpg"},
    {"start": "F484", "end": "F851", "image":"images/4s/4s_21.jpg"},
    {"start": "F851", "end": "F1221", "image":"images/4s/4s_22.jpg"},
    {"start": "F1221", "end": "F1439", "image":"images/4s/4s_22.jpg"},
    {"start": "F1439", "end": "F2520", "image":"images/4s/4s_21.jpg"},
    {"start": "F2520", "end": "G606", "image":"images/4s/4s_23.jpg"},
    {"start": "G606", "end": "GE50", "image":"images/4s/4s_24.jpg"},
    {"start": "GE55", "end": "GN273", "image":"images/4s/4s_24.jpg"},
    {"start": "GN275", "end": "GN645", "image":"images/4s/4s_23.jpg"},
    {"start": "GN645", "end": "GN805", "image": "images/4s/4s_25.jpg"},
    {"start": "GN805", "end": "GR105", "image": "images/4s/4s_26.jpg"},
    {"start": "GR105", "end": "GT510", "image": "images/4s/4s_27.jpg"},
    {"start": "GT510", "end": "GV199", "image": "images/4s/4s_28.jpg"},
    {"start": "GV199", "end": "GV706", "image": "images/4s/4s_29.jpg"},
    {"start": "GV706", "end": "GV865", "image": "images/4s/4s_30.jpg"},
    {"start": "GV865", "end": "GV1185", "image": "images/4s/4s_31.jpg"},
    {"start": "GV1185", "end": "GV5411", "image": "images/4s/4s_32.jpg"},
    {"start": "H1", "end": "HA29", "image": "images/4s/4s_33.jpg"},
    {"start": "HA29", "end": "HB101", "image": "images/4s/4s_33.jpg"},
    {"start": "HB101", "end": "HB172", "image": "images/4s/4s_34.jpg"},
    {"start": "HB173", "end": "HB501", "image": "images/4s/4s_35.jpg"},
    {"start": "HC59", "end": "HC106", "image": "images/4s/4s_35.jpg"},
    {"start": "HC106", "end": "HC110", "image": "images/4s/4s_36.jpg"},
    {"start": "HC110", "end": "HC240", "image": "images/4s/4s_36.jpg"},
    {"start": "HC501", "end": "HB5606", "image": "images/4s/4s_37.jpg"},
    {"start": "HC5606", "end": "5HB9", "image": "images/4s/4s_37.jpg"},
    {"start": "HC240", "end": "HC336", "image": "images/4s/4s_38.jpg"},
    {"start": "HC336", "end": "HC428", "image": "images/4s/4s_38.jpg"},
    {"start": "HC430", "end": "HC681", "image": "images/4s/4s_39.jpg"},
    {"start": "HC682", "end": "HD30", "image": "images/4s/4s_39.jpg"},
    {"start": "HD30", "end": "HD31", "image": "images/4s/4s_40.jpg"},
    {"start": "HD31", "end": "HD38", "image": "images/4s/4s_40.jpg"},
    {"start": "HD38", "end": "HD45", "image": "images/4s/4s_41.jpg"},
    {"start": "HD45", "end": "HD58", "image": "images/4s/4s_41.jpg"},
	{"start": "HD58", "end": "HD62", "image": "images/4s/4s_42.jpg"},
	{"start": "HD62", "end": "HD82", "image": "images/4s/4s_42.jpg"},
	{"start": "HD82", "end": "HD999", "image": "images/4s/4s_43.jpg"}
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
		var t = document.createTextNode("2nd/1st Floor");
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
  
  
  