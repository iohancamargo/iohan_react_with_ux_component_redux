/* eslint-disable react-hooks/exhaustive-deps */

/* Libs */
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

/* Components */
import Header from './Header';
import { history } from '../routers/AppRouter';


/* Material ui components */
import Card from '@material-ui/core/Card';
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
    const { idProd, cycleParam, promocod } = useParams();
    const [selectedPlan, setSelectedPlan] = useState(null);
    const listProducts = useSelector(state => state.products);

    const handleRedirect = (e) => {
        e.preventDefault();
        toast.success("Você será redirecionado para o site oficial...");
        
        setTimeout(() => { 
            window.location.ref="https://www.hostgator.com.br/"; 
        }, 3000);
    }

    const showValueA = () => {
        let value = null;
        switch (cycleParam) {
            case "triennially":
                value = selectedPlan.cycle.triennially.priceOrder;
            break;

            case "annually":
                value = selectedPlan.cycle.annually.priceOrder;
            break;

            case "monthly":
                value = selectedPlan.cycle.monthly.priceOrder;
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

        switch (cycleParam) {
            case "triennially":
                price = selectedPlan.cycle.triennially.priceOrder;
                desconto = (selectedPlan.cycle.triennially.priceOrder * 0.40);
                value = price - desconto - 10;
            break;

            case "annually":
                price = selectedPlan.cycle.annually.priceOrder;
                desconto = (selectedPlan.cycle.annually.priceOrder * 0.40);
                value = price - desconto - 10;
            break;

            case "monthly":
                price = selectedPlan.cycle.monthly.priceOrder;
                desconto = (selectedPlan.cycle.monthly.priceOrder * 0.40);
                value = price - desconto - 10;
            break;
            default: 
                value = 0;
            break;
        }
        return value;
    }

    const formatNumberPtBr = (number) => {
        let formatter = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2,
        });
    
        return formatter.format(number);
    }

    useEffect(() => {

        if(listProducts.length === 0 ){
            history.push('/');
        }

        if(idProd !== null){
            let filtredProduct = listProducts.filter((product) => product.id === parseInt(idProd));
            
            if(filtredProduct.length === 0){
                toast.success("Selecione um produto da lista exibida na página inicial...");
                history.push('/');
            }
            setSelectedPlan(filtredProduct[0]);
        }        
    }, [] );

    return (
        <>
        <Header />
        {
            selectedPlan === null ? (
                <img className="loader__image" src="/images/loader.gif" alt="loading..."/>
            ) : (
            <div className="box-layout">            
                <div className="box-layout__box">
                    <Card className={classes.card}>
                        <img src="/images/img_card._home.svg" className="home__card-img-service" alt="Hostgator" />   
                        <Typography gutterBottom variant="h5" component="h2" className={classes.titleProduct}>
                            {selectedPlan.name}
                        </Typography>
                        <CardContent className={classes.cardContent}>                                   
                            <span className="home__products-equal">Cupom de desconto: {promocod} {formatNumberPtBr(10.00)}</span>

                            <span className="home__products-valor-a">R$ {formatNumberPtBr(showValueA())} </span> <span className="home__products-valor-b">R$ {formatNumberPtBr(showValueB())}</span>
                            

                            <Typography gutterBottom variant="h5" component="h2" className={classes.titleProduct}>
                                {/* <Link className="button-marg-lef" to={`/contratar/${productSelected.id}/${returnNameCycle()}/PROMOHG40`}> */}
                                    <button className="button-green" onClick={handleRedirect}>Finalizar Compra</button>
                                {/* </Link> */}
                            </Typography>                            
                        </CardContent>
                    </Card>
                </div>
            </div>
            )
        }
        
        </>
    )
};

export default ContractPage;
