import "../styles/globals.scss";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

// loading中の表示のためのコード
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

export default MyApp;
