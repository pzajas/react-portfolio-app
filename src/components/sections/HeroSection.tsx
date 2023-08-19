import { IoIosArrowDown } from 'react-icons/io'
import { keyframes, styled } from 'styled-components'

import PrimaryButton from '@components/buttons/PrimaryButton'
import PrimarySection from '@components/layouts/PrimarySection'

const HeroSection = () => {
  return (
    <PrimarySection sectionText="">
      <StyledHeroContainer>
        <StyledHeroText>
          <h1>
            Hello there!<br></br> I design <span>unique</span> <br></br>web experience.
          </h1>
        </StyledHeroText>

        <StyledHeroButtonContainer>
          <PrimaryButton type="button" buttonText="Projects" />
        </StyledHeroButtonContainer>

        <ArrowIconContainer>
          <BouncingArrowIcon size={20} />
        </ArrowIconContainer>
      </StyledHeroContainer>
    </PrimarySection>
  )
}

export default HeroSection

const StyledHeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  background-color: #181818;
  margin-top: 0;
  color: white;
`

const StyledHeroText = styled.div`
  line-height: 1.5;
  & * {
    margin-top: 0;
    align-items: center;
  }
  & h1 {
    letter-spacing: 0.05rem;
    font-size: 3rem;
    margin-bottom: 5rem;
  }

  & span {
    color: orange;
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

const bounceAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`

const ArrowIconContainer = styled.div`
  position: absolute;
  bottom: 20px; /* Adjust this value to position the arrow */
  left: 50%;
  transform: translateX(-50%);
  color: white;
  animation: ${bounceAnimation} 2s infinite; /* Apply the bounce animation */
`

const BouncingArrowIcon = styled(IoIosArrowDown)`
  transition: transform 0.8s;
  &:hover {
    transform: scale(1.1);
  }
`
