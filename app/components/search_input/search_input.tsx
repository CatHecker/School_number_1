import { useRef, useState } from "react";
import "./search_input.scss";
import { FaSearch } from "react-icons/fa";

export function SearchInput() {
  const [input_opened, set_input] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOpen = () => {
    if (!input_opened) {
      set_input(true);
      if (inputRef && inputRef.current) inputRef.current.focus();
    }
  };

  const handleClose = () => {
    set_input(false);
  };

  return (
    <div className="search_block">
      <button className="search_button" onClick={handleOpen}>
        <FaSearch
          className={`search_icon ${input_opened ? "icon_opened" : "icon_closed"}`}
        />
      </button>
      <input
        ref={inputRef}
        className={`search_input ${input_opened ? "search_opened" : ""}`}
        type="text"
        onBlur={handleClose}
        placeholder="..."
      />
    </div>
  );
}
