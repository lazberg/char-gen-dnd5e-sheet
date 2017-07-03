//SETTINGS
var sDescription = true;

//STATS
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
var armorClass = 0;
var cantrips = [];
var firstLevel = [];
var school = undefined;
var standardArray = [15,14,13,12,10,8];

//ACOLYTE TRAITS
var acoTraits = [ 
	"I idolize a particular hero of my faith, and constantly refer to that person’s deeds and example.",
	"I can find common ground between the fiercest enemies, empathizing with them and always working towards peace.",
	"I see omens in every event and action. The gods try to speak to us, we just need to listen",
	"Nothing can shake my optimistic attitude.",
	"I quote (or misquote) sacred texts and proverbs in almost every situation.",
	"I am tolerant (or intolerant) of other faiths and respect (or condemn) the worship of other gods.",
	"I've enjoyed fine food, drink, and high society among my temple’s elite. Rough living grates on me.",
	"I’ve spent so long in the temple that I have little practical experience dealing with people in the outside world."
];
var acoIdeals = [ 
	"Tradition. The ancient traditions of worship and sacrifice must be preserved and upheld.",
	"Charity. I always try to help those in need, no matter what the personal cost.",
	"Change. We must help bring about the changes the gods are constantly working in the world.",
	"Power. I hope to one day rise to the top of my faith’s religious hierarchy.",
	"Faith. I trust that my deity will guide my actions, I have faith that if I work hard, things will go well.",
	"Aspiration. I seek to prove myself worthy of my god’s favor by matching my actions against his or her teachings."
];
var acoBonds = [
	"I would die to recover an ancient relic of my faith that was lost long ago.",
	"I will someday get revenge on the corrupt temple hierarchy who branded me a heretic.",
	"I owe my life to the priest who took me in when my parents died.",
	"Everything I do is for the common people.",
	"I will do anything to protect the temple where I served.",
	"I seek to preserve a sacred text that my enemies consider heretical and seek to destroy."
];
var acoFlaws = [
	"I judge others harshly, and myself even more severely.",
	"I put too much trust in those who wield power within my temple’s hierarchy.",
	"My piety sometimes leads me to blindly trust those that profess faith in my god.",
	"I am inflexible in my thinking.",
	"I am suspicious of strangers and expect the worst of them.",
	"Once I pick a goal, I become obsessed with it to the detriment of everything else in my life."
];

var chaTraits =[
	"I fall in and out of love easily, and am always pursuing someone.",
	"I have a joke for every occasion, especially occasions where humor is inappropriate.",
	"Flattery is my preferred trick for getting what I want.",
	"I’m a born gambler who can't resist taking a risk for a potential payoff.",
	"I lie about almost everything, even when there’s no good reason to.",
	"Sarcasm and insults are my weapons of choice.",
	"I keep multiple holy symbols on me and invoke whatever deity might come in useful at any given moment.",
	"I pocket anything I see that might have some value."
];
var chaIdeals = [
	"Independence. I am a free spirit— no one tells me what to do.",
	"Fairness. I never target people who can’t afford to lose a few coins.",
	"Charity. I distribute the money I acquire to the people who really need it.",
	"Creativity. I never run the same con twice.",
	"Friendship. Material goods come and go. Bonds of friendship last forever.",
	"Aspiration. I’m determined to make something of myself."
];
var chaBonds =[
	"I fleeced the wrong person and must work to ensure that this individual never crosses paths with me or those I care about.",
	"I owe everything to my mentor—a horrible person who’s probably rotting in jail somewhere.",
	"Somewhere out there, I have a child who doesn’t know me. I’m making the world better for him or her.",
	"I come from a noble family, and one day I’ll reclaim my lands and title from those who stole them from me.",
	"A powerful person killed someone I love. Some day soon, I’ll have my revenge.",
	"I swindled and ruined a person who didn’t deserve it. I seek to atone for my misdeeds but might never be able to forgive myself."
];
var chaFlaws =[
	"I can’t resist a pretty face.",
	"I'm always in debt. I spend my ill-gotten gains on decadent luxuries faster than I bring them in.",
	"I’m convinced that no one could ever fool me the way I fool others. I’m too greedy for my own good.",
	"I can’t resist taking a risk if there’s money involved.",
	"I can’t resist swindling people who are more powerful than me.",
	"I hate to admit it and will hate myself for it, but I'll run and preserve my own hide if the going gets tough."
];

var criTraits =[
	"I always have a plan for what to do when things go wrong.",
	"I am always calm, no matter what the situation. I never raise my voice or let my emotions control me.",
	"The first thing I do in a new place is note the locations of everything valuable-or where such things could be hidden.",
	"I would rather make a new friend than a new enemy.",
	"I am incredibly slow to trust. Those who seem the fairest often have the most to hide.",
	"I don't pay attention to the risks in a situation. Never tell me the odds.",
	"The best way to get me to do something is to tell me I can't do it.",
	"I blow up at the slightest insult."
];
var criIdeals =[
	"Honor. I don’t steal from others in the trade.",
	"Freedom. Chains are meant to be broken, as are those who would forge them.",
	"Charity. I steal from the wealthy so that I can help people in need.",
	"Greed. I will do whatever it takes to become wealthy.",
	"People. I’m loyal to my friends, not to any ideals, and everyone else can take a trip down the Styx for all I care.",
	"Redemption. There’s a spark of good in everyone."
];
var criBonds =[
	"I’m trying to pay off an old debt I owe to a generous benefactor.",
	"My ill-gotten gains go to support my family.",
	"Something important was taken from me, and I aim to steal it back.",
	"I will become the greatest thief that ever lived.",
	"I’m guilty of a terrible crime. I hope I can redeem myself for it.",
	"Someone I loved died because of a mistake I made. That will never happen again."
];
var criFlaws =[
	"When I see something valuable, I can’t think about anything but how to steal it.",
	"When faced with a choice between money and my friends, I usually choose the money.",
	"If there’s a plan, I’ll forget it. If I don’t forget it, I’ll ignore it.",
	"I have a “tell” that reveals when I'm lying.",
	"I turn tail and run when things look bad.",
	"An innocent person is in prison for a crime that I committed. I’m okay with that."
];

var entTraits =[
	"I know a story relevant to almost every situation.",
	"Whenever I come to a new place, I collect local rumors and spread gossip.",
	"I’m a hopeless romantic, always searching for that “special someone.”",
	"Nobody stays angry at me or around me for long, since I can defuse any amount of tension.",
	"I love a good insult, even one directed at me.",
	"I get bitter if I’m not the center of attention.",
	"I’ll settle for nothing less than perfection.",
	"I change my mood or my mind as quickly as I change key in a song."
];
var entIdeals =[
	"Beauty. When I perform, I make the world better than it was.",
	"Tradition. The stories, legends, and songs of the past must never be forgotten, for they teach us who we are. ",
	"Creativity. The world is in need of new ideas and bold action.",
	"Greed. I’m only in it for the money and fame.",
	"People. I like seeing the smiles on people’s faces when I perform. That’s all that matters.",
	"Honesty. Art should reflect the soul; it should come from within and reveal who we really are."
];
var entBonds =[
	"My instrument is my most treasured possession, and it reminds me of someone I love.",
	"Someone stole my precious instrument, and someday I’ll get it back.",
	"I want to be famous, whatever it takes.",
	"I idolize a hero of the old tales and measure my deeds against that person’s.",
	"I will do anything to prove myself superior to my hated rival.",
	"I would do anything for the other members of my old troupe."
];
var entFlaws =[
	"I’ll do anything to win fame and renown.",
	"I’m a sucker for a pretty face.",
	"A scandal prevents me from ever going home again. That kind of trouble seems to follow me around.",
	"I once satirized a noble who still wants my head. It was a mistake that I will likely repeat.",
	"I have trouble keeping my true feelings hidden. My sharp tongue lands me in trouble.",
	"Despite my best efforts, I am unreliable to my friends."
];

var folTraits =[
	"I judge people by their actions, not their words.",
	"If someone is in trouble, I’m always ready to lend help.",
	"When I set my mind to something, I follow through no matter what gets in my way.",
	"I have a strong sense of fair play and always try to find the most equitable solution to arguments.",
	"I’m confident in my own abilities and do what I can to instill confidence in others.",
	"Thinking is for other people. I prefer action.",
	"I misuse long words in an attempt to sound smarter.",
	"I get bored easily. When am I going to get on with my destiny?"
];
var folIdeals =[
	"Respect. People deserve to be treated with dignity and respect.",
	"Fairness. No one should get preferential treatment before the law, and no one is above the law. ",
	"Freedom. Tyrants must not be allowed to oppress the people.",
	"Might. If I become strong, I can take what I want—what I deserve.",
	"Sincerity. There’s no good in pretending to be something I’m not.",
	"Destiny. Nothing and no one can steer me away from my higher calling."
];
var folBonds =[
	"I have a family, but I have no idea where they are. One day, I hope to see them again.",
	"I worked the land, I love the land, and I will protect the land.",
	"A proud noble once gave me a horrible beating, and I will take my revenge on any bully I encounter.",
	"My tools are symbols of my past life, and I carry them so that I will never forget my roots.",
	"I protect those who cannot protect themselves.",
	"I wish my childhood sweetheart had come with me to pursue my destiny."
];
var folFlaws =[
	"The tyrant who rules my land will stop at nothing to see me killed.",
	"I’m convinced of the significance of my destiny, and blind to my shortcomings and the risk of failure.",
	"The people who knew me when I was young know my shameful secret, so I can never go home again.",
	"I have a weakness for the vices of the city, especially hard drink.",
	"Secretly, I believe that things would be better if I were a tyrant lording over the land.",
	"I have trouble trusting in my allies."
];

var guiTraits =[
	"I believe that anything worth doing is worth doing right. I can’t help it— I’m a perfectionist.",
	"I’m a snob who looks down on those who can’t appreciate fine art.",
	"I always want to know how things work and what makes people tick.",
	"I’m full of witty aphorisms and have a proverb for every occasion.",
	"I’m rude to people who lack my commitment to hard work and fair play.",
	"I like to talk at length about my profession.",
	"I don’t part with my money easily and will haggle tirelessly to get the best deal possible.",
	"I’m well known for my work, and I want to make sure everyone appreciates it. I'm always taken aback when people haven’t heard of me."
];
var guiIdeals =[
	"Community. It is the duty of all civilized people to strengthen the bonds of community and the security of civilization. ",
	"Generosity. My talents were given to me so that I could use them to benefit the world.",
	"Freedom. Everyone should be free to pursue his or her own livelihood.",
	"Greed. I’m only in it for the money.",
	"People. I’m committed to the people I care about, not to ideals. ",
	"Aspiration. I work hard to be the best there is at my craft."
];
var guiBonds =[
	"The workshop where I learned my trade is the most important place in the world to me.",
	"I created a great work for someone, and then found them unworthy to receive it. I’m still looking for someone worthy.",
	"I owe my guild a great debt for forging me into the person I am today.",
	"I pursue wealth to secure someone’s love.",
	"One day I will return to my guild and prove that I am the greatest artisan of them all.",
	"I will get revenge on the evil forces that destroyed my place of business and ruined my livelihood."
];
var guiFlaws =[
	"I’ll do anything to get my hands on something rare or priceless.",
	"I’m quick to assume that someone is trying to cheat me.",
	"No one must ever learn that I once stole money from guild coffers.",
	"I’m never satisfied with what I have— I always want more.",
	"I would kill to acquire a noble title.",
	"I’m horribly jealous of anyone who can outshine my handiwork. Everywhere I go, I’m surrounded by rivals."
];

