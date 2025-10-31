import TextAreaBase from "./TextAreaBase";

export default {
  title: "Atoms/TextAreaBase",
  component: TextAreaBase,
};

export const Default = () => {
  return (
    <div style={{ maxWidth: "600px" }}>
      <TextAreaBase placeholder="Skriv här..." />
    </div>
  );
};
