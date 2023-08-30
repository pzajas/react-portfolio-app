import { styled } from 'styled-components'

import { GithubIcon, LinkedIcon, MailIcon, PhoneIcon } from '@assets/icons/xindex'
import PrimarySection from '@components/layouts/PrimarySection'

const SocialSection = () => {
  return (
    <PrimarySection sectionText="Social">
      <StyledButtonContainer>
        <StyledSocialIcon>
          <PhoneIcon />
        </StyledSocialIcon>
        <StyledSocialIcon>
          <LinkedIcon />
        </StyledSocialIcon>
        <StyledSocialIcon>
          <GithubIcon />
        </StyledSocialIcon>
        <StyledSocialIcon>
          <MailIcon />
        </StyledSocialIcon>
      </StyledButtonContainer>
    </PrimarySection>
  )
}

export default SocialSection

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`

const StyledSocialIcon = styled.div`
  display: flex;
  place-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  background-color: #202020;
  border-radius: 5px;
`
