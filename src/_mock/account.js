import mock from '../pages/mock.json';

// Assuming you want to access the first athlete (index 0)
const athlete = mock.atletas[0];

const account = {
  displayName: athlete.nome,
  email: athlete.email,
  photoURL: athlete.icon,
};

export default account;