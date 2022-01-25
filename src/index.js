import './styles/style.css';

const btnScores = document.getElementById('btn-scores');

const getScores = () => fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/dCWnK7FBkgPC2MczagXu/score/')
  .then((response) => response.json());

const renderScores = async () => {
  await getScores()
    .then((data) => data.result)
    .then((scores) => {
      const scoreList = document.getElementById('score-list');
      scoreList.innerHTML = '';
      scores.forEach((score) => {
        const listItem = `
        <li>${score.user}: ${score.score}</li>
        `;

        scoreList.innerHTML += listItem;
      });
    })
    .catch((error) => console.log(error));
};

btnScores.addEventListener('click', renderScores);

renderScores();
