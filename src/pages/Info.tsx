import { useParams } from "react-router";
import { styled } from "styled-components";
import { useQuery } from "react-query";
import { fetchInfo } from "../api";
import { useSetRecoilState } from "recoil";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
import { locationNameAppearState, Ibicycle, localBicycleInfo } from "../atoms";

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

  const { isLoading, data } = useQuery("bicycleInfo", fetchInfo, {
    refetchOnWindowFocus: false,
  });

  const { locationName } = useParams();

  const setLocalBicycleInfo = useSetRecoilState(localBicycleInfo);

  const setLocationNameAppear = useSetRecoilState(locationNameAppearState);

  const bicycleInfoList = data?.stationInfo.row;

  const bicycleInfo = bicycleInfoList?.filter(
    (loc: Ibicycle) => loc.STA_LOC === locationName
  );

  setLocalBicycleInfo(bicycleInfo);

  const handleCard = (id: string) => {
    navigate(`/Detail/${id}`);
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
                backgroundWidth="200px"
                backgroundHeight="300px"
                backgroundMargin="20px"
                fontSize="16px"
              />
            ))}
      </CardDiv>
    </>
  );
}

export default Info;
