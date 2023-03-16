import styled from "styled-components";

export const TipsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

export const TipsInnerContainer = styled.div`
  color: white;
  width: 75%;
  display: flex;
  flex-direction: column;
`;

export const TipsTitle = styled.div`
  color: white;
  font-size: 1.5rem;
  font-weight: 400;
  text-align: left;
`;

export const TipsItems = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1%;
`;

export const TipCard = styled.div`
  margin-top: 2rem;
  background-color: #1a1e27;
  border: 1px solid rgba(129, 129, 129, 0.25);
  border-radius: 1px;
  min-height: 300px;
  text-align: center;

  .content {
    color: white;
    height: 100%;
    background-size: cover !important;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    background-image: linear-gradient(
        rgba(14, 20, 39, 0.55),
        rgba(14, 20, 39, 0.95)
      ),
      url(${(props) => props.bg || undefined});
  }

  .name h2 {
    margin: 0;
    padding: 15px;
  }

  .info {
    padding: 15px;
    color: #ffffffa3;
  }
`;
