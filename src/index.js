import './styles/style.css';

const btnScores = document.getElementById('btn-scores');

const showMessage = (meassage) => {
  const postMessage = document.getElementById('post-message');
  postMessage.innerHTML = meassage;
  postMessage.classList.remove('hidden');
  setTimeout(() => {
    postMessage.classList.add('hidden');
    postMessage.innerHTML = '';
  }, 3000);
};

const getScores = () => fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/dCWnK7FBkgPC2MczagXu/scores/')
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
    .catch((error) => showMessage(error));
};

btnScores.addEventListener('click', renderScores);

const postScore = (nameInput, scoreInput) => {
  const data = {
    user: nameInput,
    score: scoreInput,
  };

  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/dCWnK7FBkgPC2MczagXu/scores/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(((response) => response.json()))
    .then((data) => {
      if (data.result) {
        showMessage('Score was submited succesfully');
      } else {
        showMessage('Error:  score was not submited');
      }
    })
    .catch((error) => {
      showMessage(error);
    });
};

const nameInput = document.getElementById('name');
const scoreInput = document.getElementById('score');
const btnSubmit = document.getElementById('btn-submit');

btnSubmit.addEventListener('click', (event) => {
  event.preventDefault();
  postScore(nameInput.value, scoreInput.value);
  nameInput.value = '';
  scoreInput.value = '';
});

renderScores();
