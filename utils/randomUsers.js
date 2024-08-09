function generateRandomUser() {
    const countryCode = Math.floor(Math.random() * 100).toString().padStart(2, '0');
    const phone = Math.floor(Math.random() * 1000000000).toString();
    const nickName = `User_${Math.floor(Math.random() * 1000)}`;
  
    return { countryCode, phone, nickName };
  }



  export { generateRandomUser };