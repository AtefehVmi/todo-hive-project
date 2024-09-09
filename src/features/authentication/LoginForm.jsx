import { useForm } from "react-hook-form";

import { useLogin } from "./useLogin";
import Button from "../../ui/Button";
import { Link, useNavigate } from "react-router-dom";
import Label from "../../ui/Label";
import { useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
// import Cookies from "js-cookie";

function LoginForm() {
  const { login, isLoading } = useLogin();
  const { reset, handleSubmit, register, formState } = useForm();
  const { errors } = formState;
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  // const _at = Cookies.get("_at");

  // useEffect(() => {
  //   if (_at) navigate("/dashboard");
  //   // Get a cookie
  //   // // Remove a cookie
  //   // Cookies.remove('myCookieName');
  // }, [navigate, _at]);

  function onSubmit({ username, password }) {
    login(
      { username, password },
      {
        onSettled: () => reset(),
        onSuccess: (user) => {
          queryClient.setQueryData(["user"], user.user);
          toast.success("Welcome!");
          navigate("/dashboard");
        },
      }
    );
  }
  return (
    <form
      className="w-80 bg-purple-50 py-10 px-10 rounded-xl shadow-lg"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex mb-4 flex-col">
        <Label id="username">Username</Label>
        <input
          className={`input ${
            errors?.username ? "focus:ring-red-500" : "focus:ring-purple-400"
          }`}
          type="text"
          id="username"
          disabled={isLoading}
          {...register("username", { required: "This field is required" })}
        />
        <span className="inputError">{errors?.username?.message}</span>
      </div>

      <div className="flex mb-4 flex-col">
        <Label id="password">Password</Label>
        <input
          className={`input ${
            errors?.password ? "focus:ring-red-500" : "focus:ring-purple-400"
          }`}
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
        <span className="inputError">{errors?.password?.message}</span>
      </div>

      <Button type="primary">Login</Button>

      <div>
        <h6 className="text-xs text-stone-500 font-light tracking-wide">
          Don&apos;t have an account?
          <span className="underline ml-1 text-stone-700 font-medium">
            <Link to="/signup">Signup</Link>
          </span>
        </h6>
      </div>
    </form>
  );
}

export default LoginForm;
