import { styled } from "styled-components";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
import {
  locationNameAppearState,
  Ibicycle,
  bicycleInfoSelector,
  locationNameState,
  bicycleIdState,
  localBicycleInfoState,
} from "../atoms";

const H1 = styled.h1`
  margin: 40px 0 20px 0;
  text-align: center;
  font-size: 50px;
  font-weight: 1000;
`;

const CardDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, max-content));
  grid-gap: 16px;
  justify-content: center;
  padding: initial;
`;

function Info() {
  const navigate = useNavigate();

  const setBicycleId = useSetRecoilState(bicycleIdState);

  const locationName = useRecoilValue(locationNameState);

  const setLocationNameAppear = useSetRecoilState(locationNameAppearState);

  const bicycleInfo = useRecoilValue(bicycleInfoSelector);

  const setLocalBicycleInfoState = useSetRecoilState(localBicycleInfoState);

  setLocalBicycleInfoState(bicycleInfo);

  const handleCard = (id: string) => {
    setBicycleId(id);
    navigate(`/${locationName}/${id}`);
  };

  setLocationNameAppear(false);

  return (
    <>
      <H1>{locationName}</H1>
      <CardDiv>
        {!bicycleInfo
          ? "Loading"
          : bicycleInfo.map((info: Ibicycle) => (
              <Card
                onClick={() => handleCard(info.RENT_ID)}
                id={info.RENT_ID}
                locationName={locationName}
                title={info.STA_ADD1}
                subtitle={info.RENT_NM}
              />
            ))}
      </CardDiv>
    </>
  );
}

export default Info;
