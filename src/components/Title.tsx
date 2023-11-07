import { styled } from "styled-components";
import More from "./More";

const TitleContainer = styled.div`
  margin-top: 118px;
  display: flex;
  flex-direction: column;
`;

const Titles = styled.div`
  width: 570px;
  margin: 10px 0 10px 0;
`;

const BigTitle = styled.p`
  font-size: 60px;
  font-weight: 1000;
`;

const SmallTitle = styled.p`
  font-size: 16px;
  font-weight: 200;
  line-height: 23px;
`;

function Title() {
  return (
    <TitleContainer>
      <Titles>
        <BigTitle>Information of the Seoul Public Bicycle</BigTitle>
      </Titles>
      <Titles>
        <SmallTitle>
          On this website, you can find information on public bicycle rentals in
          Seoul. You can check the information on rental locations in the area
          you are interested in through the map next to it.
        </SmallTitle>
      </Titles>
      <More />
    </TitleContainer>
  );
}

export default Title;
