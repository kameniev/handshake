import * as React from 'react';
import styled from 'styled-components/native';
import {ImagePropTypes, View, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type ButtonProps = {
  title: string;
  go: Function;
};

const ButtonNext = ({title, go}: ButtonProps) => {
  return (
    <NextButton onPress={() => go()}>
      <StyledGradient
        colors={['#36D1DC', '#5B86E5']}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}
        locations={[0.1153, 0.9143]}>
        <NextButtonText>{title}</NextButtonText>
      </StyledGradient>
    </NextButton>
  );
};

export default ButtonNext;

const StyledGradient = styled(LinearGradient)`
  width: 284px;
  height: 50px;
  border-radius: 25px;
  justify-content: center;
`;

const NextButton = styled.TouchableOpacity`
  display: flex;
  width: 284px;
  margin-top: 50px;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
  border-radius: ${({theme}) => theme.borderRadius.Button};
`;

const NextButtonText = styled.Text`
  text-align: center;
  color: ${({theme}) => theme.colors.ui.gray};
  font-size: ${({theme}) => theme.typeScale.NextButton};
  line-height: ${({theme}) => theme.lineHeight.NextButton};
`;
