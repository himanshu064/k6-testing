import { sleep, check } from 'k6';
import { login } from './function.js';
import { ENDPOINTS } from "../../api/endPoints.js"
export let options = {
  vus: 100,
  iterations: 100,
  duration: '2m',
};

export default function () {
let  user =   {
    phone: 764633547,
    countryCode: 87,
    deviceName: 'Test Device',
    deviceType: 'Test Type',
    deviceToken: 'TestToken',
    password: 'yourNewPassword'
  }
  let loginRes = login(ENDPOINTS.login, user);
  check(loginRes, { 'User logged in': (res) => res.status === 200 });
  sleep(1);
}
