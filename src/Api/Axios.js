import axios from "axios";

// Please reconfigure these for each project 
// baseURL value can be configured from ENV Variables as for Dev & Prod, we do have different API Base URLs
// Authorization header is provided to send the Bearer token along with every request.

export default axios.create({
    baseURL : 'YOUR_BASE_URL',
    headers: {
        Authorization: 'YOUR_AUTH_HEADER'
    }
});