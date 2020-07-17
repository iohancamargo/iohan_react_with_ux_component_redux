/* Libs */
import { withRouter } from "react-router";
import React, { useState } from "react";

/* Components */
import Grid from '@material-ui/core/Grid';
import Header from '../components/Header';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import Radio from '@material-ui/core/Radio';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';

const styles = {
    root: {
      color: green[600],
      '&$checked': {
        color: green[500],
      },
    },
    checked: {},
  };
const HomePage = () => {

    const [selectedValue, setSelectedValue] = useState('a');    

    // const [password, setPassword] = useState('123456');

    
    const handleChange = () => {
        setSelectedValue('b')
    };

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
                <p className="home__small_title">Quero pagar a cada:</p>
                
                <div className="home__group-radio">
                    <div className="header__left">
                        <Radio
                            checked={selectedValue === 'a'}
                            onChange={handleChange}
                            value="a"
                            name="radio-button-demo"
                            aria-label="A"
                        /> <span>3 anos</span>
                    </div>

                    <div>
                        <Radio
                            checked={selectedValue === 'b'}
                            onChange={handleChange}
                            value="b"
                            name="radio-button-demo"
                            aria-label="B"
                        /> <span>1 ano</span>
                            
                        
                    </div>

                    <div className="header__right">
                        <Radio
                            checked={selectedValue === 'c'}
                            onChange={handleChange}
                            value="c"
                            name="radio-button-demo"
                            aria-label="C"
                        /><span>1 mes</span>
                    </div>
                </div>

                
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
