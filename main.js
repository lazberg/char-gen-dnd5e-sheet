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
var languages = [];
var extraLanguage = 0;
var setProfs = [];
var toolProfs = [];
var lastTool = undefined;
var bg = undefined;
var bgSpec = undefined;

//LANGUAGE
var langList = [ "Common", "Dwarvish", "Elvish", "Giant", "Gnomish", "Goblin", "Halfling", "Orc", "Abyssal", "Celestial", "Draconic", "Deep Speech", "Infernal", "Primordial", "Sylvan", "Undercommon" ];
//VARIOUS TOOLS?
var instrumentsList = [ "Bagpipes", "Drum", "Dulcimer", "Flute", "Lute", "Lyre", "Horn", "Pan flute", "Shawm", "Viol" ];
var toolsList = [ "Alchemist's supplies", "Brewer's supplies", "Calligrapher's supplies", "Carpenter's tools", "Cartographer's tools", "Cobbler's tools", "Cook's utensils", "Glassblower's tools", "Jeweler's tools", "Leatherworker's tools", "Mason's tools", "Painter's supplies", "Potter's tools", "Smith's tools", "Tinker's tools", "Weaver's tools", "Weaver's tools", "Woodcarver's tools" ];
var gamesList = [ "Dice set", "Dragonchess set", "Playing card set", "Three-Dragon Ante set" ];
// NAMES
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

var namePool = [elfNames, humanNames, dwarfNames, halflingNames, dragonbornNames, gnomeNames];
/*
var Male = 
var Female = 
var Surname = 
var Names = [, ,];
*/

// RACES
// ABILITIES: STR, DEX, CON, INT, WIS, CHA
var hillDwarf = {race:"Hill Dwarf", ability:[0, 0, 2, 0, 1, 0], speed:25, namepool:dwarfNames, vision:"Darkvision", lang1:"Common", lang2:"Dwarvish", extraLanguage:0};
var mountainDwarf = {race:"Mountain Dwarf", ability:[2, 0, 2, 0, 0, 0], speed:25, namepool:dwarfNames, vision:"Darkvision", lang1:"Common", lang2:"Dwarvish", extraLanguage:0};
var highElf = {race:"High Elf", ability:[0, 2, 0, 1, 0, 0], speed:30, namepool:elfNames, vision:"Darkvision", lang1:"Common", lang2:"Elvish", extraLanguage:1};
var woodElf = {race:"Wood Elf", ability:[0, 2, 0, 0, 1, 0], speed:35, namepool:elfNames, vision:"Darkvision", lang1:"Common", lang2:"Elvish", extraLanguage:0};
var darkElf = {race:"Dark Elf (Drow)", ability:[0, 2, 0, 0, 0, 1], speed:30, namepool:elfNames, vision:"Superior Darkvision", lang1:"Common", lang2:"Elvish", extraLanguage:0};
var lightfootHalfling = {race:"Lightfoot Halfling", ability:[0, 2, 0, 0, 0, 1], speed:25, namepool:halflingNames, vision:"none", lang1:"Common", lang2:"Halfling", extraLanguage:0};
var stoutHalfling = {race:"Stout Halfling", ability:[0, 2, 1, 0, 0, 0], speed:25, namepool:halflingNames, vision:"none", lang1:"Common", lang2:"Halfling", extraLanguage:0};
var human = {race:"Human", ability:[1, 1, 1, 1, 1, 1], speed:30, namepool:humanNames, vision:"none", lang1:"Common", lang2:"none", extraLanguage:1};
var dragonborn = {race:"Dragonborn", ability:[2, 0, 0, 0, 0, 1], speed:30, namepool:dragonbornNames, vision:"none", lang1:"Common", lang2:"Draconic", extraLanguage:0};
var forestGnome = {race:"Forest Gnome", ability:[0, 1, 0, 2, 0, 0], speed:25, namepool:gnomeNames, vision:"Darkvision", lang1:"Common", lang2:"Gnomish", extraLanguage:0};
var rockGnome = {race:"Rock Gnome", ability:[0, 0, 1, 2, 0, 0], speed:25, namepool:gnomeNames, vision:"Darkvision", lang1:"Common", lang2:"Gnomish", extraLanguage:0};
var halfElf = {race:"Half-Elf", ability:[0, 1, 1, 0, 0, 2], speed:30, namepool:humanNames, vision:"Darkvision", lang1:"Common", lang2:"Elvish", extraLanguage:1};
var halfOrc = {race:"Half-Orc", ability:[2, 0, 1, 0, 0, 0], speed:30, namepool:halforcNames, vision:"Darkvision", lang1:"Common", lang2:"Orc", extraLanguage:0};
var tiefling = {race:"Tiefling", ability:[0, 0, 0, 1, 0, 2], speed:30, namepool:tieflingNames, vision:"Darkvision", lang1:"Common", lang2:"Infernal", extraLanguage:0};
// var blank = {race:"Unknown Race", ability:[0, 0, 0, 0, 0, 0], speed:30};
var racials = [human, highElf, rockGnome, halfOrc, mountainDwarf, hillDwarf, darkElf, woodElf, lightfootHalfling, stoutHalfling, dragonborn, forestGnome, halfElf, tiefling];

