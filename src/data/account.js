// ----------------------------------------------------------------------

const account = {
  displayName: JSON.parse(localStorage.getItem('user'))?.name,
  email: JSON.parse(localStorage.getItem('user'))?.contact.email,
  photoURL: JSON.parse(localStorage.getItem('user'))?.images[0] || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbKhRC-7ifkW9gq6QIFPgjOBYJniQcnaOxVneJZ1N9&s',
};

export default account;
