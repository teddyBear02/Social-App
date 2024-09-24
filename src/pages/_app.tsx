import React from "react";
import "@/styles/globals.scss";
import { ProviderContext } from "@/context/ProviderContext";
import { useEffect, useState } from "react";
import { ConfigProvider } from "antd/lib";
import StoreProvider from "@/store/StoreProvider";
import { AppPropsWithLayout } from "@/model";

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const [loadLib, setLoadLib] = useState<boolean>(false);

  const getLayout = Component.getLayout ?? ((page) => page);

  useEffect(() => {
    setLoadLib(false);
    require("antd/lib");
    require("@ant-design/icons");
    setLoadLib(true);
  }, []);

  return (
    <StoreProvider>
      <ConfigProvider>
        <ProviderContext>
          {getLayout(<Component {...pageProps} />)}
        </ProviderContext>
      </ConfigProvider>
    </StoreProvider>
  );
};

export default App;
