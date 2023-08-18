import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

const year = new Date().getFullYear();

function App() {
  return (
    <div>
      <Header header="Keeper App" />
      {notes.map((note) => (
        <Note title={note.title} content={note.content} />
      ))}
      ;
      <Footer year={`Copyright ${year}`} />
    </div>
  );
}

export default App;