//CLASSES
var barbarian = {role:"Barbarian", primaryStat:"STR", secondaryStat:"CON", savingThrows:["str","con"], hitDice:12, profCount:2, profSkills:["animalhandling", "athletics", "intimidation","nature","perception","survival"]};
var bard = {role:"Bard", primaryStat:"CHA", secondaryStat:"DEX", savingThrows:["dex","cha"], hitDice:8, profCount:3, profSkills: [ "athletics", "acrobatics", "sleightofhand", "stealth", "arcana", "history", "investigation", "nature", "religion", "animalhandling", "insight", "medicine", "perception", "survival", "deception", "intimidation", "performance", "persuasion" ]};
var cleric = {role:"Cleric", primaryStat:"WIS", secondaryStat:"RANDOM", savingThrows:["wis","cha"], hitDice:8, profCount:2, profSkills:[ "history", "insight", "medicine", "persuasion", "religion" ]};
var druid = {role:"Druid", primaryStat:"WIS", secondaryStat:"CON", savingThrows:["int","wis"], hitDice:8, profCount:2, profSkills:[ "arcana", "animalhandling", "insight", "medicine", "nature", "perception", "religion", "survival" ]};
var fighter = {role:"Fighter", primaryStat:"RANDOM", secondaryStat:"CON", savingThrows:["str","con"], hitDice:10, profCount:2, profSkills:[ "acrobatics", "animalhandling", "athletics", "history", "insight", "intimidation", "perception", "survival" ]};
var monk = {role:"Monk", primaryStat:"DEX", secondaryStat:"WIS", savingThrows:["str","dex"], hitDice:8, profCount:2, profSkills:[ "athletics", "athletics", "history", "insight", "religion", "stealth" ]};
var paladin = {role:"Paladin", primaryStat:"STR", secondaryStat:"CHA", savingThrows:["wis","cha"], hitDice:10, profCount:2, profSkills:[ "athletics", "insight", "intimidation", "medicine", "persuasion", "religion" ]};
var ranger = {role:"Ranger", primaryStat:"DEX", secondaryStat:"WIS", savingThrows:["str","dex"], hitDice:10, profCount:3, profSkills:[ "animalhandling", "athletics", "insight", "investigation", "nature", "perception", "stealth", "survival" ]};
var rogue = {role:"Rogue", primaryStat:"DEX", secondaryStat:"RANDOM", savingThrows:["dex","int"], hitDice:8, profCount:4, profSkills:[ "acrobatics", "athletics", "deception", "insight", "intimidation", "investigation", "perception", "performance", "persuasion", "sleightofhand", "stealth" ]};
var sorcerer = {role:"Sorcerer", primaryStat:"CHA", secondaryStat:"CON", savingThrows:["con","cha"], hitDice:6, profCount:2, profSkills:[ "arcana", "deception", "insight", "intimidation", "persuasion", "religion" ]};
var warlock = {role:"Warlock", primaryStat:"CHA", secondaryStat:"CON", savingThrows:["cha","wis"], hitDice:8, profCount:2, profSkills:[ "arcana", "deception", "history", "intimidation", "investigation", "nature", "religion" ]};
var wizard = {role:"Wizard", primaryStat:"INT", secondaryStat:"RANDOM", savingThrows:["int","wis"], hitDice:6, profCount:2, profSkills:[ "arcana", "history", "insight", "investigation", "medicine", "religion" ]};

