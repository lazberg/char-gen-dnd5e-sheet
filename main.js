var race = 0;
var raceBonus = [0, 0, 0, 0, 0, 0];
var firstName = "No";
var lastName = "Face";
var sex = 0;
var hitPoints = 0;
var abilityScores = [];
var abilityModifier = [];
var primary = 0;
var secondary = 0;

// NAMES
var namePool = [elfNames, humanNames, dwarfNames, halflingNames, dragonbornNames, gnomeNames];

var elfMale = [ "Adran", "Aelar", "Aramil", "Arannis", "Aust", "Beiro", "Berrian", "Carric", "Enialis", "Erdan", "Erevan", "Galinndan", "Hadarai", "Heian", "Himo", "Immeral", "Ivellios", "Laucian", "Mindartis", "Paelias", "Peren", "Quarion", "Riardon", "Rolen", "Soveliss", "Thamior", "Tharivol", "Theren", "Varis" ];
var elfFemale = [ "Adrie", "Althaea", "Anastrianna", "Andraste", "Antinua", "Bethrynna", "Birel", "Caelynn", "Drusilia", "Enna", "Felosial", "Ielenia", "Jelenneth", "Keyleth", "Leshanna", "Lia", "Meriele", "Mialee", "Naivara", "Quelenna", "Quillathe", "Sariel", "Shanairra", "Shava", "Silaqui", "Theirastra", "Thia", "Vadania", "Valanthe", "Xanaphia" ];
var elfSurname = [ "Amakiir", "Amastacia", "Galanodel", "Holimion", "Ilphelkiir", "Liadon", "Meliamne", "Naïlo", "Siannodel", "Xiloscient" ];
var elfNames = [elfMale, elfFemale, elfSurname];

var dwarfMale = [ "Adrik", "Alberich", "Baern", "Barendd", "Brottor", "Bruenor", "Dain", "Darrak", "Delg", "Eberk", "Einkil", "Fargrim", "Flint", "Gardain", "Harbek", "Kildrak", "Morgran", "Orsik", "Oskar", "Rangrim", "Rurik", "Taklinn", "Thoradin", "Thorin", "Tordek", "Traubon", "Travok", "Ulfgar", "Veit", "Vondal" ];
var dwarfFemale = [ "Amber", "Artin", "Audhild", "Bardryn", "Dagnal", "Diesa", "Eldeth", "Falkrunn", "Finellen", "Gunnloda", "Gurdis", "Helja", "Hlin", "Kathra", "Kristryd", "Ilde", "Liftrasa", "Mardred", "Riswynn", "Sannl", "Torbera", "Torgga", "Vistra" ];
var dwarfSurname = [ "Balderk", "Battlehammer", "Brawnanvil", "Dankil", "Fireforge", "Frostbeard", "Gorunn", "Holderhek", "Ironfist", "Loderr", "Lutgehr", "Rumnaheim", "Strakeln", "Torunn", "Ungart" ];
var dwarfNames = [dwarfMale, dwarfFemale, dwarfSurname];

