import { styled } from 'styled-components'

export const SectionSeparator = ({ separatorText }: { separatorText: string }) => {
  return (
    <div>
      <Separator>
        <SectionTitle>{separatorText}</SectionTitle>
      </Separator>
    </div>
  )
}

const Separator = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  opacity: 0.5;

  &::before {
    content: '';
    flex: 1;
    height: 1px;
    background-color: #333;
    margin-right: 20px;
  }

  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background-color: #333;
    margin-left: 20px;
  }
`

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #333;
  margin: 0;
  padding: 0;
`
