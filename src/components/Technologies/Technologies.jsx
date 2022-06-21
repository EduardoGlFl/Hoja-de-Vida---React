import React from 'react';

import { DiLinux, DiReact, DiLaravel, DiAngularSimple,DiHtml5,DiCss3, DiJavascript } from "react-icons/di";
import { SiApache, SiAdobexd, SiFigma, SiAdobephotoshop } from "react-icons/si";
import { SectionTitle } from "../../styles/GeneralComponents";
import {SectionTech, TextTechnologies, ImageContainer, MainImage, List, ListContainer, ListTitle, ListParagraph, ListItem, ListIcon
} from "./TechnologiesStyles";


const Technologies = () => {
  return (
    <SectionTech id="tech">
      <SectionTitle main>Technologies</SectionTitle>
      <TextTechnologies>
        I've worked with a range a technologies in the web development world.
        From front-end to back-end, I've used the following technologies: 
      </TextTechnologies>
      <List>
        <ListItem>
          <picture>
            <DiHtml5 size="3rem" />
            <DiCss3 size="3rem" />
            <DiReact size="3rem" />
            <DiAngularSimple size="3rem" />
          </picture>
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Experience with technologies like HTML5, CSS3, Javascript and
              React
            </ListParagraph>
          </ListContainer>
        </ListItem>

        <ListItem>
          <picture>
            <DiLaravel size="3rem" />
            <DiLinux size="3rem" />
            <SiApache size="3rem" />
          </picture>
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Experience with technologies like Laravel, MySQL, Linux
              and Apache
            </ListParagraph>
          </ListContainer>
        </ListItem>

        <ListItem>
          <picture>
            <SiAdobexd size="3rem" />
            <SiFigma size="3rem" />
            <SiAdobephotoshop size="3rem" />
          </picture>
          <ListContainer>
            <ListTitle>Design</ListTitle>
            <ListParagraph>
              Experience with design tools like Adobe XD, Figma and Photoshop
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
    </SectionTech>
  );
}

export default Technologies