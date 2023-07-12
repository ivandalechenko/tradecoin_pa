import React from "react";


function App() {

	return (
		<div className="container">
			<div id="sidebar">
				<div className="section">
					<div className="header">
						<div className="logo">
							<img src="img/pa/logo.svg" width="32" height="32" alt="logo" />
							<div className="text super_tight">
								TradeCoinAi
							</div>
						</div>
						<div className="burger_and_lang">
							<div id="lang">
								<img src="img/pa/flags/usa.png" alt="flag_usa" />
								<div className="name">
									English
								</div>
								<img width='18' height="10" src="img/pa/flags/arrow_down.png" alt="arrow_down" />
							</div>
							<div id="burger_opener">
								<img width="20" height="20" alt="menu_opener" src="img/pa/burger.svg" />
							</div>
							<div id="burger_closer" className="dnone">
								<img width="20" height="20" alt="menu_closer" src="img/pa/cross.svg" />
							</div>

						</div>
					</div>
					<div className="navigation">
						<div className="navigation_element">
							<img src="img/pa/navigation/rounds.svg" alt="stat menu img" />
							<div className="text">
								Statistics
							</div>
						</div>
						<div className="navigation_element active" id="profile_opener">
							<img src="img/pa/navigation/profile.svg" alt="profile menu img" />
							<div className="text">
								Profile
							</div>
						</div>
						<div className="navigation_element" id="manage_tarif_opener">
							<img src="img/pa/navigation/tarif.svg" alt="manage tarifs menu img" />
							<div className="text">
								Manage tarifs
							</div>
						</div>
						<div id="pay_opener" className="navigation_element_no_act">
							<img src="img/pa/navigation/wallet.svg" alt="pay now menu img" />
							<div className="text">
								Pay now
							</div>
						</div>
						<div id="renew_tarif_opener" className="navigation_element_no_act">
							<img src="img/pa/navigation/renew.svg" alt="renew tarif menu img" />
							<div className="text">
								Renew tarif
							</div>
						</div>
						<div className="navigation_element" id="ref_opener">
							<img src="img/pa/navigation/ref.svg" alt="referal menu img" />
							<div className="text">
								Referral
							</div>
						</div>
					</div>
					<button id="add_api_opener">
						<img src="img/pa/key.svg" alt="add api img" />
						<div className="text">
							Add api keys
						</div>
					</button>
					<button className="bottom_button lang">
						<img src="img/pa/flags/usa.png" alt="usa flag" />
						<div className="text">
							Change language
						</div>
					</button>
					<button className="bottom_button">
						<img src="img/pa/back_arrow.svg" alt="arrow back to main" />
						<div className="text">
							Back to website
						</div>
					</button>
					<button className="bottom_button background_transparent">
						<img src="img/pa/return_arrow.svg" alt="arrow logout" />
						<div className="text">
							Log out
						</div>
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;
