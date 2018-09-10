import React from "react";

import Navigation from "./Navigation";

function Header() {
    return (
        <header>
            <div className="logo">
                <img src="/assets/img/logo.png" alt="logo" />
                New Radio
            </div>
            <Navigation />
            <a
                className="donate"
                href="https://www.liqpay.ua/ru/checkout/mynewtestradio"
                target="_blank"
            >
                Donate
            </a>
        </header>
    );
}

export default Header;
