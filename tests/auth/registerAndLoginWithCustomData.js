import { sleep, check } from 'k6';
import { SharedArray } from 'k6/data';
import { ENDPOINTS } from "../../api/endPoints.js"
import {
  generateSignUpOtp,
  register,
  generatePassword,
  login,
} from "./function.js";

const users = new SharedArray('users', function() {
  return JSON.parse(open('../../data/users.json'));
});

export let options = {
  vus: 100,       
  iterations: 100, 
  duration: '1m',  
};

export default function () {
  const user = users[__VU % users.length];

  let signupRes = generateSignUpOtp(ENDPOINTS.signupOtp, user);

  check(signupRes, { "OTP generated": (res) => res.status === 200 });

  if (signupRes.status === 200) {
    const otp = signupRes.json().otp || "1234";
    let registerRes = register(otp, ENDPOINTS.register, user);
    check(registerRes, { "User registered": (res) => res.status === 200 });

    if (registerRes.status === 200) {
      const responseBody = registerRes.json();
      const token = responseBody.data.token;

      let passwordRes = generatePassword(ENDPOINTS.generatePassword, token);
      check(passwordRes, { "Password generated": (res) => res.status === 200 });
   let loginData =   {
        phone: user.phone,
        countryCode: user.countryCode,
        deviceName: 'Test Device',
        deviceType: 'Test Type',
        deviceToken: 'TestToken',
        password: 'yourNewPassword'
      }
      let loginRes = login(ENDPOINTS.login, loginData);
      check(loginRes, { "User logged in": (res) => res.status === 200 });
    }
  }

  sleep(1);
}
