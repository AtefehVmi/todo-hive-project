import { useForm } from "react-hook-form";

import { useLogin } from "./useLogin";
import Button from "../../ui/Button";
// import { useEffect } from "react";

// import Cookies from "js-cookie";

function LoginForm() {
  const { login, isLoading } = useLogin();
  const { reset, handleSubmit, register } = useForm();

  // useEffect(() => {
  //   // Get a cookie
  //   const myCookie = Cookies.get('myCookieName');
  //   console.log('Cookie Value:', myCookie);

  //   // Remove a cookie
  //   Cookies.remove('myCookieName');
  // }, []);

  function onSubmit({ username, password }) {
    login(
      { username, password },
      {
        onSettled: () => reset(),
      }
    );
  }
  return (
    <form
      className="w-80 bg-purple-50 py-10 px-10 rounded-xl"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex mb-4 flex-col">
        <label
          htmlFor="username"
          className="text-stone-500 text-sm font-semibold "
        >
          Username
        </label>
        <input
          className="input"
          type="text"
          id="username"
          disabled={isLoading}
          {...register("username", { required: "This field is required" })}
        />
      </div>

      <div className="flex mb-4 flex-col">
        <label
          htmlFor="password"
          className="text-stone-500 text-sm font-semibold"
        >
          Password
        </label>
        <input
          className="input"
          type="password"
          id="password"
          disabled={isLoading}
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
          })}
        />
      </div>

      <Button>Login</Button>
    </form>
  );
}

export default LoginForm;
