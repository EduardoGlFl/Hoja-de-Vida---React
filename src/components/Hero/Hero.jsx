import axios from 'axios';
import React, {useEffect} from 'react';
import {Section, SectionText, SectionTitle, StyledImage} from "./HeroStyles";

const Hero = () => {

  useEffect(() => {
    getUser();
  }, []);

  const [users, setUser] =React.useState();

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
      {users &&
        users.map((users) => (
          <Section>
            <SectionTitle>
              {users.firstName} {users.lastName} <br />
              {users.position}
            </SectionTitle>
            <SectionText>
              {users.description}
            </SectionText>
            <StyledImage
              src={users.photo}
              alt="Photo"
            />
          </Section>
        ))}
    </div>
  );
}

export default Hero;