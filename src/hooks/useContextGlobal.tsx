import { useContext } from "react";
import { GlobalContext } from "@/context/ProviderContext";

function useContextGlobal() {
  const gc = useContext(GlobalContext);
  return gc;
}

export default useContextGlobal;
