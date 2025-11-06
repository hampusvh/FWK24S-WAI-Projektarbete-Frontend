import React, { useState } from "react";
import Dialog from "./Dialog";
import Button from "../../atoms/Button/Button";

export default {
  title: "Molecules/Dialog",
  component: Dialog,
};

const Template = (args) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
      {isOpen && <Dialog {...args} onClose={handleClose} />}
    </>
  );
};

export const SimpleText = Template.bind({});
SimpleText.args = {
  children: <p>Hej! Detta är en enkel dialog med text. Klicka på den mörka bakgrunden för att stänga dialogen.</p>,
};

export const WithTitleAndActions = Template.bind({});
WithTitleAndActions.args = {
  title: "Viktigt meddelande",
  children: <p>Detta är en dialog med titel och action-knappar.</p>,
  actions: (
    <>
      <Button onClick={() => alert("Avbryt")}>Avbryt</Button>
      <Button onClick={() => alert("Bekräfta")} variant="primary">Bekräfta</Button>
    </>
  ),
};

export const ClickOverlayToClose = Template.bind({});
ClickOverlayToClose.args = {
  title: "Klicka utanför för att stänga",
  children: <p>Klicka på den mörka bakgrunden för att stänga dialogen.</p>,
};
