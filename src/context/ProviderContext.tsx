import React, { createContext, SetStateAction } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { logout } from "@/store/auth/auth.actions";

interface interfaceContext {
  isFailed: boolean;
  isSuccessed: boolean;
  isLoading: boolean;
  isOpenPost: boolean;
  setIsFailed: React.Dispatch<SetStateAction<boolean>>;
  setIsSuccessed: React.Dispatch<SetStateAction<boolean>>;
  setIsLoading: React.Dispatch<SetStateAction<boolean>>;
  setIsOpenPost: React.Dispatch<SetStateAction<boolean>>;
  handleLogout: React.MouseEventHandler;
}

const initalContext = {
  isFailed: false,
  isSuccessed: false,
  isLoading: false,
  isOpenPost: false,
  setIsFailed: () => null,
  setIsSuccessed: () => null,
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
  const [isLoading, setIsLoading] = useState<boolean>(initalContext.isLoading);
  const [isFailed, setIsFailed] = useState<boolean>(initalContext.isFailed);
  const [isSuccessed, setIsSuccessed] = useState<boolean>(
    initalContext.isSuccessed
  );

  const handleLogout = async () => {
    const res = await dispatch(logout());

    setTimeout(() => {
      router.push("/auth");
    }, 2000);

    console.log(res);

    if (res.type == "auth/logout/fulfilled") {
      Cookies.remove("Token");
      // Cookies.set("connect.sid");
      Cookies.remove("Session");
    }
  };

  const valueContext = {
    isFailed,
    setIsFailed,
    isSuccessed,
    setIsSuccessed,
    handleLogout,
    isLoading,
    setIsLoading,
    isOpenPost,
    setIsOpenPost,
    user,
  };

  return (
    <GlobalContext.Provider value={valueContext}>
      {children}
    </GlobalContext.Provider>
  );
};
