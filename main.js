var race = 0;
var raceBonus = [0, 0, 0, 0, 0, 0];
var firstName = "No";
var lastName = "Face";
var sex = 0;
var hitPoints = 0;
var abilityScores = [];
var abilityModifier = [];

// NAMES
var namePool = [elfNames, humanNames, dwarfNames]

var elfMale = ["Adran", "Aelar", "Aramil", "Arannis", "Aust"];
var elfFemale = ["Adrie", "Althaea", "Anastrianna", "Andraste", "Antinua"];
var elfSurname = ["Amakiir", "Amastacia", "Galanodel", "Holimion", "Ilphelkiir", "Liadon"];
var elfNames = [elfMale, elfFemale, elfSurname];

var dwarfMale = [ "Adrik", "Alberich", "Baern", "Barendd", "Brottor", "Bruenor", "Dain", "Darrak", "Delg", "Eberk", "Einkil", "Fargrim", "Flint", "Gardain", "Harbek", "Kildrak", "Morgran", "Orsik", "Oskar", "Rangrim", "Rurik", "Taklinn", "Thoradin", "Thorin", "Tordek", "Traubon", "Travok", "Ulfgar", "Veit", "Vondal" ];
var dwarfFemale = [ "Amber", "Artin", "Audhild", "Bardryn", "Dagnal", "Diesa", "Eldeth", "Falkrunn", "Finellen", "Gunnloda", "Gurdis", "Helja", "Hlin", "Kathra", "Kristryd", "Ilde", "Liftrasa", "Mardred", "Riswynn", "Sannl", "Torbera", "Torgga", "Vistra" ];
var dwarfSurname = [ "Balderk", "Battlehammer", "Brawnanvil", "Dankil", "Fireforge", "Frostbeard", "Gorunn", "Holderhek", "Ironfist", "Loderr", "Lutgehr", "Rumnaheim", "Strakeln", "Torunn", "Ungart" ];
var dwarfNames = [dwarfMale, dwarfFemale, dwarfSurname];

var humanMale = [ "Bor", "Fodel", "Glar", "Grigor", "Igan", "Ivor", "Kosef", "Mival", "Orel", "Pavel", "Sergor" ];
var humanFemale = [ "Alethra", "Kara", "Katernin", "Mara", "Natali", "Olma", "Tana", "Zora" ];
var humanSurname = [ "Bersk", "Chernin", "Dotsk", "Kulenov", "Marsk", "Nemetsk", "Shemov", "Starag" ];
var humanNames = [humanMale, humanFemale, humanSurname];

// ABILITIES: STR, DEX, CON, INT, WIS, CHA
var hillDwarf = {race:"Hill Dwarf", ability:[0, 0, 2, 0, 1, 0], speed:25, namepool:dwarfNames};
var mountainDwarf = {race:"Mountain Dwarf", ability:[2, 0, 2, 0, 0, 0], speed:25, namepool:dwarfNames};
var highElf = {race:"High Elf", ability:[0, 2, 0, 1, 0, 0], speed:30, namepool:elfNames};
var woodElf = {race:"Wood Elf", ability:[0, 2, 0, 0, 1, 0], speed:35, namepool:elfNames};
var darkElf = {race:"Dark Elf (Drow)", ability:[0, 2, 0, 0, 0, 1], speed:30, namepool:elfNames};
var lightfootHalfling = {race:"Lightfoot Halfling", ability:[0, 2, 0, 0, 0, 1], speed:25, namepool:humanNames};
var stoutHalfling = {race:"Stout Halfling", ability:[0, 2, 1, 0, 0, 0], speed:25, namepool:humanNames};
var human = {race:"Human", ability:[1, 1, 1, 1, 1, 1], speed:30, namepool:humanNames};
var dragonborn = {race:"Dragonborn", ability:[2, 0, 0, 0, 0, 1], speed:30, namepool:humanNames};
var forestGnome = {race:"Forest Gnome", ability:[0, 1, 0, 2, 0, 0], speed:25, namepool:humanNames};
var rockGnome = {race:"Rock Gnome", ability:[0, 0, 1, 2, 0, 0], speed:25, namepool:humanNames};
var halfElf = {race:"Half-Elf", ability:[0, 1, 1, 0, 0, 2], speed:30, namepool:humanNames};
var halfOrc = {race:"Half-Orc", ability:[2, 0, 1, 0, 0, 0], speed:30, namepool:humanNames};
var tiefling = {race:"Tiefling", ability:[0, 0, 0, 1, 0, 2], speed:30, namepool:humanNames};
// var blank = {race:"Unknown Race", ability:[0, 0, 0, 0, 0, 0], speed:30};
var racials = [human, highElf, rockGnome, halfOrc, mountainDwarf, hillDwarf, darkElf, woodElf, lightfootHalfling, stoutHalfling, dragonborn, forestGnome, halfElf, tiefling];

