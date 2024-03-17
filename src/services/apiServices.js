import axios from "axios";
import { KEY_TOKEN } from "../constant/constants";

// const apiGet = async (url, body) => {
//     try {
//         let { data } = await axios({
//             method: "GET",
//             url,
//             headers: {
//                 apiKey: localStorage[API_KEY],
//             },
//             data: body
//         })
//         return data;
//     }
//     catch (err) {
//         console.log(err);
//     }
// }

// const apiPost = async (url, body) => {

//     try {
//         let { data } = await axios({

//             method: "POST",
//             url,
//             data: body,
//             headers: {
//                 "apiKey": localStorage[API_KEY],
//             }

//         })
//         return data;
//     }
//     catch (err) {
//         console.log(err);
//         // return err;
//     }
// }

// const apiPut = async (url, body) => {
//     try {
//         let { data } = await axios({
//             method: "PUT",
//             url,
//             headers: {
//                 "apiKey": localStorage[API_KEY],
//             },
//             data: body
//         })
//         return data;
//     }
//     catch (err) {
//         throw err;
//     }
// }

// const apiDelete = async (url, body) => {
//     try {
//         let { data } = await axios({
//             method: "DELETE",
//             url,
//             headers: {
//                 "apiKey": localStorage[API_KEY],
//             },
//             data: body
//         })
//         return data;
//     }
//     catch (err) {
//         throw err;
//     }
// }

// export { apiGet, apiPost, apiPut, apiDelete }


//start form here
// get
export const doApiGet = async (_url) => {
    try {
        const resp = await axios({
            method: "GET",
            url: _url,
            headers: {
                "x-api-key": localStorage[KEY_TOKEN]
            }
        })
        return resp.data;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

// post,put,patch.delete
export const doApiMethod = async (_url, _method, _body = {}) => {
    try {
        const resp = await axios({
            method: _method,
            url: _url,
            data: _body,
            headers: {
                "x-api-key": localStorage[KEY_TOKEN]
            }
        })
        console.log(resp.data);
        
        return resp.data;
    } catch (err) {
        console.log(err);
        throw err;
    }
}
export const updataUserPatch = async (_url, _method) => {
    try {
        const resp = await axios({
            method: _method,
            url: _url,
            headers: {
                "x-api-key": localStorage[KEY_TOKEN]
            }
        })
        console.log(resp.data);
        
        return resp.data;
    } catch (err) {
        console.log(err);
        throw err;
    }
}









