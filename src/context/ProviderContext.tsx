import React, { createContext, SetStateAction } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { logout } from "@/store/auth/auth.actions";

interface interfaceContext {
  isLoading: boolean;
  isOpenPost: boolean;
  idUser: string;
  setIdUser: React.Dispatch<SetStateAction<string>>;
  setIsLoading: React.Dispatch<SetStateAction<boolean>>;
  setIsOpenPost: React.Dispatch<SetStateAction<boolean>>;
  handleLogout: () => void;
}

const initalContext = {
  isLoading: false,
  isOpenPost: false,
  idUser: "",
  setIdUser: () => null,
  setIsLoading: () => null,
  setIsOpenPost: () => null,
  handleLogout: () => null,
};

export const GlobalContext = createContext<interfaceContext>(initalContext);

export const ProviderContext = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const router = useRouter();

  const dispatch: AppDispatch = useDispatch();

  const user = useSelector((state: RootState) => state.auth.user);

  const [isOpenPost, setIsOpenPost] = useState<boolean>(
    initalContext.isOpenPost
  );

  const [idUser, setIdUser] = useState<string>(initalContext.idUser);

  const [isLoading, setIsLoading] = useState<boolean>(initalContext.isLoading);

  const handleLogout = async () => {
    const res = await dispatch(logout());

    setTimeout(() => {
      router.push("/auth");
    }, 2000);

    if (res.type == "auth/logout/fulfilled") {
      Cookies.remove("Token");
    }
  };

  const valueContext = {
    handleLogout,
    isLoading,
    setIsLoading,
    isOpenPost,
    setIsOpenPost,
    user,
    idUser,
    setIdUser,
  };

  return (
    <GlobalContext.Provider value={valueContext}>
      {children}
    </GlobalContext.Provider>
  );
};
