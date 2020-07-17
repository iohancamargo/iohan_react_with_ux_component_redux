import Api from '../services/Api';

export const startGetUsers = () => {

    return new Promise((resolve) => {
        Api.get("user", {})
            .then((res) => {                
                if (res.data.success) {
                    let returnObj = {
                        success: true,
                        data: res.data.data,
                        message: res.data.message
                    };

                    resolve(returnObj);
                } else {
                    console.log('caiu no else');
                    resolve({
                        success: false,
                        message: res.data.message
                    });
                }
            })
            .catch((error) => {
                console.log('status', error.status);
                console.log('***** caiu no catch', error);
                console.log('***** error.status', error.request.status);
                
                resolve({
                    success: false,
                    message: error
                });
            });
    });
};

export const startAddUser = (newUser) => {

    return new Promise((resolve) => {
        Api.post("user", {...newUser})
            .then((res) => {                
                if (res.data.success) {
                    let returnObj = {
                        success: true,
                        data: res.data.data,
                        message: res.data.message
                    };

                    resolve(returnObj);
                } else {
                    console.log('caiu no else');
                    resolve({
                        success: false,
                        message: res.data.message
                    });
                }
            })
            .catch((error) => {
                console.log('status', error.status);
                console.log('***** caiu no catch', error);
                console.log('***** error.status', error.request.status);
                
                resolve({
                    success: false,
                    message: error
                });
            });
    });
};

/*
export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogout = () => {

    localStorage.removeItem(appKey + '_UID');
    localStorage.removeItem(appKey + '_TOKEN');
    localStorage.removeItem(appKey + '_EMAIL');

    return () => {
        return true;
    };
};
*/