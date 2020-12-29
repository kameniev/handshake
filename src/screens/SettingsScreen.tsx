import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'components/UI/Icon';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {Dimensions} from 'react-native';

const windowHeight = Dimensions.get('window').height;

function SettingsScreen() {
  const navigation = useNavigation();

  return (
    <View>
      <SafeAreaView>
        <Subtitle>Настройки</Subtitle>
        <Wrapper>
          <Setting>Политика конфиденциальности</Setting>
          <Setting>Правила использования</Setting>
          <Setting>Обратная связь</Setting>
        </Wrapper>
        <SettingsButton size={windowHeight}>
          <StyledGradient
            colors={['#36D1DC', '#5B86E5']}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5}}
            locations={[0.1153, 0.9143]}>
            <Icon name={'Profile'} width={35} />
          </StyledGradient>
        </SettingsButton>
        <Back size={windowHeight} onPress={() => navigation.navigate('Main')}>
          <BackText>Выйти</BackText>
        </Back>
      </SafeAreaView>
    </View>
  );
}

export default SettingsScreen;

const Subtitle = styled.Text`
  margin-top: 6px;
  color: ${({theme}) => theme.colors.ui.blue};
  font-family: ${({theme}) => theme.fontFamilyNunitoBold};
  font-size: ${({theme}) => theme.typeScale.subtitle};
  line-height: ${({theme}) => theme.lineHeight.subtitle};
  font-weight: bold;
  text-align: center;
`;
const Wrapper = styled.View`
  margin-top: 10%;
  min-height: 90%;
`;

const Setting = styled.Text`
  margin-top: 8px;
  margin-left: 33px;
  font-size: ${({theme}) => theme.typeScale.setting};
  line-height: ${({theme}) => theme.lineHeight.setting};
`;

const StyledGradient = styled(LinearGradient)`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`;

const SettingsButton = styled.TouchableOpacity`
  position: absolute;
  right: 31px;
  bottom: ${({size}) => (size >= 700 ? '38px' : '60px')};
  width: 50px;
  height: 50px;
  border-radius: 50px;
  box-shadow: ${({theme}) => theme.shadow.basic};
  z-index: 1;
`;
const Back = styled.TouchableOpacity`
  position: absolute;
  left: 33px;
  bottom: ${({size}) => (size >= 700 ? '42px' : '64px')};
`;

const BackText = styled.Text`
  font-size: ${({theme}) => theme.typeScale.back};
  line-height: ${({theme}) => theme.lineHeight.back};
`;
