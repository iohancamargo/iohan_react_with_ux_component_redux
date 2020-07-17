import Api from '../services/Api';
const appKey = process.env.REACT_APP_APP_KEY;

export const login = ({ uid, token, email }) => ({
    type: 'LOGIN',
    uid,
    token,
    email
});

export const startLogin = (objLogin) => {

    return new Promise((resolve) => {
        Api.post("user/login", {
            login: objLogin.email,
            senha: objLogin.password
        }).then((res) => {

            if (res.data.success) {
                let resData = res.data.data;

                let token = resData.token;
                let uid = resData.user.use_id;
                let email = resData.user.use_email;

                let returnObj = {
                    uid: uid,
                    email: email,
                    token: token,
                    success: true,
                    message: res.data.message,
                };

                localStorage.setItem(appKey + '_UID', uid);
                localStorage.setItem(appKey + '_TOKEN', token);
                localStorage.setItem(appKey + '_EMAIL', email);

                resolve(returnObj);
            } else {
                resolve({
                    success: false,
                    message: res.data.message
                });
            }
        }).catch(error => {
            
            resolve({
                success: false,
                message: error.response.data.message
            });
        });
    });
};

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
