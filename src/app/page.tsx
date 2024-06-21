'use client'

import { harryCharacters } from "@/Utils/DataService";
import { useEffect, useState } from "react";
import NavBarComponent from "./Components/NavBarComponent";
import ModalComponent from "./Components/ModalComponent";

export default function Home() {

  const [characterData, setCharacterData] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const getData = async () => {
      const characters = await harryCharacters();
      setCharacterData(characters);
      setFilteredCharacters(characters);
      console.log(characters);
    };
    getData();
  }, []);

  const handleCharacterClick = (character :any) => {
    setSelectedCharacter(character);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCharacter(null);
  };

  const handleSearchChange = (e:any) => {
    const value = e.target.value;
    setSearchValue(value);
    const filtered = characterData.filter((character: any) =>
      character.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCharacters(filtered);
  };
  return (
    <>
      <NavBarComponent searchValue={searchValue} onSearchChange={handleSearchChange} />
      <div className="px-10 pb-10 pt-20">
        <div className="grid grid-cols-5 gap-5 text-center">
          {filteredCharacters.length > 0 ? (
            filteredCharacters.map((character: any, index: number) => (
              <div
                key={index}
                className="bg-white m-5 pb-6 border border-gray-200 rounded cursor-pointer"
                onClick={() => handleCharacterClick(character)}
              >
                <img
                  src={character.image === "" ? "/qquestionmark.jpg" : character.image}
                  alt={character.name || 'Question Mark'}
                  className="w-full h-full object-cover rounded-tr-sm rounded-tl-sm"
                  width={150}
                  height={150}
                />
                <p>{character.name}</p>
              </div>
            ))
          ) : (
            <p>Loading characters...</p>
          )}
        </div>
      </div>

      {isModalOpen && <ModalComponent character={selectedCharacter} onClose={closeModal} />}
    </>
  );
}
