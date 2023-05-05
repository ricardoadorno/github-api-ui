import { FaSearch } from "react-icons/fa";
import Card from "./Card";
import { useState, useRef } from "react";

type User = {
  login: string;
  avatar_url: string;
};

export default function SearchPage() {
  const [text, setText] = useState("");
  const [users, setUsers] = useState<User[] | null>(null);

  const getUser = async (text: string) => {
    const params = new URLSearchParams({
      q: text,
    });

    const res = await fetch(`https://api.github.com/search/users?${params}`, {
      headers: {
        Authorization: `token ${import.meta.env.VITE_GITHUB_API_TOKEN}`,
      },
    }).then((res) => res.json());

    console.log(res.items);

    setUsers(res.items);
  };

  const clearUsers = () => {
    setUsers(null);
    setText("");
  };

  return (
    <div className="flex flex-col w-9/12 m-auto gap-4 mt-4">
      <div>
        <label className="label" htmlFor="search">
          <span className="label-text text-2xl font-bold ">Search:</span>
        </label>
        <div className="flex flex-row ">
          <input
            name="search"
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-sm rounded-r-none border-r-0 focus:outline-none"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
          <button
            onClick={() => {
              getUser(text);
            }}
            className="btn btn-primary rounded-l-none "
          >
            Search
          </button>
          <button onClick={clearUsers} className="btn btn-outline ml-4">
            Clear
          </button>
        </div>
      </div>

      <div className="bg-purple-900 rounded-xl flex flex-col justify-center gap-4 py-4">
        {users ? (
          <>
            <div className="flex flex-row justify-center gap-4 flex-wrap ">
              {users ? (
                users.map((user) => {
                  return <Card user={user} />;
                })
              ) : (
                <div>No Users Found</div>
              )}
            </div>
          </>
        ) : (
          <>
            {" "}
            <FaSearch className="text-5xl text-slate-300 self-center" />
            <p className="text-2xl text-slate-400 text-center">
              Search to a find a user
            </p>
          </>
        )}
      </div>
    </div>
  );
}