var herTraits =[
	"I’ve been isolated for so long that I rarely speak, preferring gestures and the occasional grunt.",
	"I am utterly serene, even in the face of disaster.",
	"The leader of my community had something wise to say on every topic, and I am eager to share that wisdom.",
	"I feel tremendous empathy for all who suffer.",
	"I’m oblivious to etiquette and social expectations.",
	"I connect everything that happens to me to a grand, cosmic plan.",
	"I often get lost in my own thoughts and contemplation, becoming oblivious to my surroundings.",
	"I am working on a grand philosophical theory and love sharing my ideas."
];
var herIdeals =[
	"Greater Good. My gifts are meant to be shared with all, not used for my own benefit.",
	"Logic. Emotions must not cloud our sense of what is right and true, or our logical thinking. ",
	"Free Thinking. Inquiry and curiosity are the pillars of progress. ",
	"Power. Solitude and contemplation are paths toward mystical or magical power.",
	"Live and Let Live. Meddling in the affairs of others only causes trouble.",
	"Self-Knowledge. If you know yourself, there’s nothing left to know."
];
var herBonds =[
	"Nothing is more important than the other members of my hermitage, order, or association.",
	"I entered seclusion to hide from the ones who might still be hunting me. I must someday confront them.",
	"I’m still seeking the enlightenment I pursued in my seclusion, and it still eludes me.",
	"I entered seclusion because I loved someone I could not have.",
	"Should my discovery come to light, it could bring ruin to the world.",
	"My isolation gave me great insight into a great evil that only I can destroy."
];
var herFlaws =[
	"Now that I've returned to the world, I enjoy its delights a little too much.",
	"I harbor dark, bloodthirsty thoughts that my isolation and meditation failed to quell.",
	"I am dogmatic in my thoughts and philosophy.",
	"I let my need to win arguments overshadow friendships and harmony.",
	"I’d risk too much to uncover a lost bit of knowledge.",
	"I like keeping secrets and won’t share them with anyone."
];

var nobTraits =[
	"My eloquent flattery makes everyone I talk to feel like the most wonderful and important person in the world.",
	"The common folk love me for my kindness and generosity.",
	"No one could doubt by looking at my regal bearing that I am a cut above the unwashed masses.",
	"I take great pains to always look my best and follow the latest fashions.",
	"I don’t like to get my hands dirty, and I won’t be caught dead in unsuitable accommodations.",
	"Despite my noble birth, I do not place myself above other folk. We all have the same blood.",
	"My favor, once lost, is lost forever.",
	"If you do me an injury, I will crush you, ruin your name, and salt your fields."
];
var nobIdeals =[
	"Respect. Respect is due to me because of my position, but all people regardless of station deserve to be treated with dignity. ",
	"Responsibility. It is my duty to respect the authority of those above me, just as those below me must respect mine.",
	"Independence. I must prove that I can handle myself without the coddling of my family. ",
	"Power. If I can attain more power, no one will tell me what to do. ",
	"Family. Blood runs thicker than water. ",
	"Noble Obligation. It is my duty to protect and care for the people beneath me. "
];
var nobBonds =[
	"I will face any challenge to win the approval of my family.",
	"My house’s alliance with another noble family must be sustained at all costs.",
	"Nothing is more important than the other members of my family.",
	"I am in love with the heir of a family that my family despises.",
	"My loyalty to my sovereign is unwavering.",
	"The common folk must see me as a hero of the people."
];
var nobFlaws =[
	"I secretly believe that everyone is beneath me.",
	"I hide a truly scandalous secret that could ruin my family forever.",
	"I too often hear veiled insults and threats in every word addressed to me, and I’m quick to anger.",
	"I have an insatiable desire for carnal pleasures.",
	"In fact, the world does revolve around me.",
	"By my words and actions, I often bring shame to my family."
];

var outTraits =[
	"I’m driven by a wanderlust that led me away from home.",
	"I watch over my friends as if they were a litter of newborn pups.",
	"I once ran twenty-five miles without stopping to warn to my clan of an approaching orc horde. I’d do it again if I had to.",
	"I have a lesson for every situation, drawn from observing nature.",
	"I place no stock in wealthy or well-mannered folk. Money and manners won’t save you from a hungry owlbear.",
	"I’m always picking things up, absently fiddling with them, and sometimes accidentally breaking them.",
	"I feel far more comfortable around animals than people.",
	"I was, in fact, raised by wolves."
];
var outIdeals =[
	"Change. Life is like the seasons, in constant change, and we must change with it.",
	"Greater Good. It is each person’s responsibility to make the most happiness for the whole tribe.",
	"Honor. If I dishonor myself, I dishonor my whole clan. ",
	"Might. The strongest are meant to rule.",
	"Nature. The natural world is more important than all the constructs of civilization. ",
	"Glory. I must earn glory in battle, for myself and my clan."
];
var outBonds =[
	"My family, clan, or tribe is the most important thing in my life, even when they are far from me.",
	"An injury to the unspoiled wilderness of my home is an injury to me.",
	"I will bring terrible wrath down on the evildoers who destroyed my homeland.",
	"I am the last of my tribe, and it is up to me to ensure their names enter legend.",
	"I suffer awful visions of a coming disaster and will do anything to prevent it.",
	"It is my duty to provide children to sustain my tribe."
];
var outFlaws =[
	"I am too enamored of ale, wine, and other intoxicants.",
	"There’s no room for caution in a life lived to the fullest.",
	"I remember every insult I’ve received and nurse a silent resentment toward anyone who’s ever wronged me.",
	"I am slow to trust members of other races, tribes, and societies.",
	"Violence is my answer to almost any challenge.",
	"Don’t expect me to save those who can’t save themselves. It is nature’s way that the strong thrive and the weak perish."
];

var sagTraits =[
	"I use polysyllabic words that convey the impression of great erudition.",
	"I've read every book in the world’s greatest libraries—or I like to boast that I have.",
	"I'm used to helping out those who aren’t as smart as I am, and I patiently explain anything and everything to others.",
	"There’s nothing I like more than a good mystery.",
	"I’m willing to listen to every side of an argument before I make my own judgment.",
	"I . . . speak . . . slowly . . . when talking . . . to idiots, . . . which . . . almost . . . everyone . . . is . . . compared . . . to me.",
	"I am horribly, horribly awkward in social situations.",
	"I’m convinced that people are always trying to steal my secrets."
];
var sagIdeals =[
	"Knowledge. The path to power and self-improvement is through knowledge. ",
	"Beauty. What is beautiful points us beyond itself toward what is true. ",
	"Logic. Emotions must not cloud our logical thinking. ",
	"No Limits. Nothing should fetter the infinite possibility inherent in all existence. ",
	"Power. Knowledge is the path to power and domination. ",
	"Self-Improvement. The goal of a life of study is the betterment of oneself. "
];
var sagBonds =[
	"It is my duty to protect my students.",
	"I have an ancient text that holds terrible secrets that must not fall into the wrong hands.",
	"I work to preserve a library, university, scriptorium, or monastery.",
	"My life’s work is a series of tomes related to a specific field of lore.",
	"I've been searching my whole life for the answer to a certain question.",
	"I sold my soul for knowledge. I hope to do great deeds and win it back."
];
var sagFlaws =[
	"I am easily distracted by the promise of information.",
	"Most people scream and run when they see a demon. I stop and take notes on its anatomy.",
	"Unlocking an ancient mystery is worth the price of a civilization.",
	"I overlook obvious solutions in favor of complicated ones.",
	"I speak without really thinking through my words, invariably insulting others.",
	"I can’t keep a secret to save my life, or anyone else’s."
];

var saiTraits =[
	"My friends know they can rely on me, no matter what.",
	"I work hard so that I can play hard when the work is done.",
	"I enjoy sailing into new ports and making new friends over a flagon of ale.",
	"I stretch the truth for the sake of a good story.",
	"To me, a tavern brawl is a nice way to get to know a new city.",
	"I never pass up a friendly wager.",
	"My language is as foul as an otyugh nest.",
	"I like a job well done, especially if I can convince someone else to do it."
];
var saiIdeals =[
	"Respect. The thing that keeps a ship together is mutual respect between captain and crew. ",
	"Fairness. We all do the work, so we all share in the rewards. ",
	"Freedom. The sea is freedom—the freedom to go anywhere and do anything. ",
	"Mastery. I’m a predator, and the other ships on the sea are my prey. ",
	"People. I’m committed to my crewmates, not to ideals. ",
	"Aspiration. Someday I’ll own my own ship and chart my own destiny. "
];
var saiBonds =[
	"I’m loyal to my captain first, everything else second.",
	"The ship is most important—crewmates and captains come and go.",
	"I’ll always remember my first ship.",
	"In a harbor town, I have a paramour whose eyes nearly stole me from the sea.",
	"I was cheated out of my fair share of the profits, and I want to get my due.",
	"Ruthless pirates murdered my captain and crewmates, plundered our ship, and left me to die. Vengeance will be mine."
];
var saiFlaws =[
	"I follow orders, even if I think they’re wrong.",
	"I’ll say anything to avoid having to do extra work.",
	"Once someone questions my courage, I never back down no matter how dangerous the situation.",
	"Once I start drinking, it’s hard for me to stop.",
	"I can’t help but pocket loose coins and other trinkets I come across.",
	"My pride will probably lead to my destruction."
];

var solTraits =[
	"I'm always polite and respectful.",
	"I’m haunted by memories of war. I can’t get the images of violence out of my mind.",
	"I’ve lost too many friends, and I’m slow to make new ones.",
	"I’m full of inspiring and cautionary tales from my military experience relevant to almost every combat situation.",
	"I can stare down a hell hound without flinching.",
	"I enjoy being strong and like breaking things.",
	"I have a crude sense of humor.",
	"I face problems head-on. A simple, direct solution is the best path to success."
];
var solIdeals =[
	"Greater Good. Our lot is to lay down our lives in defense of others. ",
	"Responsibility. I do what I must and obey just authority. ",
	"Independence. When people follow orders blindly, they embrace a kind of tyranny. ",
	"Might. In life as in war, the stronger force wins. ",
	"Live and Let Live. Ideals aren’t worth killing over or going to war for. ",
	"Nation. My city, nation, or people are all that matter. "
];
var solBonds =[
	"I would still lay down my life for the people I served with.",
	"Someone saved my life on the battlefield. To this day, I will never leave a friend behind.",
	"My honor is my life.",
	"I’ll never forget the crushing defeat my company suffered or the enemies who dealt it.",
	"Those who fight beside me are those worth dying for.",
	"I fight for those who cannot fight for themselves."
];
var solFlaws =[
	"The monstrous enemy we faced in battle still leaves me quivering with fear.",
	"I have little respect for anyone who is not a proven warrior.",
	"I made a terrible mistake in battle that cost many lives—and I would do anything to keep that mistake secret.",
	"My hatred of my enemies is blind and unreasoning.",
	"I obey the law, even if the law causes misery.",
	"I’d rather eat my armor than admit when I’m wrong."
];

