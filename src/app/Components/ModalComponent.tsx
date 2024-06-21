import React from 'react'

const ModalComponent = (props: { character: any, onClose:any }) => {
    if (!props.character) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto">
      <div className="bg-white p-6 rounded-lg max-w-md w-full max-h-screen overflow-y-auto">
        <button className="text-right mb-4" onClick={props.onClose}>Close</button>
        <img src={props.character.image || "/qquestionmark.jpg"} alt={props.character.name} className="w-full h-auto mb-4 rounded-[10px]" />
        <h2 className="text-2xl font-bold mb-4">{props.character.name}</h2>
        <p>{props.character.alive === true ? "I'm ALIVE" : "I'm Dead..."}</p>
        <p>{props.character.gender}</p>
        <p>{props.character.house}</p>
        <p>{props.character.hairColour}</p>
        <p>{props.character.dateOfBirth}</p>
        <p>{props.character.species}</p>
      </div>
    </div>
  )
}

export default ModalComponent
