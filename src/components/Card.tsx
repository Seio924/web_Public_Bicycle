import { styled } from "styled-components";

const CardBackground = styled.div<IProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: whitesmoke;
  width: ${({ backgroundWidth }) => backgroundWidth};
  height: ${({ backgroundHeight }) => backgroundHeight};
  border-radius: 35px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: ${({ backgroundMargin }) => backgroundMargin};

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

const CardLocationName = styled.h1<IProps>`
  font-weight: 900;
  font-size: ${({ fontSize }) => fontSize};
  text-align: center;
  margin: 15px 0 10px 0;
`;

const CardImg = styled.img`
  width: 150px;
  height: 150px;
`;

const CardTitleContiner = styled.div`
  margin: 5px 20px 20px 20px;
`;

const CardTitle = styled(CardLocationName)`
  font-weight: 600;
`;

const CardSubtitle = styled(CardLocationName)`
  font-weight: 400;
`;

interface IProps {
  onClick?: (id: string) => void;
  id?: string;
  locationName?: string;
  title?: string;
  subtitle?: string;
  backgroundWidth?: string;
  backgroundHeight?: string;
  backgroundMargin?: string;
  fontSize?: string;
}

function Card({
  onClick,
  id,
  locationName,
  title,
  subtitle,
  backgroundHeight,
  backgroundWidth,
  backgroundMargin,
  fontSize,
}: IProps) {
  return (
    <CardBackground
      onClick={() => onClick && onClick(id || "")}
      backgroundHeight={backgroundHeight}
      backgroundWidth={backgroundWidth}
      backgroundMargin={backgroundMargin}
    >
      <CardLocationName fontSize={fontSize}>{locationName}</CardLocationName>
      <CardImg src="https://img.freepik.com/premium-vector/young-boy-riding-a-bicycle-illustration_1302-23620.jpg" />
      <CardTitleContiner>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>
      </CardTitleContiner>
    </CardBackground>
  );
}

export default Card;
