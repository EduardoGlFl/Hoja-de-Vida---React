import styled from "styled-components";

export const Section = styled.section`
  display: grid;
  margin: 0 auto;
  max-width: 1080px;
  padding-bottom: 52px;
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
  line-height: 40px;
  color: #5f6c7b;
`;
