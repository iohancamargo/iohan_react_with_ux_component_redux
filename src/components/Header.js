/* Libs  */

import React from 'react';
import { withRouter } from "react-router";

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
                            <h1 className="header__title_first">Hospedagem de sistes</h1>
                            <h1 className="header__title_first">Tenha uma hospedagem de sites estável e evite perder visitantes diariamente</h1>
                            <h1 className="header__title_first">99,9% de disponibilidade: seu site sempre no ar</h1>
                            <h1 className="header__title_first">Suporte 24h, todos os dias</h1>
                            <h1 className="header__title_first">Painel de Controle cPanel</h1>
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
