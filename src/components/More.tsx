import { styled } from "styled-components";

const MoreContainer = styled.div``;

const Btn = styled.button`
  height: 40px;
  width: 240px;
  border: none;
  border-radius: 100px;
  background-color: ${(props) => props.theme.accentColor};
  color: white;
  text-align: center;
  margin-top: 20px;
`;

function More() {
  return (
    <MoreContainer>
      <Btn>More Information</Btn>
    </MoreContainer>
  );
}

export default More;
