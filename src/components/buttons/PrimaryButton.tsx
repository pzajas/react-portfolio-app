import { MouseEventHandler } from 'react'
import { styled } from 'styled-components'

interface Props {
  buttonText: string
  type?: 'submit' | 'reset' | 'button'
  className?: string
  onClick?: any
  primaryButtonClick?: MouseEventHandler<HTMLParagraphElement>
}

const PrimaryButton = ({ buttonText, className }: Props) => {
  return (
    <StyledPrimaryButton type="submit" className={className}>
      {buttonText}
    </StyledPrimaryButton>
  )
}

export default PrimaryButton

const StyledPrimaryButton = styled.button`
  background-color: #202020;
  border: none;
  padding: 1rem 1.5rem;
  color: orange;
  transition: all 0.5s ease-in-out;
  z-index: 10;
  font-family: 'Poppins';

  &:hover {
    cursor: pointer;
  }
`
