import { useSelector } from "react-redux";
import CreateUser from "../UI/CreateUser";
import { AppState } from "../user/store";
import { Link } from "react-router";

function Login() {
  const username = useSelector((state: AppState) => state.user.username);

  return (
    <>
      {username === "" ? (
        <CreateUser />
      ) : (
        <div className="dark:bg-zinc-700 h-screen w-full flex items center justify-center place-items-center">
          <div className="flex flex-col items-center justify-center p-4 rounded shadow shadow-indigo-700/50 font-bold dark:text-gray-300 dark:bg-zinc-900">
            <Link to="/dashboard">
              &larr; Return to your Dashboard {username}
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
