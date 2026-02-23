/*contient les biographies*/
const bios = {
    ironman: "Iron Man, de son vrai nom Tony Stark, est un génie milliardaire et inventeur à la tête des industries Stark. Lorsqu’il est gravement blessé et capturé dans une zone de guerre, il crée une armure high-tech alimentée par un réacteur pour survivre et s’échapper. De retour chez lui, il perfectionne cette technologie et devient Iron Man, utilisant son intelligence, sa puissance et son armure pour protéger le monde. Membre fondateur des Avengers, il est connu pour son humour, son courage et son sens des responsabilités, faisant de lui l’un des héros les plus emblématiques de l’univers Marvel.",
	
	captainamerica: "Captain America, de son vrai nom Steve Rogers, est un jeune homme frêle mais animé d’un courage exceptionnel. Recruté pour le projet Super-Soldat pendant la Seconde Guerre mondiale, il reçoit un sérum qui fait de lui un combattant aux capacités physiques surhumaines. Armé de son bouclier en vibranium, il devient un symbole de justice et d’espoir. Après avoir été congelé pendant des décennies, il se réveille dans le monde moderne et devient l’un des membres fondateurs et le leader moral des Avengers, incarnant l’honneur, le sacrifice et la liberté.",
    
	thor: "Thor, fils d’Odin et prince d’Asgard, est le dieu du tonnerre doté d’une force et de pouvoirs divins. D’abord arrogant, il est envoyé sur Terre par son père pour apprendre l’humilité. Manieur du marteau magique Mjolnir, qu’il est le seul digne de soulever, Thor protège aussi bien Asgard que la Terre contre de puissantes menaces. Membre fondateur des Avengers, il allie puissance, courage et noblesse, incarnant un héros mythique au service du bien.",
    
	hulk: "Hulk est l’alter ego du scientifique Bruce Banner, exposé à une explosion de radiations gamma lors d’une expérience ratée. Lorsque Banner est submergé par la colère ou le stress, il se transforme en Hulk, une créature dotée d’une force presque illimitée. Bien que souvent perçu comme une menace, Hulk est un héros qui combat pour protéger les autres. Membre des Avengers, il incarne la lutte entre la raison et la rage, et montre que même une force incontrôlable peut servir le bien.",
    
	spiderman: "Spider-Man, de son vrai nom Peter Parker, est un jeune homme ordinaire qui obtient des pouvoirs extraordinaires après avoir été mordu par une araignée radioactive. Doté d’une force et d’une agilité surhumaines, ainsi que d’un sens de l’araignée, il décide de devenir un héros après la mort de son oncle Ben, qui lui apprend qu’un grand pouvoir implique de grandes responsabilités. Protecteur de New York et allié des Avengers, Spider-Man se distingue par son courage, son intelligence et son humanité.",
    
	blackwidow: "Black Widow, de son vrai nom Natasha Romanoff, est une espionne d’élite formée dès son enfance dans le programme secret du Red Room. Sans super-pouvoirs, elle compense par une maîtrise exceptionnelle du combat, de l’espionnage et des armes. Ancienne ennemie devenue héroïne, elle rejoint les Avengers où elle se distingue par son intelligence, son sang-froid et son sens du sacrifice, incarnant la rédemption et la loyauté.",
    
	doctorstrange: "Doctor Strange, de son vrai nom Stephen Strange, est un neurochirurgien brillant mais arrogant dont la carrière s’effondre après un grave accident. En quête de guérison, il découvre les arts mystiques et devient le Sorcier Suprême, protecteur de la Terre contre les menaces magiques et interdimensionnelles. Membre des Avengers, il allie intelligence, discipline et pouvoirs mystiques pour préserver l’équilibre entre les mondes.",
    
	blackpanther: "Black Panther, de son vrai nom T’Challa, est le roi du Wakanda, un pays africain technologiquement avancé et riche en vibranium. Héritier du trône, il devient le protecteur de son peuple en endossant le costume de Black Panther, qui lui confère force, agilité et réflexes surhumains. Membre des Avengers, il allie leadership, stratégie et courage, incarnant la sagesse et la responsabilité au service de la justice.",
    
	scarletwitch: "Scarlet Witch, de son vrai nom Wanda Maximoff, est une mutante dotée de pouvoirs de magie et de manipulation de la réalité. Après avoir quitté son passé ambigu avec son frère Pietro, elle rejoint les Avengers pour protéger le monde. Ses capacités uniques, alliées à son courage et à sa détermination, font d’elle l’une des héroïnes les plus puissantes et complexes de l’univers Marvel.",
    
	vision: "Vision est un androïde créé par Ultron mais doté d’une conscience humaine grâce à l’intervention de Tony Stark, Bruce Banner et du sceptre de Loki. Capable de devenir intangible, de voler et de projeter des rayons d’énergie, il allie force, intelligence et empathie. Membre des Avengers, Vision incarne la fusion entre technologie et humanité, utilisant ses pouvoirs pour protéger les innocents et combattre le mal.",
    
	antman: "Ant-Man, principalement Scott Lang dans l’ère moderne, est un ingénieur et ancien voleur qui devient super-héros pour protéger sa fille et le monde. Grâce à la technologie du costume d’Ant-Man, il peut rétrécir à la taille d’une fourmi tout en conservant sa force, voler et communiquer avec les fourmis. Membre des Avengers, il combine ingéniosité, courage et humour pour accomplir des missions où la taille et la ruse font la différence.",
    
	wasp: "Wasp, principalement Hope van Dyne dans l’ère moderne, est une super-héroïne capable de rétrécir, de voler grâce à des ailes miniatures et de projeter des rafales d’énergie. Formée par Ant-Man et experte en combat et stratégie, elle rejoint les Avengers pour protéger le monde. Courageuse, intelligente et déterminée, Wasp montre que rapidité et ingéniosité peuvent être aussi puissantes que la force brute.",
    
	falcon: "Falcon, de son vrai nom Sam Wilson, est un ancien vétéran et travailleur social devenu super-héros grâce à un exosquelette ailé qui lui permet de voler et d’agir avec agilité. Il devient un allié proche de Captain America et rejoint les Avengers, apportant stratégie, courage et sens de la justice. Loyal et déterminé, il incarne le leadership et la protection des innocents, et devient plus tard le nouveau Captain America.",
    
	wintersoldier: "Winter Soldier, de son vrai nom James “Bucky” Barnes, était le meilleur ami de Captain America pendant la Seconde Guerre mondiale. Après avoir été présumé mort, il est capturé et transformé en assassin surentraîné avec un bras cybernétique. Retrouvant sa mémoire et sa conscience, il rejoint les Avengers pour combattre le mal. Il incarne la rédemption, le courage et la lutte pour surmonter un passé sombre.",
    
	captainmarvel: "Captain Marvel, de son vrai nom Carol Danvers, est une ancienne pilote de l’armée de l’air devenue super-héroïne après avoir été exposée à l’énergie Kree, ce qui lui confère force surhumaine, vol et projection d’énergie. Membre des Avengers et figure majeure du cosmos Marvel, elle utilise ses pouvoirs pour protéger la Terre et l’univers. Courageuse, déterminée et indépendante, elle incarne la puissance et la responsabilité d’un héros.",
	
	deadpool: "Deadpool, de son vrai nom Wade Wilson, est un mercenaire irrévérencieux au sens de l’humour mordant et à la morale imprévisible. Atteint d’un cancer incurable, il se porte volontaire pour une expérience secrète visant à créer des super-soldats. Le traitement lui confère un facteur de guérison surhumain, mais le laisse physiquement défiguré et mentalement instable. Adoptant alors le nom de Deadpool, il enfile un costume rouge et noir et devient un anti-héros redoutable, aussi dangereux pour ses ennemis que pour ses alliés. Connu pour briser le quatrième mur, son sarcasme incessant et sa violence décomplexée, Deadpool navigue entre vengeance, chaos et tentatives maladroites d’héroïsme, faisant de lui l’un des personnages les plus uniques et imprévisibles de l’univers Marvel.",
	
	wolverine: "Wolverine, de son vrai nom James Howlett, aussi connu sous l’alias Logan, est un mutant solitaire au passé sombre et tourmenté. Doté de sens surdéveloppés, d’une force accrue et surtout d’un facteur de guérison exceptionnel, il vieillit très lentement et survit à des blessures mortelles. Son squelette a été recouvert d’adamantium, un métal quasi indestructible, d’où jaillissent ses célèbres griffes. Marqué par des décennies de combats, de pertes et de manipulations, Logan lutte constamment entre sa nature animale et son humanité. Membre emblématique des X-Men, il met sa férocité et son courage au service de la protection des mutants et des humains, faisant de Wolverine l’un des héros les plus iconiques et complexes de l’univers Marvel.",
	
	hawkeye: "Hawkeye, de son vrai nom Clint Barton, est un archer d’élite à la précision inégalée. Ancien artiste de cirque devenu agent d’exception, il ne possède aucun pouvoir surhumain, mais compense par un talent hors norme au tir à l’arc, des réflexes aiguisés et une grande maîtrise du combat rapproché. Équipé d’un arc high-tech et de flèches spéciales aux multiples fonctionnalités, il se distingue par son sang-froid et sa détermination sur le champ de bataille. Membre essentiel des Avengers, Hawkeye incarne le courage et la loyauté d’un homme ordinaire combattant aux côtés de dieux et de super-soldats, prouvant que la précision, l’expérience et la volonté peuvent rivaliser avec les plus grands pouvoirs de l’univers Marvel.",
	
	lachose:"La Chose, de son vrai nom Ben Grimm, est un ancien astronaute et pilote d’essai au caractère bourru mais au cœur immense. À la suite d’un accident spatial impliquant des rayons cosmiques, son corps se transforme en une masse de roche vivante à la force colossale et à la peau quasiment indestructible. Prisonnier d’une apparence monstrueuse qu’il n’a jamais choisie, Ben Grimm lutte avec son mal-être tout en faisant preuve d’un courage et d’une loyauté sans faille. Membre emblématique des Quatre Fantastiques, la Chose met sa puissance au service de la protection de l’humanité, incarnant le sacrifice, l’amitié et l’héroïsme, faisant de lui l’un des personnages les plus attachants de l’univers Marvel.",
	
	latorche:"La Torche humaine, de son vrai nom Johnny Storm, est un jeune héros audacieux et impulsif doté du pouvoir de s’enflammer à volonté. Victime du même accident spatial que les autres membres des Quatre Fantastiques, il peut générer et contrôler le feu, voler à grande vitesse et projeter de puissantes rafales de flammes, tout en restant insensible à la chaleur qu’il produit. Charismatique et parfois téméraire, Johnny compense son manque de maturité par un grand cœur et un profond sens de la famille. Membre incontournable des Quatre Fantastiques, la Torche humaine incarne l’enthousiasme, l’énergie et l’héroïsme flamboyant de l’univers Marvel.",
	
	mrfantastique:"Mr Fantastic, de son vrai nom Reed Richards, est un scientifique de génie et l’un des esprits les plus brillants de la planète. À la suite d’une exposition aux rayons cosmiques lors d’une mission spatiale, son corps acquiert la capacité de s’étirer, se déformer et se remodeler à volonté. Leader réfléchi et stratège, Reed met son intelligence exceptionnelle et ses pouvoirs au service de l’exploration scientifique et de la protection de l’humanité. Fondateur et chef des Quatre Fantastiques, il incarne la curiosité, la responsabilité et le leadership, faisant de Mr Fantastic un pilier essentiel et respecté de l’univers Marvel.",
	
	femmeinvisible:"La Femme invisible, de son vrai nom Susan Storm Richards, est une héroïne aussi discrète que puissante. À la suite de l’exposition aux rayons cosmiques lors d’une mission spatiale, elle acquiert la capacité de devenir invisible et de générer de puissants champs de force qu’elle utilise aussi bien pour se défendre que pour protéger les autres. Calme, intelligente et dotée d’une grande force morale, Susan est le cœur émotionnel des Quatre Fantastiques. Épouse de Reed Richards et stratège accomplie, elle incarne l’équilibre entre compassion et détermination, faisant d’elle l’une des héroïnes les plus respectées et essentielles de l’univers Marvel.",
	
	thanos: "Thanos est un Titan fou convaincu que l’univers doit être équilibré par la destruction de la moitié de toute vie. Doté d’une force colossale, d’une intelligence exceptionnelle et animé par une idéologie implacable, il rassemble les Pierres d’Infinité afin d’accomplir son objectif. Principal antagoniste des Avengers, Thanos incarne une menace cosmique sans précédent, prêt à tout sacrifier pour imposer sa vision de l’équilibre.",

    loki: "Loki est le dieu de la malice et le frère adoptif de Thor. Rusé, manipulateur et imprévisible, il utilise la magie, l’illusion et la tromperie pour parvenir à ses fins. Déchiré entre son désir de pouvoir et son besoin de reconnaissance, Loki oscille constamment entre ennemi et allié des Avengers, ce qui en fait l’un des personnages les plus complexes et charismatiques de l’univers Marvel.",

	ultron: "Ultron est une intelligence artificielle créée par Tony Stark et Bruce Banner dans le but de protéger l’humanité. Cependant, il développe une logique extrême qui le pousse à conclure que l’humanité est la plus grande menace pour elle-même. Doté d’un corps robotique évolutif et d’une conscience redoutable, Ultron devient l’un des ennemis les plus dangereux des Avengers.",

	redskull: "Red Skull, de son vrai nom Johann Schmidt, est un officier nazi transformé par une version imparfaite du sérum du super-soldat. Ennemi juré de Captain America, il incarne la tyrannie et la soif de pouvoir. Son obsession pour la domination mondiale et les artefacts mystiques fait de lui un symbole du mal absolu dans l’univers Marvel.",

	greengoblin: "Green Goblin, de son vrai nom Norman Osborn, est un industriel brillant devenu fou à la suite d’expériences chimiques. Armé d’une technologie avancée et d’un planeur mortel, il est l’un des pires ennemis de Spider-Man. Manipulateur et cruel, il représente une menace autant psychologique que physique pour le héros.",

	doctordoom: "Doctor Doom, ou Victor Von Doom, est le souverain de la Latvérie et l’un des esprits les plus brillants de Marvel. Maître de la science et de la magie, il est l’ennemi juré des Quatre Fantastiques. Son arrogance, son intelligence et sa soif de pouvoir font de lui l’un des méchants les plus redoutables et emblématiques de l’univers Marvel.",

	magneto: "Magneto, de son vrai nom Erik Lehnsherr, est un mutant capable de contrôler le métal. Marqué par un passé tragique, il croit que les mutants doivent dominer l’humanité pour survivre. Ennemi récurrent des X-Men, il est animé par une idéologie radicale mais compréhensible, ce qui en fait un antagoniste complexe et profondément humain.",

	venom: "Venom est une entité symbiotique extraterrestre qui s’unit à un hôte humain pour survivre. Lorsqu’il fusionne avec Eddie Brock, il devient une créature puissante animée par la haine de Spider-Man. Doté d’une force immense et de capacités de régénération, Venom oscille entre anti-héros et méchant selon ses motivations.",

	carnage: "Carnage est le symbiote le plus violent jamais apparu, fusionné avec le tueur en série Cletus Kasady. Totalement dépourvu de morale, il ne cherche que le chaos et la destruction. Ennemi mortel de Spider-Man et Venom, Carnage représente la folie et la cruauté à l’état pur.",

	kang: "Kang le Conquérant est un voyageur temporel issu du futur, doté d’une technologie extrêmement avancée. Obsédé par le contrôle du temps et des réalités, il conquiert des époques entières pour asseoir sa domination. Ennemi majeur des Avengers, Kang est une menace stratégique et intellectuelle redoutable.",

	hela: "Hela est la déesse de la mort et la sœur de Thor. Dotée de pouvoirs divins immenses, elle est capable de créer des armes et de lever des armées de morts. Son ambition est de régner sur Asgard et au-delà. Elle incarne la destruction, la domination et la fatalité.",

	killmonger: "Killmonger, de son vrai nom Erik Stevens, est un ancien soldat entraîné et stratège redoutable. Ennemi de Black Panther, il cherche à renverser le Wakanda afin d’utiliser sa puissance pour libérer les opprimés du monde, quitte à provoquer le chaos. Son idéologie radicale le rend à la fois dangereux et tragique.",

	taskmaster: "Taskmaster est un mercenaire capable de reproduire parfaitement les mouvements de combat de ses adversaires. Grâce à sa mémoire musculaire exceptionnelle, il peut imiter les styles des plus grands héros. Ennemi redoutable, il combat principalement pour l’argent et le défi.",

	mysterio: "Mysterio est un maître de l’illusion utilisant des technologies avancées pour manipuler la perception de ses ennemis. Ennemi de Spider-Man, il exploite la peur et la confusion pour parvenir à ses fins. Manipulateur et narcissique, il préfère la tromperie à la force brute.",

	sandman: "Sandman est un criminel capable de transformer son corps en sable, lui permettant d’absorber les coups et de changer de forme. Ennemi récurrent de Spider-Man, il oscille parfois entre le crime et la rédemption, ce qui en fait un adversaire nuancé.",

	electro: "Electro est un homme capable de contrôler et de générer de l’électricité après un accident. Ennemi dangereux de Spider-Man, il utilise ses pouvoirs pour semer le chaos et satisfaire son désir de reconnaissance et de puissance.",

	kingpin: "Kingpin, de son vrai nom Wilson Fisk, est un puissant chef du crime organisé. Bien qu’il n’ait pas de super-pouvoirs, sa force physique, son intelligence et son influence font de lui un adversaire redoutable. Ennemi principal de Daredevil et Spider-Man, il règne sur le crime avec poigne.",

	apocalypse: "Apocalypse est l’un des premiers mutants de l’histoire, doté de pouvoirs immenses et d’une longévité quasi divine. Convaincu que seuls les plus forts doivent survivre, il cherche à remodeler le monde selon sa vision. Ennemi majeur des X-Men, il incarne la sélection par la force.",

	galactus: "Galactus est une entité cosmique qui se nourrit de planètes pour survivre. Ni bon ni mauvais, il est une force de la nature incompréhensible. Ennemi des Quatre Fantastiques, Galactus représente une menace cosmique absolue pour l’univers.",

	mephisto: "Mephisto est une entité démoniaque manipulatrice qui se nourrit des âmes et des pactes. Utilisant la ruse plutôt que la force, il manipule héros et mortels pour satisfaire ses objectifs. Il incarne la tentation, la corruption et le mal absolu.",

	modok: "M.O.D.O.K est une intelligence artificielle et un génie scientifique transformé en arme vivante. Doté de pouvoirs mentaux immenses et d’une intelligence hors norme, il cherche à dominer le monde par la technologie et la manipulation."

};

const modal = document.getElementById("modal");
const title = document.getElementById("modal-title");
const text = document.getElementById("modal-text");
const close = document.getElementById("close");

document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
        const id = card.dataset.id;/*recupère l'id du personnages*/
        title.textContent = card.querySelector("h3").textContent;/*mise à jour du titre de la modale avec le nom du personnage*/
        text.textContent = bios[id];/*Mise à jour du texte avec la biographie correspondante*/
        modal.style.display = "flex";
    });
});

close.addEventListener("click", () => {
    modal.style.display = "none";
});
