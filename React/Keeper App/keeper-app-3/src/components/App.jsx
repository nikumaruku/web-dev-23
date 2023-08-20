import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notez, setNotez] = useState([]);

  function addNote(note) {
    setNotez((prevNote) => {
      return [...prevNote, note];
    });
  }

  function deleteNote(id) {
    setNotez((prevNote) => {
      return prevNote.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notez.map((noteItem, index) => {
        return (
          <Note
            key={index}
            index={index}
            title={noteItem.title}
            content={noteItem.content}
            delete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
