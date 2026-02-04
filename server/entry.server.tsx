import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { HomePage } from "../client/components/HomePage";
import { LoadingPage } from "../client/components/LoadingPage";
export function render(url: string) {
  return renderToString(
    <StaticRouter location={url}>
      <LoadingPage />
      <HomePage />
    </StaticRouter>,
  );
}
