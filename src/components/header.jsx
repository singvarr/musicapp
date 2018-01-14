import React from "react";

function Header() {
	return (
		<header>
			<div className="logo"><img src="./assets/img/logo.png" alt="logo"/>New Radio</div>
			<a className="donate"
				href="https://www.liqpay.ua/ru/checkout/mynewtestradio" target="_blank">Donate</a>
		</header>
	)
}

export default Header;