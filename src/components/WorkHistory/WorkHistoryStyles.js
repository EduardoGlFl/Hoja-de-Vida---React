import styled from "styled-components";
import { Section, Text } from "../../styles/GeneralComponents";

export const SectionWork = styled(Section)`
  
  grid-template-columns: repeat(1, 1fr);
`;

export const TextWorkTitle = styled(Text)`
  font-size: 24px;
  grid-column: 1;
  color: #172c66;
`;

export const TextWorkEmployee = styled(Text)`
  font-size: 22px;
  grid-column: 1;
  grid-row: 3;
  color: #172c66;
`;

export const TextWorkDescription = styled(Text)`
  font-size: 20px;
  grid-column: 1;
  grid-row: 4;
  color: #172c66;
`;