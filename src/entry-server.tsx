import { renderToString } from "react-dom/server";
import App from "./App";
export { createStructuredData } from "./data/structuredData";

export function render() {
  return renderToString(<App />);
}
