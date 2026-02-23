const questions = [
    {
        question: "1. Quel est le but du jeu ?",
        reponses: ["1. Rentrez chez soi et construire une maison", "2. Sauver les enfants/survivre", "3. Travailler dans une entreprise"],
        correcte: 1
    },
    {
        question: "2. C'est quoi Roblox ?",
        reponses: ["1. Un site de rencontre", "2. Une plateforme de jeu ", "3. Une plateforme d’éducation/Pronote"],
        correcte: 1
    },
    {
        question: "3. Quel animal n'est représenté dans le lieu ?",
        reponses: ["1. Rats", "2. Kiwi", "3. Loup","4. Crabe météore"],
        correcte: 0
    },
    {
        question: "4. Quel est la monnaie de Roblox ?",
        reponses: ["1. Vbucks", "2. Robux", "3. Dollars","4. Bobux","5. Bitcoins"],
        correcte: 1
    },
    {
        question: "5. Quel est le jeu le plus populaire ?",
        reponses: ["1. BloxFruits", "2. Voisins", "3. Evade", "4. Dress to impress"],
        correcte: 0
    },
    {
        question: "6. Que faire quand tu arrives dans le jeu ?",
        reponses: ["1. Couper des arbres ", "2. Aller pêcher", "3. Récupérer de la nourriture", "4. Se faire de l’argent "],
        correcte: 0
    },
    {
        question: "7. Comment apprivoiser les animaux ?",
        reponses: ["1. Avec un sortilège ", "2. Leur offrir un cadeau", "3. Avec une flûte", "4.Avec une canne pêche "],
        correcte: 2
    },
    {
        question: "8. C'était quoi la réponse à la question 1 ?",
        type: "texte",
        correcte: "sauver les enfants"
    },
    {
        question: "9. Comment ajouter des ami(e)s ?",
        reponses: ["1. En faisant un obby", "2. En travaillant ", "3. En cliquant su l'îcone Amis"],
        correcte: 2
    },
    {
        question: "10. Qu'est-ce qu'il ne faut pas donner?",
        reponses: ["1. De la nourriture", "2. Son animal domestique", "3. Son mot de passe"],
        correcte: 2
    },
    {
        question: "11. Quelle est le personnage qui apparaît lors de la transition ?",
        reponses: ["1. Les lapins crétins", "2. Baymax", "3. Ice bear", "4. Olaf"],
        correcte: 3
    },
];

let index = 0;
let score = 0;
let timer = 15;
let interval;

// ⏳ TIMER
function startTimer() {
    timer = 15;
    document.getElementById("timer").textContent = "⏳ Temps restant : " + timer + "s";

    interval = setInterval(() => {
        timer--;
        document.getElementById("timer").textContent = "⏳ Temps restant : " + timer + "s";

        if (timer <= 0) {
            clearInterval(interval);
            document.getElementById("timer").textContent = "⛔ Temps écoulé !";
            document.getElementById("suivant").style.display = "block";
        }
    }, 1000);
}

function afficherQuestion() {
    clearInterval(interval);
    startTimer();

    const q = questions[index];
    document.getElementById("question").textContent = q.question;

    const divRep = document.getElementById("reponses");
    divRep.innerHTML = "";

    // ✏️ Question à réponse écrite
    if (q.type === "texte") {
        const input = document.createElement("input");
        input.type = "text";
        input.id = "reponseTexte";
        input.placeholder = "Écris ta réponse...";
        divRep.appendChild(input);

        const btn = document.createElement("button");
        btn.textContent = "Valider";
        btn.onclick = () => verifierReponseTexte(btn);
        divRep.appendChild(btn);

        return;
    }

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

// 🎉 ANIMATION RÉPONSE ÉCRITE
function verifierReponseTexte(btn) {
    clearInterval(interval);

    const userText = document.getElementById("reponseTexte").value.trim().toLowerCase();
    const correct = questions[index].correcte.toLowerCase();

    if (userText.includes(correct)) {
        score++;
        btn.classList.add("bonne");
    } else {
        btn.classList.add("mauvaise");
    }

    document.getElementById("suivant").style.display = "block";
}

document.getElementById("suivant").onclick = () => {
    index++;
    if (index < questions.length) {
        document.getElementById("suivant").style.display = "none";
        afficherQuestion();
    } else {
        document.getElementById("question").textContent = "Quizz terminé !";
        document.getElementById("reponses").innerHTML = "";
        document.getElementById("score").textContent = "Score : " + score + "/" + questions.length;
        document.getElementById("suivant").style.display = "none";
        document.getElementById("timer").textContent = "";
    }
};

afficherQuestion();