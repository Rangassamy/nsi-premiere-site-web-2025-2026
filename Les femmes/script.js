

const questions = [
    {
        question: "1.Qui est Adda?",
        reponses: ["1. une meuf en corset qui s’ennuyait", "2.Une poètesse", "3. j'ai plus d'idés pour les questions et c'est juste la première question 💀"],
        correcte: 0
    },
    {
        question: "2. la machine qu'elle a programé c'etait fait en quoi?",
        reponses: ["1.Une machine du métal", "2. Une machine à vapeur", "3. Une machine en bois"],
        correcte: 2
    },
    {
        question: "3. Où est née Hady Lamarr?",
        reponses: ["1.À Chicago", "2.À Vienne ", "3. À l'Inglaterre","4. À L'Espagne"],
        correcte: 1
    },
    {
        question: "4. Quand est Heddy?",
        reponses: ["1. 1984", "2. 1914", "3. 1941","4. 1980","5. 1945"],
        correcte: 1
    },
    {
        question: "5.Comment s'appelait le père d'Adda?",
        reponses: ["1. Jhon Lovelace", "2.Charles Lovelace", "3.Lord Byron", "4.James Bribon"],
        correcte: 2
    },
    {
        question: "6. Quelle jour est née Heddy?",
        reponses: ["1. le 9nov ", "2.le 11nov", "3.le 14nov", "4.le 9nov"],
        correcte: 0
    },
    {
        question: "7.qui lui a appris ce quelle sait sur l’informatique?",
        reponses: ["1.Sa mère ", "2.Son Père", "3.Son Prof", "4.Person"],
        correcte: 1
    },
    {
        question: "8.Qui est Aurélie Jean?",
        reponses: ["1.Une auteur et médiatrice scientifique", "2. Une actrice  ", "3. Une prof"],
        correcte: 0
    },
    {
        question: "9.Qellles sont ses études?",
        reponses: ["1. Physique et Espagnol","2.physique et sciences numérique"],
        correcte: 1
    },
    {
        question: "10.Elle utilice d'IA?",
        reponses: ["1. oui", "2. non", ],
        correcte: 0
    },
];

let index = 0;
let score = 0;
let timer = 15;
let interval;
let quizTerminado = false;
function lancerJumpscare() {
    const video = document.getElementById("jumpscare");

    // borrar todo el contenido
    document.body.innerHTML = "";
    document.body.appendChild(video);

    video.style.display = "block";
    video.muted = false;   // 🔊 sonido ON
    video.volume = 1.0;
    video.play();
}


// TIMER
function startTimer() {
    timer = 10;
    document.getElementById("timer").textContent = "⏳ Temps restant : " + timer + "s";

    interval = setInterval(() => {
        timer--;
        document.getElementById("timer").textContent = "⏳ Temps restant : " + timer + "s";

        if(timer <= 0) {
    clearInterval(interval);
    lancerJumpscare();



    setTimeout(() => {
        lancerJumpscare();
    }, 1000); // 
}



    }, 1000);

    if (timer <= 0 && !quizTerminado) {
    clearInterval(interval);
    setTimeout(() => lancerJumpscare(), 1000);
}

}

function afficherQuestion() {
    clearInterval(interval);
    startTimer();

    const q = questions[index];
    document.getElementById("question").textContent = q.question;

    const divRep = document.getElementById("reponses");
    divRep.innerHTML = "";

    

    // 🎮 QCM classique
    q.reponses.forEach((rep, i) => {
        const btn = document.createElement("button");
        btn.textContent = rep;
        btn.onclick = () => verifierReponse(i, btn);
        divRep.appendChild(btn);
    });
}

// 🎉 ANIMATION QCM
function verifierReponse(i, btn) {
    clearInterval(interval);

    if (i === questions[index].correcte) {
        score++;
        btn.classList.add("bonne");
    } else {
        btn.classList.add("mauvaise");
    }

    document.getElementById("suivant").style.display = "block";
}

function verifierReponseTexte(btn) {
    clearInterval(interval);

    
    document.getElementById("suivant").style.display = "block";
}

document.getElementById("suivant").onclick = () => {
    index++;
    if (index < questions.length) {
        document.getElementById("suivant").style.display = "none";
        afficherQuestion();
    } else {
        quizTerminado = true;       
        clearInterval(interval);   

        document.getElementById("question").textContent = "Quizz terminé !";
        document.getElementById("reponses").innerHTML = "";
        document.getElementById("score").textContent =
            "Score : " + score + "/" + questions.length;
        document.getElementById("suivant").style.display = "none";
        document.getElementById("timer").textContent = "";
    }
};

afficherQuestion();


        