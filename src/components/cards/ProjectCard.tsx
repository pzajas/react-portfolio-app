import { styled } from 'styled-components'

import PrimaryButton from '@components/buttons/PrimaryButton'

export const ProjectCard = ({ title }) => {
  return (
    <CardContainer>
      <Image>{title}</Image>
      <ButtonsContainer>
        <div>
          <StyledPrimaryButton buttonText="Link" />
          <StyledPrimaryButton buttonText="Demo" />
        </div>

        <>
          <PrimaryButton buttonText="React" />
        </>
      </ButtonsContainer>
    </CardContainer>
  )
}

const CardContainer = styled.div`
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden; /* Ensures that overlays don't overflow */
  /* margin-bottom: 2rem; */
  z-index: 1;
`

const Image = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20vh;
  background-color: rgb(26, 26, 26);
  overflow: hidden;
  transition: transform 0.2s;
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 0.2em;
`

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 12vw;
  background-color: rgb(26, 26, 26);
`

const StyledPrimaryButton = styled(PrimaryButton)`
  margin-right: 0.5rem;
`

export default ProjectCard
