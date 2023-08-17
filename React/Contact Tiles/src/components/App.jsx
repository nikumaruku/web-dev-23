import React from "react";
import Card from "./Card";
import contacts from "../contacts";

const firstContact = contacts[0];
const secondContact = contacts[1];
const thirdContact = contacts[2];

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name={firstContact.name}
        img={firstContact.imgURL}
        phone={firstContact.phone}
        email={firstContact.email}
      />
      <Card
        name={secondContact.name}
        img={secondContact.imgURL}
        phone={secondContact.phone}
        email={secondContact.email}
      />
      <Card
        name={thirdContact.name}
        img={thirdContact.imgURL}
        phone={thirdContact.phone}
        email={thirdContact.email}
      />
    </div>
  );
}

export default App;
