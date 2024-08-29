import SignupForm from "../features/authentication/SignupForm";

function Signup() {
  return (
    <main className="grid place-content-center h-dvh bg-purple-100">
      <h4 className="text-center mb-8 text-stone-600 text-2xl font-semibold">
        Sign up to use the app
      </h4>
      <SignupForm />
    </main>
  );
}

export default Signup;
