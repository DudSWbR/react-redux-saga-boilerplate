import React from "react";
import { Router } from "react-router-dom";
// import TagManager from "react-gtm-module";
import { Provider } from "react-redux";
import { hot } from "react-hot-loader/root";
import { ThemeProvider, StylesProvider } from "@material-ui/styles";
import GlobalStyle from "./styles/global";
import Routes from "./routes";
import { store } from "./store";
import defaultTheme from "./styles/theme";
import history from "~/routes/history";

function App() {
  // useEffect(() => {
  //   const tagManagerArgs = {
  //     gtmId: "GTM-MJQ5HFJ",
  //     dataLayer: {
  //       originalLocation: `${document.location.protocol}//${document.location.hostname}${document.location.pathname}${document.location.search}`,
  //     },
  //     events: {
  //       click: "click",
  //     },
  //   };
  //   TagManager.initialize(tagManagerArgs);
  //   uniqueId();
  // }, []);

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={defaultTheme}>
        <Provider store={store}>
          <Router history={history}>
            <>
              <Routes />
              <GlobalStyle />
            </>
          </Router>
        </Provider>
      </ThemeProvider>
    </StylesProvider>
  );
}

export default process.env.NODE_ENV === "development" ? hot(App) : App;
// export default App;
