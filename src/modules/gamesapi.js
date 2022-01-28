import showMessage from './notifications.js';

const api = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/dk6cK8sq46tsayQ2mi16/scores/';

const getScores = () => fetch(api)
  .then((response) => response.json());

const postScore = (data) => fetch(api, {
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
export { getScores, postScore };
