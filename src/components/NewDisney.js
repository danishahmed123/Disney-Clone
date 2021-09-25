import styled from "styled-components";
import { Link } from "react-router-dom";

const NewDisney = (props) => {
  return (
    <Container>
      <h4>New To Disney+</h4>
      <Content>
        <Wrap>
            <img src="/images/garfield.jpg" />
        </Wrap>
        <Wrap>
            <img src="/images/raya.jpg" />
        </Wrap>
        <Wrap>
            <img src="/images/falcon.jpg" />
        </Wrap>
        <Wrap>
            <img src="/images/music.jpg" />
        </Wrap>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 0 26px;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 63%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0px;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    display: block;
    object-fit: cover;
    opacity: 1;
    transition: opacity 500ms ease-in-out 0s;
    z-index: 1;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 63%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transform: scale(1.05);
    border: 3px solid #f9f9f9;
  }
`;

export default NewDisney;
