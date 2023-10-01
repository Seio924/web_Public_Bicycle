import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { localBicycleInfo, Ibicycle } from "../atoms";
import Card from "../components/Card";
import styled from "styled-components";

function Detail() {
  const { id } = useParams();

  const localBicycleInfoState = useRecoilValue(localBicycleInfo);

  const detailInfo = localBicycleInfoState?.filter(
    (loc: Ibicycle) => loc.RENT_ID === id
  );

  return (
    <>
      <Card
        id={detailInfo[0].RENT_ID}
        locationName={detailInfo[0].STA_LOC}
        title={detailInfo[0].STA_ADD1}
        subtitle={detailInfo[0].RENT_NM}
        backgroundWidth="500px"
        backgroundHeight="550px"
        backgroundMargin="100px"
        fontSize="20px"
      />
    </>
  );
}

export default Detail;
