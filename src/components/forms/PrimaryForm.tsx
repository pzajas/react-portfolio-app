import { Controller, useForm } from 'react-hook-form'
import { styled } from 'styled-components'

import PrimaryButton from '@components/buttons/PrimaryButton'

const PrimaryForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          rules={{ required: 'Name is required' }}
          render={({ field }) => (
            <>
              <InputField type="text" placeholder="Name" {...field} />
              {errors.name && <p>{errors.name.message}</p>}
            </>
          )}
        />

        <Controller
          name="email"
          control={control}
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          }}
          render={({ field }) => (
            <>
              <InputField type="email" placeholder="Email" {...field} />
              {errors.email && <p>{errors.email.message}</p>}
            </>
          )}
        />

        <Controller
          name="message"
          control={control}
          rules={{ required: 'Message is required' }}
          render={({ field }) => (
            <>
              <TextArea placeholder="Message" rows="4" {...field} />
              {errors.message && <p>{errors.message.message}</p>}
            </>
          )}
        />

        <PrimaryButton type="submit" buttonText="Submit" />
      </form>
    </FormContainer>
  )
}

export default PrimaryForm

const FormContainer = styled.div`
  margin: 0 auto;
  font-family: 'Poppins';
`

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  background-color: #202020;
  outline: none;
  font-family: 'Poppins';

`

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  background-color: #202020;
  resize: none;
  outline: none;
  font-family: 'Poppins';
`
