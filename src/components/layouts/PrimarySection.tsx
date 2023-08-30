import { styled } from 'styled-components'

import { SectionSeparator } from '@components/sections/SectionSeparator'

const PrimarySection = ({ sectionText, children }: { sectionText: string; children: any }) => {
  return (
    <StyledSectionContainer>
      <SectionSeparator separatorText={sectionText} />
      {children}
    </StyledSectionContainer>
  )
}

export default PrimarySection

const StyledSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #181818;
  margin-top: 0;
  color: white;
  gap: 0.1em;
  padding: 2rem 2rem 2rem 2rem;
  z-index: 100;
`
