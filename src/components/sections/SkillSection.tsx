import { styled } from 'styled-components'

import CssIcon from '@assets/icons/Css'
import {
  CascadeStylesIcon,
  GithubIcon,
  JavaScriptIcon,
  ReactAtomIcon,
  ReactIcon,
  ReactNativeIcon,
  ReactQueryIcon,
  ReactReduxIcon,
  TypeScriptIcon,
} from '@assets/icons/xindex'
import PrimarySection from '@components/layouts/PrimarySection'

const SkillSection = () => {
  const iconsArray = [
    { icon: <ReactIcon /> },
    { icon: <ReactNativeIcon /> },
    { icon: <ReactQueryIcon /> },
    { icon: <ReactReduxIcon /> },
    { icon: <GithubIcon /> },
    { icon: <ReactAtomIcon /> },
    { icon: <CssIcon /> },
    { icon: <JavaScriptIcon /> },
    { icon: <TypeScriptIcon /> },
  ]

  return (
    <PrimarySection sectionText="skills">
      <StyledIconGrid>
        {iconsArray.map((item, index) => (
          <StyledIconWrapper key={index}>{item.icon}</StyledIconWrapper>
        ))}
      </StyledIconGrid>
    </PrimarySection>
  )
}

export default SkillSection

const StyledIconGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1em;
`

const StyledIconWrapper = styled.div`
  padding: 3rem 2rem;
  border-radius: 0.2rem;
  background-color: rgb(26, 26, 26);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & p {
    margin-top: 1rem;
    font-size: 1.2rem;
  }
`
