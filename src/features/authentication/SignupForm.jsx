import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSignup } from "./useSignup";

function SignupForm() {
  const { signup, isLoading } = useSignup();
  const { reset, handleSubmit, register } = useForm();
  const navigate = useNavigate();

  function onSubmit({ firstName, lastName, username, email, password }) {
    const newUser = { firstName, lastName, username, email, password };
    signup(newUser);
    navigate("/login");
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          id="firstName"
          disabled={isLoading}
          {...register("firstName", { required: "This field is required" })}
        />
      </div>

      <div>
        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          id="lastName"
          disabled={isLoading}
          {...register("lastName", { required: "This field is required" })}
        />
      </div>

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
        <label htmlFor="email">Email</label>
        <input
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

      <div>
        <button disabled={isLoading}>submit</button>
        <button onClick={reset} disabled={isLoading}>
          reset
        </button>
      </div>
    </form>
  );
}

export default SignupForm;
