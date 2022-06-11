import React, { useState } from "react";
import Dialog from "./Dialog";
import Input from "./Input";
import Item from "./Item";

const Form = ({ data, setData }) => {
  const [isAdded, setIsAdded] = useState(false);
  const [editedItemID, setEditedItemID] = useState();
  const [isEditing, setIsEditing] = useState(false);

  function createNewItem(text) {
    const id = new Date().valueOf();
    setData([...data, { id, text }]);
    setIsAdded(true);
  }

  function editItem(text) {
    const selectedItem = data.find((item) => item.id == editedItemID);
    selectedItem.text = text;
    setData([...data]);
    setIsEditing(false);
  }

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <h2 className="form__title">Grocery Bud</h2>
      <Input
        createNewItem={createNewItem}
        editItem={editItem}
        isEditing={isEditing}
      />
      {isAdded && (
        <Dialog text={"Item successfully added"} setIsAdded={setIsAdded} />
      )}
      <ul className="form__list">
        {data.map((item) => (
          <Item
            key={item.id}
            {...item}
            removeItem={(id) => {
              setData(data.filter((item) => item.id !== id));
            }}
            getEditedItemID={(id) => {
              setIsEditing(true);
              setEditedItemID(id);
            }}
          />
        ))}
      </ul>
    </form>
  );
};

export default Form;
