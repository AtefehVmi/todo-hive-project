import { useForm } from "react-hook-form";
import { signup } from "../../services/apiAuth";

function SignupForm() {
  const { reset, handleSubmit, register } = useForm();

  function onSubmit({ firstname, lastname, username, email, password }) {
    const newUser = { firstname, lastname, username, email, password };
    signup(newUser);
    console.log(newUser);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="firstname">First name</label>
        <input
          type="text"
          id="firstname"
          {...register("firstname", { required: "This field is required" })}
        />
      </div>

      <div>
        <label htmlFor="lastname">Last name</label>
        <input
          type="text"
          id="lastname"
          {...register("lastname", { required: "This field is required" })}
        />
      </div>

      <div>
        <label htmlFor="username">User name</label>
        <input
          type="text"
          id="username"
          {...register("username", { required: "This field is required" })}
        />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
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
        <button onClick={reset}>submit</button>
        <button onClick={reset}>reset</button>
      </div>
    </form>
  );
}

export default SignupForm;
