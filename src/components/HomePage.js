/* Libs */
import { withRouter } from "react-router";
import React from "react";

/* Components */
import Header from '../components/Header';

const HomePage = () => {

    // const [email, setEmail] = useState('iohan.camargo@vamilly.com.br');    
    // const [password, setPassword] = useState('123456');
    
    // const onSubmit = (e) => {
        
        // e.preventDefault();

        // if (!email || !password) {            
        //     toast.error("Por favor, insira as suas credenciais para realizar login.");
        // } else {
            
        //     let objLogin = { email, password };
        //     startLogin(objLogin)
        //     .then((resLogin) => {                

        //         if(resLogin['success']){
        //             toast.success("Login realizado com sucesso.");
        //             setCurrentUser(resLogin);
        //         }else{                    
        //             toast.error(resLogin['message']);
        //         }

        //     })
        //     .catch((errLogin) => {
        //         toast.error(errLogin);                
        //     });
        // }
    // };

    return (
        <>
        <Header />
        <div className="box-layout">            
            <div className="box-layout__box">
                <h5 className="box-layout__title">Quero pagar a cada</h5>
                {/* <p>Insira seu e-mail ou login para acessar.</p>
                <form className="form" onSubmit={onSubmit}>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button className="button">Login</button>
                </form> */}
            </div>
        </div>
        </>
    );
};

export default withRouter(HomePage);
