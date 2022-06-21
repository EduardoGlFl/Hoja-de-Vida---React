import React, {useEffect} from 'react';
import axios from 'axios';
import {SectionTitle } from '../../styles/GeneralComponents';
import { SectionAcademic, TextHighSchool, TextUniversity } from './AcademicInfoStyles';

const AcademicInfo = () => {

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
          <SectionAcademic>
            <SectionTitle>Academic Information:</SectionTitle>
            <TextHighSchool>
              🔹{users.academic.institution} &#40; {users.academic.date}&#41;
              <br />
              🎓{users.academic.degree}
              <br />
              👨‍🔬{users.academic.major}
            </TextHighSchool>
            <TextUniversity>
              🔹{users.college.institution}&#40;{users.college.date}&#41;
              <br />
              🎓{users.college.degree}
              <br />
              👨‍💻{users.college.major}
            </TextUniversity>
          </SectionAcademic>
        ))}
    </div>
  );
}

export default AcademicInfo;