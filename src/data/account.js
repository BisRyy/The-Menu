// ----------------------------------------------------------------------

const account = {
  displayName: JSON.parse(localStorage.getItem('user'))?.name,
  email: JSON.parse(localStorage.getItem('user'))?.contact.email,
  photoURL: '/assets/images/avatars/avatar_default.jpg',
};

export default account;
