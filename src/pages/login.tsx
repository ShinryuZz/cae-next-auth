import { useAuthContext } from "../context/AuthContext";

export default function LoginPage() {
  const { login } = useAuthContext();

  const handleLogin = () => {
    login();
  };

  return (
    <div className="flex flex-col max-w-lg mx-auto bg-white p-8 mt-40 gap-1 rounded-xl shadow shadow-slate-300">
      <h1 className="text-3xl font-medium">Sign in</h1>
      <p className="text-slate-500">Hi, Welcome 👋</p>

      <div className="flex">
        <button
          onClick={handleLogin}
          className="w-full text-center gap-1 py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150"
        >
          <img src="google.png" alt="google-logo" width={24} height={24} />
          <span>Sign in with Google</span>
        </button>
      </div>
    </div>
  );
}
