import { useState } from "react";

export default function SearchBar(props) {
  const [character, setCharacter] = useState(0);

  const handleSearch = (event) => {
    let { value } = event.target;
    setCharacter(value);
  };

  return (
    <div>
      <input type="search" onChange={handleSearch} />
      <button onClick={() => props.onSearch(character)}>
        Add
      </button>
      <button onClick={props.random}>
        Random Character
      </button>
    </div>
  );
}