var urcTraits =[
	"I hide scraps of food and trinkets away in my pockets.",
	"I ask a lot of questions.",
	"I like to squeeze into small places where no one else can get to me.",
	"I sleep with my back to a wall or tree, with everything I own wrapped in a bundle in my arms.",
	"I eat like a pig and have bad manners.",
	"I think anyone who’s nice to me is hiding evil intent.",
	"I don’t like to bathe.",
	"I bluntly say what other people are hinting at or hiding."
];
var urcIdeals =[
	"Respect. All people, rich or poor, deserve respect. ",
	"Community. We have to take care of each other, because no one else is going to do it. ",
	"Change. The low are lifted up, and the high and mighty are brought down. Change is the nature of things. ",
	"Retribution. The rich need to be shown what life and death are like in the gutters. ",
	"People. I help the people who help me—that’s what keeps us alive. ",
	"Aspiration. I'm going to prove that I'm worthy of a better life."
];
var urcBonds =[
	"My town or city is my home, and I’ll fight to defend it.",
	"I sponsor an orphanage to keep others from enduring what I was forced to endure.",
	"I owe my survival to another urchin who taught me to live on the streets.",
	"I owe a debt I can never repay to the person who took pity on me.",
	"I escaped my life of poverty by robbing an important person, and I’m wanted for it.",
	"No one else should have to endure the hardships I’ve been through."
];
var urcFlaws =[
	"If I'm outnumbered, I will run away from a fight.",
	"Gold seems like a lot of money to me, and I’ll do just about anything for more of it.",
	"I will never fully trust anyone other than myself.",
	"I’d rather kill someone in their sleep than fight fair.",
	"It’s not stealing if I need it more than someone else.",
	"People who can't take care of themselves get what they deserve."
];

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
//
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
var acolyte = {name:"Acolyte", speciality:["none"], profSkills:["insight", "religion"], tools:["none"], extraLanguage:2, pers:acoTraits, idea:acoIdeals, bond:acoBonds, flaw:acoFlaws};
var charlatan = {name:"Charlatan", speciality:["none"], profSkills:["deception", "sleightofhand"], tools:["Disguise kit", "Forgery kit"], extraLanguage:0, pers:chaTraits, idea:chaIdeals, bond:chaBonds, flaw:chaFlaws};
var criminal = {name:"Criminal", speciality:[ "Blackmailer", "Burglar", "Enforcer", "Fence", "Highway robber", "Hired killer", "Pickpocket", "Smuggler" ], profSkills:["deception","stealth"], tools:["Thieves' tools"], extraLanguage:0, pers:criTraits, idea:criIdeals, bond:criBonds, flaw:criFlaws};
var entertainer = {name:"Entertainer", speciality:[ "Actor", "Dancer", "Fire-eater", "Jester", "Juggler", "Instrumentalist", "Poet", "Singer", "Storyteller", "Tumbler" ], profSkills:["acrobatics","performance"], tools:["Disguise kit"], extraLanguage:0, pers:entTraits, idea:entIdeals, bond:entBonds, flaw:entFlaws};
var folkhero = {name:"Folk Hero", speciality:["none"], profSkills:["animalhandling","survival"], tools:["none"], extraLanguage:0, pers:folTraits, idea:folIdeals, bond:folBonds, flaw:folFlaws};
var guildartisan = {name:"Guild Artisan", speciality:["none"], profSkills:["insight","persuasion"], tools:["none"], extraLanguage:1, pers:guiTraits, idea:guiIdeals, bond:guiBonds, flaw:guiFlaws};
var hermit = {name:"Hermit", speciality:["none"], profSkills:["medicine","religion"], tools:["Herbalism kit"], extraLanguage:1, pers:herTraits, idea:herIdeals, bond:herBonds, flaw:herFlaws};
var noble = {name:"Noble", speciality:["none"], profSkills:["history","persuasion"], tools:["none"], extraLanguage:1, pers:nobTraits, idea:nobIdeals, bond:nobBonds, flaw:nobFlaws};
var outlander = {name:"Outlander", speciality:[ "Forester", "Trapper", "Homesteader", "Guide", "Exile", "Outcast", "Bounty hunter", "Pilgrim", "Tribal nomad", "Hunter-gatherer", "Tribal marauder" ], profSkills:["athletics","survival"], tools:["none"], extraLanguage:1, pers:outTraits, idea:outIdeals, bond:outBonds, flaw:outFlaws};
var sage = {name:"Sage", speciality:[ "Alchemist", "Astronomer", "Discredited academic", "Librarian", "Professor", "Researcher", "Wizard's apprentice", "Scribe" ], profSkills:["arcana","history"], tools:["none"], extraLanguage:2, pers:sagTraits, idea:sagIdeals, bond:sagBonds, flaw:sagFlaws};
var sailor = {name:"Sailor", speciality:["none"], profSkills:["athletics","perception"], tools:["Navigator's tools"], extraLanguage:0, pers:saiTraits, idea:saiIdeals, bond:saiBonds, flaw:saiFlaws};
var soldier = {name:"Soldier", speciality:[ "Officer", "Scout", "Infantry", "Cavalry", "Healer", "Quartermaster", "Standard bearer", "Support staff" ], profSkills:["athletics","intimidation"], tools:["none"], extraLanguage:0, pers:solTraits, idea:solIdeals, bond:solBonds, flaw:solFlaws};
var urchin = {name:"Urchin", speciality:["none"], profSkills:["sleightofhand","stealth"], tools:["Disguise kit","Thieves' tools"], extraLanguage:0, pers:urcTraits, idea:urcIdeals, bond:urcBonds, flaw:urcFlaws};
//var  = {name:"", speciality:[""], profSkills:[""], tools:[""], extraLanguage:};

var backgroundList = [acolyte, charlatan, criminal, entertainer, folkhero, guildartisan, hermit, noble, outlander, sage, sailor, soldier, urchin];

/*var persTraits = [
	"I am always calm, no matter what the situation is. I never raise my voice or let my emotions control me.",
	"Flattery is my preferred trick for getting what I want.",
	"Nothing can shake my optimistic attitude.",
	"I feel tremendous empathy for all who suffer.",
	"I don't like to get my hands dirty, and I won't be caught dead in unsuitable accommodations.",
	"I was, in fact, raised by wolves.",
	"There is nothing I like more than a good mystery.",
	"I like a job well done, especially if I can convince someone else to do it.",
];
var ideaTraits = [
	"Destiny. Nothing and no one can steer me away from my higher calling.",
	"Aspiration. I am determined to make something of myself.",
	"Nation. My city, nation, or people are all that matter.",
	"Glory. I must earn glory in battle, for myself and my people.",
	"Family. Blood runs thicker than water.",
	"Self-Knowledge. If you know yourself, there's nothing left to know.",
];
var bondTraits = [
	"A powerful person killed someone I love. Some day soon, I'll have my revenge.",
	"I want to be famous, whatever it takes.",
	"I have a family, but I have no idea where they are. One day, I hope to see them again.",
	"I suffer awful visions of a coming disaster and will do anything to prevent it.",
	"I fight for those who cannot fight for themselves.",
	"Somewhere out there, I have a child who doesn't know me. I'm making the world better from them.",
];
var flawTraits = [
	"I judge others harshly, and myself even more severely.",
	"I can't resist a pretty face.",
	"If there's a plan, I'll forget it. If I don't forget it, I'll ignore it.",
	"Despite my best efforts, I am unreliable to my friends.",
	"I would kill to acquire a noble title.",
	"I can't keep a secret to save my life, or anyone else's.",
];*/


function RollClass() {
	if (document.getElementById('paramClass').value != "all") {
		for (var i=0;i<12;i++) {
			if(classes[i].role==document.getElementById('paramClass').value) {
				classRoll = classes [i];
				i = 12;
			}
		}
	}
	else {
		classRoll = classes[Math.floor((Math.random() *classes.length))];
	}
	//classRoll = classes[2];
}

