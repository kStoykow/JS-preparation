import { getToken } from "./auth.js";

export function req(method, url, data) {
    let options = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
        },
    };

    if (method != 'GET') {
        options = {
            method: method,
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data)
        }
    }

    let token = getToken();
    if (token) {
        options.headers['X-Authorization'] = token;
    }

    return fetch(url, options)
        .then(res => {
            if (res.status == 204) {
                return res;
            }
            return res.json();
        });
}

export const get = req.bind(null, 'GET');
export const put = req.bind(null, 'PUT');
export const post = req.bind(null, 'POST');
export const del = req.bind(null, 'DELETE');