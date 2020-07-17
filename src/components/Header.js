/* Libs  */
import React from 'react';
import { withRouter } from "react-router";

/* Components */
import Grid from '@material-ui/core/Grid';
import CheckIcon from '@material-ui/icons/Check';

export const Header = () => {
    return (
        <>
            <img src="/images/hostgator-logo.svg" className="header-img" alt="Hostgator" />
            <header className="header">
                <div className="content-header__content-container">
                    <div className="header__content">
                        <div className="header__left">
                            <img src="/images/img_header_left.svg" alt="Hostgator" />
                        </div>
                        <div>
                            {/* 
                            
                            <p className="header__title_small"><CheckIcon />99,9% de disponibilidade: seu site sempre no ar</p>
                            <p className="header__title_small"><CheckIcon />Painel de Controle cPanel</p> */}
                            <Grid container spacing={1} justify="center">
                                <Grid xs={12} sm={12} md={12} item >
                                    <p className="header__title_small">Hospedagem de sistes</p>
                                </Grid>
                                <Grid xs={12} sm={12} md={12} item>
                                    <p className="header__title_big">Tenha uma hospedagem de sites estável e evite perder visitantes diariamente</p>
                                </Grid>
                                <Grid xs={12} sm={12} md={12} item >
                                    <p className="header__title_small"><CheckIcon className="header__icon"/> 99,9% de disponibilidade: seu site sempre no ar</p>
                                </Grid>
                                
                                <Grid xs={12} sm={12} md={12} item >
                                    <p className="header__title_small"><CheckIcon className="header__icon"/> Suporte 24h, todos os dias <CheckIcon className="header__icon"/> Painel de Controle cPanel</p>
                                </Grid>
                                
                                <Grid xs={12} sm={12} md={12} item >
                                    <img src="/images/img_arrow_down.svg" className="header__img_arrow" alt="Hostgator" />
                                </Grid>
                                
                                

                                {/* <Grid xs={12} sm={12} md={6} lg={6}>
                                    <p className="header__title_small"><CheckIcon className="header__icon"/> Suporte 24h, todos os dias</p>
                                    </Grid>
                                    <Grid xs={12} sm={12} md={6} lg={6}>
                                    <p className="header__title_small"><CheckIcon className="header__icon"/> Painel de Controle cPanel</p>
                                </Grid> */}
                                
                            </Grid>
                                
                            
                        </div>
                        <div className="header__right">
                            <img src="/images/img_header_right.svg" alt="Hostgator" />
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default withRouter(Header);