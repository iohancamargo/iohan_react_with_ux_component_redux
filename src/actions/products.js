import Api from '../services/Api';

export const startGetProducts = () => {

    return new Promise((resolve) => {
        Api.get("products", {})
            .then((res) => {
                if(res.data.hasOwnProperty('shared')){
                    if(res.data.shared.hasOwnProperty('products')){
                        let arrData = Array.from(Object.values(res.data.shared.products));
                        let returnObj = {
                            success: true,
                            data: arrData,
                            message: ""
                        };
                
                        resolve(returnObj);
                    }
                }
                let returnObj = {
                    success: true,
                    data: [],
                    message: "Não existem produtos cadastrados na api"
                };
                
                resolve(returnObj);
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
