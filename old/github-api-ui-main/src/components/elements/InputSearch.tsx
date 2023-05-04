import { useState } from "react";
import UserItem from "./UserItem";

export type Users = [
  user: {
    id: number;
    login: string;
    avatar_url: string;
  }
];

function InputSearch() {
  const [text, setText] = useState("");
  const [users, setUsers] = useState<Users | []>([]);

  const getUser = async (text: string) => {
    const params = new URLSearchParams({
      q: text,
    });

    const res = await fetch(
      `${import.meta.env.VITE_GITHUB_URL}/search/users?${params}`,
      {
        headers: {
          Authorization: `token ${import.meta.env.VITE_GITHUB_API_TOKEN}`,
        },
      }
    );

    const { items } = await res.json();

    console.log(items);

    setUsers(items);
  };

  const handleClear = () => {
    setUsers([]);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <form
        className="flex"
        onSubmit={(e) => {
          e.preventDefault();
          if (text) {
            getUser(text);
          }
        }}
      >
        <input
          type="text"
          className="w-full pr-40 bg-gray-200 input input-lg text-black rounded-r-none "
          placeholder="Search"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button
          className="rounded-l-none w-36 btn btn-lg bg-primary border-none"
          type="submit"
        >
          Find
        </button>
        {users.length > 0 && (
          <button className="btn btn-ghost btn-lg " onClick={handleClear}>
            Clear Results
          </button>
        )}
      </form>
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => {
          return <UserItem key={user.id} user={user} />;
        })}
      </div>
    </div>
  );
}

export default InputSearch;