function ResetStats() {
	cleric.secondaryStat = RandomStatPriority("STR", "CON");
	fighter.primaryStat = RandomStatPriority("STR", "DEX");
	rogue.secondaryStat = RandomStatPriority("INT", "CHA");
	wizard.secondaryStat = RandomStatPriority("CON", "DEX");
	languages = [];
	setProfs = [];
	toolProfs = [];
	cantrips = [];
	firstLevel = [];
	hitPoints = 0;
	school = undefined;
	standardArray = [15,14,13,12,10,8];
	halfElf.namepool = RandomStatPriority(namePool[0], namePool[1]);
	//console.log(halfElf.namepool);
	document.getElementById('form102_1').innerHTML="";
	document.getElementById('form103_1').innerHTML="";
	extraLanguage = 0;
	armorClass = 0;
	//paladin.primaryStat = RandomStatPriority("STR", "CHA");
	if(document.getElementById("sDescription").checked) {
		sDescription = true;
	}
	else if(!document.getElementById("sDescription").checked) {
		sDescription = false;
	}
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
		document.getElementById("form102_1").innerHTML += "Tools/Instruments: \n";
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
	//race = racials[5];
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
	if (document.getElementById('useStandard').checked == true) {
		for(var i = 0;i<6;i++) {
			var rollTotal = RandomizeEquipment(standardArray);
			for (var t = 0;t<standardArray.length;t++) {
				if (standardArray[t] == rollTotal){
					standardArray.splice(t,1);
					t = 6;
				}
			}
			abilityScores.push(rollTotal);
		}
	}
	else {
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
	RollSkills();
	RollLanguages();
	ClassAbilities(classRoll.role);
	RollHitPoints();
	RollAlignment();
	Proficiencies();
	RollPersonality();
	InputProfLang();
	InputToolProfs();
	document.getElementById('form69_1').value = 2; // PROFICIENCY
	document.getElementById('form87_1').value += abilityModifier[1]; // INITIATIVE
	document.getElementById('form72_1').value = armorClass; // .. ARMOR CLASS
	document.getElementById('form86_1').value = race.speed; // SPEED
	if (setProfs.includes("perception")) {
		document.getElementById('form70_1').value = 10+abilityModifier[4]+2;
	}
	else {
		document.getElementById('form70_1').value = 10+abilityModifier[4];
	}
	document.getElementById('form92_1').value = 0;
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
	hitPoints += classRoll.hitDice+abilityModifier[2];
	
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
		document.getElementById('form105_1').value = race.vision +CheckDesc("\n")+"\n";
	}
	
	if(racename=="Hill Dwarf") {
		//DRAWF STATS
		document.getElementById('form105_1').value += "Dwarven Resilience. "+CheckDesc("You have advantage on saving throws against poison, and you have resistance against poison damage.\n")+ "\n";
		document.getElementById('form105_1').value += "Dwarven Combat Training. "+CheckDesc("You have proficiency with the battleaxe, handaxe, light hammer, and warhammer.\n")+"\n";
		var tempTools = ["Smith's Tools", "Brewer's Supplies", "Mason's Tools"];
		LearnTool(tempTools);
		//toolProfs.push(tempTools[Math.floor((Math.random()*classRoll.profSkills.length))]);
		//InputToolProfs();
		document.getElementById('form105_1').value += "Stonecunning. "+CheckDesc("Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.\n")+"\n";
		//HILL DWARF STATS
		document.getElementById('form105_1').value += "Dwarven Toughness. "+CheckDesc("Your hit point maximum increases by 1, and it increases by 1 every time you gain a level.\n")+"\n";
		
	}
	else if(racename=="Mountain Dwarf") {
		//DRAWF STATS
		//Dwarven Resilience
		document.getElementById('form105_1').value += "Dwarven Resilience. "+CheckDesc("You have advantage on saving throws against poison, and you have resistance against poison damage.\n")+ "\n";
		document.getElementById('form105_1').value += "Dwarven Combat Training. "+CheckDesc("You have proficiency with the battleaxe, handaxe, light hammer, and warhammer.\n")+"\n";
		var tempTools = ["Smith's Tools", "Brewer's Supplies", "Mason's Tools"];
		LearnTool(tempTools);
		//toolProfs.push(tempTools[Math.floor((Math.random()*classRoll.profSkills.length))]);
		//InputToolProfs();
		document.getElementById('form105_1').value += "Stonecunning. "+CheckDesc("Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.\n")+"\n";
		//MOUNTAIN DWARF STATS
		document.getElementById('form105_1').value += "Dwarven Armor Training. "+CheckDesc("You have proficiency with light and medium armor.\n")+"\n";
	}
	else if(racename=="High Elf") {
		//ELF STATS
		document.getElementById('form105_1').value += "Keen Senses. "+CheckDesc("You have proficiency in the Perception skill.\n")+ "\n";
		setProfs.push("perception");
		document.getElementById('form105_1').value += "Fey Ancestry. "+CheckDesc("You have advantage on saving throws against being charmed, and magic can't put you to sleep.\n")+"\n";
		document.getElementById('form105_1').value += "Trance. "+CheckDesc("For 4 hours a day, you can go into a deep meditation, remaining semiconscious. This gives you the same benefit that a human does from 8 hours of sleep.\n")+"\n";
		//HIGH ELF
		var cantripSpells = [ "Acid Splash", "Blade Ward", "Chill Touch", "Dancing Lights", "Fire Bolt", "Friends", "Light", "Mage Hand", "Mending", "Message", "Minor Illusion", "Poison Spray", "Prestidigitation", "Ray of Frost", "Shocking Grasp", "True Strike" ];
		LearnSpell(cantripSpells, 1, 0);
		document.getElementById('form105_1').value += "Elf Weapon Training. "+CheckDesc("You have proficiency with the longsword, shortsword, shortbow, and longbow.\n")+ "\n";
		document.getElementById('form105_1').value += "Cantrip. "+CheckDesc("You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it.\n")+ "\n";
	}
	else if(racename=="Wood Elf") {
		//ELF STATS
		document.getElementById('form105_1').value += "Keen Senses. "+CheckDesc("You have proficiency in the Perception skill.\n")+ "\n";
		setProfs.push("perception");
		document.getElementById('form105_1').value += "Fey Ancestry. "+CheckDesc("You have advantage on saving throws against being charmed, and magic can't put you to sleep.\n")+"\n";
		document.getElementById('form105_1').value += "Trance. "+CheckDesc("For 4 hours a day, you can go into a deep meditation, remaining semiconscious. This gives you the same benefit that a human does from 8 hours of sleep.\n")+"\n";
		//WOOD ELF
		document.getElementById('form105_1').value += "Elf Weapon Training. "+CheckDesc("You have proficiency with the longsword, shortsword, shortbow, and longbow.\n")+ "\n";
		document.getElementById('form105_1').value += "Mask of the Wild. "+CheckDesc("You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena.\n")+ "\n";
	}
	else if(racename=="Dark Elf (Drow)") {
		//ELF STATS
		document.getElementById('form105_1').value += "Keen Senses. "+CheckDesc("You have proficiency in the Perception skill.\n")+ "\n";
		setProfs.push("perception");
		document.getElementById('form105_1').value += "Fey Ancestry. "+CheckDesc("You have advantage on saving throws against being charmed, and magic can't put you to sleep.\n")+"\n";
		document.getElementById('form105_1').value += "Trance. "+CheckDesc("For 4 hours a day, you can go into a deep meditation, remaining semiconscious. This gives you the same benefit that a human does from 8 hours of sleep.\n")+"\n";
		//DARK ELF
		document.getElementById('form105_1').value += "Sunlight Sensitivity. "+CheckDesc("You have disadvantage on attack rolls and on Wisdom (Perception) checks that rely on sight when you, the target of your attack, or whatever you are trying to perceive is in direct sunlight.\n")+ "\n";
		document.getElementById('form105_1').value += "Drow Magic. "+CheckDesc("You know the Dancing Lights cantrip.\n")+ "\n";
		LearnSpell(["Dancing Lights"],1,0);
		document.getElementById('form105_1').value += "Drow Weapon Training. "+CheckDesc("You have proficiency with rapiers, shortswords, and hand crossbows.\n")+ "\n";		
	}
	else if(racename=="Lightfoot Halfling") {
		//HALFLING STATS
		document.getElementById('form105_1').value += "Lucky. "+CheckDesc("When you roll a 1 on a the d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.\n")+ "\n";
		document.getElementById('form105_1').value += "Brave. "+CheckDesc("You have advantage on saving throws against being frightened.\n")+ "\n";
		document.getElementById('form105_1').value += "Halfling Nimbleness. "+CheckDesc("You can move through the space of any creature that is of a size larger than yours.\n")+ "\n";
		//LIGHTFOOT
		document.getElementById('form105_1').value += "Naturally Stealthy. "+CheckDesc("You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you.\n")+ "\n";
	}
	else if(racename=="Stout Halfling") {
		//HALFLING STATS
		document.getElementById('form105_1').value += "Lucky. "+CheckDesc("When you roll a 1 on a the d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.\n")+ "\n";
		document.getElementById('form105_1').value += "Brave. "+CheckDesc("You have advantage on saving throws against being frightened.\n")+ "\n";
		document.getElementById('form105_1').value += "Halfling Nimbleness. "+CheckDesc("You can move through the space of any creature that is of a size larger than yours.\n")+ "\n";
		//STOUT
		document.getElementById('form105_1').value += "Stout Resilience. "+CheckDesc("You have advantage on saving throws against poison, and you have resistance against poison damage.\n")+ "\n";
	}
	else if(racename=="Human") {
		//nothing...
	}
	else if(racename=="Dragonborn") {
		draconicAncestry = ancestry[Math.floor((Math.random()*ancestry.length))];
		//DRAGONBORN STATS
		document.getElementById('form105_1').value += "Draconic Ancestry. "+CheckDesc("You have draconic ancestry of the ")+draconicAncestry.dragon+" Dragons. ("+draconicAncestry.breath+" range and "+draconicAncestry.damage+" damage)"+ "\n"+CheckDesc("\n");
		document.getElementById('form105_1').value += "Breath Weapon. "+CheckDesc("You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape and damage type of the exhalation. When you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. ("+(8+abilityModifier[2]+2)+"). A creature takes 2d6 damage on a failed save, and half as much damage on a successful one.\n")+ "\n";
		document.getElementById('form105_1').value += "Damage Resistance. "+CheckDesc("You have resistance to "+draconicAncestry.damage+"\n")+"\n";
	}
	else if(racename=="Forest Gnome") {
		//GNOME STATS
		document.getElementById('form105_1').value+="Gnome Cunning. "+CheckDesc("You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.\n")+"\n";
		//FOREST
		document.getElementById('form105_1').value+="Natural Illusionist. "+CheckDesc("You know the minor illusion cantrip. Intelligence is your spellcasting ability for it.\n")+"\n";
		LearnSpell(["Minor Illusion"],1,0);
		document.getElementById('form105_1').value+="Speak with Small Beasts. "+CheckDesc("Through sounds and gestures, you can communicate simple ideas with Small or smaller beasts.\n")+"\n";
	}
	else if(racename=="Rock Gnome") {
		//GNOME STATS
		document.getElementById('form105_1').value+="Gnome Cunning. "+CheckDesc("You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.\n")+"\n";
		//ROCK
		document.getElementById('form105_1').value+="Artificer's Lore. "+CheckDesc("Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or technological devices, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply.\n")+"\n";
		document.getElementById('form105_1').value+="Tinker. "+CheckDesc("Using your Tinker's Tools, you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device (AC 5, 1 hp). The device ceases to function after 24 hours, or when you use your action to dismantle it; at that time, you can reclaim the materials used to create it. You can have up to three such devices active at a time.")+"\n";
		var t = Dice(3);
		if(t==1){
			document.getElementById('form105_1').value+="Clockwork Toy. "+CheckDesc("This toy is a clockwork animal, monster, or person, such as a frog, mouse, bird, dragon, or soldier. When placed on the ground, the toy moves 5 feet across the ground on each of your turns in a random direction. It makes noise as appropriate to the creature it represents.\n")+"\n";
		}
		else if(t==2){
			document.getElementById('form105_1').value+="Fire Starter. "+CheckDesc("The device produces a miniature flame, which you can use to light a candle, torch, or campfire. Using the device requires your action.\n")+"\n";
		}
		else if(t==3){
			document.getElementById('form105_1').value+="Music Box. "+CheckDesc("When opened, this music box plays a single song at a moderate volume. The box stops playing when it reaches the song's end or when it is closed.\n")+"\n";
		}
		LearnTool(["Tinker's Tools"]);	
	}
	else if(racename=="Half-Elf") {
		document.getElementById('form105_1').value += "Fey Ancestry. "+CheckDesc("You have advantage on saving throws against being charmed, and magic can't put you to sleep.\n")+"\n";
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
		document.getElementById('form105_1').value += "Relentless Endurance. "+CheckDesc("When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit points instead. You can't use this feature again until you finish a long rest.\n")+"\n";
		document.getElementById('form105_1').value += "Savage Attacks. "+CheckDesc("When you score a critical hit with a melee weapon attack, you can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit.\n")+"\n";
	}
	else if(racename=="Tiefling") {
		document.getElementById('form105_1').value += "Hellish Resistance. "+CheckDesc("You have resistance to fire damage.\n")+"\n";
		document.getElementById('form105_1').value += "Infernal Legacy. "+CheckDesc("You know the thaumaturgy cantrip.\n")+"\n";
		LearnSpell(["Thaumaturgy"],1,0);
		
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
		document.getElementById('form104_1').innerHTML = ("A holy symbol (a gift to you when you entered the priesthood), a " + RandomizeEquipment(["prayer book","prayer wheel"]) + ", 5 sticks of incense, a set of common clothes, and a pouch containing 15 gp\n\n");
	}
	else if(bg.name=="Charlatan"){
		//Only Equipment, part of which is randomized
		document.getElementById('form104_1').innerHTML = ("A set of fine clothes, a disguise kit, " + RandomizeEquipment(["ten stoppered bottles filled with colored liquid"+"a set of weighted dice"+"a deck of marked cards"+"a signet ring of an imaginary duke"]) + " and a pouch containing 15 gp\n\n" );
	}
	else if(bg.name=="Criminal"){
		//Random gaming set and predetermined equipment
		LearnTool(gamesList);
		document.getElementById('form104_1').innerHTML = ("A crowbar, a set of dark common clothes including a hoot, and a pouch containing 15 gp\n\n");
	}
	else if(bg.name=="Entertainment"){
		//Random instrument and partly random equipment.
		LearnTool(instrumentsList);
		document.getElementById('form104_1').innerHTML = (lastTool+" "+RandomizeEquipment(["love letter","lock of hair","trinket"])+" from an admirer, a costume and a pouch containing 15 gp\n\n");
	}
	else if(bg.name=="Folk Hero"){
		//random artisan's tools + vehicles (land) + random equipment
		LearnTool(["Vehicles (land)"]);
		LearnTool(toolsList);
		document.getElementById('form104_1').innerHTML = ( lastTool+", a shovel, an iron pot, a set of common clothes, and a pouch containing 10 gp\n\n" );
	}
	else if(bg.name=="Guild Artisan"){
		//random artisan's tools + equipment
		LearnTool(toolsList);
		document.getElementById('form104_1').innerHTML = ( lastTool+", a letter of introduction from your guild, a set of traveler's clothes, and a pouch containing 15 gp\n\n" );
	}
	else if(bg.name=="Hermit"){
		//random equipment
		document.getElementById('form104_1').innerHTML = ("A scroll case stuffed full of notes from your "+RandomizeEquipment(["prayers","studies"])+", a winter blanket, a set of common clothes, an herbalism kit, and 5 gp\n\n");
	}
	else if(bg.name=="Noble"){
		//random gaming set + predetermined equipment
		LearnTool(gamesList);
		document.getElementById('form104_1').innerHTML = ("A set of fine clothes, a signet ring, a scroll of pedigree, and a purse containing 25 gp");
	}
	else if(bg.name=="Outlander"){
		//musical instrument + equipment
		LearnTool(instrumentsList);
		document.getElementById('form104_1').innerHTML = ("A staff, a hunting trap, a trophy from an animal you killed, a set of traveler's clothes, and a pouch containing 10 gp\n\n");
	}
	else if(bg.name=="Sage"){
		// only equipment
		document.getElementById('form104_1').innerHTML = ("A bottle of black ink, a quill, a small knife, a letter from a dead colleague posing a question you have not yet been able toanswer, a set of common clothes, and a pouch containing 10 gp\n\n");
	}
	else if(bg.name=="Sailor"){
		//vehicled (water) + random equipment
		LearnTool(["Vehicles (water)"]);
		document.getElementById('form104_1').innerHTML = ("A belaying pin (club), 50 feet of silk rope, "+RandomizeEquipment(["rabbit foot","a small stone with a hole in the center","a vial of dragon blood","an old key","an ornate scabbard that fits no blade you have found so far","a petrified mouse","a tiny sketch portrait of a goblin"])+", a set of common clothes, and a pouch containing 10 gp\n\n");
	}
	else if(bg.name=="Soldier"){
		//gaming set and vehicles(land) as well as randomized equipment
		LearnTool(["Vehicles (land)"]);
		LearnTool(gamesList);
		document.getElementById('form104_1').innerHTML = ("An insignia of rank, a "+RandomizeEquipment(["dagger","broken blade","piece of a banner"])+" from an enemy, a "+RandomizeEquipment(["set of bone dice","deck of cards"])+", a set of common clothes, and a pouch containing 10 gp\n\n");
	}
	else if(bg.name=="Urchin"){
		//predetermined equipment
		document.getElementById('form104_1').innerHTML = ("A small knife, a map of the city you grew up in, a pet mouse, a token to remember your parents by, a set of common clothes, and a pouch containing 10 gp\n\n");
	}
}

function DamageCalc(stat, tohit, prof) {
	if (tohit==false) {
		if (stat<0) {
			return stat;
		}
		else if(stat==0) {
			return "";
		}
		else {
			return "+"+stat;
		}
	}
	else if (tohit==true) {
		if (prof==true) {
			stat += 2;
		}
		if (stat<0) {
			return stat;
		}
		else {
			return "+"+stat;
		}
	}
}