var humanMale = [ "Aseir", "Bardeid", "Haseid", "Khemed", "Mehmen", "Sudeiman", "Zasheir", "Darvin", "Dorn", "Evendur", "Gorstag", "Grim", "Helm", "Malark", "Morn", "Randal", "Stedd", "Bor", "Fodel", "Glar", "Grigor", "Igan", "Ivor", "Kosef", "Mival", "Orel", "Pavel", "Sergor", "Ander", "Blath", "Bran", "Frath", "Geth", "Lander", "Luth", "Malcer", "Stor", "Taman", "Urth", "Aoth", "Bareris", "Ehput-Ki", "Kethoth", "Mumed", "Ramas", "So-Kehur", "Thazar-De", "Urhur", "Borivik", "Faurgar", "Jandar", "Kanithar", "Madislak", "Ralmevik", "Shaumar", "Vladislak", "An", "Chen", "Chi", "Fai", "Jiang", "Jun", "Lian", "Long", "Meng", "On", "Shan", "Shui", "Wen", "Anton", "Diero", "Marcon", "Pieron", "Rimardo", "Romero", "Salazar", "Umbero" ];
var humanFemale = [ "Atala", "Ceidil", "Hama", "Jasmal", "Meilil", "Seipora", "Yasheira", "Zasheida", "Arveene", "Esvele", "Jhessail", "Kerri", "Lureene", "Miri", "Rowan", "Shandri", "Tessele", "Alethra", "Kara", "Katernin", "Mara", "Natali", "Olma", "Tana", "Zora", "Amafrey", "Betha", "Cefrey", "Kethra", "Mara", "Olga", "Silifrey", "Westra", "Arizima", "Chathi", "Nephis", "Nulara", "Murithi", "Sefris", "Thola", "Umara", "Zolis", "Fyevarra", "Hulmarra", "Immith", "Imzel", "Navarra", "Shevarra", "Tammith", "Yuldra", "Bai", "Chao", "Jia", "Lei", "Mei", "Qiao", "Shui", "Tai", "Balama", "Dona", "Faila", "Jalana", "Luisa", "Marta", "Quara", "Selise", "Vonda" ];
var humanSurname = [ "Agosto", "Astorio", "Calabra", "Domine", "Falone", "Marivaldi", "Pisacar", "Ramondo", "Chien", "Huang", "Kao", "Kung", "Lao", "Ling", "Mei", "Pin", "Shin", "Sum", "Tan", "Wan", "Chergoba", "Dyernina", "Iltazyara", "Murnyethara", "Stayanoga", "Ulmokina", "Ankhalab", "Anskuld", "Fezim", "Hahpet", "Nathandem", "Sepret", "Uuthrakt", "Brightwood", "Helder", "Hornraven", "Lackman", "Stormwind", "Windrivver", "Bersk", "Chernin", "Dotsk", "Kulenov", "Marsk", "Nemetsk", "Shemov", "Starag", "Amblecrown", "Buckman", "Dundragon", "Evenwood", "Greycastle", "Tallstag", "Basha", "Dumein", "Jassan", "Khalid", "Mostana", "Pashar", "Rein" ];
var humanNames = [humanMale, humanFemale, humanSurname];

var halflingMale = [ "Alton", "Ander", "Cade", "Corrin", "Eldon", "Errich", "Finnan", "Garret", "Lindal", "Lyle", "Merric", "Milo", "Osborn", "Perrin", "Reed", "Roscoe", "Wellby" ];
var halflingFemale = [ "Andry", "Bree", "Callie", "Cora", "Euphemia", "Jillian", "Kithri", "Lavinia", "Lidda", "Merla", "Nedda", "Paela", "Portia", "Seraphina", "Shaena", "Trym", "Vani", "Verna" ];
var halflingSurname = [ "Brushgather", "Goodbarrel", "Greenbottle", "High-hill", "Hilltopple", "Leagallow", "Tealeaf", "Thorngage", "Tosscobble", "Underbough" ];
var halflingNames = [halflingMale, halflingFemale, halflingSurname];

var dragonbornMale = [ "Arjhan", "Balasar", "Bharash", "Donaar", "Ghesh", "Heskan", "Kriv", "Medrash", "Mehen", "Nadarr", "Pandjed", "Patrin", "Rhogar", "Shamash", "Shedinn", "Tarhun", "Torinn" ];
var dragonbornFemale = [ "Akra", "Biri", "Daar", "Farideh", "Harann", "Havilar", "Jheri", "Kava", "Korinn", "Mishann", "Nala", "Perra", "Raiann", "Sora", "Surina", "Thava", "Uadjit" ];
var dragonbornSurname = [ "Clethtinthiallor", "Daardendrian", "Delmirev", "Drachedandion", "Fenkenkabradon", "Kepeshkmolik", "Kerrhylon", "Kimbatuul", "Linxakasendalor", "Myastan", "Nemmonis", "Norixius", "Ophinshtalajiir", "Prexijandilin", "Shestendeliath", "Turnuroth", "Verthisathurgiesh", "Yarjerit" ];
var dragonbornNames = [dragonbornMale , dragonbornFemale ,dragonbornSurname];

var gnomeMale = [ "Alston", "Alvyn", "Boddynock", "Brocc", "Burgell", "Dimble", "Eldon", "Erky", "Fonkin", "Frug", "Gerbo", "Gimble", "Glim", "Jebeddo", "Kellen", "Namfoodle", "Orryn", "Roondar", "Seebo", "Sindri", "Warryn", "Wrenn", "Zook" ];
var gnomeFemale = [ "Bimpnottin", "Breena", "Caramip", "Carlin", "Donella", "Duvamil", "Ella", "Ellyjobell", "Ellywick", "Lilli", "Loopmottin", "Lorilla", "Mardnab", "Nissa", "Nyx", "Oda", "Orla", "Roywyn", "Shamil", "Tana", "Waywocket", "Zanna" ];
var gnomeSurname = [ "Beren", "Daergel", "Folkor", "Garrick", "Nackle", "Murnig", "Ningel", "Raulnor", "Scheppen", "Timbers", "Turen" ];
var gnomeNames = [gnomeMale, gnomeFemale, gnomeSurname];

