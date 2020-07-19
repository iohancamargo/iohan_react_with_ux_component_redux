/* Libs  */
import React from 'react';
import { withRouter } from "react-router";

/* Components */
import Grid from '@material-ui/core/Grid';
import CheckIcon from '@material-ui/icons/Check';

export const Header = () => {

    const handleSlideDown = (e) => {
        e.preventDefault();
        console.log('entrou aqui');
        this.messagesEnd.scrollIntoView({ behavior: "box-layout" })
    }

    return (
        <>
            <img src="/images/hostgator-logo.svg" className="header-img" alt="Hostgator" />
            <header className="header">
                <div className="content-header__content-container">
                    <div className="header__content">
                        <div className="header__left header__not-show-sm">
                            <img src="/images/img_header_left.svg" alt="Hostgator" />
                        </div>
                        <div>
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
                                
                                <Grid xs={12} sm={12} md={12} item className="header__not-show-sm">
                                    <p className="header__title_small"><CheckIcon className="header__icon"/> Suporte 24h, todos os dias <CheckIcon className="header__icon"/> Painel de Controle cPanel</p>
                                </Grid>
                                
                                <div className="header__not-show-md">
                                <Grid xs={12} sm={12} md={6} lg={6} item>
                                    <p className="header__title_small"><CheckIcon className="header__icon"/> Suporte 24h, todos os dias</p>
                                    </Grid>
                                    <Grid xs={12} sm={12} md={6} lg={6} item>
                                    <p className="header__title_small"><CheckIcon className="header__icon"/> Painel de Controle cPanel</p>
                                </Grid>
                                </div>

                                <Grid xs={12} sm={12} md={12} item >
                                    <img src="/images/img_arrow_down.svg" className="header__img_arrow" alt="Hostgator" onClick={handleSlideDown}/>
                                </Grid>
                                
                                
                            </Grid>
                        </div>
                        <div className="header__right header__not-show-sm">
                            <img src="/images/img_header_right.svg" alt="Hostgator"/>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default withRouter(Header);
