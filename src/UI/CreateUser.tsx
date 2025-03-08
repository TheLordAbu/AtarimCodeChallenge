import { useDispatch } from "react-redux";
import { AppDispatch } from "../user/store";
import { updateName } from "../user/userSlice";
import React, { useState } from "react";
import { useNavigate } from "react-router";

function CreateUser() {
  const [username, setUsername] = useState("");
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  function handleSubmit(evt: React.FormEvent) {
    evt.preventDefault();
    if (!username) return;
    dispatch(updateName(username));
    navigate("/dashboard");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="dark:bg-zinc-900 rounded-2xl shadow px-10 py-10 shadow-indigo-900/50 max-w-10/12 md:max-w-5/12 mx-auto mt-50 dark:text-gray-200"
    >
      <h2 className="mb-4 text-3xl font-bold w-full">
        Welcome, Start by entering your name:
      </h2>
      <input
        type="text"
        placeholder="Please enter your name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border rounded px-4 py-3 w-full text-lg"
      />
    </form>
  );
}

export default CreateUser;
