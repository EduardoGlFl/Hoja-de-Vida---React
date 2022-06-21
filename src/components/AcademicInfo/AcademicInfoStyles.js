import styled from "styled-components";
import {Section, Text} from "../../styles/GeneralComponents";

export const SectionAcademic = styled(Section)`
  grid-gap: 20px;
  grid-template-columns: repeat(2, 1fr);
`;

export const TextHighSchool = styled(Text)`
  font-size: 24px;
  grid-column: 1;
  grid-row: 2;
  color: #172c66;
`;

export const TextUniversity = styled(Text)`
  font-size: 24px;
  grid-column: 2;
  grid-row: 2;
  color: #172c66;
`;