function InputSpellLists(daily) {
	if(cantrips.length>0) {
		document.getElementById('form103_1').innerHTML += "-- Cantrips\n";
		for(var i=0;i<cantrips.length;i++){
			document.getElementById('form103_1').innerHTML += cantrips[i];
			if(i<(cantrips.length-1)) {
				document.getElementById('form103_1').innerHTML += ",\n";
			}
		}
	}
	
	if(firstLevel.length>0) {
		document.getElementById('form103_1').innerHTML += "\n"+"";
		document.getElementById('form103_1').innerHTML += "-- 1st Level ("+daily+" slot)\n";
		for(var i=0;i<firstLevel.length;i++){
			document.getElementById('form103_1').innerHTML += firstLevel[i];
			if(i<(firstLevel.length-1)) {
				document.getElementById('form103_1').innerHTML += ",\n";
			}
		}
	}
}

function ClassAbilities(role) {
	if(role=="Barbarian"){
		//WEAPON 1
		document.getElementById('form79_1').value = ("Greataxe");
		document.getElementById('form68_1').value = (DamageCalc(abilityModifier[0], true, true));
		document.getElementById('form76_1').value = ("1d12"+DamageCalc(abilityModifier[0], false, true)+" S");
		//WEAPON 2
		document.getElementById('form78_1').value = ("Handaxe (2)");
		document.getElementById('form66_1').value = (DamageCalc(abilityModifier[0], true, true));
		document.getElementById('form75_1').value = ("1d6"+DamageCalc(abilityModifier[0], false, true)+" S");
		//WEAPON 3
		document.getElementById('form77_1').value = ("Javelin (4)");
		document.getElementById('form65_1').value = (DamageCalc(abilityModifier[0], true, true));
		document.getElementById('form74_1').value = ("1d6"+DamageCalc(abilityModifier[0], false, true)+" P");
		//ATTACKS AND SPELLCASTING
		document.getElementById('form103_1').innerHTML = "Rage (2 per day, +2 DMG). "+CheckDesc("On your turn you can enter a rage as a bonus action. While raging, you gain advantage on Strength checks and Strength saving throws. When you make a melee weapon attack using Strength, you gain a bonus to the damage roll (+2). You have resistance to B, P and S damage. Your rage lasts for 1 minute. It ends early if you are knocked unconscious or if your turn ends and you haven't attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on your turn as a bonus action. You can only use this ability 2 times per day, which refresh when you have taken a long rest.\n")+"\n";
		//FEATURES
		document.getElementById('form105_1').value += "Unarmored Defense. "+CheckDesc("While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit.")+"\n";
		//EQUIPMENT
		document.getElementById('form104_1').innerHTML += ("An explorer's pack that includes a backpack, a bedroll, 2 costumes, 5 candles, 5 days of rations, a waterskin, and a disguise kit.");
		//BARBARIAN STAT CHANGES
		//Unarmored Defense
		armorClass += (10+abilityModifier[1]+abilityModifier[2]);
		InputSpellLists(2);
	}
	else if(role=="Bard"){
		//WEAPON 1
		document.getElementById('form79_1').value = ("Rapier");
		document.getElementById('form68_1').value = (DamageCalc(abilityModifier[1], true, true));
		document.getElementById('form76_1').value = ("1d8"+DamageCalc(abilityModifier[1], false, true)+" P");
		//WEAPON 2
		document.getElementById('form78_1').value = ("Dagger");
		document.getElementById('form66_1').value = (DamageCalc(abilityModifier[1], true, true));
		document.getElementById('form75_1').value = ("1d4"+DamageCalc(abilityModifier[1], false, true)+" P");
		//ATTACKS AND SPELLCASTING
		var cantripSpells = [ "Blade Ward", "Dancing Lights", "Friends", "Light", "Mage Hand", "Mending", "Message", "Minor Illusion", "Prestidigitation", "True Strike", "Vicious Mockery" ];
		var levelSpells = [ "Animal Friendship", "Bane", "Charm Person", "Comprehend Languages", "Cure Wounds", "Detect Magic", "Disguise Self", "Dissonant Whispers", "Faerie Fire", "Feather Fall", "Healing Word", "Heroism", "Identify", "Illusory Script", "Longstrider", "Silent Image", "Sleep", "Speak with Animals", "Tasha's Hideous Laughter", "Thunderwave", "Unseen Servant" ];
		
		LearnSpell(cantripSpells, 2, 0);
		LearnSpell(levelSpells, 4, 1);
		InputSpellLists(2);
		//FEATURES
		document.getElementById('form105_1').value += "Bardic Inspiration (d6). "+CheckDesc("You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6. Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes.")+"\n";
		//document.getElementById('form105_1').value += "Bardic Inspiration (d6). "+CheckDesc("")+"\n";
		//EQUIPMENT
		LearnTool(instrumentsList);
		LearnTool(instrumentsList);
		LearnTool(instrumentsList);
		document.getElementById('form104_1').innerHTML += "Leather armor (11+Dex AC), a "+lastTool+", as well as "+RandomizeEquipment(["a diplomat's pack that includes a chest, 2 cases for maps and scrolls, a set of fine clothes, a bottle of ink, an ink pen, a lamp, 2 flasks of oil, 5 sheets of paper, a vial of perfume, sealing wax, and soap."],["an entertainer's pack that includes a backpack, a bedroll, 2 costumes, 5 candles, 5 days of rations, a waterskin, and a disguise kit"]);
		//
		armorClass += (11+abilityModifier[1]);
	}
	else if(role=="Cleric"){
		//Rolling Domain
		school = RandomizeEquipment([ "Knowledge", "Life", "Light", "Nature", "Tempest", "Trickery", "War"]);
		var spellSlots = abilityModifier[4]+1;
		var cantripSpells = [ "Guidance", "Light", "Mending", "Resistance", "Sacred Flame", "Spare the Dying", "Thaumaturgy" ];
		var levelSpells = [ "Bane", "Bless", "Command", "Create or Destroy Water", "Cure Wounds", "Detect Evil and Good", "Detect Magic", "Detect Poison and Disease", "Guiding Bolt", "Healing Word", "Inflict Wounds", "Protection from Evil and Good", "Purify Food and Drink", "Sanctuary", "Shield of Faith" ];
		var classProfs = [];
		if(school=="Knowledge") {
			extraLanguage+=2;
			firstLevel.push("Command (Domain)","Identify (Domain)");
			levelSpells.splice(3,1);
			var newProfs = ["arcana","history","nature","religion"];
			var oldProfs = 0;
			for(var i=0;i<newProfs.length;i++) {
				if(setProfs.includes(newProfs[i])) {
					console.log("nope "+oldProfs);
					oldProfs++;
				}
			}
			if(oldProfs<3) {
				for(var i=0;i<2;i) {
					var rng = RandomizeEquipment(["arcana","history","nature","religion"]);
					if(!setProfs.includes(rng)) {
						setProfs.push(rng);
						classProfs.push(rng);
						i++;
					}
				}
			}
			ClericEquipment(false, false, school);
			document.getElementById('form105_1').value += "Blessings of Knowledge. "+CheckDesc("Your proficiency bonus made with "+classProfs[0]+" and "+classProfs[1]+" are doubled for any ability check you make that uses either of those skills."+"\n")+"\n";
		}
		else if(school=="Life") {
			firstLevel.push("Bless (Domain)","Cure Wounds (Domain)");
			levelSpells.splice(5,1);
			levelSpells.splice(2,1);			
			ClericEquipment(true, false, school);
			document.getElementById('form105_1').value += "Disciple of Life. "+CheckDesc("Your healing spells are more effective. Whenever you use a spell of 1st level or higher to restore hit points to a creature, the creature regains additional hit points equal to 2 + the spell's level."+"\n")+"\n";
		}
		else if(school=="Light") {
			firstLevel.push("Burning Hands (Domain)","Faerie Fire (Domain)");
			if (!cantrips.includes("Light")){
				cantrips.push("Light");
			}		
			ClericEquipment(false, false, school);
			document.getElementById('form105_1').value += "Warding Flare. "+CheckDesc("You can interpose divine light between yourself and an attacking enemy. When you are attacked by a creature within 30 feet of you that you can see, you can use your reaction to impose disadvantage on the attack roll, causing light to flare before the attacker before it hits or misses. An attacker that can't be blinded is immune to this feature. You can use this feature "+abilityModifier[4]+" times between each long rest."+"\n")+"\n";
		}
		else if(school=="Nature") {
			var druidCantrips=[ "Druidcraft", "Guidance", "Mending", "Poison Spray", "Produce Flame", "Resistance", "Shillelagh", "Thorn Whip" ];
			firstLevel.push("Animal Friendship (Domain)","Speak with Animals (Domain)");
			LearnSpell(druidCantrips,1,0);
			var newProfs = ["animalhandling","nature","survival"];
			var oldProfs = 0;
			for(var i=0;i<newProfs.length;i++) {
				if(setProfs.includes(newProfs[i])) {
					console.log("nope "+oldProfs);
					oldProfs++;
				}
			}
			if(oldProfs<3) {
				for(var i=0;i<2;i) {
					var rng = RandomizeEquipment(["arcana","history","nature","religion"]);
					if(!setProfs.includes(rng)) {
						setProfs.push(rng);
						classProfs.push(rng);
						i++;
					}
				}
			}
			document.getElementById('form105_1').value += "Acolyte of Nature. "+CheckDesc("You learn one druid cantrip of your choice.\n")+"\n";
			ClericEquipment(true, false, school);
			//document.getElementById('form105_1').value += "Acolyte of Nature. "+CheckDesc(""+"\n")+"\n";
		}
		else if(school=="Tempest") {
			firstLevel.push("Fog Cloud (Domain)","Thunderwave (Domain)");
			document.getElementById('form105_1').value += "Wrath of the Storm. "+CheckDesc("You can thunderously rebuke attackers. When a creature within 5 feet of you that you can see hits you with an attack, you can use your reaction to cause the creature to make a Dexterity saving throw. The creature takes 2d8 lightning or thunder damage (your choice) on a failed saving throw, and half as much damage on a successful one. You can use this feature "+abilityModifier[4]+" times between each long rest."+"\n")+"\n";
			ClericEquipment(true, true, school);
		}
		else if(school=="Trickery") {
			firstLevel.push("Charm Person (Domain)","Disguise Self (Domain)");
			document.getElementById('form105_1').value += "Blessing of the Trickster. "+CheckDesc("You can use your action to touch a willing creature other than yourself to give it advantage on Dexterity (Stealth) checks. This blessing lasts for 1 hour or until you use this feature again."+"\n")+"\n";
			ClericEquipment(false, false, school);
		}
		else if(school=="War") {
			firstLevel.push("Divine Favor (Domain)","Shield of Faith (Domain)");
			levelSpells.splice(14,1);
			ClericEquipment(true, true, school);
			document.getElementById('form105_1').value += "War Priest. "+CheckDesc("Your god delivers bolts of inspiration to you while you are engaged in battle. When you use the Attack action, you can make one weapon attack as a bonus action. You can use this feature "+abilityModifier[4]+" times between each long rest."+"\n")+"\n";
		}
		LearnSpell(cantripSpells, 3, 0);
		LearnSpell(levelSpells, spellSlots, 1);
		InputSpellLists(2);
	}
	else if(role=="Druid"){
		var cantripSpells = [ "Druidcraft", "Guidance", "Mending", "Poison Spray", "Produce Flame", "Resistance", "Shillelagh", "Thorn Whip" ];
		var levelSpells = [ "Animal Friendship", "Charm Person", "Create or Destroy Water", "Cure Wounds", "Detect Magic", "Detect Poison and Disease", "Entangle", "Faerie Fire", "Fog Cloud", "Goodberry", "Healing Word", "Jump", "Longstrider", "Purify Food and Drink", "Speak with Animals", "Thunderwave" ];

		//WEAPON 1
		document.getElementById('form79_1').value = ("Scimitar");
		if(abilityModifier[0]>=abilityModifier[1]){
			document.getElementById('form68_1').value = (DamageCalc(abilityModifier[0], true, true));
			document.getElementById('form76_1').value = ("1d6"+DamageCalc(abilityModifier[0], false, true)+" S");
		}
		else if(abilityModifier[0]<abilityModifier[1]){
			document.getElementById('form68_1').value = (DamageCalc(abilityModifier[1], true, true));
			document.getElementById('form76_1').value = ("1d6"+DamageCalc(abilityModifier[1], false, true)+" S");
		}
		//EQUIPMENT
		document.getElementById('form104_1').innerHTML += ("Leather armor (11+DEX), a wooden shield (+2 AC), a druidic focus and "+"an explorer's pack that includes a backpack, a bedroll, 2 costumes, 5 candles, 5 days of rations, a waterskin, and a disguise kit.");
		languages.push("Druidic");
		if (!toolProfs.includes("Herbalism kit")) {
			LearnTool(["Herbalism kit"]);
		}
		LearnSpell(cantripSpells, 2, 0);
		LearnSpell(levelSpells, 2, 1);
		armorClass += 11+abilityModifier[1];
		armorClass += 2;
		InputSpellLists(1);
	}
	else if(role=="Fighter"){
		school = RandomizeEquipment([ "Archery", "Defense", "Dueling", "Great Weapon Fighting", "Protection", "Two-Weapon Fighting" ]);
		var armorType = undefined;
		//WEAPON 1
		var rng = Dice(2);
		if (rng == 1) {
			document.getElementById('form79_1').value = ("Longbow (20)");
			if (school == "Archery") {
				document.getElementById('form68_1').value = (DamageCalc(abilityModifier[1]+2, true, true));
				document.getElementById('form76_1').value = ("1d8"+DamageCalc(abilityModifier[1], false, true)+" P");
			}
			else {
				document.getElementById('form68_1').value = (DamageCalc(abilityModifier[1], true, true));
				document.getElementById('form76_1').value = ("1d8"+DamageCalc(abilityModifier[1], false, true)+" P");
			}
			armorType = "Leather armor (11+DEX)";
			armorClass = 11+abilityModifier[1];
		}
		else if (rng == 2) {
			armorType = "Scale mail (14+DEX(MAX2))";
			if (abilityModifier[1]<=2) {
				armorClass += 14+abilityModifier[1];
			}
			else {
				armorClass += 14+2;
			}
		}
		rng = Dice(2);
		if (rng == 1) {
			document.getElementById('form78_1').value = ("L. Crossbow (20)");
			if (school == "Archery") {
				document.getElementById('form66_1').value = (DamageCalc(abilityModifier[1]+2, true, true));
				document.getElementById('form75_1').value = ("1d8"+DamageCalc(abilityModifier[1], false, true)+" P");
			}
			else {
				document.getElementById('form66_1').value = (DamageCalc(abilityModifier[1], true, true));
				document.getElementById('form75_1').value = ("1d8"+DamageCalc(abilityModifier[1], false, true)+" P");
			}
		}
		else if (rng == 2) {
			document.getElementById('form78_1').value = ("Handaxe (2)");
			document.getElementById('form66_1').value = (DamageCalc(abilityModifier[0], true, true));
			document.getElementById('form75_1').value = ("1d6"+DamageCalc(abilityModifier[0], false, true)+" S");
		}
		rng = Dice(2);
		if (rng == 1) {
			//martial wep and shield?
			rng = Dice(4);
			if (rng == 1) {
				document.getElementById('form77_1').value = ("Flail");
				document.getElementById('form65_1').value = (DamageCalc(abilityModifier[0], true, true));
				document.getElementById('form74_1').value = ("1d8"+DamageCalc(abilityModifier[0], false, true)+" B");
			}
			else if (rng == 2) {
				document.getElementById('form77_1').value = ("Maul");
				document.getElementById('form65_1').value = (DamageCalc(abilityModifier[0], true, true));
				document.getElementById('form74_1').value = ("2d6"+DamageCalc(abilityModifier[0], false, true)+" B");
			}
			else if (rng == 3) {
				document.getElementById('form77_1').value = ("Longsword");
				document.getElementById('form65_1').value = (DamageCalc(abilityModifier[0], true, true));
				document.getElementById('form74_1').value = ("1d8 "+DamageCalc(abilityModifier[0], false, true)+" S");
			}
			else if (rng ==4) {
				document.getElementById('form77_1').value = ("Shortsword");
				if(abilityModifier[0]>=abilityModifier[1]){
					document.getElementById('form65_1').value = (DamageCalc(abilityModifier[0], true, true));
				}
				else if(abilityModifier[0]<abilityModifier[1]){
					document.getElementById('form65_1').value = (DamageCalc(abilityModifier[1], true, true));
				}
				
				if (school=="Dueling") {
					document.getElementById('form74_1').value = ("1d6"+DamageCalc((abilityModifier[0]+2), false, true)+" P");
				}
				else {
					document.getElementById('form74_1').value = ("1d6"+DamageCalc(abilityModifier[0], false, true)+" P");
				}
			}
			armorType += ", a shield (+2 AC)";
			armorClass += 2;
		}
		else if (rng == 2) {
			rng = Dice(2);
			if (rng == 1) {
				document.getElementById('form77_1').value = ("Shortsword (2)");
				if(abilityModifier[0]>=abilityModifier[1]){
					document.getElementById('form65_1').value = (DamageCalc(abilityModifier[0], true, true));
					document.getElementById('form74_1').value = ("1d6"+DamageCalc(abilityModifier[0], false, true)+" P");
				}
				else if(abilityModifier[0]<abilityModifier[1]){
					document.getElementById('form65_1').value = (DamageCalc(abilityModifier[1], true, true));
					document.getElementById('form74_1').value = ("1d6"+DamageCalc(abilityModifier[1], false, true)+" P");
				}
			}
			else if (rng == 2) {
				document.getElementById('form77_1').value = ("Scimitar (2)");
				if(abilityModifier[0]>=abilityModifier[1]){
					document.getElementById('form65_1').value = (DamageCalc(abilityModifier[0], true, true));
					document.getElementById('form74_1').value = ("1d6"+DamageCalc(abilityModifier[0], false, true)+" S");
				}
				else if(abilityModifier[0]<abilityModifier[1]){
					document.getElementById('form65_1').value = (DamageCalc(abilityModifier[1], true, true));
					document.getElementById('form74_1').value = ("1d6"+DamageCalc(abilityModifier[1], false, true)+" S");
				}
			}
			
		}
		document.getElementById('form104_1').innerHTML += (armorType+", and "+RandomizeEquipment(["an explorer's pack that includes a backpack, a bedroll, 2 costumes, 5 candles, 5 days of rations, a waterskin, and a disguise kit."],["a dungeoneer's pack which includes a backpack, a crowbar, a hammer, 10 pitons, 10 torches, a tinderbox, 10 days of rations, and a waterskin. The pack also has 50 feet of hempen rope strapped to the side of it."]));
		
		if (school=="Archery") {
			document.getElementById('form105_1').value += "Fighting Style ("+school+") "+CheckDesc("You gain a +2 bonus to attack rolls you make with ranged weapons.")+"\n";
		}
		else if (school=="Defense") {
			document.getElementById('form105_1').value += "Fighting Style ("+school+") "+CheckDesc("While you are wearing armor, you gain a +1 bonus to AC.")+"\n";
			armorClass+=1;
		}
		else if (school=="Dueling") {
			document.getElementById('form105_1').value += "Fighting Style ("+school+") "+CheckDesc("When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.")+"\n";
		}
		else if (school=="Great Weapon Fighting") {
			document.getElementById('form105_1').value += "Fighting Style ("+school+") "+CheckDesc("When you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll, even if the new roll is a 1 or a 2. The weapon must have the two-handed or versatile property for you to gain this benefit.")+"\n";
		}
		else if (school=="Protection") {
			document.getElementById('form105_1').value += "Fighting Style ("+school+") "+CheckDesc("When a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. You must be wielding a shield.")+"\n";
		}
		else if (school=="Two-Weapon Fighting") {
			document.getElementById('form105_1').value += "Fighting Style ("+school+") "+CheckDesc("When you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack.")+"\n";
		}
		document.getElementById('form105_1').value += "Second Wind. "+CheckDesc("On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level. Once you use this feature, you must finish a short or long rest before you can use it again."+"\n")+"\n";

		//document.getElementById('form105_1').value += "Second Wind. "+CheckDesc("")+"\n";
	}
	else if(role=="Monk"){
		var rng = Dice(2);
		if(rng == 1) {
			LearnTool(instrumentsList);
		}
		else if(rng == 2) {
			LearnTool(toolsList);
		}
		//WEAPON 1
		document.getElementById('form79_1').value = ("Shortsword");
		document.getElementById('form68_1').value = (DamageCalc(abilityModifier[1], true, true));
		document.getElementById('form76_1').value = ("1d6"+DamageCalc(abilityModifier[1], false, true)+" P");
		//WEAPON 2
		document.getElementById('form78_1').value = ("Dart (10)");
		document.getElementById('form66_1').value = (DamageCalc(abilityModifier[1], true, true));
		document.getElementById('form75_1').value = ("1d4"+DamageCalc(abilityModifier[1], false, true)+" P");
		//WEAPON 3
		document.getElementById('form77_1').value = ("Fist");
		document.getElementById('form65_1').value = (DamageCalc(abilityModifier[1], true, true));
		document.getElementById('form74_1').value = ("1d4"+DamageCalc(abilityModifier[1], false, true)+" P");
		
		document.getElementById('form105_1').value += "Martial Arts. "+CheckDesc("Your practice of martial arts gives you mastery of combat styles that use unarmed strikes, and monk weapons, which are shortswords and any simple melee weapon that don't have the two-handed or heavy property. You gain the following benefits while you are unarmed or wielding only monk weapons and you aren't wearing armor or wielding a shield: You can use Dexterity instead of Strength for the attack and damage rolls of your unarmed strikes and monk weapons. You can roll a d4 in place of the normal damage of your unarmed strike or monk weapon. This die changes as you gain monk levels. When you use the attack action with an unarmed strike or a monk weapon on your turn, you can make one unarmed strike as a bonus action.")+"\n";
		
		document.getElementById('form105_1').value += "Unarmored Defense. "+CheckDesc("While you are wearing no armor and not wielding a shield, your AC equals 10 + your Dexterity modifier + your Wisdom modifier.")+"\n";
		armorClass += 10+abilityModifier[1]+abilityModifier[4];
		InputSpellLists(1);
	}
	else if(role=="Paladin"){
		
		var armorType = "Chain mail (16)";
		
		rng = Dice(2);
		if (rng == 1) {
			//martial wep and shield?
			rng = Dice(4);
			if (rng == 1) {
				document.getElementById('form79_1').value = ("Flail");
				document.getElementById('form68_1').value = (DamageCalc(abilityModifier[0], true, true));
				document.getElementById('form76_1').value = ("1d8"+DamageCalc(abilityModifier[0], false, true)+" B");
			}
			else if (rng == 2) {
				document.getElementById('form79_1').value = ("Maul");
				document.getElementById('form68_1').value = (DamageCalc(abilityModifier[0], true, true));
				document.getElementById('form76_1').value = ("2d6"+DamageCalc(abilityModifier[0], false, true)+" B");
			}
			else if (rng == 3) {
				document.getElementById('form79_1').value = ("Longsword");
				document.getElementById('form68_1').value = (DamageCalc(abilityModifier[0], true, true));
				document.getElementById('form76_1').value = ("1d8 "+DamageCalc(abilityModifier[0], false, true)+" S");
			}
			else if (rng ==4) {
				document.getElementById('form79_1').value = ("Shortsword");
				document.getElementById('form68_1').value = (DamageCalc(abilityModifier[0], true, true));
				document.getElementById('form76_1').value = ("1d6"+DamageCalc(abilityModifier[0], false, true)+" P");
			}
			armorType += ", a shield (+2 AC)";
			armorClass += 2;
		}
		else if (rng == 2) {
			rng = Dice(2);
			if (rng == 1) {
				document.getElementById('form79_1').value = ("Shortsword (2)");
				document.getElementById('form68_1').value = (DamageCalc(abilityModifier[0], true, true));
				document.getElementById('form76_1').value = ("1d6"+DamageCalc(abilityModifier[0], false, true)+" P");
			}
			else if (rng == 2) {
				document.getElementById('form79_1').value = ("Scimitar (2)");
				document.getElementById('form68_1').value = (DamageCalc(abilityModifier[0], true, true));
				document.getElementById('form76_1').value = ("1d6"+DamageCalc(abilityModifier[0], false, true)+" S");
			}
			
		}
		//WEAPON 2
		document.getElementById('form78_1').value = ("Javelins (5)");
		document.getElementById('form66_1').value = (DamageCalc(abilityModifier[0], true, true));
		document.getElementById('form75_1').value = ("1d6"+DamageCalc(abilityModifier[0], false, true)+" P");
		
		if((abilityScores[0]) >= 13) {
			console.log("yes");
			armorClass += 16;
		}
		else {
			console.log("no");
			armorClass += 10+abilityModifier[1];
		}
		document.getElementById('form105_1').value += "Divine Sense. "+CheckDesc("As an action, you can open your awareness to detect forces. Until the end of your next turn, you know the location of any celestial, fiend, or undead within 60 feet of you that is not behind total cover. You know the type of any being whose presence you sense, but not its identity. You can use this feature "+(1+abilityModifier[1])+" times between each long rest.")+"\n";

		document.getElementById('form105_1').value += "Second Wind. "+CheckDesc("Your blessed touch can heal wounds. You have a pool of healing power that replenishes when you take a long rest. With that pool, you can restore a total number of hit points equal to your paladin level x 5 (5). As an action, you can touch a creature and draw power from the pool to restore a number of hit points to that creature, up to the maximum amount remaining in your pool. Alternatively, you can expend 5 hit points from your pool of healing to cure the target of one disease of neutralize one poison affecting it. This feature has no effect on undead and constructs.")+"\n";

		document.getElementById('form104_1').innerHTML += (armorType +" a holy symbol, "+RandomizeEquipment(["a priest's pack including a backpack, a blanket, 10 candles, a tinderbox, an alms box, 2 blocks of incense, a censer, vestments, 2 days of rations, and a waterskin."],["an explorer's pack that includes a backpack, a bedroll, 2 costumes, 5 candles, 5 days of rations, a waterskin, and a disguise kit."]));
		
		InputSpellLists(1);
	}
	else if(role=="Ranger"){
		var armorType = undefined;
		var rng = Dice(2);
		
		var enemyList = [ {name:"aberrations",lang:"none"}, {name:"beasts",lang:"none"}, {name:"celestials",lang:"Celestial"}, {name:"constructs",lang:"none"}, {name:"dragons",lang:"Draconic"}, {name:"elementals",lang:"Primordial"}, {name:"fey",lang:"Sylvan"}, {name:"fiends",lang:"none"}, {name:"giants",lang:"Giant"}, {name:"monstrosities",lang:"none"}, {name:"oozes",lang:"none"}, {name:"plants",lang:"none"}, {name:"undead",lang:"none"} ];
		var terrainList = [ "arctic", "coast", "desert", "forest", "grassland", "mountain", "swamp", "the Underdark" ];
		
		var favoredEnemy = RandomizeEquipment(enemyList);
		var naturalExplorer = RandomizeEquipment(terrainList);
		
		if(favoredEnemy.lang!="none") {
			if(!languages.includes(favoredEnemy.lang)) {
				languages.push(favoredEnemy.lang);
			}
		}
		
		document.getElementById('form105_1').value += "Favoured Enemy ("+favoredEnemy.name+"). "+CheckDesc("You have advantage on Wisdom(Survival) checks to track your favored enemies, as well as on Intelligence checks to recall information about them.")+"\n";
		document.getElementById('form105_1').value += "Natural Explored ("+naturalExplorer+"). "+CheckDesc("When you make an Intelligence or Widsom check related to your favored terrain, your proficiency bonus is doubled if you are using a skill that you are proficient in. While traveling for an hour or more in your favored terrain, you gain the following benefits: Difficult terrain doesn't slow your group's travel. Your group can't become lost except by magical means. Even when you are engaged in another activity while traveling such as foraging, navigating, or tracking, you remain alert to danger. If you are traveling alone, you can move stealthily at a normal pace. When you forage, you find twice as much food as you normally would. While tracking other creatures, you also learn their exact number, their sizes, and how long ago they passed through the area.")+"\n";

		if (rng == 1) {
			armorType = "Scale mail (14+DEX(MAX2))";
			if (abilityModifier[1]<=2) {
				armorClass += 14+abilityModifier[1];
			}
			else {
				armorClass += 14+2;
			}
		}
		else if (rng == 2) {
			armorType = "Leather armor (11+DEX)";
			armorClass += 11+abilityModifier[1];
		}
		//WEAPON 1
		document.getElementById('form79_1').value = ("Shortsword (2)");
		document.getElementById('form68_1').value = (DamageCalc(abilityModifier[1], true, true));
		document.getElementById('form76_1').value = ("1d6"+DamageCalc(abilityModifier[1], false, true)+" P");
		//WEAPON 2
		document.getElementById('form78_1').value = ("Longbow (20)");
		document.getElementById('form66_1').value = (DamageCalc(abilityModifier[1], true, true));
		document.getElementById('form75_1').value = ("1d8"+DamageCalc(abilityModifier[1], false, true)+" P");

		document.getElementById('form104_1').innerHTML += (armorType+", and "+RandomizeEquipment(["an explorer's pack that includes a backpack, a bedroll, 2 costumes, 5 candles, 5 days of rations, a waterskin, and a disguise kit."],["a dungeoneer's pack which includes a backpack, a crowbar, a hammer, 10 pitons, 10 torches, a tinderbox, 10 days of rations, and a waterskin. The pack also has 50 feet of hempen rope strapped to the side of it."]));

		InputSpellLists(1);
	}
	else if(role=="Rogue"){
		languages.push("Thieves' Cant");
		LearnTool(["Thieves' Tools"]);
		//WEAPON 1
		var rng = Dice(2);
		if (rng==1) {
			document.getElementById('form79_1').value = ("Shortsword");
			document.getElementById('form68_1').value = (DamageCalc(abilityModifier[1], true, true));
			document.getElementById('form76_1').value = ("1d6"+DamageCalc(abilityModifier[1], false, true)+" P");
		}
		else if (rng==2) {
			document.getElementById('form79_1').value = ("Rapier");
			document.getElementById('form68_1').value = (DamageCalc(abilityModifier[1], true, true));
			document.getElementById('form76_1').value = ("1d8"+DamageCalc(abilityModifier[1], false, true)+" P");
		}
		rng = Dice(2);
		if (rng==1) {
			document.getElementById('form78_1').value = ("Shortsword");
			document.getElementById('form66_1').value = (DamageCalc(abilityModifier[1], true, true));
			document.getElementById('form75_1').value = ("1d6"+DamageCalc(abilityModifier[1], false, true)+" P");
		}
		else if (rng==2) {
			document.getElementById('form78_1').value = ("Shortbow (20)");
			document.getElementById('form66_1').value = (DamageCalc(abilityModifier[0], true, true));
			document.getElementById('form75_1').value = ("1d6"+DamageCalc(abilityModifier[0], false, true)+" P");
		}
		document.getElementById('form104_1').innerHTML += ("Leather armor (11+DEX), and "+RandomizeEquipment(["a burglar's pack, which include a backpack, a bag of 1000 ball bearings, 10 feet of string, a bell, 5 candles, a crowbar, a hammer, 10 pitons, a hooded lantern, 2 flasks of  oil, 5 days rations, a tinderbox, and a waterskin. The pack also has 50 feet of hempen rope strapped to the side of it."],["an explorer's pack that includes a backpack, a bedroll, 2 costumes, 5 candles, 5 days of rations, a waterskin, and a disguise kit."],["a dungeoneer's pack which includes a backpack, a crowbar, a hammer, 10 pitons, 10 torches, a tinderbox, 10 days of rations, and a waterskin. The pack also has 50 feet of hempen rope strapped to the side of it."]));

		document.getElementById('form105_1').value += "Expertise. "+CheckDesc("Choose two of your skill proficiencies, or one of your skill proficiencies and your proficiency with thieves' tools. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies."+"\n")+"\n";
		
		document.getElementById('form105_1').value += "Sneak Attack (1d6). "+CheckDesc("Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack if you have advantage on the attack roll. The attack must use a finesse or a ranged weapon. You don't need advantage on the attack roll if another enemy of the target is within 5 feet of it, that enemy isn't incapacitated, and you don't have disadvantage on the attack roll."+"\n")+"\n";
		
		armorClass += 11+abilityModifier[1];
		
		//document.getElementById('form105_1').value += "Expertise. "+CheckDesc(""+"\n")+"\n";
		InputSpellLists(1);
	}
	else if(role=="Sorcerer"){
		var dragonBlood = RandomizeEquipment(ancestry);
		// WEAPON 1
		document.getElementById('form79_1').value = ("L. Crossbow (20)");
		document.getElementById('form68_1').value = (DamageCalc(abilityModifier[1], true, true));
		document.getElementById('form76_1').value = ("1d8"+DamageCalc(abilityModifier[1], false, true)+" P");
		// WEAPON 2
		document.getElementById('form78_1').value = ("Dagger (2)");
		document.getElementById('form66_1').value = (DamageCalc(abilityModifier[1], true, true));
		document.getElementById('form75_1').value = ("1d4"+DamageCalc(abilityModifier[1], false, true)+" P");
		
		document.getElementById('form104_1').innerHTML += (RandomizeEquipment(["A compononent pouch","An arcane focus"])+", and "+RandomizeEquipment(["an explorer's pack that includes a backpack, a bedroll, 2 costumes, 5 candles, 5 days of rations, a waterskin, and a disguise kit."],["a dungeoneer's pack which includes a backpack, a crowbar, a hammer, 10 pitons, 10 torches, a tinderbox, 10 days of rations, and a waterskin. The pack also has 50 feet of hempen rope strapped to the side of it."]));

		school = RandomizeEquipment(["Draconic Bloodline"],["Wild Magic"]);
		
		if (school=="Wild Magic") {
			document.getElementById('form105_1').value += "Wild Magic Surge. "+CheckDesc("Once per turn, the DM can have you roll a d20 immediately after you cast a sorcerer spell of 1st level or higher. If you roll a 1, roll on the Wild Magic Surge table to create a magical effect."+"\n")+"\n";
			document.getElementById('form105_1').value += "Tides of Chaos. "+CheckDesc("You can manipulate the forces of chance and chaos to gain advantage on one attack roll, ability check, or saving throw. Once you do so, you must finish a long rest before you can use this feature again. Any time before you regain the use of this feature, the DM can have you roll on the Wild Magic Surge table immediately after you cast a sorcerer spell of 1st level or higher. You then regain the use of this feature."+"\n")+"\n";
			armorClass += 10+abilityModifier[1];
		}
		else if (school=="Draconic Bloodline") {
			if (!languages.includes("Draconic")) {
				languages.push("Draconic");
			}
			hitPoints++;
			
			document.getElementById('form105_1').value += "Dragon Ancestor ("+dragonBlood.dragon+" descent, "+dragonBlood.damage+" damage). "+CheckDesc("Whenever you make a Charisma check when interacting with dragons, your proficiency bonus is doubled if it applies to the check."+"\n")+"\n";
			
			document.getElementById('form105_1').value += "Draconic Resilience. "+CheckDesc("At 1st level, your hit point maximum increases by 1 and increases by 1 again whenever you gain a level in this class. Additionally, parts of your skin are covered by a thin sheen of dragon-like scales. When you aren't wearing armor, your AC equals 13 + your Dexterity modifier."+"\n")+"\n";
			armorClass+=(13+abilityModifier[1]);
		}
		InputSpellLists(1);
	}
	else if(role=="Warlock"){
		var cantripSpells = [ "Blade Ward", "Chill Touch", "Eldritch Blast", "Friends", "Mage Hand", "Minor Illusion", "Poison Spray", "Prestidigitation", "True Strike" ];
		var levelSpells = [ "Armor of Agathys", "Arms of Hadar", "Charm Person", "Comprehend Languages", "Expeditious Retreat", "Hellish Rebuke", "Hex", "Illusory Script", "Protection from Evil and Good", "Unseen Servant", "Witch Bolt" ];
		
		// WEAPON 1
		document.getElementById('form79_1').value = ("L. Crossbow (20)");
		document.getElementById('form68_1').value = (DamageCalc(abilityModifier[1], true, true));
		document.getElementById('form76_1').value = ("1d8"+DamageCalc(abilityModifier[1], false, true)+" P");
		// WEAPON 2
		document.getElementById('form78_1').value = ("Dagger (2)");
		document.getElementById('form66_1').value = (DamageCalc(abilityModifier[1], true, true));
		document.getElementById('form75_1').value = ("1d4"+DamageCalc(abilityModifier[1], false, true)+" P");
		
		document.getElementById('form104_1').innerHTML += ("Leather armor (11+DEX) "+RandomizeEquipment(["a compononent pouch","an arcane focus"])+", and "+RandomizeEquipment(["a scholar's pack which includes a backpack, a book of lore, a bottle of ink, an ink pen, 10 sheets of parchment, a little bag of sand, and a small knife."],["a dungeoneer's pack which includes a backpack, a crowbar, a hammer, 10 pitons, 10 torches, a tinderbox, 10 days of rations, and a waterskin. The pack also has 50 feet of hempen rope strapped to the side of it."]));

		armorClass += 11+abilityModifier[1];
		
		school = RandomizeEquipment(["the Archfey","the Fiend","the Great Old One"]);
		
		if (school == "the Archfey") {
			levelSpells.push("Faerie Fire","Sleep");
			document.getElementById('form105_1').value += "Fey Presence. "+CheckDesc("As an action, you can cause each creature in a 10-foot cube originating from you to make a Wisdom saving throw against your warlock spell save DC. The creatures that fail their saving throws are all charmed or frightened by you (your choice) until the end of your next turn. Once you use this feature, you can't use it again until you finish a short or long rest."+"\n")+"\n";
		}
		else if (school == "the Fiend") {
			levelSpells.push("Burning Hands","Command");
			document.getElementById('form105_1').value += "Dark One's Blessing. "+CheckDesc("When you reduce a hostile creature to 0 hit points, you gain temporary hit points equal to your Charisma modifier + your warlock level"+"\n")+"\n";
		}
		else if (school == "the Great Old One") {
			levelSpells.push("Dissonant Whispers","Tasha's Hideous Laughter");
			document.getElementById('form105_1').value += "Awakened Mind. "+CheckDesc("You can telepathically speak to any creature you can see within 30 feet of you. You donn't need to share a language with the creature for it to understand your telepathic utterances, but the creature must be able to understand at least one language."+"\n")+"\n";
		}
		
		LearnSpell(cantripSpells, 2, 0);
		LearnSpell(levelSpells, 2, 1);
		InputSpellLists(1);
	}
	else if(role=="Wizard"){
		var cantripSpells = [ "Acid Splash", "Blade Ward", "Chill Touch", "Dancing Lights", "Fire Bolt", "Friends", "Light", "Mage Hand", "Mending", "Message", "Minor Illusion", "Poison Spray", "Prestidigitation", "Ray of Frost", "Shocking Grasp", "True Strike" ];
		var levelSpells = [ "Alarm", "Burning Hands", "Charm Person", "Chromatic Orb", "Color Spray", "Comprehend Languages", "Detect Magic", "Disguise Self", "Expeditious Retreat", "False Life", "Feather Fall", "Find Familiar", "Fog Cloud", "Grease", "Identify", "Illusory Script", "Jump", "Longstrider", "Mage Armor", "Magic Missile", "Protection from Evil and Good", "Ray of Sickness", "Shield", "Silent Image", "Sleep", "Tasha's Hideous Sickness", "Tenser's Floating Disk", "Thunderwave", "Unseen Servant", "Witch Bolt" ];
		var spellAmount = (1+abilityModifier[3]);
		//WEAPON 1
		var rng = Dice(2);
		if (rng==1) {
			document.getElementById('form79_1').value = ("Quarterstaff");
			document.getElementById('form68_1').value = (DamageCalc(abilityModifier[1], true, true));
			document.getElementById('form76_1').value = ("1d6"+DamageCalc(abilityModifier[1], false, true)+" B");
		}
		else if (rng==2) {
			document.getElementById('form79_1').value = ("Dagger");
			document.getElementById('form68_1').value = (DamageCalc(abilityModifier[1], true, true));
			document.getElementById('form76_1').value = ("1d4"+DamageCalc(abilityModifier[1], false, true)+" P");
		}
		
		LearnSpell(cantripSpells, 3, 0);
		LearnSpell(levelSpells, spellAmount, 1);
		
		document.getElementById('form105_1').value += "Arcane Recovery. "+CheckDesc(" Once per day when you finish a short rest, you can choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your wizard level (rounded up), and none of the slots can be 6th level or higher."+"\n")+"\n";

		document.getElementById('form104_1').innerHTML += (RandomizeEquipment(["A compononent pouch","An arcane focus"])+", a spellbook and "+RandomizeEquipment(["an explorer's pack that includes a backpack, a bedroll, 2 costumes, 5 candles, 5 days of rations, a waterskin, and a disguise kit."],["a scholar's pack which includes a backpack, a book of lore, a bottle of ink, an ink pen, 10 sheets of parchment, a little bag of sand, and a small knife."]));

		InputSpellLists(2);
		armorClass += 10+abilityModifier[1];
	}
	else {
		console.log("What");
	}
}