var barbarian = {role:"Barbarian", primaryStat:"STR", secondaryStat:"CON", savingThrows:["str","con"], hitDice:12, profCount:2, profSkills:["animalhandling", "athletics", "intimidation","nature","perception","survival"]};
var bard = {role:"Bard", primaryStat:"CHA", secondaryStat:"DEX", savingThrows:["dex","cha"], hitDice:8, profCount:3, profSkills: [ "athletics", "acrobatics", "sleightofhand", "stealth", "arcana", "history", "investigation", "nature", "religion", "animalhandling", "insight", "medicine", "perception", "survival", "deception", "intimidation", "performance", "persuasion" ]};
var cleric1 = {role:"Cleric", primaryStat:"WIS", secondaryStat:"STR", savingThrows:["wis","cha"], hitDice:8, profCount:2, profSkills:[ "history", "insight", "medicine", "persuasion", "religion" ]};
var cleric2 = {role:"Cleric", primaryStat:"WIS", secondaryStat:"CON", savingThrows:["wis","cha"], hitDice:8, profCount:2, profSkills:[ "history", "insight", "medicine", "persuasion", "religion" ]};
var druid = {role:"Druid", primaryStat:"WIS", secondaryStat:"CON", savingThrows:["int","wis"], hitDice:8, profCount:2, profSkills:[ "arcana", "animalhandling", "insight", "medicine", "nature", "perception", "religion", "survival" ]};
// var blank = {role:"Blank", primaryStat:"STR", secondaryStat:"CON", hitDice:8};

var classes = [barbarian, bard, cleric1, cleric2, druid]
var classRoll = undefined;

function RollClass() {
	classRoll = classes[Math.floor((Math.random() *classes.length))];
}

function DiceRoll() {
	var dice = prompt("What dice do you want to roll?");
	var diceRoll = Dice(dice);
	console.log( diceRoll );
}

function RollGender(){
	sex = Math.floor((Math.random() *2));
}

function RollName(gender){
	var maleOrFemale = race.namepool[gender];
	var surname = race.namepool[2];
	firstName = maleOrFemale[Math.floor((Math.random() *maleOrFemale.length))];
	lastName = surname[[Math.floor((Math.random() *surname.length))]];
	console.log(firstName + " " + lastName);
}

function Dice(d) {
	return Math.floor(Math.random() * (d-1 + 1)) + 1;
}

function RollRace() {
	race = racials[Math.floor((Math.random() *racials.length))];
	console.log(race);
	RollGender();
	RollName(sex);
	document.getElementById('form93_1').value=race.race;
	document.getElementById('form94_1').value=classRoll.role+" 1";
	document.getElementById('form95_1').value=firstName+" "+lastName;
	raceBonus = race.ability;
}

