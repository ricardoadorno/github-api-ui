import React from "react";
import { useState } from "react";

function InputSearch() {
  const [text, setText] = useState("");

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (text) {
            setText("");
          }
        }}
      >
        <div className="form-control">
          <div className="relative">
            <input
              type="text"
              className="w-full pr-40 bg-gray-200 input input-lg text-black"
              placeholder="Search"
              value={text}
              onChange={(event) => setText(event.target.value)}
            />
            <button
              className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
              type="submit"
            >
              Go
            </button>
          </div>
        </div>
      </form>
      {/* {users.length > 0 && (
        <div>
          <button className="btn btn-ghost btn-lg" onClick={handleClear}>
            Clear
          </button>
        </div>
      )} */}
    </div>
  );
}

export default InputSearch;
