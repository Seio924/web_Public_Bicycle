import { useRecoilValue } from "recoil";
import { locationNameAppearState, locationNameState } from "../atoms";

import ReactTooltip from "react-tooltip";
import { styled } from "styled-components";
import Title from "../components/Title";
import MapChart from "../components/Mapchart";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-grow: 0;
`;

const MapDiv = styled.div`
  display: flex;
  height: 700px;
  width: 700px;
  flex-direction: column;
  justify-content: center;
`;

const TitleDiv = styled.div`
  height: 700px;
  width: 700px;
  margin-left: 80px;
`;

function Home() {
  const locationName = useRecoilValue(locationNameState);
  const appear = useRecoilValue(locationNameAppearState);
  return (
    <>
      {appear && <ReactTooltip>{locationName}</ReactTooltip>}
      <Container>
        <TitleDiv>
          <Title />
        </TitleDiv>
        <MapDiv>
          <MapChart />
        </MapDiv>
      </Container>
    </>
  );
}

export default Home;
