function submitQuiz() {
    const answers = {
        q1: "Nathan Ames",
        q2: "1895",
        q3: "30 degrees",
        q4: "Charles Seeberger",
        q5: "Electric motor",
        q6: "30-40 fpm",
        q7: "1899",
        q8: "Otis Elevator Company",
        q9: "Large numbers in short time",
        q10: "Truss"
    };

    let score = 0;
    const form = document.getElementById('quizForm');
    for (let i = 1; i <= 10; i++) {
        const question = form.elements['q' + i];
        for (let j = 0; j < question.length; j++) {
            if (question[j].checked && question[j].value === answers['q' + i]) {
                score++;
            }
        }
    }
    document.getElementById('result').innerHTML = `<h3>Your score: ${score}/10</h3>`;
}