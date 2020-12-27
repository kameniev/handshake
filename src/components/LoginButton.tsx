import React from 'react';
import styled from 'styled-components/native';
import {TouchableOpacity, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'components/UI/Icon';
import {useHistory} from 'react-router-native';

function LoginButton() {
  let history = useHistory();

  function handleClick() {
    history.push('/main');
  }

  return (
    <LoginContainer onPress={handleClick}>
      <StyledGradient
        colors={['#36D1DC', '#5B86E5']}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}
        locations={[0.1153, 0.9143]}>
        <TextWrapper>
          <LoginButtonText>Войти через instagram</LoginButtonText>
        </TextWrapper>
        <Flag>
          <Icon name={'Insta'} width={20} />
        </Flag>
      </StyledGradient>
    </LoginContainer>
  );
}

export default LoginButton;

const LoginContainer = styled.TouchableOpacity`
  margin-top: 75%;
  margin-left: auto;
  margin-right: auto;
  width: 284px;
  height: 50px;
  border-radius: ${({theme}) => theme.borderRadius.Button};
`;

const StyledGradient = styled(LinearGradient)`
  flex-direction: row;
  width: 284px;
  height: 50px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
`;

const LoginButtonText = styled.Text`
  text-align: center;
  color: ${({theme}) => theme.colors.ui.gray};
  font-size: ${({theme}) => theme.typeScale.NextButton};
  line-height: ${({theme}) => theme.lineHeight.NextButton};
`;

const Flag = styled.View`
  width: 20px;
  height: 20px;
`;

const TextWrapper = styled.View`
  margin-right: 11px;
`;
