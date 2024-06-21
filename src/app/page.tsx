"use client";

import { harryCharacters } from "@/Utils/DataService";
import { useEffect, useState } from "react";
import NavBarComponent from "./Components/NavBarComponent";
import ModalComponent from "./Components/ModalComponent";

export default function Home() {
  const [characterData, setCharacterData] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [selectedHouse, setSelectedHouse] = useState("");

  useEffect(() => {
    const getData = async () => {
      const characters = await harryCharacters();
      setCharacterData(characters);
      setFilteredCharacters(characters);
      console.log(characters);
    };
    getData();
  }, []);

  const handleCharacterClick = (character: any) => {
    setSelectedCharacter(character);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCharacter(null);
  };

  const handleSearchChange = (e: any) => {
    const value = e.target.value;
    setSearchValue(value);
    const filtered = characterData.filter((character: any) =>
      character.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCharacters(filtered);
  };

  const filterByHouse = (house: any) => {
    setSelectedHouse(house);
    if (house === "") {
      setFilteredCharacters(characterData);
    } else {
      const filtered = characterData.filter(
        (character: any) => character.house === house
      );
      setFilteredCharacters(filtered);
    }
  };
  return (
    <>
      <NavBarComponent
        searchValue={searchValue}
        onSearchChange={handleSearchChange}
      />
      <div className="px-10 pb-10 pt-[150px]">
        <div className="flex justify-center mb-4">
          <button
            className={`mr-2 py-1 px-3 rounded-md ${
              selectedHouse === "" ? "bg-blue-500 text-white" : "bg-gray-300"
            }`}
            onClick={() => filterByHouse("")}
          >
            All
          </button>
          <button
            className={`mr-2 py-1 px-3 rounded-md ${
              selectedHouse === "Gryffindor"
                ? "bg-red-500 text-white"
                : "bg-gray-300"
            }`}
            onClick={() => filterByHouse("Gryffindor")}
          >
            Gryffindor
          </button>
          <button
            className={`mr-2 py-1 px-3 rounded-md ${
              selectedHouse === "Slytherin"
                ? "bg-green-500 text-white"
                : "bg-gray-300"
            }`}
            onClick={() => filterByHouse("Slytherin")}
          >
            Slytherin
          </button>
          <button
            className={`mr-2 py-1 px-3 rounded-md ${
              selectedHouse === "Ravenclaw"
                ? "bg-blue-500 text-white"
                : "bg-gray-300"
            }`}
            onClick={() => filterByHouse("Ravenclaw")}
          >
            Ravenclaw
          </button>
          <button
            className={`mr-2 py-1 px-3 rounded-md ${
              selectedHouse === "Hufflepuff"
                ? "bg-yellow-500 text-white"
                : "bg-gray-300"
            }`}
            onClick={() => filterByHouse("Hufflepuff")}
          >
            Hufflepuff
          </button>
        </div>
        <div className="grid grid-cols-5 gap-5 text-center">
          {filteredCharacters.length > 0 ? (
            filteredCharacters.map((character: any, index: any) => (
              <div
                key={index}
                className="bg-white m-5 pb-6 border-2 border-black rounded cursor-pointer hover:ring-4 ring-white"
                onClick={() => handleCharacterClick(character)}
              >
                <img
                  src={
                    character.image === ""
                      ? "/qquestionmark.jpg"
                      : character.image
                  }
                  alt={character.name || "Question Mark"}
                  className="w-full h-full object-cover rounded-tr-sm rounded-tl-sm"
                  width={150}
                  height={150}
                />
                <p className="bg-black text-white">{character.name}</p>
              </div>
            ))
          ) : (
            <p>Loading characters...</p>
          )}
        </div>
      </div>

      {isModalOpen && (
        <ModalComponent character={selectedCharacter} onClose={closeModal} />
      )}
    </>
  );
}
