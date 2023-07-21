import React from "react";
import Router from "./components/Router";
import { Provider } from "react-redux";
import { store } from "./redux/store";
// import "./style.scss"

function App() {

	return (
		<Provider store={store}>
			<Router />
		</Provider>
	);
}

export default App;
