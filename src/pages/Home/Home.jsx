import React from "react";

import {
  StyledMain,
  StyledMainWrapper,
  StyledInfo,
  StyledInfoIcon,
  StyledInfoText,
  StyledAside,
  StyledContent,
} from "./Home.styles";

import {
  Section,
  Article,
  Title,
  SubTitle,
  Paragraph,
  LinkHTML,
  List,
  ListItem,
} from "../../components";

import iconGithub from "../../assets/images/icon-github.svg";
import iconLinkedin from "../../assets/images/icon-linkedin.svg";
import iconTwitter from "../../assets/images/icon-twitter.svg";

function Home() {
  return (
    <StyledMain>
      <StyledMainWrapper>
        <StyledAside>
          <Section>
            <Title>Perfil profesional</Title>
            <Paragraph>
              Gran motivación para seguir perfeccionando habilidades y crecer
              profesionalmente. Confío plenamente en mi capacidad de crear e
              implementar soluciones de software a los problemas propuestos.
            </Paragraph>
          </Section>
          <Section>
            <Title>Contacto</Title>
            <LinkHTML href="https://github.com/ysebasst">
              <StyledInfo>
                <StyledInfoIcon src={iconGithub} />
                <StyledInfoText>github.com/ysebasst</StyledInfoText>
              </StyledInfo>
            </LinkHTML>
            <LinkHTML href="https://www.linkedin.com/in/sebastian-sierra-382858208/">
              <StyledInfo>
                <StyledInfoIcon src={iconLinkedin} />
                <StyledInfoText>Sebastian Sierra</StyledInfoText>
              </StyledInfo>
            </LinkHTML>
            <LinkHTML href="https://twitter.com/ysebasst">
              <StyledInfo>
                <StyledInfoIcon src={iconTwitter} />
                <StyledInfoText>@ysebasst</StyledInfoText>
              </StyledInfo>
            </LinkHTML>
          </Section>
          <Section>
            <Title>Educación</Title>
            <Paragraph>
              Estudiante en Servicio Nacional de Aprendizaje (SENA)
            </Paragraph>
          </Section>
        </StyledAside>
        <StyledContent>
          <Section>
            <Title>Habilidades</Title>
            <Article>
              <SubTitle>Lenguajes de programación</SubTitle>
              <List>
                <ListItem>HTML5 | pug, ejs, Jinja2</ListItem>
                <ListItem>CSS3 | Sass</ListItem>
                <ListItem>JavaScript | React, Vue, ECMAScript</ListItem>
                <ListItem>Node.js | express, mongoose, morgan</ListItem>
                <ListItem>Python | Django, Flask</ListItem>
              </List>
            </Article>
            <Article>
              <SubTitle>Bases de datos</SubTitle>
              <List>
                <ListItem>MongoDB</ListItem>
                <ListItem>MySQL</ListItem>
                <ListItem>SQLite3</ListItem>
              </List>
            </Article>
            <Article>
              <SubTitle>Conocimientos basicos</SubTitle>
              <List>
                <ListItem>Svelte</ListItem>
                <ListItem>Angular</ListItem>
                <ListItem>C++</ListItem>
                <ListItem>Java</ListItem>
                <ListItem>PHP</ListItem>
              </List>
            </Article>
          </Section>
          <Section>
            <Title>Experiencia laboral</Title>
            <Article>
              <SubTitle margin=".5rem" color="secondary">
                Farmatodo, Test Automation Engineer
              </SubTitle>
              <Paragraph margin="0">OCT 2021 - Actualidad</Paragraph>
              <List>
                <ListItem>
                  Automatización de pruebas pagina web, apps iOS y Android.
                </ListItem>
                <ListItem>
                  Realización de pruebas a entornos web, iOS y Android.
                </ListItem>
              </List>
            </Article>
          </Section>
        </StyledContent>
      </StyledMainWrapper>
    </StyledMain>
  );
}

export default Home;
