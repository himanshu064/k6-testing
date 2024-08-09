import { sleep, check } from 'k6';
import { forgotPassword } from './function.js';
import { ENDPOINTS } from "../../api/endPoints.js"
export let options = {
  vus: 20,
  iterations: 20,
  duration: '2m',
};

export default function () {
let user = {
    email:"rahul05.netweb@gmail.com", 
    phone:8198093098, 
    countryCode:"+91"
}
  let loginRes = forgotPassword(ENDPOINTS.forgotpassword, user);
  check(loginRes, { 'User forgot password': (res) => res.status === 200 });
  sleep(1);
}
