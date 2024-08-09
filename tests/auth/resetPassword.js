import { sleep, check } from 'k6';
import { resetPassword } from './function.js';
import { ENDPOINTS } from "../../api/endPoints.js"
import {TOKEN} from "../../data/token.js"
export let options = {
  vus: 20,
  iterations: 20,
  duration: '2m',
};

export default function () {
let user = {
    email:"", 
    phone:312150177, 
    countryCode:47, 
   otp:"1234",
   newPassword:"yourNewPassword",
    oldPassword:"yourNewPassword"
}
  let loginRes = resetPassword(ENDPOINTS.changePassword, user,TOKEN);
  check(loginRes, { 'User reset password': (res) => res.status === 200 });
  sleep(1);
}
