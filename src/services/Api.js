import axios from 'axios';
/* Adrress for emulation :
** Genymotion:              http://10.0.3.2:3333/
** Emulador Android Studio: http://10.0.2.2:3333/
** Simulador IOS:           http://localhost:3333/
*/

// const jwtToken = localStorage.getItem(process.env.REACT_APP_APP_KEY + '_TOKEN');

const Api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

// if(jwtToken){    
//     Api.defaults.headers.common['x-access-token'] = jwtToken;
// }

/**
 * This function is responsible for treating and displaying the error obtained from the api
 * @param {Http} resDataHttp 
 */
export const getErrorMessage = (resDataHttp) => {
    let objectReturn = { codeHttp: 0, message: ''};

    switch (resDataHttp.request.status) {
        case 401:
            objectReturn.codeHttp = resDataHttp.request.status;
            objectReturn.message = 'Error ' + resDataHttp.request.status + ' - Unauthorized: ' + resDataHttp.request.response;
        break;
        
        case 404:
            objectReturn.codeHttp = resDataHttp.request.status;
            objectReturn.message = 'Error ' + resDataHttp.request.status + ' Not found: ' + resDataHttp.request.response;
        break;

        case 405:
            objectReturn.codeHttp = resDataHttp.request.status;
            objectReturn.message = 'Error ' + resDataHttp.request.status + ' Method Not Allowed: ' + resDataHttp.request.response;
        break;

        case 500:
            objectReturn.codeHttp = resDataHttp.request.status;
            objectReturn.message = 'Error ' + resDataHttp.request.status + ' Internal server error: ' + resDataHttp.request.response;
        break;

        default:
            objectReturn.codeHttp = resDataHttp.request.status;
            objectReturn.message = 'Error ' + resDataHttp.request.status + ': ' + resDataHttp.request.response;
        break;
    }
    return objectReturn;
}

export default Api;