function verifierQuiz() {
    const questions = document.querySelectorAll("p[data-answer]");

    questions.forEach(question => {
        const bonneReponse = question.dataset.answer;
        const reponseUtilisateur = question.querySelector("input:checked");

        if (!reponseUtilisateur) {
            question.className = "mauvais"; 
            return;
        }

        if (reponseUtilisateur.value === bonneReponse) {
            question.className = "bon"; 
        } else {
            question.className = "mauvais"; 
        }
    });
}

document.getElementById("valider").addEventListener("click", verifierQuiz);