function ClericEquipment(heavyArmour, heavyWeapon, school) {
	//WEAPON 1
	var armorType = undefined;
	if(heavyWeapon==true) {
		var dieRoll = Dice(2);
		if (dieRoll == 1) {
			document.getElementById('form79_1').value = ("Mace");
			document.getElementById('form68_1').value = (DamageCalc(abilityModifier[0], true, true));
			document.getElementById('form76_1').value = ("1d6"+DamageCalc(abilityModifier[0], false, true)+" B");
		}
		else if (dieRoll == 2) {
			document.getElementById('form79_1').value = ("Warhammer");
			document.getElementById('form68_1').value = (DamageCalc(abilityModifier[0], true, true));
			document.getElementById('form76_1').value = ("1d8"+DamageCalc(abilityModifier[0], false, true)+" B");
		}
	}
	else if(heavyWeapon==false) {
		document.getElementById('form79_1').value = ("Mace");
		document.getElementById('form68_1').value = (DamageCalc(abilityModifier[0], true, true));
		document.getElementById('form76_1').value = ("1d12"+DamageCalc(abilityModifier[0], false, true)+" S");
	}
	
	if(heavyArmour==true && abilityScores[0]>=13) {
		var dieRoll = Dice(3);
		if (dieRoll == 1) {
			armorType = "Scale mail (14+DEX(MAX2))";
			if (abilityModifier[1]<=2) {
				armorClass += 14+abilityModifier[1];
			}
			else {
				armorClass += 14+2;
			}
		}
		else if (dieRoll == 2) {
			armorType = "Leather armor (11+DEX)";
			armorClass += 11+abilityModifier[1];
		}
		else if (dieRoll == 3) {
			armorType = "Chain mail";
			armorClass += 16;
		}
	}
	else if(heavyArmour==false || abilityScores<13) {
		var dieRoll = Dice(2);
		if (dieRoll == 1) {
			armorType = "Scale mail (14+DEX(MAX2))";
			if (abilityModifier[1]<=2) {
				armorClass += 14+abilityModifier[1];
			}
			else {
				armorClass += 14+2;
			}
		}
		else if (dieRoll == 2) {
			armorType = "Leather armor (11+DEX)";
			armorClass += 11+abilityModifier[1];
		}
	}
	//WEAPON 2
	document.getElementById('form78_1').value = ("L. Crossbow (20)");
	document.getElementById('form66_1').value = (DamageCalc(abilityModifier[1], true, true));
	document.getElementById('form75_1').value = ("1d8"+DamageCalc(abilityModifier[1], false, true)+" P");
	//ATTACKS AND SPELLCASTING
	//document.getElementById('form103_1').innerHTML = "Rage (2 per day, +2 DMG). "+CheckDesc("On your turn you can enter a rage as a bonus action. While raging, you gain advantage on Strength checks and Strength saving throws. When you make a melee weapon attack using Strength, you gain a bonus to the damage roll (+2). You have resistance to B, P and S damage. Your rage lasts for 1 minute. It ends early if you are knocked unconscious or if your turn ends and you haven't attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on your turn as a bonus action. You can only use this ability 2 times per day, which refresh when you have taken a long rest.\n")+"\n";
	//FEATURES
	document.getElementById('form105_1').value += "Divine Domain ("+school+") "+CheckDesc("You have two spells tied to your clerical domain which you always have prepared and doesn't count against the number of spells you can prepare each day.\n")+"\n";
	//EQUIPMENT
	document.getElementById('form104_1').innerHTML += (armorType+", a shield (+2 AC), a holy symbol, "+RandomizeEquipment(["a priest's pack including a backpack, a blanket, 10 candles, a tinderbox, an alms box, 2 blocks of incense, a censer, vestments, 2 days of rations, and a waterskin."],["an explorer's pack that includes a backpack, a bedroll, 2 costumes, 5 candles, 5 days of rations, a waterskin, and a disguise kit."]));
	//Cleric STAT CHANGES
	if (armorClass<=5) {
		armorClass += 10;
	}
	armorClass += 2;
}

