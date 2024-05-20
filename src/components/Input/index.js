import { InputContainer } from './styles'

const Input = ({value}) => {
    return (
      <InputContainer>
        <input disabled value={value}></input>
      </InputContainer>
    );
  }
  
  export default Input;
  