var halforcMale = [ "Dench", "Feng", "Gell", "Henk", "Holg", "Imsh", "Keth", "Krusk", "Mhurren", "Ront", "Shump", "Thokk" ];
var halforcFemale = [ "Baggi", "Emen", "Engong", "Kansif", "Myev", "Neega", "Ovak", "Ownka", "Shautha", "Sutha", "Vola", "Volen", "Yevelda" ];
var halforcSurname = [ "" ];
var halforcNames = [halforcMale, halforcFemale,halforcSurname];

var tieflingMale = [ "Akmenos", "Amnon", "Barakas", "Damakos", "Ekemon", "Iados", "Kairon", "Leucis", "Melech", "Mordai", "Morthos", "Pelaios", "Skamos", "Therai" ];
var tieflingFemale = [ "Akta", "Anakis", "Bryseis", "Criella", "Damaia", "Ea", "Kallista", "Lerissa", "Makaria", "Nemeia", "Orianna", "Phelaia", "Rieta" ];
var tieflingSurname = [ "'Art'", "'Carrion'", "'Chant'", "'Creed'", "'Despair'", "'Excellence'", "'Fear'", "'Glory'", "'Hope'", "'Ideal'", "'Music'", "'Nowhere'", "'Open'", "'Poetry'", "'Quest'", "'Random'", "'Reverence'", "'Sorrow'", "'Temerity'", "'Torment'", "'Weary'" ];
var tieflingNames = [tieflingMale,tieflingFemale ,tieflingSurname];

/*
var Male = 
var Female = 
var Surname = 
var Names = [, ,];
*/

// ABILITIES: STR, DEX, CON, INT, WIS, CHA
var hillDwarf = {race:"Hill Dwarf", ability:[0, 0, 2, 0, 1, 0], speed:25, namepool:dwarfNames};
var mountainDwarf = {race:"Mountain Dwarf", ability:[2, 0, 2, 0, 0, 0], speed:25, namepool:dwarfNames};
var highElf = {race:"High Elf", ability:[0, 2, 0, 1, 0, 0], speed:30, namepool:elfNames};
var woodElf = {race:"Wood Elf", ability:[0, 2, 0, 0, 1, 0], speed:35, namepool:elfNames};
var darkElf = {race:"Dark Elf (Drow)", ability:[0, 2, 0, 0, 0, 1], speed:30, namepool:elfNames};
var lightfootHalfling = {race:"Lightfoot Halfling", ability:[0, 2, 0, 0, 0, 1], speed:25, namepool:halflingNames};
var stoutHalfling = {race:"Stout Halfling", ability:[0, 2, 1, 0, 0, 0], speed:25, namepool:halflingNames};
var human = {race:"Human", ability:[1, 1, 1, 1, 1, 1], speed:30, namepool:humanNames};
var dragonborn = {race:"Dragonborn", ability:[2, 0, 0, 0, 0, 1], speed:30, namepool:dragonbornNames};
var forestGnome = {race:"Forest Gnome", ability:[0, 1, 0, 2, 0, 0], speed:25, namepool:gnomeNames};
var rockGnome = {race:"Rock Gnome", ability:[0, 0, 1, 2, 0, 0], speed:25, namepool:gnomeNames};
var halfElf = {race:"Half-Elf", ability:[0, 1, 1, 0, 0, 2], speed:30, namepool:humanNames};
var halfOrc = {race:"Half-Orc", ability:[2, 0, 1, 0, 0, 0], speed:30, namepool:halforcNames};
var tiefling = {race:"Tiefling", ability:[0, 0, 0, 1, 0, 2], speed:30, namepool:tieflingNames};
// var blank = {race:"Unknown Race", ability:[0, 0, 0, 0, 0, 0], speed:30};
var racials = [human, highElf, rockGnome, halfOrc, mountainDwarf, hillDwarf, darkElf, woodElf, lightfootHalfling, stoutHalfling, dragonborn, forestGnome, halfElf, tiefling];

