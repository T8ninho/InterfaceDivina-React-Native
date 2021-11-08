import * as React from 'react';
import { ButtonStyled } from './ButtonExt.style';

const ButtonExt = ({children}) => {
  return (
    <ButtonStyled
      onPress={()=>{}}
      mode="outlined"
    >
        {children}
    </ButtonStyled>
  );
};

export default ButtonExt;