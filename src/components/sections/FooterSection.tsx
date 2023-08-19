import { BsGithub } from 'react-icons/bs'
import { styled } from 'styled-components'

import PrimarySection from '@components/layouts/PrimarySection'

const FooterSection = () => {
  return (
    <PrimarySection sectionText="Footer">
      <StyledButtonContainer>
        <StyledSocialIcon>
          <BsGithub size={24} />
        </StyledSocialIcon>
        <StyledSocialIcon>
          <BsGithub size={24} />
        </StyledSocialIcon>
        <StyledSocialIcon>
          <BsGithub size={24} />
        </StyledSocialIcon>
        <StyledSocialIcon>
          <BsGithub size={24} />
        </StyledSocialIcon>
      </StyledButtonContainer>
    </PrimarySection>
  )
}

export default FooterSection

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
`

const StyledSocialIcon = styled.div`
  display: flex;
  place-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  background-color: #202020;
  border-radius: 2px;
`