var barbarian = {role:"Barbarian", primaryStat:"STR", secondaryStat:"CON", savingThrows:["str","con"], hitDice:12, profCount:2, profSkills:["animalhandling", "athletics", "intimidation","nature","perception","survival"]};
var bard = {role:"Bard", primaryStat:"CHA", secondaryStat:"DEX", savingThrows:["dex","cha"], hitDice:8, profCount:3, profSkills: [ "athletics", "acrobatics", "sleightofhand", "stealth", "arcana", "history", "investigation", "nature", "religion", "animalhandling", "insight", "medicine", "perception", "survival", "deception", "intimidation", "performance", "persuasion" ]};
var cleric = {role:"Cleric", primaryStat:"WIS", secondaryStat:"RANDOM", savingThrows:["wis","cha"], hitDice:8, profCount:2, profSkills:[ "history", "insight", "medicine", "persuasion", "religion" ]};
//var cleric2 = {role:"Cleric", primaryStat:"WIS", secondaryStat:"CON", savingThrows:["wis","cha"], hitDice:8, profCount:2, profSkills:[ "history", "insight", "medicine", "persuasion", "religion" ]};
var druid = {role:"Druid", primaryStat:"WIS", secondaryStat:"CON", savingThrows:["int","wis"], hitDice:8, profCount:2, profSkills:[ "arcana", "animalhandling", "insight", "medicine", "nature", "perception", "religion", "survival" ]};
var fighter = {role:"Fighter", primaryStat:"RANDOM", secondaryStat:"CON", savingThrows:["str","con"], hitDice:10, profCount:2, profSkills:[ "acrobatics", "animalhandling", "athletics", "history", "insight", "intimidation", "perception", "survival" ]};
//var fighter2 = {role:"Fighter", primaryStat:"DEX", secondaryStat:"CON", savingThrows:["str","con"], hitDice:10, profCount:2, profSkills:[ "acrobatics", "animalhandling", "athletics", "history", "insight", "intimidation", "perception", "survival" ]};
var monk = {role:"Monk", primaryStat:"DEX", secondaryStat:"WIS", savingThrows:["str","dex"], hitDice:8, profCount:2, profSkills:[ "athletics", "athletics", "history", "insight", "religion", "stealth" ]};
var paladin = {role:"Paladin", primaryStat:"STR", secondaryStat:"CHA", savingThrows:["wis","cha"], hitDice:10, profCount:2, profSkills:[ "athletics", "insight", "intimidation", "medicine", "persuasion", "religion" ]};
var ranger = {role:"Ranger", primaryStat:"DEX", secondaryStat:"WIS", savingThrows:["str","dex"], hitDice:10, profCount:3, profSkills:[ "animalhandling", "athletics", "insight", "investigation", "nature", "perception", "stealth", "survival" ]};
var rogue = {role:"Rogue", primaryStat:"DEX", secondaryStat:"RANDOM", savingThrows:["dex","int"], hitDice:8, profCount:4, profSkills:[ "acrobatics", "athletics", "deception", "insight", "intimidation", "investigation", "perception", "performance", "persuasion", "sleightofhand", "stealth" ]};
var sorcerer = {role:"Sorcerer", primaryStat:"CHA", secondaryStat:"CON", savingThrows:["con","cha"], hitDice:6, profCount:2, profSkills:[ "arcana", "deception", "insight", "intimidation", "persuasion", "religion" ]};
var warlock = {role:"Warlock", primaryStat:"CHA", secondaryStat:"CON", savingThrows:["cha","wis"], hitDice:8, profCount:2, profSkills:[ "arcana", "deception", "history", "intimidation", "investigation", "nature", "religion" ]};
var wizard = {role:"Wizard", primaryStat:"INT", secondaryStat:"RANDOM", savingThrows:["int","wis"], hitDice:6, profCount:2, profSkills:[ "arcana", "history", "insight", "investigation", "medicine", "religion" ]};

// var blank = {role:"Blank", primaryStat:"STR", secondaryStat:"CON", hitDice:8};
// var  = {role:"", primaryStat:"", secondaryStat:"", savingThrows:["",""], hitDice:, profCount:, profSkills:[ "", "", "", "", "", "" ]};

var classes = [barbarian, bard, cleric, druid, fighter, monk, paladin, ranger, rogue, sorcerer, warlock, wizard];
var classRoll = undefined;

