import React, {useEffect} from 'react'
import axios from 'axios'
import { SectionTitle } from '../../styles/GeneralComponents'
import { SectionWork, TextWorkTitle,TextWorkEmployee, TextWorkDescription } from './WorkHistoryStyles'

const WorkHistory = () => {

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
      {users &&
        users.map((users) => (
          <SectionWork>
            <SectionTitle>Work History:</SectionTitle>
            <TextWorkTitle>
              {users.work.title} &#40; {users.work.date} &#41;
            </TextWorkTitle>
            <TextWorkEmployee>
              {users.work.company}
            </TextWorkEmployee>
            <TextWorkDescription>
              🔹{users.work.task}
              <br />
              🔹{users.work.task2}
              <br />
              🔹{users.work.task3}
            </TextWorkDescription>
          </SectionWork>
        ))}
    </div>
  );
}

export default WorkHistory