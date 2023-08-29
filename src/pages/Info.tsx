import { useParams } from "react-router";
import { styled } from "styled-components";
import { useQuery } from "react-query";
import { fetchInfo } from "../api";
import { useSetRecoilState } from "recoil";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";

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

interface Ibicycle {
  STA_LOC: string;
  RENT_ID: string;
  RENT_NO: string;
  RENT_NM: string;
  RENT_ID_NM: string;
  HOLD_NUM: string;
  STA_ADD1: string;
  STA_ADD2: string;
  STA_LAT: string;
  STA_LONG: string;
  START_INDEX: number;
  END_INDEX: number;
  RNUM: string;
}

function HandleCard(id: string) {
  const navigate = useNavigate();
  navigate(`/${id}`);
}

function Info() {
  const { isLoading, data } = useQuery("bicycleInfo", fetchInfo, {
    refetchOnWindowFocus: false,
  });
  const { locationName } = useParams();
  const bicycleInfoList = data?.stationInfo.row;

  console.log(typeof locationName);
  const bicycleInfo = bicycleInfoList?.filter(
    (loc: Ibicycle) => loc.STA_LOC === locationName
  );
  console.log(bicycleInfo);

  return (
    <>
      <H1>{locationName}</H1>
      <CardDiv>
        {bicycleInfo &&
          bicycleInfo.map((info: Ibicycle) => (
            <Card
              onClick={HandleCard}
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
