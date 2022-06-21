import styled from "styled-components";

export const Section = styled.section`
  display: grid;
  justify-content: center;
  align-content: center;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  padding-bottom: 52px;
  margin: 0 auto;
  max-width: 1080px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
`;

export const SectionTitle = styled.h3`
  font-weight: 600;
  font-size: 42px;
  width: max-content;
  max-width: 100%;
  background: #094067;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Text = styled.p`
  max-width: 800px;
  font-weight: 400;
  font-size: 24px;
  line-height: 40px;
  color: #172c66;
`;

export const TextLocation = styled(Text)`
  grid-column: 1;
  grid-row: 2;
`;

export const TextPortafolio = styled(Text)`
  grid-column: 2;
  grid-row: 2;
`;

export const TextEmail = styled(Text)`
  grid-column: 1;
  grid-row: 3;
`;

export const TextGithub = styled(Text)`
  grid-column: 2;
  grid-row: 3;
`;

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;
