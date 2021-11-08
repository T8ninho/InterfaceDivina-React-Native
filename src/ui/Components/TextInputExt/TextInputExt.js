import * as React from 'react';
import { TextInput } from 'react-native-paper';

const TextInputExt = ({label}) => {
  const [text, setText] = React.useState('');

  return (
    <TextInput
      label={label}
      value={text}
      onChangeText={text => setText(text)}
      mode="outlined"
      style={{width: '100%'}}
    />
  );
};

export default TextInputExt;