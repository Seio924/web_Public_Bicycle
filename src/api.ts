const apikey = "53494968697168723430426c676761";
const startnum = 1;
const endnum = 1000;

export function fetchInfo() {
  return fetch(
    `http://openapi.seoul.go.kr:8088/${apikey}/json/tbCycleStationInfo/${startnum}/${endnum}/`
  ).then((response) => response.json());
}
