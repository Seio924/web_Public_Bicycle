import { useRecoilState } from "recoil";
import { styled } from "styled-components";
import { themeState } from "../atoms";

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
  const [theme, setThemeState] = useRecoilState(themeState);

  const toggle = () => {
    setThemeState(!theme);
  };

  return (
    <MoreContainer>
      <Btn onClick={toggle}>mode change</Btn>
    </MoreContainer>
  );
}

export default More;
