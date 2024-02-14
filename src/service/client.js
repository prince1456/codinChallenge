import axios from 'axios';
export const BASE_API_URL  ="http://demo.subsonic.org/rest/";
const client = axios.create(
    {
        baseURL: "http://demo.subsonic.org/rest/",
        headers: {
        "Content-Type": "application/json",
        },
    }
)

export default client;