function RollClass() {
	classRoll = classes[Math.floor((Math.random() *classes.length))];
}

function ResetStats() {
	cleric.secondaryStat = RandomStatPriority("STR", "CON");
	fighter.primaryStat = RandomStatPriority("STR", "DEX");
	rogue.secondaryStat = RandomStatPriority("INT", "CHA");
	wizard.secondaryStat = RandomStatPriority("CON", "DEX");
	//paladin.primaryStat = RandomStatPriority("STR", "CHA");
}

function RandomStatPriority(stat1, stat2){
	var result = Dice(2);
	if (result == 1) {
		return stat1;
	}
	if (result == 2) {
		return stat2;
	}
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
	ResetStats();
	RollClass();
	RollRace();
	abilityScores = [];
	abilityModifier = [];
	primary = 0;
	secondary = 0;
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
		rollTotal = roll1+roll2+roll3+roll4-Math.min(roll1,roll2,roll3,roll4)/*+raceBonus[i]*/;
		abilityScores.push(rollTotal);
	}
	primary = Math.max(abilityScores[0], abilityScores[1], abilityScores[2], abilityScores[3], abilityScores[4], abilityScores[5] );
	abilityScores.splice(abilityScores.indexOf(primary), 1);
	secondary = Math.max(abilityScores[0], abilityScores[1], abilityScores[2], abilityScores[3], abilityScores[4] );
	abilityScores.splice(abilityScores.indexOf(secondary), 1);
	GetPrimary();
	AddArrays(abilityScores, raceBonus);
	
	document.getElementById('form80_1').value = abilityScores[0];		//STR
	document.getElementById('form85_1').value = abilityScores[1];		//DEX
	document.getElementById('form84_1').value = abilityScores[2];		//CON
	document.getElementById('form82_1').value = abilityScores[3];		//INT
	document.getElementById('form81_1').value = abilityScores[4];		//WIS
	document.getElementById('form83_1').value = abilityScores[5];		//CHA
	for (var i = 0;i<abilityScores.length;i++){
		abilityModifier.push(GetModifier(abilityScores[i]));
	}
	document.getElementById('form60_1').value = abilityModifier[0];	 	// STRMOD
	document.getElementById('form61_1').value = abilityModifier[1]; 	// DEXMOD
	document.getElementById('form64_1').value = abilityModifier[2]; 	// CONMOD
	document.getElementById('form59_1').value = abilityModifier[3];		//INTMOD
	document.getElementById('form63_1').value = abilityModifier[4];		//WISMOD
	document.getElementById('form62_1').value = abilityModifier[5];		//CHAMOD
	RollHitPoints();
	RollSkills();
	document.getElementById('form69_1').value = 2; // PROFICIENCY
	document.getElementById('form87_1').value += abilityModifier[1]; // INITIATIVE
	DisableFields();
}

function AddArrays(array1, array2) {
	for(var i =0;i<array1.length;i++) {
		array1[i] += array2[i];
	}
}

function FindStatNumber(ability) {
	if (ability=="STR"){
		return 0;
	}
	else if (ability=="DEX"){
		return 1;
	}
	else if (ability=="CON"){
		return 2;
	}
	else if (ability=="INT"){
		return 3;
	}
	else if (ability=="WIS"){
		return 4;
	}
	else if (ability=="CHA"){
		return 5;
	}
}

function GetPrimary() {
	var primaryNum = FindStatNumber(classRoll.primaryStat);
	var secondaryNum = FindStatNumber(classRoll.secondaryStat);
	
	if (primaryNum < secondaryNum){
		abilityScores.splice(primaryNum, 0, primary);
		abilityScores.splice(secondaryNum, 0, secondary);
	}
	else if (primaryNum > secondaryNum){
		abilityScores.splice(secondaryNum, 0, secondary);
		abilityScores.splice(primaryNum, 0, primary);
	}
	
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
	document.getElementsByClassName("save"+classRoll.savingThrows[0])[0].value = parseInt(document.getElementsByClassName("save"+classRoll.savingThrows[0])[0].value)+2;
	document.getElementsByClassName("st"+classRoll.savingThrows[1])[0].checked = true;
	document.getElementsByClassName("save"+classRoll.savingThrows[1])[0].value = parseInt(document.getElementsByClassName("save"+classRoll.savingThrows[1])[0].value)+2;
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