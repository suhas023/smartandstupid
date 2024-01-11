import { render, hydrate } from "preact";
import App from "./app";

hydrate(<App url={window?.location ? window.location.href : ''} />, document.getElementById("app"));