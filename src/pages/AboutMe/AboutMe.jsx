import React from "react";

import { StyledMain, StyledMainWrapper } from "./AboutMe.styles";

import { Section, Title, SubTitle, Paragraph } from "../../components";

function AboutMe() {
  return (
    <StyledMain>
      <StyledMainWrapper>
        <Section>
          <Title>Acerca de mí</Title>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
            perspiciatis minima? Nihil consequuntur ducimus officia obcaecati
            aperiam aspernatur soluta sequi magnam aliquam. Alias velit quod
            tempore itaque fugit optio sed.
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
            perspiciatis minima? Nihil consequuntur ducimus officia obcaecati
            aperiam aspernatur soluta sequi magnam aliquam. Alias velit quod
            tempore itaque fugit optio sed.
          </Paragraph>
          <SubTitle>Lorem, ipsum dolor.</SubTitle>
          <Paragraph>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut odio
            explicabo qui consectetur adipisci rerum, est excepturi quos porro
            mollitia debitis ipsam reiciendis repellendus nemo quam alias quasi
            architecto error nostrum iusto. Ipsum possimus enim error ipsam quod
            nam beatae veritatis dolor sit accusantium expedita officia unde ab
            neque recusandae rerum quibusdam dicta, autem laboriosam quo a
            molestiae. Natus quae rem quod, quidem odit nam dicta quibusdam
            ipsum culpa porro, aspernatur cupiditate dolorem vel voluptas,
            minima ipsa aliquam consectetur distinctio blanditiis quas
            exercitationem commodi eligendi sit veritatis. Libero recusandae
            quia placeat animi voluptates illo cupiditate! Ex voluptatum
            molestiae ab quis?
          </Paragraph>
        </Section>
      </StyledMainWrapper>
    </StyledMain>
  );
}

export default AboutMe;
