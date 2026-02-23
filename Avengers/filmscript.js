/*bcp de film*/

const mcuFilms = [
    /* C'EST LOONG */
    { id: 1, titre: "Captain America: First Avenger", image: "captain-america.jpg", date: "2011", periode: "1943 – 1945", resume: "Steve Rogers, un jeune homme frêle, est choisi pour participer au programme du super-soldat et devient Captain America. Il affronte Red Skull et HYDRA pour protéger le monde grâce au Tesseract." },
    { id: 2, titre: "Captain Marvel", image: "captain-marvel.jpg", date: "2019", periode: "1995", resume: "Carol Danvers, pilote de l’armée, obtient des pouvoirs surhumains après un accident et doit protéger l'univers d'une guerre intergalactique entre Krees et Skrulls, tout en découvrant son passé." },
    { id: 3, titre: "Iron Man", image: "iron-man.jpg", date: "2008", periode: "2010", resume: "Tony Stark, milliardaire et génie de la technologie, est capturé par un groupe terroriste. Il construit l’armure Iron Man pour survivre et décide de protéger le monde." },
    { id: 4, titre: "Iron Man 2", image: "iron-man-2.jpg", date: "2010", periode: "2011", resume: "Tony Stark doit affronter de nouveaux ennemis et gérer la pression de Stark Industries, tout en faisant face à la maladie causée par l’arc réacteur dans sa poitrine." },
    { id: 5, titre: "Thor", image: "thor.jpg", date: "2011", periode: "2011", resume: "Thor, prince d'Asgard, est banni sur Terre et apprend l'humilité. Il doit empêcher son frère Loki de conquérir Midgard." },
    { id: 6, titre: "Avengers", image: "avengers.jpg", date: "2012", periode: "2012", resume: "Nick Fury rassemble les super-héros pour former les Avengers et sauver la Terre de Loki et son armée Chitauri." },
    { id: 7, titre: "Iron Man 3", image: "iron-man-3.jpg", date: "2013", periode: "2012", resume: "Tony Stark affronte le Mandarin et doit surmonter ses traumatismes après les événements d’Avengers, tout en protégeant ses proches." },
    { id: 8, titre: "Thor: The Dark World", image: "thor-2.jpg", date: "2013", periode: "2013", resume: "Thor doit sauver les Neuf Royaumes en affrontant Malekith et les Elfes noirs qui cherchent à plonger l’univers dans les ténèbres." },
    { id: 9, titre: "Captain America: Winter Soldier", image: "winter-soldier.jpg", date: "2014", periode: "2014", resume: "Steve Rogers découvre qu’un ancien ami est devenu le Soldat de l’Hiver et que S.H.I.E.L.D. est infiltré, menaçant la sécurité du monde." },
    { id: 10, titre: "Guardians of the Galaxy", image: "gotg.jpg", date: "2014", periode: "2014", resume: "Un groupe de hors-la-loi galactiques s’allie pour empêcher Ronan de détruire des planètes et découvre la valeur de l’amitié et du sacrifice." },
    { id: 11, titre: "Guardians of the Galaxy Vol. 2", image: "gotg-2.jpg", date: "2017", periode: "2014", resume: "Les Gardiens découvrent le passé de Peter Quill et affrontent Ego, un puissant être cosmique, tout en consolidant leur famille choisie." },
    { id: 12, titre: "Avengers: Age of Ultron", image: "ultron.jpg", date: "2015", periode: "2015", resume: "Les Avengers affrontent Ultron, une intelligence artificielle créée par Tony Stark, qui veut anéantir l'humanité pour 'sauver' la Terre." },
    { id: 13, titre: "Ant-Man", image: "ant-man.jpg", date: "2015", periode: "2015", resume: "Scott Lang devient Ant-Man grâce à la technologie de Hank Pym et doit accomplir un braquage pour protéger le monde des mauvaises mains." },
    { id: 14, titre: "Captain America: Civil War", image: "civil-war.jpg", date: "2016", periode: "2016", resume: "Les Avengers se divisent à cause d’un désaccord sur la régulation des super-héros, entraînant un conflit interne avec des combats spectaculaires." },
    { id: 15, titre: "Black Panther", image: "black-panther.jpg", date: "2018", periode: "2016", resume: "T’Challa devient roi du Wakanda et doit défendre son pays contre Killmonger, tout en prenant ses responsabilités de Black Panther." },
    { id: 16, titre: "Spider-Man: Homecoming", image: "homecoming.jpg", date: "2017", periode: "2016", resume: "Peter Parker découvre ses responsabilités en tant que Spider-Man et doit affronter le Vautour tout en jonglant avec la vie d’un lycéen." },
    { id: 17, titre: "Doctor Strange", image: "doctor-strange.jpg", date: "2016", periode: "2016", resume: "Stephen Strange apprend la magie après un accident et devient le Sorcier Suprême pour protéger la Terre des menaces mystiques." },
    { id: 18, titre: "Thor: Ragnarok", image: "thor-ragnarok.jpg", date: "2017", periode: "2017", resume: "Thor doit sauver Asgard avec Hulk et Loki pour affronter Hela et empêcher la fin de son royaume." },
    { id: 19, titre: "Ant-Man and the Wasp", image: "antman-wasp.jpg", date: "2018", periode: "2017", resume: "Scott Lang et Hope van Dyne font équipe pour sauver Janet van Dyne du royaume quantique, tout en affrontant un nouvel ennemi." },
    { id: 20, titre: "Avengers: Infinity War", image: "infinity-war.jpg", date: "2018", periode: "2017", resume: "Les Avengers et les Gardiens de la Galaxie doivent arrêter Thanos avant qu'il ne collecte toutes les pierres d’infinité et détruisent la moitié de l’univers." },
    { id: 21, titre: "Avengers: Endgame", image: "endgame.jpg", date: "2019", periode: "2018–2023", resume: "Les héros survivants planifient un voyage dans le temps pour ramener ceux que Thanos a effacés et sauver l’univers, avec des combats épiques et des sacrifices." },
];

