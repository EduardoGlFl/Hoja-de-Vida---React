import React, {useEffect} from 'react'
import axios from 'axios';
import { Section,SectionTitle, TextLocation, TextEmail, TextGithub, TextPortafolio} from './GeneralInfoStyles';

const GenaralInfo = () => {

  useEffect(() => {
    getUser();
  }, []);

  const [users, setUser] = React.useState();

  const getUser = () => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  };


  return (
    <div>
      {users &&
        users.map((users) => (
          <Section>
            <SectionTitle>General Information: </SectionTitle>
            <TextLocation>
              Location: <br />
              {users.address.city}, {users.address.state} , {users.address.country}
            </TextLocation>
            <TextPortafolio>
              Portafolio: <br />
              <a href="https://eduardo-weeb.netlify.app/">
                {users.enlaces.portafolio}
              </a>
            </TextPortafolio>
            <TextEmail>
              Email: <br />
              {users.enlaces.mail}
            </TextEmail>
            <TextGithub>
              Github: <br />
              <a href="https://github.com/EduardoGlFl">
                {users.enlaces.github}
              </a>
            </TextGithub>
          </Section>
        ))}
    </div>
  );
}

export default GenaralInfo