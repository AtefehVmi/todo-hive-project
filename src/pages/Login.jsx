import LoginForm from "../features/authentication/LoginForm";

function Login() {
  return (
    <div className="grid place-content-center h-dvh bg-purple-100">
      <h4 className="text-center mb-8 text-stone-600 text-2xl font-semibold">
        Log in to your account
      </h4>

      <LoginForm />
    </div>
  );
}

export default Login;
