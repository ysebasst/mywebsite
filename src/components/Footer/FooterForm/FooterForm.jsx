import React from "react";

import { StyledFormTitle } from "./FooterForm.styles";

import { Form, Input, Textarea, Button } from "../../../components";

function FooterForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviado");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <StyledFormTitle>Enviame un correo</StyledFormTitle>
      <Input type="text" placeholder="Nombre" />
      <Input type="email" placeholder="Email" />
      <Input type="text" placeholder="Asunto" />
      <Textarea rows="3" placeholder="Mensaje"></Textarea>
      <Button type="submit">Enviar</Button>
    </Form>
  );
}

export default FooterForm;
