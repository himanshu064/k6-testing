
import { sleep, check, group } from 'k6';
import { ENDPOINTS } from "../../api/endPoints.js"
import {getDataWithToken} from ".././commonFunctions.js"
import {TOKEN} from "../../data/token.js"
export let options = {
  vus: 100,
  iterations: 1000,
  duration: '2m',
};

export default function () {
    let requestOptions = {
      headers: {
        'Authorization': `Bearer ${TOKEN}`, 
        'Content-Type': 'application/json'
      }
    };
    let res = getDataWithToken(ENDPOINTS.favBarbers, requestOptions);
    check(res, {
      'Request succeeded': (r) => r.status === 200,
    });
    sleep(1);
}

