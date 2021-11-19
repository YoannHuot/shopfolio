import About from "./Components/About/About";
import classe from "./App.module.css";
import Home from "./Components/Home/Home";

function App() {
	return (
		<div className={classe.app}>
			<Home />
			{/* <About /> */}
		</div>
	);
}

export default App;
