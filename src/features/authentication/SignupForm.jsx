import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useSignup } from "./useSignup";
import Button from "../../ui/Button";
import Label from "../../ui/Label";

function SignupForm() {
  const { signup, isLoading } = useSignup();
  const { reset, handleSubmit, register, formState } = useForm();
  const { errors } = formState;

  function onSubmit({ firstName, lastName, username, email, password }) {
    const newUser = { firstName, lastName, username, email, password };
    signup(newUser, {
      onSettled: () => {
        reset();
      },
    });
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-80 bg-purple-50 py-10 px-10 rounded-xl shadow-lg"
    >
      <div className="flex mb-4 flex-col">
        <Label id="firstName">First name</Label>
        <input
          className={`input ${
            errors?.firstName ? "focus:ring-red-500" : "focus:ring-purple-400"
          }`}
          type="text"
          id="firstName"
          disabled={isLoading}
          {...register("firstName", {
            required: "This field is required",
            minLength: {
              value: 4,
              message: "Name must have more than 3 characters",
            },
          })}
        />
        <span className="inputError">{errors?.firstName?.message}</span>
      </div>

      <div className="flex mb-4 flex-col">
        <Label id="lastName">Last name</Label>
        <input
          className={`input ${
            errors?.lastName ? "focus:ring-red-500" : "focus:ring-purple-400"
          }`}
          type="text"
          id="lastName"
          disabled={isLoading}
          {...register("lastName", { required: "This field is required" })}
        />
        <span className="inputError">{errors?.lastName?.message}</span>
      </div>

      <div className="flex mb-4 flex-col">
        <Label id="username">Username</Label>
        <input
          className={`input ${
            errors?.username ? "focus:ring-red-500" : "focus:ring-purple-400"
          }`}
          type="text"
          id="username"
          disabled={isLoading}
          {...register("username", {
            required: "This field is required",
          })}
        />
        <span className="inputError">{errors?.username?.message}</span>
      </div>

      <div className="flex mb-4 flex-col">
        <Label id="email">Email</Label>
        <input
          className={`input ${
            errors?.email ? "focus:ring-red-500" : "focus:ring-purple-400"
          }`}
          type="email"
          id="email"
          disabled={isLoading}
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address",
            },
          })}
        />
        <span className="inputError">{errors?.email?.message}</span>
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
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
              message: "Password is not strong enough",
            },
          })}
        />
        <span className="inputError">{errors?.password?.message}</span>
      </div>

      <div>
        {/* <button disabled={isLoading}>submit</button>
        <button onClick={reset} disabled={isLoading}>
          reset
        </button> */}
        <Button type="primary">Sign up</Button>
      </div>

      <div>
        <h6 className="text-xs text-stone-500 font-light tracking-wide">
          Already have an account?
          <span className="underline ml-1 text-stone-700 font-medium">
            <Link to="/login">Login</Link>
          </span>
        </h6>
      </div>
    </form>
  );
}

export default SignupForm;
