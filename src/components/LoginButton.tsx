import React from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'components/UI/Icon';
import {useNavigation} from '@react-navigation/native';
import {Dimensions} from 'react-native';

const windowHeight = Dimensions.get('window').height;

function LoginButton() {
  const navigation = useNavigation();

  return (
    <LoginContainer
      size={windowHeight}
      onPress={() => navigation.navigate('Main')}>
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
  margin-top: ${({size}) => (size >= 700 ? '75%' : '45%')};
  margin-left: auto;
  margin-right: auto;
  width: 284px;
  height: 50px;
  border-radius: ${({theme}) => theme.borderRadius.button};
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
  font-size: ${({theme}) => theme.typeScale.nextButton};
  line-height: ${({theme}) => theme.lineHeight.nextButton};
`;

const Flag = styled.View`
  width: 20px;
  height: 20px;
`;

const TextWrapper = styled.View`
  margin-right: 11px;
`;
