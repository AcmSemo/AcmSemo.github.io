var spring18 = [
"1/24: ACM-SEMO is launched on Moodle by Dr. Suhair Amer",
"1/29: Git Boot Camp - Michael Ranciglio",
"2/5: Unit Testing - Andrew Smith",
"2/12: Programming in D - Ethan Reker",
"2/19: Navigating Linux - Michael Ranciglio",
"2/26: Soldering Workshop - Stephen Sladek",
"3/5: Docker - Marc Maton",
"3/19: Signal Processing - Ethan Reker",
"3/26: Programming in Python - Andrew Smith",
"4/2: Machine Learning - Faizel Khan",
"4/14 - 15: MegaMinerAI 21 at Missouri S&T",
"4/30: Virtual Reality - Stephen Sladek"
];

var fall17 = [
"8/28: Professional Development Day - Dan Presson",
"9/11: Git Boot Camp - Michael Ranciglio and Andrew Smith",
"9/18: Welcome to Linux - Michael Ranciglio",
"9/25: AI Programming part 1 - Stephen Sladek",
"9/30: Hackathon with CS Club",
"10/2: AI Programming part 2 - Andrew Smith",
"10/9: AI Programming part 3 - Dr. Xuesong Zhang",
"10/16: So You Want to Build a Computer? - Derek Mandl",
"10/23: Web Dev Workshop - Stephen Sladek",
"10/30: Hosting Your Own Application - Marc Maton",
"11/6: Android App Development - Andrew Smith",
"11/11 - 12: MegaMinerAI 20 at Missouri S&T",
"11/12: ACM-SEMO team Michael Ranciglio, Aaron Gunther, and Tatianna Reinbolt place 3rd in globals at Megaminer",
"11/13: Cleaning up Exploited Environments - Lucas Kossack",
"11/27: Meetup with SEMO Alumni",
"12/2: Hackathon with CS Club",
"12/4: General Meeting"
];

var summer17 = [
"6/6: ACM-SEMO gets its own website, developed by Stephen Sladek",
"Photos used are by courtesy of Tatianna Reinbolt and Derek Mandl"
];

var spring17 = [
"2/13: What is ACM? - Stephen Sladek",
"2/13: Getting Started with Git - Michael Ranciglio",
"2/17: ACM-SEMO is launched on Discord by Michael Ranciglio",
"2/20: Presentation Guidelines - Dr. Suhair Amer",
"2/27: Differences Between Operating Systems - Michael Ranciglio and Derek Mandl",
"3/27: VMWare Workshop - Mackenzie Bonneville",
"4/3: Movie Night - \"Steve Jobs\" (2016)",
"4/8 - 9: MegaMinerAI 19 at Missouri S&T",
"4/10: Soldering Workshop - Stephen Sladek",
"4/10: ACM-SEMO Cards are designed by Kaitlin Wieberg",
"4/17: Supercomputing - Dr. Marcus Bond",
"4/24: Software Dev Resources - Andrew Smith",
"5/1: Learn C++ with Unreal Engine 4 - Stephen Sladek"
];

var fall16 = [
"9/9: What is ACM? - Stephen Sladek",
"9/26: Binary Workshop - Stephen Sladek",
"10/5: Trip to Cape Girardeau Career and Technology Center:",
"{ Python Presentation - Hannah and Tatianna Reinbolt",
" Linux Distros - Andrew Smith",
" How Networking Relates to Other Fields - Stephen Sladek }",
"10/10: API's - Andrew Smith",
"11/14: Circuit Board Workshop - Stephen Sladek",
"12/5: Steganography: Hiding in Plain SIght - Stephen Sladek"
];

var summer16 = [
"7/--: ACM-SEMO logo is designed by Tatianna Reinbolt",
"7/--: ACM-SEMO is launched on Facebook by Hannah Reinbolt"
];

var spring16 = [ "ACM-SEMO goes on hiatus" ];

var fall15 = [ "9/--: Acm Recruitment Presentation - Cameron Hutchison" ];

var spring15 = [
"3/--: ACM Recruitment Presentation - Zachary Higgins",
"4/--: Towers of Hanoi & Eight Queens - Zachary Higgins"
];
 
var fall14 = [ "11/--: Founding of ACM-SEMO" ];

function getSemester(id){
	if(id === "event0") {
		return fall14;
	} else if(id === "event1") {
		return spring15;
	} else if(id === "event2") {
		return fall15;
	} else if(id === "event3") {
		return spring16;
	} else if(id === "event4") {
		return summer16;
	} else if(id === "event5") {
		return fall16;
	} else if(id === "event6") {
		return spring17;
	} else if(id === "event7") {
		return summer17;
	} else if(id === "event8") {
		return fall17;
	} else if(id === "event9") {
		return spring18;
	}
	//else if(id === "event10") return fall18;
	else {
		return "no info";
	}
}

function loadEvent(id){
	var event = document.getElementById(id);
	var info = getSemester(id);
	for(var i = 0; i < info.length; i++){
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(info[i]));
		event.appendChild(li);
	}
}

var current = spring18;