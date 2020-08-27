
const verificationPassword = (password,confirm_password) => {
  return confirm_password.localeCompare(password) === 0 ? true : false 
}


export default verificationPassword;