import styled from "styled-components";

const Login = (props) => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg" />
          <SignUp>GET ALL THERE</SignUp>
          <Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </Description>
          <CTALogoTwo src="/images/cta-logo-two.png" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;
const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;
const BgImage = styled.div`
  background-image: url("/images/login-background.jpg");
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: -1;
`;

const CTA = styled.div`
  margin-bottom: 2vw;
  max-width: 650px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
`;

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`;

const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background: #0063e5;
  width: 100%;
  margin-bottom: 12px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 5px;
  font-size: 18px;
  letter-spacing: 2px;
  cursor: pointer;

  &:hover {
    background: #0483ee;
  }
`;

const Description = styled.p`
  color: #f9f9f9;
  font-size: 11px;
  line-height: 1.8;
  margin: 0 0 22px;
  letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img`
width: 100%;
max-width: 600px;
margin-bottom: 20px;
display: inline-block;
vertical-align: bottom;

`




export default Login;
