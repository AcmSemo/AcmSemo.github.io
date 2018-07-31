/*
For regular maintenance of events, you'll need to do the following:
1) add a list of events for the semester following the same scheme as below.
2) modify getSemester(id) to return the list you created for the corresponding id
3) add a ul in events.html with the next id in line (so if we're on event29 add event30)
4) modify the current and currentAI variables to be set to the current semester lists.
 */

/* EVENT LISTS  */
const fall18 = [
    "8/18: Student Involvement Fair",
    "8/27: General Meeting",
    "8/29: Welcome Back Party",
    "9/3: Git Boot Camp",
    "9/24: Professional Development Day"
];

const summer18 = [
    "6/8: ACM-SEMO Discord Bot goes live - Stephen Sladek"
];

const spring18ai = [
    "2/13: Bresenham's Line Algorithm for Line of Sight - Aaron Gunther",
    "2/20: Linux - Michael Ranciglio"
];

const spring18 = [
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
    "4/7: Megaminer Preparation Workshop - Michael Ranciglio",
    "4/9: Programming in Rust - Mark Eikel",
    "4/14 - 15: MegaMinerAI 21 at Missouri S&T",
    "4/23: Front End Development - Stephen Sladek",
    "4/30: Virtual Reality - Stephen Sladek"
];

const fall17 = [
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
    "6/6: ACM-SEMO gets its own website, developed by Stephen Sladek",
    "Photos used are by courtesy of Tatianna Reinbolt and Derek Mandl"
];

const spring17 = [
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

const fall15 = [ "10/28: Acm Recruitment Presentation - Cameron Hutchison" ];

const spring15 = [
    "2/18: ACM Recruitment Presentation - Zachary Higgins",
    "5/5: Towers of Hanoi & Eight Queens - Zachary Higgins"
];

const fall14 = [ "12/9: Founding of ACM-SEMO" ];

const current = fall18; //MODIFY THIS TO MATCH CURRENT SEMESTER FOR ACM
const currentAI = spring18ai; //MODIFY THIS TO MATCH CURRENT SEMESTER FOR SIGAI

/*
 * Called upon within loadEvent()
 * The ul tag will have an id of event0, event1, etc.
 * This will return the list of events to populate that ul with
*/
function getSemester(id){
    switch(id){
        case "event0":
            return fall14;
        case "event1":
            return spring15;
        case "event2":
            return fall15;
        case "event3":
            return fall16;
        case "event4":
            return spring17;
        case "event5":
            return summer17;
        case "event6":
            return fall17;
        case "event7":
            return spring18;
        case "event8":
            return summer18;
        case "event9":
            return fall18;
        default:
            return "-";
            break;
    }
}

/* Loads the events into the ul tags on events.html */
function loadEvent(id){
	var event = document.getElementById(id);
	var info = getSemester(id);
	for(let i = 0; i < info.length; i++){
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(info[i]));
		event.appendChild(li);
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

/*
 * Loads current events for SIGAI.
 * Is called on in index.html.
*/
function loadAICurrent(){
	var eventList = document.getElementById("currentAIEvents");
	var d = new Date();
	var month = d.getMonth()+1;
	var day = d.getDate();
	var li;
	for(let i = 0; i < currentAI.length; i++){
		var event = (currentAI[i]).split("/", 1);
		if(event[0] >= month) {
			li = document.createElement("li");
			li.appendChild(document.createTextNode(currentAI[i]));
			eventList.appendChild(li);
		}
	}
}
