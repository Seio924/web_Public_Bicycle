import Card from "../components/Card";
import { useRecoilValue } from "recoil";
import { localBicycleInfoState, Ibicycle } from "../atoms";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Detail() {
  const { id } = useParams();
  const info = useRecoilValue(localBicycleInfoState);
  const [detailInfo, setDetailInfo] = useState<Ibicycle[]>([]);

  useEffect(() => {
    setDetailInfo(info?.filter((loc: Ibicycle) => loc.RENT_ID === id));
  }, [id]);

  console.log(detailInfo);

  return (
    <>
      <Card />
    </>
  );
}

export default Detail;