const xmenFilms = [
    /* X-men no racismo*/
    { id: 101, titre: "X-Men: First Class", image: "xmen-first-class.jpg", date: "2011", periode: "1962", resume: "Charles Xavier et Erik Lensherr forment les premiers X-Men et affrontent Sebastian Shaw qui cherche à déclencher une guerre nucléaire." },
    { id: 102, titre: "X-Men Origins: Wolverine", image: "wolverine-origins.jpg", date: "2009", periode: "1979–1980", resume: "L’histoire de Logan avant les X-Men, la création du programme Weapon X et sa transformation en mutant avec griffes rétractiles." },
    { id: 103, titre: "X-Men", image: "xmen1.jpg", date: "2000", periode: "2000", resume: "Les X-Men protègent le monde contre Magneto, qui veut transformer les humains en mutants pour dominer la planète." },
    { id: 104, titre: "X2: X-Men United", image: "xmen2.jpg", date: "2003", periode: "2003", resume: "Les X-Men s’allient avec Magneto pour sauver les mutants d’un scientifique fou, William Stryker, qui cherche à les exterminer." },
    { id: 105, titre: "X-Men: The Last Stand", image: "xmen3.jpg", date: "2006", periode: "2006", resume: "Jean Grey devient Phoenix et devient incontrôlable. Les X-Men doivent trouver un moyen de la sauver tout en arrêtant le sérum qui supprime les pouvoirs mutants." },
    { id: 106, titre: "The Wolverine", image: "the-wolverine.jpg", date: "2013", periode: "2013", resume: "Logan voyage au Japon pour protéger une jeune héritière et affronte la mafia locale et des samouraïs, confronté à son passé." },
    { id: 107, titre: "X-Men: Days of Future Past", image: "days-future-past.jpg", date: "2014", periode: "1973 / 2023", resume: "Les X-Men envoient Wolverine dans le passé pour empêcher un futur où les mutants sont exterminés par les Sentinelles." },
    { id: 108, titre: "X-Men: Apocalypse", image: "apocalypse.jpg", date: "2016", periode: "1983", resume: "Apocalypse, un mutant ancien et surpuissant, se réveille et menace l’humanité. Les X-Men doivent l’arrêter avec leurs pouvoirs combinés." },
    { id: 109, titre: "Dark Phoenix", image: "dark-phoenix.jpg", date: "2019", periode: "1992", resume: "Jean Grey devient Dark Phoenix après avoir été frappée par une énergie cosmique. Les X-Men tentent de la sauver et de protéger le monde." },
    { id: 110, titre: "Logan", image: "logan.jpg", date: "2017", periode: "2029", resume: "Un vieux Logan protège une jeune mutante, Laura, dans un futur où presque tous les mutants ont disparu, confronté à son passé et à sa mortalité." }
];

/*les carte J'ESPERE SA MARCHE ONG*/

function creerFilms(liste, containerId) {
    const container = document.getElementById(containerId);

    liste.forEach(film => {
        const carte = document.createElement("div");
        carte.className = "carte";
        carte.innerHTML = `
            <img src="images/${film.image}">
            <p>${film.titre}</p>
        `;
        carte.onclick = () => ouvrirPopup(film.id); // <-- passer l'ID ici
        container.appendChild(carte);
    });
}


creerFilms(mcuFilms, "mcu-ligne");
creerFilms(xmenFilms, "xmen-ligne");

/*pop up aka satan job*/

function ouvrirPopup(id) {
    const film = mcuFilms.find(f => f.id === id) || xmenFilms.find(f => f.id === id);
    if (!film) return;

    document.getElementById("popup-texte").innerHTML = `
        <h2>${film.titre}</h2>
        <p><strong>Date de sortie :</strong> ${film.date}</p>
        <p><strong>Période :</strong> ${film.periode}</p>
        <p>${film.resume}</p>
    `;
    document.getElementById("popup").style.display = "block";
}

function fermerPopup() {
    document.getElementById("popup").style.display = "none";
}

/*reyan stinky jjs player*/

function scrollLigne(id, direction) {
    const ligne = document.getElementById(id);
    ligne.scrollLeft += direction * 300;
}
