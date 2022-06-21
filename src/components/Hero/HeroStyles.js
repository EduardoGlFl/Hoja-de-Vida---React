import styled from "styled-components";

export const Section = styled.section`
  display: grid;
  padding: ${(props) => (props.nopadding ? "0" : "52px 48px 52px")};
  margin: 0 auto;
  max-width: 1080px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: repeat(2, 1fr);
`;

export const SectionTitle = styled.h2`
  font-weight: 800;
  font-size: 72px;
  width: max-content;
  max-width: 100%;
  background: #094067;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
`;

export const SectionText = styled.p`
  max-width: 800px;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  color: #3da9fc;
  grid-column: 1;
  grid-row: 4;
`;

export const StyledImage = styled.img`
  display: flex;
  grid-column: 2;
  grid-row: 1;
  width: 50%;
  border-radius: 35%;
  margin-left: 80px;
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
