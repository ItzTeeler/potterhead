import React from "react";

const ModalComponent = (props: { character: any; onClose: any }) => {
  if (!props.character) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto">
      <div className="relative bg-white p-6 rounded-lg max-w-lg w-full max-h-screen overflow-y-auto flex flex-col">
        <button
          className="absolute top-2 right-2 text-black bg-white rounded-full p-1"
          onClick={props.onClose}
        >
          &times;
        </button>
        <div className="flex flex-col md:flex-row items-center">
          <img
            src={props.character.image || "/qquestionmark.jpg"}
            alt={props.character.name}
            className="w-full md:w-1/2 h-[200px] md:h-[300px] object-cover mb-4 md:mb-0 rounded-[10px] md:mr-4"
          />
          <div className="flex flex-col items-start">
            <h2 className="text-2xl font-bold mb-4">{props.character.name}</h2>
            <p>
              {props.character.alive === true ? "I'm ALIVE" : "I'm Dead..."}
            </p>
            <p>Gender: {props.character.gender}</p>
            <p>House: {props.character.house}</p>
            <p>Hair Color: {props.character.hairColour}</p>
            <p>Date of Birth: {props.character.dateOfBirth}</p>
            <p>Species: {props.character.species}</p>
            <div>
              <p>Wand</p>
              <ul className="list-disc ml-5">
                <li>Core: {props.character.wand?.core}</li>
                <li>Length: {props.character.wand?.length}</li>
                <li>Wood: {props.character.wand?.wood}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
