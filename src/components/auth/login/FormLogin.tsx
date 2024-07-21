import Link from "next/link";
import styleForm from "../Auth.module.scss";
import { useDispatch } from "react-redux";
import { useState, useContext } from "react";
import React from "react";
import { login } from "@/store/auth/auth.actions";
import { AppDispatch } from "@/store/store";
import { useRouter } from "next/router";
import { GlobalContext } from "@/context/ProviderContext";
import Cookies from "js-cookie";

const FormValidator: React.FC = () => {
  const { setIsSuccessed, setIsFailed } = useContext(GlobalContext);

  const router = useRouter();
  const dispatch: AppDispatch = useDispatch();

  const [userInfor, setUserInfor] = useState({
    Email: "",
    Password: "",
  });

  const handleInputChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfor({ ...userInfor, Email: e.target.value });
  };

  const handleInputChangePassword = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUserInfor({ ...userInfor, Password: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const res = await dispatch(login(userInfor));
      if (res.payload.status === 200) {
        setIsSuccessed(true);
        setTimeout(() => {
          setIsSuccessed(false);
          router.push("/home");
        }, 3000);
      } else {
        setIsFailed(true);
        setTimeout(() => {
          setIsFailed(false);
        }, 3000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={`${styleForm[`wrapperForm`]}`}>
        <h1 className="text-center text-3xl my-3">Social</h1>
        <h2 className="text-center my-2 text-xl">Login</h2>
        <p className="text-center my-2">Login to stay connected.</p>
        <div className="my-4">
          <div className={`my-4 ${styleForm[`floating-label`]}`}>
            <input
              placeholder=""
              type="email"
              onChange={handleInputChangeName}
              className={`border-2 
                border-gray-400 
                rounded my-3.5 
                w-full px-4 
                py-2  
                ${styleForm["form-control"]}
                ${styleForm["floating-input"]}`}
            />
            <label htmlFor="">Email</label>
          </div>

          <div className={`my-4 ${styleForm[`floating-label`]}`}>
            <input
              placeholder=""
              type="password"
              onChange={handleInputChangePassword}
              className={`border-2 
              border-gray-400 
              rounded my-3.5 w-full 
              px-4 py-2 
              ${styleForm[`form-control`]}
              ${styleForm["floating-input"]}`}
            />
            <label htmlFor="">PassWord</label>
          </div>

          <div className="flex mb-4 mt-6">
            <div className="flex-1 pl-6">
              <input
                type="checkbox"
                name=""
                id="remember"
                className={`${styleForm[`custom-input`]}`}
              />
              <label
                htmlFor="remember"
                className={`${styleForm[`custom-label`]}`}
              >
                Remember me
              </label>
            </div>

            <div className="flex-1 text-right">
              <Link
                href={`/auth/forget`}
                className={`text-cyan-400 ${styleForm[`hover-link`]}`}
              >
                Forgot password ?
              </Link>
            </div>
          </div>

          <div className="text-center">
            <button
              className={`bg-sky-300 px-7 py-1.5 my-2 rounded ${styleForm["button-auth"]}`}
              onClick={handleLogin}
            >
              Log in
            </button>
          </div>
        </div>

        <div className="text-center">
          <p>
            Create new account{" "}
            <Link
              href={`/auth/signup`}
              className={`text-cyan-400 ${styleForm[`hover-link`]}`}
            >
              Sign Up here !!!
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default FormValidator;
