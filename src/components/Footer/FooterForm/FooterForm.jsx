import { useState } from "react";

import {
  StyledFormTitle,
  Modal,
  ModalButtonClose,
  ModalInfo,
} from "./FooterForm.styles";

import { Form, Input, Textarea, Button } from "../../../components";

import { useInput } from "../../../hooks/useInput";

function FooterForm() {
  const [name, handleChangeName] = useInput("");
  const [email, handleChangeEmail] = useInput("");
  const [subject, handleChangeSubject] = useInput("");
  const [message, handleChangeMessage] = useInput("");
  const resetInput = { target: { value: "" } };

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowModal(true);
    if (name && email && subject && message) {
      const data = {
        name,
        email,
        subject,
        message,
      };
      try {
        setModalMessage("Enviando mensaje");
        handleChangeName(resetInput);
        handleChangeEmail(resetInput);
        handleChangeSubject(resetInput);
        handleChangeMessage(resetInput);
        const res = await fetch("https://ysst-api.herokuapp.com/api/v1/email", {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(data),
        });
        const resJSON = await res.json();
        setShowModal(true);
        if (resJSON.msg === "Mensaje enviado") {
          setModalMessage("Mensaje enviado satisfactoriamente");
        } else {
          setModalMessage("Error al enviar el correo intentelo mas tarde");
        }
      } catch (error) {
        console.log(error);
        setShowModal(true);
        setModalMessage("Error al enviar el correo intentelo mas tarde");
      }
    } else {
      setModalMessage(
        "Introduzca todos los datos correctamente para continuar"
      );
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <StyledFormTitle>Enviame un correo</StyledFormTitle>
        <Input
          type="text"
          name="name"
          placeholder="Nombre"
          value={name}
          onChange={handleChangeName}
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChangeEmail}
        />
        <Input
          type="text"
          name="subject"
          placeholder="Asunto"
          value={subject}
          onChange={handleChangeSubject}
        />
        <Textarea
          name="message"
          rows="3"
          placeholder="Mensaje"
          value={message}
          onChange={handleChangeMessage}
        />
        <Button type="submit">Enviar</Button>
      </Form>
      <Modal show={showModal} className={showModal ? "show" : ""}>
        <ModalButtonClose
          role="button"
          aria-label="close button"
          onClick={() => setShowModal(false)}
        >
          X
        </ModalButtonClose>
        <ModalInfo>
          <h3>{modalMessage}</h3>
          <Button onClick={() => setShowModal(false)}>Aceptar</Button>
        </ModalInfo>
      </Modal>
    </>
  );
}

export default FooterForm;
