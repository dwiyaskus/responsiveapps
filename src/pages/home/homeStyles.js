import styled from "styled-components";
import responsive from "../../styles/utilities";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: ${responsive(32)};
  max-width: 100%;
  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;

export const Box = styled.div`
  display: flex;
  width: ${responsive(320, 320)};
  min-height: ${responsive(200, 320)};
  flex-direction: column;
  padding: ${responsive(20)};
  margin: ${responsive(20)};
  background-color: ${(props) => props.bgColor};
  height: 100%;

  @media (min-width: 768px) {
    width: ${responsive(320, 768)};
    min-height: ${responsive(200, 768)};
    height: 100%;
  }

  @media (min-width: 1024px) {
    width: ${responsive(1000)};
    min-height: ${responsive(300)};
    height: 100%;
  }
`;

export const BoxTitle = styled.h3`
  color: #333;
  font-size: 2rem;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const BoxText = styled.p`
  margin-top: ${responsive(20)};
  color: #666;
  font-size: 1.5rem;

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;
