import React from "react";
import type { AppProps } from "next/app";
import "@/styles/globals.scss";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { ProviderContext } from "@/context/ProviderContext";
import { useEffect, useState } from "react";
import { ConfigProvider } from "antd/lib";

const App = ({ Component, pageProps }: AppProps) => {
  const [loadLib, setLoadLib] = useState<boolean>(false);

  useEffect(() => {
    setLoadLib(false);
    require("antd/lib");
    require("@ant-design/icons");
    setLoadLib(true);
  }, []);

  return (
    <Provider store={store}>
      <ConfigProvider>
        <ProviderContext>
          <Component {...pageProps} />
        </ProviderContext>
      </ConfigProvider>
    </Provider>
  );
};

export default App;
