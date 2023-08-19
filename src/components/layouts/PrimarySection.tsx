import { styled } from 'styled-components'

const PrimarySection = ({ sectionText, children }: { sectionText: string; children: any }) => {
  return (
    <StyledHeroContainer>
      <StyledHeroText>
        <h1>{sectionText}</h1>
      </StyledHeroText>

      {children}
    </StyledHeroContainer>
  )
}

export default PrimarySection

const StyledHeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #181818;
  margin-top: 0;
  color: white;
  gap: 0.1em;
  padding: 2rem 2rem 2rem 2rem;
  margin-bottom: 5rem;
  z-index: 100;
`
const StyledHeroText = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  & * {
    margin-top: 0;
    align-items: center;
  }
  & h1 {
    letter-spacing: 0.05rem;
    font-size: 1.5rem;
    color: grey;
    margin-bottom: 2rem;
  }
`
