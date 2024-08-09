import http from  "k6/http"

function generateSignUpOtp(signupOtpUrl,user){
  return  http.post(signupOtpUrl, JSON.stringify({
        phone: user.phone,
        countryCode: user.countryCode,
        nickName: user.nickName,
      }), {
        headers: { 'Content-Type': 'application/json' },
      });

}

function register(otp,registerUrl,user){
 return http.post(registerUrl, JSON.stringify({
        phone: user.phone,
        countryCode: user.countryCode,
        otp: otp,
        nickName: user.nickName,
      }), {
        headers: { 'Content-Type': 'application/json' },
      });
}

function generatePassword(generatePasswordUrl,token){
return  http.post(generatePasswordUrl, JSON.stringify({
    password: 'yourNewPassword',
  }), {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });
}

function login(loginUrl,loginData){
  return  http.post(loginUrl, JSON.stringify(loginData), {
        headers: { 'Content-Type': 'application/json' },
      });
}

 function forgotPassword(url , user) {
  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
 return  http.post(url, JSON.stringify(user),params);

}

function resetPassword(url ,user,token) {
  const params = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  };
 return  http.post(url, JSON.stringify(user),params);

}


export { generateSignUpOtp,register,generatePassword,login,forgotPassword,resetPassword};
