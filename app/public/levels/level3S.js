var call_number = "HD2066.D44 2014eb";
parser(call_number);

function parser (callNumber){ 
var level = [
	{"start": "HD1036", "end": "HD4484", "image":"images/3s/3s_1.jpg"},
 	{"start": "HD4606", "end": "HD6331", "image":"images/3s/3s_2.jpg"},
    {"start": "HD6331", "end": "HD7293", "image":"images/3s/3s_2.jpg"},
    {"start": "HD7293", "end": "HD9502", "image":"images/3s/3s_1.jpg"},
    {"start": "HD9502", "end": "HD9999", "image":"images/3s/3s_3.jpg"},
    {"start": "HD9999", "end": "HF1385", "image":"images/3s/3s_4.jpg"},
    {"start": "HF1385", "end": "HF5414", "image":"images/3s/3s_4.jpg"},
    {"start": "HF5415", "end": "HF5549", "image":"images/3s/3s_3.jpg"},
    {"start": "HF5549", "end": "HG173", "image":"images/3s/3s_5.jpg"},
    {"start": "HG173", "end": "HG1975", "image":"images/3s/3s_6.jpg"},
    {"start": "HG1976", "end": "HG4026", "image":"images/3s/3s_6.jpg"},
    {"start": "HG4026", "end": "HJ2336", "image":"images/3s/3s_5.jpg"},
    {"start": "HJ2337", "end": "HM132", "image":"images/3s/3s_7.jpg"},
    {"start": "HM132", "end": "HM701", "image":"images/3s/3s_8.jpg"},
    {"start": "HM701", "end": "HN65", "image":"images/3s/3s_8.jpg"},
    {"start": "HN65", "end": "HQ18", "image":"images/3s/3s_7.jpg"},
    {"start": "HQ18", "end": "HQ536", "image":"images/3s/3s_9.jpg"},
    {"start": "HQ536", "end": "HQ767", "image":"images/3s/3s_10.jpg"},
    {"start": "HQ767", "end": "HQ799", "image":"images/3s/3s_10.jpg"},
    {"start": "HQ799", "end": "HQ1106", "image":"images/3s/3s_9.jpg"},
    {"start": "HQ1121", "end": "HQ1423", "image":"images/3s/3s_11.jpg"},
    {"start": "HQ1423", "end": "HT123", "image":"images/3s/3s_12.jpg"},
    {"start": "HT123", "end": "HT1523", "image":"images/3s/3s_12.jpg"},
    {"start": "HT1523", "end": "HV88", "image":"images/3s/3s_11.jpg"},
    {"start": "HV88", "end": "HV747", "image":"images/3s/3s_13.jpg"},
    {"start": "HV757", "end": "HV2551", "image":"images/3s/3s_14.jpg"},
    {"start": "HV2551", "end": "HV5833", "image":"images/3s/3s_14.jpg"},
    {"start": "HV5883", "end": "HV6526", "image":"images/3s/3s_13.jpg"},
    {"start": "HV6626", "end": "HV8987", "image":"images/3s/3s_15.jpg"},
    {"start": "HV9016", "end": "HX86", "image":"images/3s/3s_16.jpg"},
    {"start": "HX86", "end": "JA84", "image":"images/3s/3s_16.jpg"},
    {"start": "JA84", "end": "JC481", "image":"images/3s/3s_15.jpg"},
    {"start": "JC491", "end": "JK468", "image":"images/3s/3s_17.jpg"},
    {"start": "JK468", "end": "JL1860", "image":"images/3s/3s_18.jpg"},
    {"start": "JL1860", "end": "JQ1518", "image":"images/3s/3s_18.jpg"},
    {"start": "JQ1519", "end": "JX27", "image":"images/3s/3s_17.jpg"},
    {"start": "JX27", "end": "JZ1305", "image":"images/3s/3s_19.jpg"},
    {"start": "JZ1305", "end": "KF224", "image":"images/3s/3s_20.jpg"},
    {"start": "KF224", "end": "KF2036", "image":"images/3s/3s_20.jpg"},
    {"start": "KF2042", "end": "KF5060", "image":"images/3s/3s_19.jpg"},
    {"start": "KF5060", "end": "KV47", "image":"images/3s/3s_21.jpg"},
    {"start": "KZ118", "end": "KZ7170", "image":"images/3s/3s_12.jpg"}
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
		var t = document.createTextNode("1st Floor");
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
  
  
  