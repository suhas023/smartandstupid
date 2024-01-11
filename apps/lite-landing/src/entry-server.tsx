import renderToString from "preact-render-to-string";
import App from "./app";

export function SSRRender(url: string) {
    return renderToString(
        <App url={url} />
    );
}