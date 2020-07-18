/* Libs */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

/* Components */
import { toast } from 'react-toastify';
//import Grid from '@material-ui/core/Grid';
import Header from '../components/Header';
//import PropTypes from 'prop-types';
//import { withStyles } from '@material-ui/core/styles';
//import green from '@material-ui/core/colors/green';
import Radio from '@material-ui/core/Radio';
//import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
//import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';

import { startGetProducts } from '../actions/products';
import CardPage from './examplemui';


import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import CssBaseline from '@material-ui/core/CssBaseline';

// const styles = {
//     root: {
//       color: green[600],
//       '&$checked': {
//         color: green[500],
//       },
//     },
//     checked: {},
//   };

function addProductsAction(products) {
    return { type: 'POPULATE_PRODUCTS', products }
}
const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
      maxWith: '100px'
    },
    titleProduct: {
        color: "#1D5297"
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
}));
const HomePage = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const listProducts = useSelector(state => state.products);
    const statedefault = useSelector(state => state);
    console.log('statedefault', statedefault);

    console.log('listProducts - use selector', listProducts);
    const [selectedValue, setSelectedValue] = useState('a');    

    function addProducts(productsData) {
        console.log('vai chamar o dispatch', productsData);
        dispatch(addProductsAction(productsData));
    }

    useEffect(() => {
        /* Garante que só será realizada uma request para popular o storage */
        console.log('listProducts.length', listProducts.length);
        if (listProducts.length === 0) {
            startGetProducts()
                .then((resProducts) => {
                    if (resProducts.success) {
                        let products = resProducts.data;
                        console.log('data recebida', products);
                        if (products.length > 0) {
                            addProducts(products);
                        }
                    } else {
                        toast.error("Ocorreu um erro ao listar os produtos...");
                    }
                });
        }

    }, [addProducts, listProducts.length] );

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
                <p className="home__small_title">Quero pagar a cada:</p>
                
                <div className="home__group-radio">
                    <div className="header__left">
                        <Radio
                            checked={selectedValue === 'a'}
                            onChange={(e) => setSelectedValue(e.target.value)}
                            value="a"
                            name="radio-button-demo"
                            aria-label="A"
                        /> <span>3 anos</span>
                    </div>

                    <div>
                        <Radio
                            checked={selectedValue === 'b'}
                            onChange={(e) => setSelectedValue(e.target.value)}
                            value="b"
                            name="radio-button-demo"
                            aria-label="B"
                        /> <span>1 ano</span>
                    </div>

                    <div className="header__right">
                        <Radio
                            checked={selectedValue === 'c'}
                            onChange={(e) => setSelectedValue(e.target.value)}
                            value="c"
                            name="radio-button-demo"
                            aria-label="C"
                        /><span>1 mes</span>
                    </div>
                </div>

                <Card className={classes.card}>
                    <hr className="home__header-card"/>
                    <img src="/images/img_card._home.svg" className="home__card-img-service" alt="Hostgator" />   
                                           
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2" className={classes.titleProduct}>
                            Plano Bussiness
                        </Typography>
                        <hr className="home__separator-card" />  
                        <span className="home__products-valor-a">R$ 647,64</span> <span className="home__products-valor-b">R$ 453,35</span>
                        <span className="home__products-equal">equivalente a</span>
                        <span className="home__products-valor-c-md">R$ </span><span className="home__products-valor-c">12,59</span><span className="home__products-valor-c-md">/mês*</span>
                        <Typography gutterBottom variant="h5" component="h2" className={classes.titleProduct}>
                            <button className="button">Contrate Agora</button>
                            <span className="home__products-equal">1 ano de Dominio Grátis</span>
                        </Typography>
                    </CardContent>
                    {/* <CardActions>
                    <Button size="small" color="primary">
                        View
                    </Button>
                    <Button size="small" color="primary">
                        Edit
                    </Button>
                    </CardActions> */}
                </Card>


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

export default HomePage;
