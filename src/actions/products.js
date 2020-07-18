import Api from '../services/Api';

export const startGetProducts = () => {

    return new Promise((resolve) => {
        Api.get("products", {})
            .then((res) => {                
                let arrData = Array.from(Object.values(res.data.shared.products));
                let returnObj = {
                    success: true,
                    data: arrData,
                    message: ""
                };

                resolve(returnObj);
                // } else {
                //     console.log('caiu no else');
                //     console.log(res.data);
                //     resolve({
                //         success: false,
                //         message: res.data.message
                //     });
                // }
            })
            .catch((error) => {
                console.log('error', error);
                resolve({
                    success: false,
                    message: error
                });
            });
    });
};
