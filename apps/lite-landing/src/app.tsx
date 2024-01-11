import { h } from "preact";
import About from "./pages/about";
import Home from "./pages/home";

const App = ({url}: {url: string}) => {
    if (url.includes('about')) return <About />;
    return <Home />;
}

export default App;