var classes = [barbarian, bard, cleric, druid, fighter, monk, paladin, ranger, rogue, sorcerer, warlock, wizard];
// var blank = {role:"Blank", primaryStat:"STR", secondaryStat:"CON", hitDice:8};
// var  = {role:"", primaryStat:"", secondaryStat:"", savingThrows:["",""], hitDice:, profCount:, profSkills:[ "", "", "", "", "", "" ]};

var classRoll = undefined;

//DRACONIC DESCENT FOR SORCERERS AND DRAGONBORN
var blackDrac = {dragon:"Black", damage:"Acid", breath:"5 by 30 ft. line (Dex. Save)"};
var blueDrac = {dragon:"Blue", damage:"Lightning", breath:"5 by 30 ft. line (Dex. Save)"};
var brassDrac = {dragon:"Brass", damage:"Fire", breath:"5 by 30 ft. line (Dex. Save)"};
var bronzeDrac = {dragon:"Bronze", damage:"Lightning", breath:"5 by 30 ft. line (Dex. Save)"};
var copperDrac = {dragon:"Copper", damage:"Acid", breath:"5 by 30 ft. line (Dex. Save)"};
var goldDrac = {dragon:"Gold", damage:"Fire", breath:"15 ft. cone (Dex. Save)"};
var greenDrac = {dragon:"Green", damage:"Poison", breath:"15 ft. cone (Con. Save)"};
var redDrac = {dragon:"Red", damage:"Fire", breath:"15 ft. cone (Dex. Save)"};
var silverDrac = {dragon:"Silver", damage:"Cold", breath:"15 ft. cone (Con. Save)"};
var whiteDrac = {dragon:"White", damage:"Cold", breath:"15 ft. cone (Con. Save)"};
var ancestry = [blackDrac,blueDrac,brassDrac,bronzeDrac,copperDrac,goldDrac,greenDrac,redDrac,silverDrac,whiteDrac];
var draconicAncestry = ancestry[Math.floor((Math.random()*ancestry.length))];

//BACKGROUNDS
var acolyte = {name:"Acolyte", speciality:["none"], profSkills:["insight", "religion"], tools:["none"], extraLanguage:2};
var charlatan = {name:"Charlatan", speciality:["none"], profSkills:["deception", "sleightofhand"], tools:["Disguise kit", "Forgery kit"], extraLanguage:0};
var criminal = {name:"Criminal", speciality:[ "Blackmailer", "Burglar", "Enforcer", "Fence", "Highway robber", "Hired killer", "Pickpocket", "Smuggler" ], profSkills:["deception","stealth"], tools:["Thieves' tools"], extraLanguage:0};
var entertainer = {name:"Entertainer", speciality:[ "Actor", "Dancer", "Fire-eater", "Jester", "Juggler", "Instrumentalist", "Poet", "Singer", "Storyteller", "Tumbler" ], profSkills:["acrobatics","performance"], tools:["Disguise kit"], extraLanguage:0};
var folkhero = {name:"Folk Hero", speciality:["none"], profSkills:["animalhandling","survival"], tools:["none"], extraLanguage:0};
var guildartisan = {name:"Guild Artisan", speciality:["none"], profSkills:["insight","persuasion"], tools:["none"], extraLanguage:1};
var hermit = {name:"Hermit", speciality:["none"], profSkills:["medicine","religion"], tools:["Herbalism kit"], extraLanguage:1};
var noble = {name:"Noble", speciality:["none"], profSkills:["history","persuasion"], tools:["none"], extraLanguage:1};
var outlander = {name:"Outlander", speciality:[ "Forester", "Trapper", "Homesteader", "Guide", "Exile", "Outcast", "Bounty hunter", "Pilgrim", "Tribal nomad", "Hunter-gatherer", "Tribal marauder" ], profSkills:["athletics","survival"], tools:["none"], extraLanguage:1};
var sage = {name:"Sage", speciality:[ "Alchemist", "Astronomer", "Discredited academic", "Librarian", "Professor", "Researcher", "Wizard's apprentice", "Scribe" ], profSkills:["arcana","history"], tools:["none"], extraLanguage:2};
var sailor = {name:"Sailor", speciality:["none"], profSkills:["athletics","perception"], tools:["Navigator's tools"], extraLanguage:0};
var soldier = {name:"Soldier", speciality:[ "Officer", "Scout", "Infantry", "Cavalry", "Healer", "Quartermaster", "Standard bearer", "Support staff" ], profSkills:["athletics","intimidation"], tools:["none"], extraLanguage:0};
var urchin = {name:"Urchin", speciality:["none"], profSkills:["sleightofhand","stealth"], tools:["Disguise kit","Thieves' tools"], extraLanguage:0};
//var  = {name:"", speciality:[""], profSkills:[""], tools:[""], extraLanguage:};

