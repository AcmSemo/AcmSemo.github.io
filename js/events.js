/*
For regular maintenance of events, you'll need to do the following:
1) add an array of events for the semester following the same scheme as below.
2) add the newly made list of events to the eventList array
3) modify the current variable to be set to the current semester list.
 */

/* EVENT LISTS  */

const spring19 = [
	"Spring 2019",
	"1/28: General Meeting - Kearsten Collins",
	"2/11: General Meeting - Emma Knight",
	"2/25: Movie Night"
];

const fall18 = [
	"Fall 2018",
	"8/18: Student Involvement Fair - Stephen Sladek, Michael Ranciglio and Emma Knight",
	"8/27: General Meeting - Stephen Sladek",
	"8/29: Welcome Back Party - Stephen Sladek and Emma Knight",
	"9/10: Git Boot Camp - Michael Ranciglio",
	"9/17: Mic on Mic - Michael Ranciglio",
	"9/24: Professional Development Day - BrookSource",
	"10/1: General Meeting - Kearsten Collins",
	"10/15: SysAdmin Essentials - Marc Maton",
	"10/29: MegaMinerAI Preparation",
	"11/03: Student Showcase",
	"11/10 - 11: MegaMinerAI 22"
];

const summer18 = [
	"Summer 2018",
	"6/8: ACM-SEMO Discord Bot goes live - Stephen Sladek"
];

const spring18 = [
	"Spring 2018",
    "1/24: ACM-SEMO is launched on Moodle - Dr. Suhair Amer",
    "1/29: Git Boot Camp - Michael Ranciglio",
    "2/5: Unit Testing - Andrew Smith",
    "2/12: Programming in D - Ethan Reker",
    "2/19: Navigating Linux - Michael Ranciglio",
    "2/26: Soldering Workshop - Stephen Sladek",
    "3/5: Docker - Marc Maton",
    "3/19: Signal Processing - Ethan Reker",
    "3/26: Programming in Python - Andrew Smith",
    "4/2: Machine Learning - Faizel Khan",
    "4/7: Megaminer Preparation Workshop - Michael Ranciglio",
    "4/9: Programming in Rust - Mark Eikel",
    "4/14 - 15: MegaMinerAI 21 at Missouri S&T",
    "4/23: Front End Development - Stephen Sladek",
    "4/30: Virtual Reality - Stephen Sladek"
];

const fall17 = [
	"Fall 2017",
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

const summer17 = [
	"Summer 2017",
    "6/6: ACM-SEMO gets its own website, developed by Stephen Sladek",
    "Photos used are by courtesy of Tatianna Reinbolt and Derek Mandl"
];

const spring17 = [
	"Spring 2017",
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

const fall16 = [
	"Fall 2016",
    "8/30: ACM-SEMO logo is designed by Tatianna Reinbolt",
    "8/30: ACM-SEMO is launched on Facebook by Hannah Reinbolt",
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

const fall15 = [ 
	"Fall 2015",
	"10/28: Acm Recruitment Presentation - Cameron Hutchison"
];

const spring15 = [
	"Spring 2015",
    "2/18: ACM Recruitment Presentation - Zachary Higgins",
    "5/5: Towers of Hanoi & Eight Queens - Zachary Higgins"
];

const fall14 = [ 
	"Fall 2014",
	"12/9: Founding of ACM-SEMO"
];

// MODIFY THIS TO MATCH CURRENT SEMESTER
var current = spring19;

// ADD THE NEW SEMESTER TO THE TOP OF THIS LIST
var eventList = [
	spring19,
	fall18,summer18,spring18,
	fall17,summer17,spring17,
	fall16,
	fall15,spring15,
	fall14
];

// Loads the events into the div eventList on events.html
function loadEvents(){
	var eventDiv = document.getElementById('eventContainer');
	var section, ul, li;
	var info;
	for(let i = 0; i < eventList.length; i++){
		info = eventList[i]; //current semester of events
		section = document.createElement("section");
		ul = document.createElement("ul");
		for(let j = 0; j < info.length; j++){
			li = document.createElement("li");
			li.appendChild(document.createTextNode(info[j]));
			ul.appendChild(li);
		}
		ul.className += "eventList";
		section.className += "events lucida";
		section.appendChild(ul);
		eventDiv.appendChild(section);
	}
}

/*
 * Loads events for the current semester.
 * Is called on in index.html and events.html
*/
function loadCurrent(){
	var eventList = document.getElementById("currentEvents");
	var d = new Date();
	var month = d.getMonth()+1;
	var day = d.getDate();
	var li;
	for(let i = 0; i < current.length; i++){
		var event = (current[i]).split("/", 1);
		if(event[0] >= month) {
			li = document.createElement("li");
			li.appendChild(document.createTextNode(current[i]));
			eventList.appendChild(li);
		}
	}
}
