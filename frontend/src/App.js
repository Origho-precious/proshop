import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Homepage from "./pages/Homepage";
import Productpage from "./pages/Productpage";

const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<main className="py-3">
				<Container>
					<Switch>
						<Route exact path="/" component={Homepage} />
						<Route exact path="/product/:id" component={Productpage} />
					</Switch>
				</Container>
			</main>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