function RandomizeEquipment(equipment) {
	var rng = equipment[Math.floor((Math.random()*equipment.length))];
	return rng;
}

function LearnSpell(spells, amount, level) {
	for(var i=0;i<amount;i++) {
		var rng = RandomizeEquipment(spells);
		if (level==0) {
			if (cantrips.includes(rng)) {
				console.log("Includes "+rng);
				i--;
			}
			else if (!cantrips.includes(rng)) {
				cantrips.push(rng);
			}
		}
		else if (level==1) {
			if (firstLevel.includes(rng)) {
				console.log("Includes "+rng);
				i--;
			}
			else if (!firstLevel.includes(rng)) {
				firstLevel.push(rng);
			}
		}
	}
}

function LearnTool(toolList) {
	var toolFree = false;
	for(var t=0;t<toolList.length;t++) {
		if(toolProfs.includes(toolList[t])) {
			//console.log(toolList[t]+" already in list");
		}
		else if(!toolProfs.includes(toolList[t])) {
			//console.log("Not in list!");
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
				//console.log(toolProfs);
				lastTool = rng;
				i++;
			}
			//console.log("Already proficient with "+rng);
		}
	}
}

function RollAlignment() {
	var morality = RandomizeEquipment(["Good", "Neutral", "Evil" ]);
	if (document.getElementById('sEvil').checked == false) {
		var morality = RandomizeEquipment(["Good", "Neutral" ]);
	}
	var alignment = RandomizeEquipment(["Lawful", "Neutral", "Chaotic" ]);
	if(morality == alignment) {
		morality = "True";
		document.getElementById('form90_1').value = morality + " " + alignment;
	}
	else {
		document.getElementById('form90_1').value = alignment + " " + morality;
	}
}

function RollPersonality() {
	var rng1 = RandomizeEquipment(bg.pers);
	document.getElementById('form101_1').innerHTML = rng1+"\n"; // PERSONALITY TRAITS
	for (var i=0;i==0;i) {
		var rng2 = RandomizeEquipment(bg.pers);
		if (rng1!=rng2) {
			document.getElementById('form101_1').innerHTML += rng2; // PERSONALITY TRAITS 2
			i++;
		}
	}
	document.getElementById('form100_1').innerHTML = RandomizeEquipment(bg.bond); // BONDS
	document.getElementById('form99_1').innerHTML = RandomizeEquipment(bg.idea); // IDEALS
	document.getElementById('form98_1').innerHTML = RandomizeEquipment(bg.flaw); // FLAWS
}

function CheckDesc(str) {
	if(sDescription) {
		return str;
	}
	else {
		return "";
	}
}