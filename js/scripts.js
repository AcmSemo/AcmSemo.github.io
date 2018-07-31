function logoClick(){
	location.assign("https://acmsemo.github.io/index.html");
}

var names = [
"Advisor: Dr. Suhair Amer",
"Chair: Stephen Sladek",
"Vice Chair: Kearsten Collins",
"Secretary: Nicholas Hoang",
"Treasurer: Derek Mandl"
];

var link1Names = [
"ACM Website",
"Facebook",
"Discord Chat",
"SELink"
];

var link1= [
"http://www.acm.org/",
"http://www.facebook.com/ACMSEMO",
"https://discordapp.com/invite/Bhs2zGp",
"https://semo.campuslabs.com/engage/organization/acm-semo"
];

var link2Names = [
"CS Dept : ACM",
"CS Dept : ACM-W",
"CS Dept : ACM-SIGAI"
];

var link2 = [
"http://www.semo.edu/csdept/organizations/acm",
"http://www.semo.edu/csdept/organizations/acmw.html",
"http://www.semo.edu/csdept/organizations/acm_sig_ai.html"
];

function loadFooter(){
	const ids = ["footerNames","footerLinks1","footerLinks2"];
	for(let i = 0; i < ids.length; i++){
		var section = document.getElementById("bottom");
		var items, links;
		var needsLinks = false;
		if(ids[i] === "footerNames"){
			items = names;
			needsLinks = false;
		} else if (ids[i] === "footerLinks1") {
			items = link1Names;
			links = link1;
			needsLinks = true;
		} else {
			items = link2Names;
			links = link2;
			needsLinks = true;
		}
		var ul = document.createElement("ul");
		if(needsLinks){
			for(let i = 0; i < items.length; i++){
				var li = document.createElement("li");
				var a = document.createElement("a");
				a.textContent = items[i];
				a.setAttribute("href", links[i]);
				li.appendChild(a);
				ul.appendChild(li);
			}
		} else {
			for(let i = 0; i < items.length; i++){
				var li = document.createElement("li");
				li.appendChild(document.createTextNode(items[i]));
				ul.appendChild(li);
			}
		}
		section.appendChild(ul);
	}
}