function RollAbility(){
	ResetFields();
	RollClass();
	RollRace();
	abilityScores = [];
	abilityModifier = [];
	for(var i = 0;i<6;i++){
		var rollTotal = 0;
		var roll1 = 0;
		var roll2 = 0;
		var roll3 = 0;
		var roll4 = 0;
		roll1 = Dice(6);
		roll2 = Dice(6);
		roll3 = Dice(6);
		roll4 = Dice(6);
		rollTotal = roll1+roll2+roll3+roll4-Math.min(roll1,roll2,roll3,roll4)+raceBonus[i];
		abilityScores.push(rollTotal);
		abilityModifier.push(GetModifier(rollTotal));
	}
	RollHitPoints();
	document.getElementById('form80_1').value = abilityScores[0];		//STR
	document.getElementById('form85_1').value = abilityScores[1];		//DEX
	document.getElementById('form84_1').value = abilityScores[2];		//CON
	document.getElementById('form82_1').value = abilityScores[3];		//INT
	document.getElementById('form81_1').value = abilityScores[4];		//WIS
	document.getElementById('form83_1').value = abilityScores[5];		//CHA
	document.getElementById('form60_1').value = abilityModifier[0];	 	// STRMOD
	document.getElementById('form61_1').value = abilityModifier[1]; 	// DEXMOD
	document.getElementById('form64_1').value = abilityModifier[2]; 	// CONMOD
	document.getElementById('form59_1').value = abilityModifier[3];		//INTMOD
	document.getElementById('form63_1').value = abilityModifier[4];		//WISMOD
	document.getElementById('form62_1').value = abilityModifier[5];		//CHAMOD
	RollSkills();
	document.getElementById('form69_1').value = 2; // PROFICIENCY
	document.getElementById('form87_1').value += abilityModifier[1]; // INITIATIVE
	DisableFields();
}

function GetModifier(score) {
	if (score == 0 || score == 1) {
		return -5;
	}
	else if (score == 2 || score == 3) {
		return -4;
	}
	else if (score == 4 || score == 5) {
		return -3;
	}
	else if (score == 6 || score == 7) {
		return -2;
	}
	else if (score == 8 || score == 9) {
		return -1;
	}
	else if (score == 10 || score == 11) {
		return 0;
	}
	else if (score == 12 || score == 13) {
		return 1;
	}
	else if (score == 14 || score == 15) {
		return 2;
	}
	else if (score == 16 || score == 17) {
		return 3;
	}
	else if (score == 18 || score == 19) {
		return 4;
	}
	else if (score == 20 || score == 21) {
		return 5;
	}
}

function RollHitPoints() {
	hitPoints = classRoll.hitDice+abilityModifier[2];
	console.log(hitPoints+" HP");
	document.getElementById('form73_1').value=hitPoints;
}

function DisableFields(){
	var disabledInputs = document.getElementsByClassName('disableme');
	for (var i = 0;i<disabledInputs.length;i++){
		disabledInputs[i].readOnly = true;
	}
}

function ResetFields(){
	var disabledInputs = document.getElementsByClassName('disableme');
	var checkBoxes = document.getElementsByTagName('checkbox');
	for (var i = 0;i<disabledInputs.length;i++){
		if (disabledInputs[i].type == "text"){
			disabledInputs[i].value = "";
		}
		else if (disabledInputs[i].type == "checkbox"){
			disabledInputs[i].checked = false;
		}
	}
}

function RollSkills(){
	var abilityNames = ["str", "dex", "con", "int", "wis", "cha"];
	for (var i = 0;i<6;i++){
		var skillAbility = document.getElementsByClassName(abilityNames[i]);
		for (var j = 0; j < skillAbility.length; j++) {
			skillAbility[j].value = abilityModifier[i];
		}
	}
	Proficiencies();
}

function Proficiencies(){
	document.getElementsByClassName("st"+classRoll.savingThrows[0])[0].checked = true;
	document.getElementsByClassName("st"+classRoll.savingThrows[1])[0].checked = true;
	var j = -1;
	var t = -1;
	for (var i = 0; i<classRoll.profCount;i){
		var k = Dice(classRoll.profSkills.length);
		if (j==k){
			console.log("rerolling proficiency...");
		}
		else if (t==k){
			console.log("rerolling proficiency...");
		}
		else if (k!=t&&k!=j){
			console.log(classRoll.profSkills[k-1]);
			document.getElementsByClassName("cb"+classRoll.profSkills[k-1])[0].checked = true;
			var currentSkill = parseInt(document.getElementsByClassName(classRoll.profSkills[k-1])[0].value);	
			document.getElementsByClassName(classRoll.profSkills[k-1])[0].value = currentSkill+2;
			if (i==0){
				j = k;
			}
			if (i==1){
				t = k;
			}
			i++;
		}
		else{
			console.log("???");
		}
	}
}