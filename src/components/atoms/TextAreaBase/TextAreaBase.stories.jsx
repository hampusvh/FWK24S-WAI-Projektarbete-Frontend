import { useRef, useEffect } from "react";
import TextAreaBase from "./TextAreaBase";

export default {
  title: "Atoms/TextAreaBase",
  component: TextAreaBase,
};

const Container = ({ children }) => (
  <div style={{ maxWidth: "600px" }}>{children}</div>
);

export const Placeholder = () => (
  <Container>
    <TextAreaBase placeholder="Skriv här..." />
  </Container>
);

export const Prefilled = () => {
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      ref.current.innerText =
        "3 november 2025\n\n" +
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, odio facilis! Numquam nobis adipisci necessitatibus unde consectetur velit architecto quo? Numquam alias adipisci, repellendus dolore quod maxime expedita non exercitationem?";
    } 
  }, []);

  return (
    <Container>
      <TextAreaBase ref={ref} placeholder="Skriv här..." />
    </Container>
  );
};

export const NoPlaceholder = () => (
  <Container>
    <TextAreaBase />
  </Container>
);
