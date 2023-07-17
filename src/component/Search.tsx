import React, { useState } from "react";
import Profile from "./Profile";

interface Item {
  id: number;
  name: string;
  imageUrl: string;
  heading: string;
  phone: string;
  url: string;
  email: string;
}

interface SearchProps {
  items: Item[];
}

const styles = {
  inputContainer: "relative w-1/2",
  input: "p-4 pl-12 rounded-t-lg border-b-2 w-full",
  searchIcon: "h-6 w-6 absolute top-4 left-3 text-gray-500",
  container: "items-center flex flex-col",
  resultContainer: "w-1/2 bg-white rounded-b-lg flex",
  resultList: "w-6/12 p-4",
  itemContainer: "w-6/12",
};

const Search: React.FC<SearchProps> = ({ items }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSelect = (item: Item) => {
    setSelectedItem(item);
  };

  const results = !searchTerm
    ? items
    : items.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      );

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Spotlight Search"
          value={searchTerm}
          onChange={handleChange}
          className={styles.input}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={styles.searchIcon}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-6a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <div className={styles.resultContainer}>
        <div className={styles.resultList}>
          <ul>
            {results.map((item) => (
              <li
                className={`flex items-center justify-between space-x-4 p-2 cursor-pointer ${
                  selectedItem === item
                    ? "bg-gray-200 rounded-lg p-2 pr-4"
                    : ""
                }`}
                onClick={() => handleSelect(item)}
                key={item.id}
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.imageUrl}
                    alt="description"
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-lg">{item.name}</span>
                </div>
                {selectedItem === item && <span>&gt;</span>}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.itemContainer}>
          <Profile item={selectedItem} />
        </div>
      </div>
    </div>
  );
};

export default Search;
