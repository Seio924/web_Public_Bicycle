import React, { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Annotation,
} from "react-simple-maps";

// 서울 전체 지도 데이터
import SeoulMap from "../seoul.json";
import { locationNameAppearState, locationNameState } from "../atoms";
/*
  "code": "구역 코드",
  "name": "구역 이름",
  "name_eng": "구역 영문이름",
*/

// 지도 캔버스 사이즈
const mapWidth = 400;
const mapHeight = 400;

// 맨 처음 지도가 렌더링 됐을때 센터 값
const DEFAULT_COORDINATION: [number, number] = [
  126.98820917938465, 37.55105648528907,
];

const MapChart = () => {
  const [locationName, setLocationName] = useRecoilState(locationNameState);
  const setLocationNameAppear = useSetRecoilState(locationNameAppearState);
  //
  const [map, setMap] = useState(SeoulMap);
  // 지도 중심 좌표
  const [center, setCenter] = useState(DEFAULT_COORDINATION);

  const navigate = useNavigate();

  const navigateToInfo = () => {
    navigate(`/${locationName}`);
  };

  return (
    <div className="map">
      <ComposableMap
        width={mapWidth}
        height={mapHeight}
        projection="geoMercator"
        projectionConfig={{
          rotate: [-60, 0, 5],
          center: DEFAULT_COORDINATION,
          scale: 35000,
        }}
        data-tip=""
        viewBox="0 0 400 400"
      >
        <ZoomableGroup
          center={center}
          filterZoomEvent={() => {
            return false;
          }}
        >
          <Geographies geography={map}>
            {({ geographies }) =>
              geographies.map((geo) => {
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    style={{
                      default: {
                        fill: "#fff",
                        stroke: "#102C57",
                        strokeWidth: 0.15,
                        outline: "none",
                      },
                      hover: {
                        fill: "#FF6969",
                        outline: "none",
                      },
                      pressed: {
                        fill: "fff",
                        outline: "#333",
                      },
                    }}
                    onMouseEnter={() => {
                      setLocationNameAppear(true);
                      const { name, code } = geo.properties;
                      setLocationName(`${name}`);
                    }}
                    onMouseLeave={() => {
                      setLocationNameAppear(false);
                    }}
                    onClick={() => {
                      navigateToInfo();
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default MapChart;
