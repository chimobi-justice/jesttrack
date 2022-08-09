const ValidateEmail = (email) => {
  return /\S+@\S+\.\S+/.test(email);
}

export default ValidateEmail;