var backgroundList = [acolyte, charlatan, criminal, entertainer, folkhero, guildartisan, hermit, noble, outlander, sage, sailor, soldier, urchin];

function RollClass() {
	classRoll = classes[Math.floor((Math.random() *classes.length))];
}

function ResetStats() {
	cleric.secondaryStat = RandomStatPriority("STR", "CON");
	fighter.primaryStat = RandomStatPriority("STR", "DEX");
	rogue.secondaryStat = RandomStatPriority("INT", "CHA");
	wizard.secondaryStat = RandomStatPriority("CON", "DEX");
	languages = [];
	setProfs = [];
	toolProfs = [];
	halfElf.namepool = RandomStatPriority(namePool[0], namePool[1]);
	//console.log(halfElf.namepool);
	document.getElementById('form102_1').innerHTML="";
	extraLanguage = 0;
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
	document.getElementById("FDFXFA_PDFName").innerHTML = "CharSheet_"+firstName+""+lastName+".pdf";
	//console.log(firstName + " " + lastName);
	//console.log(race.namepool);
}

function RollLanguages(){
	languages.push(race.lang1);
	
	if(race.lang2 == "none"){
	}
	else{
		languages.push(race.lang2);
	}
	
	if(extraLanguage>0){
		for(var i=0;i<extraLanguage;i++){
			var newLang = langList[Math.floor((Math.random()*langList.length))];
			if(languages.includes(newLang)){
				console.log("They already know "+newLang+"!");
				i--;
			}
			else{
				languages.push(newLang);
			}
		}
	}
	//console.log(languages);
}

function Dice(d) {
	return Math.floor(Math.random() * (d-1 + 1)) + 1;
}

function InputProfLang() {
	document.getElementById("form102_1").innerHTML = "Languages: \n";
	for(var i=0;i<languages.length;i++){
		document.getElementById("form102_1").innerHTML += languages[i];
		if(i<languages.length-1){
			document.getElementById("form102_1").innerHTML += ", ";
		}
		else if(i==languages.length-1){
			document.getElementById("form102_1").innerHTML += ".\n\n";
		}
	}
}

function InputToolProfs() {
	if(toolProfs.length>0) {
		document.getElementById("form102_1").innerHTML += "Tools: \n";
		for(var i=0;i<toolProfs.length;i++){
			document.getElementById("form102_1").innerHTML += toolProfs[i];
			if(i<toolProfs.length-1){
				document.getElementById("form102_1").innerHTML += ", ";
			}
			else if(i==languages.length-1){
				document.getElementById("form102_1").innerHTML += ".\n\n";
			}
		}
	}
}

function RollRace() {
	race = racials[Math.floor((Math.random() *racials.length))];
	//race = racials[12];
	//console.log(race);
	RollGender();
	RollName(sex);
	document.getElementById('form93_1').value=race.race;
	document.getElementById('form94_1').value=classRoll.role+" 1";
	document.getElementById('form95_1').value=firstName+" "+lastName;
	raceBonus = race.ability;
	extraLanguage += race.extraLanguage;
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
	RollBackground();
	RacialBonuses(race.race);
	RollHitPoints();
	RollSkills();
	RollLanguages();
	InputProfLang();
	InputToolProfs();
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
	
	if(race.race=="Hill Dwarf"){
		hitPoints++;
	}
	
	//console.log(hitPoints+" HP");
	document.getElementById('form73_1').value=hitPoints;
	document.getElementById('form67_1').value=1;
	document.getElementById('form88_1').value = "d"+classRoll.hitDice;
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
	//SAVING THROWS
	document.getElementsByClassName("st"+classRoll.savingThrows[0])[0].checked = true;
	document.getElementsByClassName("save"+classRoll.savingThrows[0])[0].value = parseInt(document.getElementsByClassName("save"+classRoll.savingThrows[0])[0].value)+2;
	document.getElementsByClassName("st"+classRoll.savingThrows[1])[0].checked = true;
	document.getElementsByClassName("save"+classRoll.savingThrows[1])[0].value = parseInt(document.getElementsByClassName("save"+classRoll.savingThrows[1])[0].value)+2;
	
	for(var i=0;i<classRoll.profCount;i++) {
		var newProf = classRoll.profSkills[Math.floor((Math.random()*classRoll.profSkills.length))];
		if(setProfs.includes(newProf)){
			//console.log("They already know "+newProf+"!");
			i--;
		}
		else {
			setProfs.push(newProf);
		}
	}
	for(var i=0;i<setProfs.length;i++){
			document.getElementsByClassName("cb"+setProfs[i])[0].checked = true;
			var currentSkill = parseInt(document.getElementsByClassName(setProfs[i])[0].value);	
			document.getElementsByClassName(setProfs[i])[0].value = currentSkill+2;
	}
	/*
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
	}*/
}


