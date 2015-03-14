var call_number = "B106.D44 2014eb";
parser(call_number);


 
function parser (callNumber){ 
var level = [
    {"start": "AC1", "end": "B105", "image":"images/5s/5s_1.jpg"},
    {"start": "B105", "end": "B804", "image":"images/5s/5s_2.jpg"},
    {"start": "B804", "end": "B1498", "image":"images/5s/5s_2.jpg"},
    {"start": "B1498", "end": "B2598", "image":"images/5s/5s_1.jpg"},
    {"start": "B2598", "end": "B3376", "image":"images/5s/5s_3.jpg"},
    {"start": "B3376", "end": "BD541", "image":"images/5s/5s_4.jpg"},
    {"start": "BD541", "end": "BF162", "image":"images/5s/5s_4.jpg"},
    {"start": "BF170", "end": "BF175", "image":"images/5s/5s_3.jpg"},
    {"start": "BF175", "end": "BF311", "image":"images/5s/5s_5.jpg"},
    {"start": "BF311", "end": "BF468", "image":"images/5s/5s_6.jpg"},
    {"start": "BF469", "end": "BF639", "image":"images/5s/5s_6.jpg"},
    {"start": "BF645", "end": "BF698", "image":"images/5s/5s_5.jpg"},
    {"start": "BF698", "end": "BF721", "image":"images/5s/5s_7.jpg"},
    {"start": "BF721", "end": "BF1407", "image":"images/5s/5s_8.jpg"},
    {"start": "BF1407", "end": "BL51", "image":"images/5s/5s_8.jpg"},
    {"start": "BL51", "end": "BL625", "image":"images/5s/5s_7.jpg"},
    {"start": "BL625", "end": "BL2525", "image":"images/5s/5s_9.jpg"},
    {"start": "BL2525", "end": "BP166", "image":"images/5s/5s_10.jpg"},
    {"start": "BP169", "end": "BR326", "image":"images/5s/5s_10.jpg"},
    {"start": "BR326", "end": "BR1720", "image":"images/5s/5s_9.jpg"},
    {"start": "BR1720", "end": "BS2397", "image":"images/5s/5s_11.jpg"},
    {"start": "BS2397", "end": "BV2805", "image":"images/5s/5s_12.jpg"},
    {"start": "BV2805", "end": "BX2592", "image":"images/5s/5s_12.jpg"},
    {"start": "BX2592", "end": "BX6495", "image":"images/5s/5s_11.jpg"},
    {"start": "BX6495", "end": "CB19", "image":"images/5s/5s_13.jpg"},
    {"start": "CB19", "end": "CR4529", "image":"images/5s/5s_14.jpg"},
    {"start": "CR4595", "end": "D6", "image":"images/5s/5s_14.jpg"},
    {"start": "D6", "end": "D117", "image":"images/5s/5s_13.jpg"},
    {"start": "D117", "end": "D412", "image":"images/5s/5s_15.jpg"},
    {"start": "D412", "end": "D720", "image":"images/5s/5s_16.jpg"},
    {"start": "D720", "end": "D766", "image":"images/5s/5s_16.jpg"},
    {"start": "D767", "end": "D802", "image":"images/5s/5s_15.jpg"},
    {"start": "DA802", "end": "DA810", "image":"images/5s/5s_17.jpg"},
    {"start": "DA810", "end": "DA67", "image":"images/5s/5s_18.jpg"},
    {"start": "DA87", "end": "DA391", "image":"images/5s/5s_18.jpg"},
    {"start": "DA391", "end": "DA506", "image":"images/5s/5s_17.jpg"},
    {"start": "DA506", "end": "DA512", "image":"images/5s/5s_19.jpg"},
    {"start": "DA512", "end": "DA566", "image":"images/5s/5s_20.jpg"},
    {"start": "DA566", "end": "DA566", "image":"images/5s/5s_21.jpg"},
    {"start": "DA566", "end": "DA577", "image":"images/5s/5s_22.jpg"},
    {"start": "DA577", "end": "DA914", "image":"images/5s/5s_23.jpg"},
    {"start": "DA914", "end": "DA3129", "image":"images/5s/5s_24.jpg"},
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
		show_image(currentImg, 500,500, "hi");
		
	}
  }
}

function addHeading() {
		var heading = document.createElement("H1");
		var t = document.createTextNode("2nd Floor");
		heading.appendChild(t);
		document.body.appendChild(heading);
}

function show_image(src, height, width, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.height = height;
    img.width = width;
    img.alt = alt;

    // This next line will just add it to the <body> tag
    document.body.appendChild(img);
}
  
  
  