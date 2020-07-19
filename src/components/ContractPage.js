/* Libs */
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from './Header';
/* Components */
// import { history } from '../../routers/AppRouter';

/* Actions */
// import { startAddUser } from '../../actions/products';

// function addUsersAction(listUsers ,user) {    
//     return { type: 'ADICIONAR_USUARIO', listUsers ,user }
// }
/* Material ui components */
import {Paper} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Radio from '@material-ui/core/Radio';
import InfoIcon from '@material-ui/icons/Info';
import Carousel from 'react-material-ui-carousel'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';

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

const ContractPage = () => {
    // const dispatch = useDispatch();
    const classes = useStyles();
    const { idProd,cycle,promocod } = useParams();
    console.log("idProd,cycle,promocod", idProd,cycle,promocod);

    useEffect(() => {
        /* Garante que só será realizada uma request para popular o storage */
        // console.log('idProd,cycle,promocod EFFECT', idProd,cycle,promocod);
        // startGetProducts()
        //     .then((resProducts) => {
        //         if (resProducts.success) {
        //             let products = resProducts.data;
        //             if (products.length > 0) {
        //                 addProducts(products);
        //             }
        //         } else {
        //             toast.error("Ocorreu um erro ao listar os produtos...");
        //         }
        //     });
        // if (listProducts.length === 0) {
        // } else {
        //     setProductSelected(listProducts[0]);
        // }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] );


    /*
        "use_nome",
        "use_email",
        "use_senha",
        "use_username",
        "use_sobrenome",
        "use_regra_acesso",
        "use_email_esta_confirmado",
    */

    // let usuario = useSelector(state => state.users).find((user) => user.use_id == id);



    return (
        <>
        <Header />
        <div className="box-layout">            
            <div className="box-layout__box">
                <Card className={classes.card}>
                    <img src="/images/img_card._home.svg" className="home__card-img-service" alt="Hostgator" />   
                    <Typography gutterBottom variant="h5" component="h2" className={classes.titleProduct}>
                        charlies
                    </Typography>
                    <CardContent className={classes.cardContent}>                                   
                        <span className="home__products-valor-a">R$ 200 </span> <span className="home__products-valor-b">R$ 200</span>
                        <span className="home__products-equal">equivalente a</span>
                        <span className="home__products-valor-c-md">R$ </span><span className="home__products-valor-c">200</span><span className="home__products-valor-c-md">/mês*</span>
                        <Typography gutterBottom variant="h5" component="h2" className={classes.titleProduct}>
                            {/* <Link className="button-marg-lef" to={`/contratar/${productSelected.id}/${returnNameCycle()}/PROMOHG40`}> */}
                                <button className="button">Contrate Agora</button>
                            {/* </Link> */}
                            <span className="home__domain-info">1 ano de Dominio Grátis <InfoIcon style={{ fontSize: 13, marginTop:10, color: "#1D5297" }}/></span>
                            <span className="home__safe-money">economize R$ 200 <span className="home__badge_desc">40% OFF</span></span>
                        </Typography>
                        {/* <hr className="home__separator-card"/>
                        <div className="home__mg-top">
                            <span className="home__info-card-footer"><span className="home__info-card-footer-dots">Sites ilimitados</span></span>
                            <span className="home__info-card-footer"><strong>100 GB</strong> de Armazenamento </span>
                            <span className="home__info-card-footer"><span className="home__info-card-footer-dots">Contas de E-mail</span> <strong>ilimitadas</strong> </span>
                            <span className="home__info-card-footer">Criador de Sites <strong>Grátis</strong> </span>
                            <span className="home__info-card-footer">Certificados SLL <strong>Grátis</strong> (https) </span>
                        </div> */}
                    </CardContent>
                </Card>
            </div>
        </div>
        </>
    )
};

export default ContractPage;
