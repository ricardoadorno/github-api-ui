import React from "react";
import InputSearch from "../layout/InputSearch";

function Search() {
  return (
    <div>
      <div className="flex flex-col justify-between h-screen ">
        <main className="container mx-auto px-3 pb-12">
          <InputSearch />
        </main>
      </div>
    </div>
  );
}

export default Search;
