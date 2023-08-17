import React from "react";
import DictionaryCard from "./DictionaryCard";
import emojipedia from "../emojipedia";

function CreateCard(emoji) {
  return (
    <DictionaryCard
      key={emoji.id}
      emoji={emoji.emoji}
      name={emoji.name}
      meaning={emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(CreateCard)}</dl>
    </div>
  );
}

export default App;
