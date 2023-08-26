import { useParams } from "react-router";

function Info() {
  const { locationName } = useParams();
  return (
    <>
      <h1>{locationName}</h1>
    </>
  );
}

export default Info;
