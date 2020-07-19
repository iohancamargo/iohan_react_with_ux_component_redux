/* Libs */
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

/* Material ui components */
import {Paper} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Radio from '@material-ui/core/Radio';
import InfoIcon from '@material-ui/icons/Info';
import Carousel from 'react-material-ui-carousel'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';

/* Components */
import { toast } from 'react-toastify';
import Header from '../components/Header';
import { startGetProducts } from '../actions/products';

const formatNumberPtBr = (number) => {
    let formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
    });

    return formatter.format(number);
}

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
    const [selectedPlan, setSelectedPlan] = useState('a');    
    const listProducts = useSelector(state => state.products);
    const [productSelected, setProductSelected] = useState(null);

    function addProducts(productsData) {
        dispatch(addProductsAction(productsData));
    }
    
    useEffect(() => {
        /* Garante que só será realizada uma request para popular o storage */
        console.log('listProducts', );
        if (listProducts.length === 0) {
            startGetProducts()
                .then((resProducts) => {
                    if (resProducts.success) {
                        let products = resProducts.data;
                        if (products.length > 0) {
                            addProducts(products);
                        }
                    } else {
                        toast.error("Ocorreu um erro ao listar os produtos...");
                    }
                });
        } else {
            setProductSelected(listProducts[0]);
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [listProducts] );

    const showValueA = () => {
        let value = 0;
        switch (selectedPlan) {
            case 'a':
                value = productSelected.cycle.triennially.priceOrder;
            break;
            
            case 'b':
                value = productSelected.cycle.annually.priceOrder;
            break;

            case 'c':
                value = productSelected.cycle.monthly.priceOrder;
            break;
            default:
                value = 0;
            break;
        }
        return value;
    }

    const showValueB = () => {
        let value = 0;
        let price = 0;
        let desconto = 0;
        switch (selectedPlan) {
            case 'a':
                price = productSelected.cycle.triennially.priceOrder;
                desconto = productSelected.cycle.triennially.priceOrder * 0.40;
                value = price - desconto;
            break;
            
            case 'b':
                price = productSelected.cycle.annually.priceOrder;
                desconto = productSelected.cycle.annually.priceOrder * 0.40;
                value = price - desconto;
            break;

            case 'c':
                price = productSelected.cycle.monthly.priceOrder;
                desconto = productSelected.cycle.monthly.priceOrder * 0.40;
                value = price - desconto;
            break;
            default:
                value = 0;
            break;
        }
        return value;
    }

    const showValueC = () => {
        let value = null;
        switch (selectedPlan) {
            case 'a':
                value = showValueB() / 36;
            break;
            case 'b':
                value = showValueB() / 12;
            break;

            case 'c':
                value = showValueB() / 1;;
            break;
            default:
                value = 0;
            break;
        }
        return value;
    }

    const showValueD = () => {
        let value = null;
        value = showValueA() - showValueB();
        return value;
    }

    const changePlain = (pos) => {
        setProductSelected(listProducts[pos]);
    }

    const returnNameCycle = () => {
        let name = "";
        switch (selectedPlan) {
            case 'a':
                name = "triennially";
            break;
            
            case 'b':
                name = "annually";                
            break;

            case 'c':                
                name = "monthly";
            break;
            default:
                name = "";
            break;
        }
        return name;
    }

    return (
        <>
        <Header />
        <div className="box-layout">            
            <div className="box-layout__box">
                {
                    productSelected === null ? (
                        <img className="loader__image" src="/images/loader.gif" alt="loading..."/>
                    ) :
                    (
                        <>
                            <p className="home__small_title">Quero pagar a cada:</p>
                            <div className="home__group-radio">
                                <div className="header__left">
                                    <Radio
                                        checked={selectedPlan === 'a'}
                                        onChange={(e) => setSelectedPlan(e.target.value)}
                                        value="a"
                                        color="primary"
                                        name="radio-button-demo"
                                        aria-label="A"
                                    /> <span>3 anos</span>
                                </div>
                                <div>
                                    <Radio
                                        checked={selectedPlan === 'b'}
                                        onChange={(e) => setSelectedPlan(e.target.value)}
                                        value="b"
                                        color="primary"
                                        name="radio-button-demo"
                                        aria-label="B"
                                    /> <span>1 ano</span>
                                </div>

                                <div className="header__right">
                                    <Radio
                                        checked={selectedPlan === 'c'}
                                        onChange={(e) => setSelectedPlan(e.target.value)}
                                        value="c"
                                        color="primary"
                                        name="radio-button-demo"
                                        aria-label="C"
                                    /><span>1 mes</span>
                                </div>
                            </div>

                            <Card className={classes.card}>
                                <hr className="home__header-card"/>
                                <Carousel autoPlay={false} indicators={false} next={(next) => changePlain(next)} navButtonsAlwaysVisible={true} prev={(prev) => changePlain(prev)} >
                                    {
                                        listProducts.map( (item) => (
                                            <Paper key={item.name}>
                                                <img src="/images/img_card._home.svg" className="home__card-img-service" alt="Hostgator" />   
                                                <Typography gutterBottom variant="h5" component="h2" className={classes.titleProduct}>
                                                    { item.name}
                                                </Typography>
                                            </Paper>
                                        ))
                                    }
                                </Carousel>

                                <CardContent className={classes.cardContent}>                                   
                                    <span className="home__products-valor-a">R$ {formatNumberPtBr(showValueA())} </span> <span className="home__products-valor-b">R$ {formatNumberPtBr(showValueB())}</span>
                                    <span className="home__products-equal">equivalente a</span>
                                    <span className="home__products-valor-c-md">R$ </span><span className="home__products-valor-c">{formatNumberPtBr(showValueC())}</span><span className="home__products-valor-c-md">/mês*</span>
                                    <Typography gutterBottom variant="h5" component="h2" className={classes.titleProduct}>
                                    
                                    <Link className="button-marg-lef" to={`/contratar/${productSelected.id}/${returnNameCycle()}/PROMOHG40`}>
                                        <button className="button">Contrate Agora</button>
                                    </Link>
                                        <span className="home__domain-info">1 ano de Dominio Grátis <InfoIcon style={{ fontSize: 13, marginTop:10, color: "#1D5297" }}/></span>
                                        <span className="home__safe-money">economize R$ {formatNumberPtBr(showValueD())} <span className="home__badge_desc">40% OFF</span></span>
                                    </Typography>
                                    <hr className="home__separator-card"/>
                                    <div className="home__mg-top">
                                        <span className="home__info-card-footer"><span className="home__info-card-footer-dots">Sites ilimitados</span></span>
                                        <span className="home__info-card-footer"><strong>100 GB</strong> de Armazenamento </span>
                                        <span className="home__info-card-footer"><span className="home__info-card-footer-dots">Contas de E-mail</span> <strong>ilimitadas</strong> </span>
                                        <span className="home__info-card-footer">Criador de Sites <strong>Grátis</strong> </span>
                                        <span className="home__info-card-footer">Certificados SLL <strong>Grátis</strong> (https) </span>
                                    </div>
                                </CardContent>
                                    <hr className="home__header-card"/>
                            </Card>
                        </>
                    )
                }
            </div>
        </div>
        </>
    );
};

export default HomePage;
