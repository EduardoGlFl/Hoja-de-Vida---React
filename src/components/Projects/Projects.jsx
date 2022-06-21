import React, {useEffect} from 'react';
import axios from 'axios';
import { SectionTitle } from "../../styles/GeneralComponents";
import { SectionProjects, Img, GridContainer, BlogCard, TitleContent, HeaderThree, Hr, Intro, CardInfo, UtilityList, ExternalLinks, TagList, Tag } from './ProjectsStyles';

const Achievements = () => {

  useEffect(() => {
    getUser();
  }, []);

  const [users, setUser] = React.useState();

  const getUser = () => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => {
        setUser(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };


  return (
    <div>
      <SectionProjects id="projects">
        <SectionTitle main> Projects </SectionTitle>
        <GridContainer>
          {users &&
            users.map((users) => (
              <><BlogCard key={users.projects.id}>
                <Img src={users.projects.image} />
                <TitleContent>
                  <HeaderThree>{users.projects.title}</HeaderThree>
                  <Hr />
                </TitleContent>
                <CardInfo>{users.projects.description}</CardInfo>
                <div>
                  <TitleContent>Stack</TitleContent>
                  <TagList>
                    {users.projects.tags.map((tag, i) => (
                      <Tag key={i}>{tag}</Tag>
                    ))}
                  </TagList>
                </div>
                <UtilityList>
                  {/* <ExternalLinks href={visit}> Code </ExternalLinks> */}
                  <ExternalLinks href={users.projects.source}> Visit </ExternalLinks>
                </UtilityList>
              </BlogCard><BlogCard key={users.projects2.id}>
                  <Img src={users.projects2.image} />
                  <TitleContent>
                    <HeaderThree>{users.projects2.title}</HeaderThree>
                    <Hr />
                  </TitleContent>
                  <CardInfo>{users.projects2.description}</CardInfo>
                  <div>
                    <TitleContent>Stack</TitleContent>
                    <TagList>
                      {users.projects2.tags.map((tag, i) => (
                        <Tag key={i}>{tag}</Tag>
                      ))}
                    </TagList>
                  </div>
                  <UtilityList>
                    {/* <ExternalLinks href={visit}> Code </ExternalLinks> */}
                    <ExternalLinks href={users.projects2.source}> Visit </ExternalLinks>
                  </UtilityList>
                </BlogCard></>
            ))}
        </GridContainer>
      </SectionProjects>
    </div>
  );
}

export default Achievements