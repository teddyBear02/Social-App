import styleForm from "../Auth.module.scss";
import Link from "next/link";
import { useState, useContext, useMemo } from "react";
import { GlobalContext } from "@/context/ProviderContext";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "@/store/auth/auth.actions";
import { AppDispatch, RootState } from "@/store/store";
import { useRouter } from "next/router";

const FormSignUp = () => {
  const dispatch: AppDispatch = useDispatch();

  const router = useRouter();

  const { setIsFailed, setIsSuccessed } = useContext(GlobalContext);

  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  const [userInfor, setUserInfor] = useState({
    Email: "",
    Password: "",
    Name: "",
  });

  const [passwordCheeked, setPasswordCheeked] = useState<string>("");

  const handleInputChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfor({ ...userInfor, Name: e.target.value });
  };

  const handleInputChangePassword = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUserInfor({ ...userInfor, Password: e.target.value });
  };

  const handleInputChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfor({ ...userInfor, Email: e.target.value });
  };

  const handleInputPasswordCheeked = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordCheeked(e.target.value);
  };

  // về phần UI thì trường nào chưa điền thì hiện message trường đó,
  // nếu password != confirm password thì sẽ hiển thị xác thực password sai

  // về phần không success thì khi có api return về mà lỗi 400
  // thì hiển thị email đã được đăng kí vui lòng sử dụng một email khác để đki

  const handleCreateUser = async () => {
    try {
      const res = await dispatch(signUp(userInfor));
      if (res.payload === "Network Error") {
        alert("Can't connect to server !");
      } else {
        if (res.meta.requestStatus === "fulfilled") {
          setIsSuccessed(true);
          setTimeout(() => {
            setIsSuccessed(false);
          }, 2500);
          setTimeout(() => {
            router.push(`/auth/login`);
          }, 2500);
        } else {
          setIsFailed(true);
          setTimeout(() => {
            setIsFailed(false);
          }, 2500);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className={styleForm.wrapperForm}>
        <div>
          <h1 className="text-3xl text-center mb-3">CDE</h1>
          <p className="text-center text-xl mb-2">Sign Up</p>
          <p className="text-center">Craete your account</p>
        </div>

        <div className="form-sign-up mt-8">
          <div className={`${styleForm[`floating-label`]}`}>
            <input
              type="text"
              name=""
              id=""
              placeholder=""
              className={`border-2 
                border-gray-400 
                rounded  
                w-full px-4 
                py-2  
                ${styleForm["form-control"]}
                ${styleForm["floating-input"]}`}
              onChange={handleInputChangeName}
            />
            <label htmlFor="">Name</label>
          </div>

          <div className={` ${styleForm[`floating-label`]}`}>
            <input
              type="email"
              name=""
              id=""
              placeholder=""
              className={`border-2 
                border-gray-400 
                rounded my-3.5 
                w-full px-4 
                py-2  
                ${styleForm["form-control"]}
                ${styleForm["floating-input"]}`}
              onChange={handleInputChangeEmail}
            />
            <label htmlFor="">Email</label>
          </div>

          <div className="grid grid-cols-2 gap-4 my-6">
            <div className={`${styleForm[`floating-label`]}`}>
              <input
                type="password"
                name=""
                id=""
                placeholder=""
                className={`border-2 
                border-gray-400 
                rounded  
                w-full px-4 
                py-2  
                ${styleForm["form-control"]}
                ${styleForm["floating-input"]}`}
                onChange={handleInputChangePassword}
              />
              <label htmlFor="">Password</label>
            </div>

            <div className={`${styleForm[`floating-label`]}`}>
              <input
                type="password"
                name=""
                id=""
                placeholder=""
                className={`border-2 
                border-gray-400 
                rounded  
                w-full px-4 
                py-2  
                ${styleForm["form-control"]}
                ${styleForm["floating-input"]}`}
                onChange={handleInputPasswordCheeked}
              />
              <label htmlFor="">Confirm Password</label>
            </div>
          </div>

          <div className="pl-6 mb-4">
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
              I agree with the terms of use
            </label>
          </div>

          <div className="text-center">
            <button
              className={`bg-sky-300 px-7 py-1.5 my-2 rounded ${styleForm["button-auth"]}`}
              onClick={handleCreateUser}
            >
              Sign Up
            </button>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-center">
            Already have an Account{" "}
            <Link
              href={`/auth/login`}
              className={`text-cyan-400 ${styleForm[`hover-link`]}`}
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default FormSignUp;
