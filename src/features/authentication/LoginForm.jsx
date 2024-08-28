import { useForm } from "react-hook-form";

import { useLogin } from "./useLogin";
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="username">User name</label>
        <input
          type="text"
          id="username"
          disabled={isLoading}
          {...register("username", { required: "This field is required" })}
        />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
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

      <button disabled={isLoading}>submit</button>
      <button onClick={reset} disabled={isLoading}>
        reset
      </button>
    </form>
  );
}

export default LoginForm;