function RacialBonuses(racename){
	if(race.vision=="none"){
		document.getElementById('form105_1').value = "";
	}
	else{
		document.getElementById('form105_1').value = race.vision + "\n\n";
	}
	
	if(racename=="Hill Dwarf") {
		//DRAWF STATS
		document.getElementById('form105_1').value += "Dwarven Resilience. You have advantage on saving throws against poison, and you have resistance against poison damage."+ "\n\n";
		document.getElementById('form105_1').value += "Dwarven Combat Training. You have proficiency with the battleaxe, handaxe, light hammer, and warhammer."+"\n\n";
		var tempTools = ["Smith's Tools", "Brewer's Supplies", "Mason's Tools"];
		LearnTool(tempTools);
		//toolProfs.push(tempTools[Math.floor((Math.random()*classRoll.profSkills.length))]);
		//InputToolProfs();
		document.getElementById('form105_1').value += "Stonecunning. Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus."+"\n\n";
		//HILL DWARF STATS
		document.getElementById('form105_1').value += "Dwarven Toughness. Your hit point maximum increases by 1, and it increases by 1 every time you gain a level."+"\n\n";
		
	}
	else if(racename=="Mountain Dwarf") {
		//DRAWF STATS
		//Dwarven Resilience
		document.getElementById('form105_1').value += "Dwarven Resilience. You have advantage on saving throws against poison, and you have resistance against poison damage."+ "\n\n";
		document.getElementById('form105_1').value += "Dwarven Combat Training. You have proficiency with the battleaxe, handaxe, light hammer, and warhammer."+"\n\n";
		var tempTools = ["Smith's Tools", "Brewer's Supplies", "Mason's Tools"];
		LearnTool(tempTools);
		//toolProfs.push(tempTools[Math.floor((Math.random()*classRoll.profSkills.length))]);
		//InputToolProfs();
		document.getElementById('form105_1').value += "Stonecunning. Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus."+"\n\n";
		//MOUNTAIN DWARF STATS
		document.getElementById('form105_1').value += "Dwarven Armor Training. You have proficiency with light and medium armor."+"\n\n";
	}
	else if(racename=="High Elf") {
		//ELF STATS
		document.getElementById('form105_1').value += "Keen Senses. You have proficiency in the Perception skill."+ "\n\n";
		setProfs.push("perception");
		document.getElementById('form105_1').value += "Fey Ancestry. You have advantage on saving throws against being charmed, and magic can't put you to sleep."+"\n\n";
		document.getElementById('form105_1').value += "Trance. For 4 hours a day, you can go into a deep meditation, remaining semiconscious. This gives you the same benefit that a human does from 8 hours of sleep."+"\n\n";
		//HIGH ELF
		document.getElementById('form105_1').value += "Elf Weapon Training. You have proficiency with the longsword, shortsword, shortbow, and longbow."+ "\n\n";
		document.getElementById('form105_1').value += "Cantrip. You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it."+ "\n\n";
	}
	else if(racename=="Wood Elf") {
		//ELF STATS
		document.getElementById('form105_1').value += "Keen Senses. You have proficiency in the Perception skill."+ "\n\n";
		setProfs.push("perception");
		document.getElementById('form105_1').value += "Fey Ancestry. You have advantage on saving throws against being charmed, and magic can't put you to sleep."+"\n\n";
		document.getElementById('form105_1').value += "Trance. For 4 hours a day, you can go into a deep meditation, remaining semiconscious. This gives you the same benefit that a human does from 8 hours of sleep."+"\n\n";
		//WOOD ELF
		document.getElementById('form105_1').value += "Elf Weapon Training. You have proficiency with the longsword, shortsword, shortbow, and longbow."+ "\n\n";
		document.getElementById('form105_1').value += "Mask of the Wild. You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena."+ "\n\n";
	}
	else if(racename=="Dark Elf (Drow)") {
		//ELF STATS
		document.getElementById('form105_1').value += "Keen Senses. You have proficiency in the Perception skill."+ "\n\n";
		setProfs.push("perception");
		document.getElementById('form105_1').value += "Fey Ancestry. You have advantage on saving throws against being charmed, and magic can't put you to sleep."+"\n\n";
		document.getElementById('form105_1').value += "Trance. For 4 hours a day, you can go into a deep meditation, remaining semiconscious. This gives you the same benefit that a human does from 8 hours of sleep."+"\n\n";
		//DARK ELF
		document.getElementById('form105_1').value += "Sunlight Sensitivity. You have disadvantage on attack rolls and on Wisdom (Perception) checks that rely on sight when you, the target of your attack, or whatever you are trying to perceive is in direct sunlight."+ "\n\n";
		document.getElementById('form105_1').value += "Drow Magic. You know the Dancing Lights cantrip."+ "\n\n";
		document.getElementById('form105_1').value += "Drow Weapon Training. You have proficiency with rapiers, shortswords, and hand crossbows."+ "\n\n";		
	}
	else if(racename=="Lightfoot Halfling") {
		//HALFLING STATS
		document.getElementById('form105_1').value += "Lucky. When you roll a 1 on a the d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll."+ "\n\n";
		document.getElementById('form105_1').value += "Brave. You have advantage on saving throws against being frightened."+ "\n\n";
		document.getElementById('form105_1').value += "Halfling Nimbleness. You can move through the space of any creature that is of a size larger than yours."+ "\n\n";
		//LIGHTFOOT
		document.getElementById('form105_1').value += "Naturally Stealthy. You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you."+ "\n\n";
	}
	else if(racename=="Stout Halfling") {
		//HALFLING STATS
		document.getElementById('form105_1').value += "Lucky. When you roll a 1 on a the d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll."+ "\n\n";
		document.getElementById('form105_1').value += "Brave. You have advantage on saving throws against being frightened."+ "\n\n";
		document.getElementById('form105_1').value += "Halfling Nimbleness. You can move through the space of any creature that is of a size larger than yours."+ "\n\n";
		//STOUT
		document.getElementById('form105_1').value += "Stout Resilience. You have advantage on saving throws against poison, and you have resistance against poison damage."+ "\n\n";
	}
	else if(racename=="Human") {
		//nothing...
	}
	else if(racename=="Dragonborn") {
		draconicAncestry = ancestry[Math.floor((Math.random()*ancestry.length))];
		//DRAGONBORN STATS
		document.getElementById('form105_1').value += "Draconic Ancestry. You have draconic ancestry of the "+draconicAncestry.dragon+" Dragons. ("+draconicAncestry.breath+" range and "+draconicAncestry.damage+" damage)"+ "\n\n";
		document.getElementById('form105_1').value += "Breath Weapon. You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape and damage type of the exhalation. When you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. ("+(8+abilityModifier[2]+2)+"). A creature takes 2d6 damage on a failed save, and half as much damage on a successful one."+ "\n\n";
		document.getElementById('form105_1').value += "Damage Resistance. You have resistance to "+draconicAncestry.damage+"\n\n";
	}
	else if(racename=="Forest Gnome") {
		//GNOME STATS
		document.getElementById('form105_1').value+="Gnome Cunning. You have disadvantage on all Intelligence, Wisdom, and Charisma saving throws against magic."+"\n\n";
		//FOREST
		document.getElementById('form105_1').value+="Natural Illusionist. You know the minor illusion cantrip. Intelligence is your spellcasting ability for it."+"\n\n";
	}
	else if(racename=="Rock Gnome") {
		//GNOME STATS
		document.getElementById('form105_1').value+="Gnome Cunning. You have disadvantage on all Intelligence, Wisdom, and Charisma saving throws against magic."+"\n\n";
		//ROCK
		document.getElementById('form105_1').value+="Artificer's Lore. Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or technological devices, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply."+"\n\n";
		document.getElementById('form105_1').value+="Tinker. Using your Tinker's Tools, you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device (AC 5, 1 hp). The device ceases to function after 24 hours, or when you use your action to dismantle it; at that time, you can reclaim the materials used to create it. You can have up to three such devices active at a time."+"\n";
		var t = Dice(3);
		if(t==1){
			document.getElementById('form105_1').value+="Clockwork Toy. This toy is a clockwork animal, monster, or person, such as a frog, mouse, bird, dragon, or soldier. When placed on the ground, the toy moves 5 feet across the ground on each of your turns in a random direction. It makes noise as appropriate to the creature it represents."+"\n\n";
		}
		else if(t==2){
			document.getElementById('form105_1').value+="Fire Starter. The device produces a miniature flame, which you can use to light a candle, torch, or campfire. Using the device requires your action."+"\n\n";
		}
		else if(t==3){
			document.getElementById('form105_1').value+="Music Box. When opened, this music box plays a single song at a moderate volume. The box stops playing when it reaches the song's end or when it is closed."+"\n\n";
		}
		LearnTool(["Tinker's Tools"]);	
	}
	else if(racename=="Half-Elf") {
		document.getElementById('form105_1').value += "Fey Ancestry. You have advantage on saving throws against being charmed, and magic can't put you to sleep."+"\n\n";
		for(var i=0;i<2;i++) {
			var newProf = bard.profSkills[Math.floor((Math.random()*bard.profSkills.length))];
			if(setProfs.includes(newProf)){
				//console.log("They already know "+newProf+"!");
				i--;
			}
			else {
				setProfs.push(newProf);
			}
		}
	}
	else if(racename=="Half-Orc") {
		setProfs.push("intimidation");
		document.getElementById('form105_1').value += "Relentless Endurance. When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit points instead. You can't use this feature again until you finish a long rest."+"\n\n";
		document.getElementById('form105_1').value += "Savage Attacks. When you score a critical hit with a melee weapon attack, you can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit."+"\n\n";
	}
	else if(racename=="Tiefling") {
		document.getElementById('form105_1').value += "Hellish Resistance. You have resistance to fire damage."+"\n\n";
		document.getElementById('form105_1').value += "Infernal Legacy. You know the thaumaturgy cantrip."+"\n\n";
		
	}
	else {
		console.log("Can't determine race");
	}
}

