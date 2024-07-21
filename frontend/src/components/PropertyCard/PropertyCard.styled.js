import styled from "styled-components";

export const CardContainer = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  background: #fff;
  margin: 0 10px;
  border: 1px solid var(--alice-blue);
  box-shadow: 0 16px 32px hsla(188, 63%, 7%, 0.1);
`;

export const CardBanner = styled.div`
  position: relative;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, hsla(0, 0%, 0%, 0.95), transparent 30%);
    pointer-events: none;
    z-index: 1;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  ${CardContainer}:hover & {
    transform: scale(1.1);
  }
`;

export const CardBody = styled.div`
  padding: 15px;
`;

export const CardTitle = styled.h2`
  position: absolute;
  bottom: 10px;
  left: 10px;
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  font-weight: 400;
  color: #ffffff;
  z-index: 2;
`;

export const UnitNumber = styled.span`
margin-top:10px;
    font-family: "Montserrat", sans-serif;
  font-size: 17px;
  font-weight: 400;
  color: #075f81;
`

export const CardPrice = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #e63946;
`;

export const MonthStyle = styled.span`
  font-weight: 400;
  font-size: 15px;
`;

export const CardDetails = styled.p`
  margin-top: 10px;
  font-family: "Montserrat", sans-serif;
  font-size: 0.9em;
  color: #000000;
`;

export const CardFooter = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  flex-direction: column;
  gap: 20px;
`;

export const DetailItem = styled.div`
  font-family: "Montserrat", sans-serif;
  display: flex;
  gap: 10px;
  align-items: center;
  color: #000000;
  font-size: 0.9em;
`;

export const HorizontalDevider = styled.div`
    border-bottom:2px solid #5d737e;
    width:100%;
`

export const AgentInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  justify-content:space-between;
  padding:16px;
`;

export const AgentAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const AgentName = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 1em;
  font-weight: bold;
  margin: 0;
`;

export const AgentRole = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 0.9em;
  color: #777;
  margin: 0;
`;

export const IconDiv = styled.div `
    display:flex;
    gap:10px;
`

export const IconButton = styled.button`
  background: hsl(192, 24%, 96%);
  color: hsl(200, 15%, 43%);
  width: 35px;
  height: 35px;
  display: grid;
  place-items: center;
  font-size: 18px;
  border:none;
  &:hover {
    color: #333;
  }
`;
