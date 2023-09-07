import { useParams } from "react-router-dom";
import Card from "../components/Card";
import { useRecoilValue } from "recoil";
import { localBicycleInfoSelector } from "../atoms";

function Detail() {
  const info = useRecoilValue(localBicycleInfoSelector);
  console.log(info);

  return (
    <>
      <Card />
    </>
  );
}

export default Detail;