function RollBackground() {
	bg = backgroundList[Math.floor((Math.random()*backgroundList.length))];
	//bg = backgroundList[0];
	//console.log(bg);
	document.getElementById('form89_1').value = bg.name;
	if (bg.speciality!="none"){
		bgSpec = bg.speciality[Math.floor((Math.random()*bg.speciality.length))];
		document.getElementById('form89_1').value += " ("+bgSpec+")";
	}
	for(var i=0;i<bg.profSkills.length;i++) {
		var newProf = bg.profSkills[i];
		if(setProfs.includes(newProf)){
			console.log("They already know "+newProf+"! (BG)");
		}
		else {
			setProfs.push(newProf);
		}
	}
	extraLanguage += bg.extraLanguage;
	
	if (bg.tools[0]=="none") {
		
	}
	
	if(bg.name == "Acolyte") {
		//Only Equipment, part of which is randomized
		document.getElementById('form104_1').innerHTML = ("A holy symbol (a gift to you when you entered the priesthood), a " + RandomizeEquipment(["prayer book","prayer wheel"]) + ", 5 sticks of incense, a set of common clothes, and a pouch containing 15 gp");
	}
	else if(bg.name=="Charlatan"){
		//Only Equipment, part of which is randomized
		document.getElementById('form104_1').innerHTML = ("A set of fine clothes, a disguise kit, " + RandomizeEquipment(["ten stoppered bottles filled with colored liquid"+"a set of weighted dice"+"a deck of marked cards"+"a signet ring of an imaginary duke"]) + " and a pouch containing 15 gp" );
	}
	else if(bg.name=="Criminal"){
		//Random gaming set and predetermined equipment
		LearnTool(gamesList);
		document.getElementById('form104_1').innerHTML = ("A crowbar, a set of dark common clothes including a hoot, and a pouch containing 15 gp");
	}
	else if(bg.name=="Entertainment"){
		//Random instrument and partly random equipment.
		LearnTool(instrumentsList);
		document.getElementById('form104_1').innerHTML = (lastTool+" "+RandomizeEquipment(["love letter","lock of hair","trinket"])+" from an admirer, a costume and a pouch containing 15 gp");
	}
	else if(bg.name=="Folk Hero"){
		//random artisan's tools + vehicles (land) + random equipment
		LearnTool(["Vehicles (land)"]);
		LearnTool(toolsList);
		document.getElementById('form104_1').innerHTML = ( lastTool+", a shovel, an iron pot, a set of common clothes, and a pouch containing 10 gp" );
	}
	else if(bg.name=="Guild Artisan"){
		//random artisan's tools + equipment
		LearnTool(toolsList);
		document.getElementById('form104_1').innerHTML = ( lastTool+", a letter of introduction from your guild, a set of traveler's clothes, and a pouch containing 15 gp" );
	}
	else if(bg.name=="Hermit"){
		//random equipment
		document.getElementById('form104_1').innerHTML = ("A scroll case stuffed full of notes from your "+RandomizeEquipment(["prayers","studies"])+", a winter blanket, a set of common clothes, an herbalism kit, and 5 gp");
	}
	else if(bg.name=="Noble"){
		//random gaming set + predetermined equipment
		LearnTool(gamesList);
		document.getElementById('form104_1').innerHTML = ("A set of fine clothes, a signet ring, a scroll of pedigree, and a purse containing 25 gp");
	}
	else if(bg.name=="Outlander"){
		//musical instrument + equipment
		LearnTool(instrumentsList);
		document.getElementById('form104_1').innerHTML = ("A staff, a hunting trap, a trophy from an animal you killed, a set of traveler's clothes, and a pouch containing 10 gp");
	}
	else if(bg.name=="Sage"){
		// only equipment
		document.getElementById('form104_1').innerHTML = ("A bottle of black ink, a quill, a small knife, a letter from a dead colleague posing a question you have not yet been able toanswer, a set of common clothes, and a pouch containing 10 gp");
	}
	else if(bg.name=="Sailor"){
		//vehicled (water) + random equipment
		LearnTool(["Vehicles (water)"]);
		document.getElementById('form104_1').innerHTML = ("A belaying pin (club), 50 feet of silk rope, "+RandomizeEquipment(["rabbit foot","a small stone with a hole in the center","a vial of dragon blood","an old key","an ornate scabbard that fits no blade you have found so far","a petrified mouse","a tiny sketch portrait of a goblin"])+", a set of common clothes, and a pouch containing 10 gp");
	}
	else if(bg.name=="Soldier"){
		//gaming set and vehicles(land) as well as randomized equipment
		LearnTool(["Vehicles (land)"]);
		LearnTool(gamesList);
		document.getElementById('form104_1').innerHTML = ("An insignia of rank, a "+RandomizeEquipment(["dagger","broken blade","piece of a banner"])+" from an enemy, a "+RandomizeEquipment(["set of bone dice","deck of cards"])+", a set of common clothes, and a pouch containing 10 gp");
	}
	else if(bg.name=="Urchin"){
		//predetermined equipment
		document.getElementById('form104_1').innerHTML = ("A small knife, a map of the city you grew up in, a pet mouse, a token to remember your parents by, a set of common clothes, and a pouch containing 10 gp");
	}
}

function RandomizeEquipment(equipment) {
	var rng = equipment[Math.floor((Math.random()*equipment.length))];
	return rng;
}

function LearnTool(toolList) {
	var toolFree = false;
	for(var t=0;t<toolList.length;t++) {
		if(toolProfs.includes(toolList[t])) {
			console.log(toolList[t]+" already in list");
		}
		else if(!toolProfs.includes(toolList[t])) {
			console.log("Not in list!");
			toolFree = true;
			/*for(var i=0;i==0;i) {
				var rng = RandomizeEquipment(toolList);
				if (!toolProfs.includes(rng)) {
					toolProfs.push(rng);
					i++;
				}
				console.log("Already proficient with "+rng);
			}*/
		}
	}
	if(toolFree==true) {
		for(var i=0;i==0;i) {
			var rng = RandomizeEquipment(toolList);
			if (!toolProfs.includes(rng)) {
				toolProfs.push(rng);
				console.log(toolProfs);
				lastTool = rng;
				i++;
			}
			//console.log("Already proficient with "+rng);
		}
	}
}