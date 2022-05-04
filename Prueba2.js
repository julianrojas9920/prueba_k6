import http from 'k6/http';
import {sleep, check} from 'k6';

export const options ={
    stages: [
        {duration : '1m', target: 15}
    ]
};

const SLEEP_DURATION = 1;
export default function(data) {

    var api = 'https://httpbin.test.k6.io'
    var response = http.get(api);

    check(response, {
        'is status 200': r => r.status == 200
    })
    sleep(SLEEP_DURATION);
}