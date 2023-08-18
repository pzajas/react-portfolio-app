import { styled } from 'styled-components'

const ContactSection = () => {
  return (
    <StyledHeroContainer>
      <StyledHeroText>
        <h1>Contact Section</h1>
      </StyledHeroText>

      <StyledHeroButtonContainer></StyledHeroButtonContainer>
    </StyledHeroContainer>
  )
}

export default ContactSection

const StyledHeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  background-color: #181818;
  margin-top: 0;
  color: white;
  gap: 0.1em;
`
const StyledHeroText = styled.div`
  & * {
    margin-top: 0;
    align-items: center;
  }
  & h1 {
    letter-spacing: 0.05rem;
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  & span {
    color: green;
  }
`

const StyledHeroButtonContainer = styled.div`
  display: flex;
  opacity: 0;
  animation-delay: 3s;
  animation: slideInFromLeft 1s 1.5s forwards;

  @keyframes slideInFromLeft {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
`
