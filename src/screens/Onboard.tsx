import React from 'react';
import {
  TouchableOpacity,
  View,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import styled from 'styled-components/native';
import Icon from 'components/UI/Icon';
import {ui} from 'utils/colors';
import OnboardList from 'components/OnboardList';
import LinearGradient from 'react-native-linear-gradient';
import {Dimensions} from 'react-native';

const windowHeight = Dimensions.get('window').height;

const data = [
  {
    id: 1,
    title: 'Найди общих знакомых',
    text:
      'Приложение основывается на теории 6-ти \n рукопожатий - любые два человека на \n Земле разделены не более чем пятью \n уровнями общих знакомых.',
  },
  {
    id: 2,
    title: 'Насколько близко \n ты к звёздам?',
    text:
      'Приложение поможет найти цепочку связей \n практически с любым пользователем.',
  },
  {
    id: 3,
    title: 'Человека определяет \n его окружение',
    text: 'Поставь себе цель - уменьшить цепочку \n знакомств',
  },
];

type OnboardProps = {
  handleDone: Function;
};

function Onboard({handleDone}: OnboardProps) {
  const renderItem = ({item}) => {
    switch (item.id) {
      case 1:
        return (
          <View>
            <Title size={windowHeight}>{item.title}</Title>
            <MainTextFS size={windowHeight}>{item.text}</MainTextFS>
          </View>
        );
      case 2:
        return (
          <View>
            <Title size={windowHeight}>{item.title}</Title>
            <Subtitle size={windowHeight}>{item.text}</Subtitle>

            <OnboardList />
          </View>
        );
      case 3:
        return (
          <View>
            <Title size={windowHeight}>{item.title}</Title>
            <Subtitle size={windowHeight}>{item.text}</Subtitle>
            <List>
              <MainWrapper>
                <ImageWrapper
                  colors={['rgba(132, 250, 176, 1)', 'rgba(143, 211, 244, 1)']}
                  start={{x: 0, y: 0.5}}
                  end={{x: 1, y: 0.5}}
                  locations={[0.1153, 0.9143]}>
                  <MainImage source={require('../assets/images/1.jpg')} />
                </ImageWrapper>
                <MainText>Егор Крид</MainText>
              </MainWrapper>

              <ConnectorWrapper>
                <Icon name={'Connector'} />
              </ConnectorWrapper>

              <MainWrapper>
                <ImageWrapper
                  colors={['#36D1DC', '#5B86E5']}
                  start={{x: 0, y: 0.5}}
                  end={{x: 1, y: 0.5}}
                  locations={[0.1153, 0.9143]}>
                  <MainImage source={require('../assets/images/2.jpg')} />
                </ImageWrapper>
                <MainText>Кори Тейлор</MainText>
              </MainWrapper>
            </List>

            <NextButton size={windowHeight} onPress={handleDoneFinish}>
              <StyledGradient
                colors={['#36D1DC', '#5B86E5']}
                start={{x: 0, y: 0.5}}
                end={{x: 1, y: 0.5}}
                locations={[0.1153, 0.9143]}>
                <NextButtonText>Начать</NextButtonText>
              </StyledGradient>
            </NextButton>
          </View>
        );
      default:
        return null;
    }
  };

  const keyExtractor = (item) => item.title;

  const handleDoneFinish = () => [handleDone()];

  return (
    <View style={{flex: 1}}>
      <StatusBar translucent backgroundColor="transparent" />
      <AppIntroSlider
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        data={data}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
      />
    </View>
  );
}

export default Onboard;

const StyledGradient = styled(LinearGradient)`
  width: 284px;
  height: 50px;
  border-radius: 25px;
  justify-content: center;
`;

const NextButton = styled.TouchableOpacity`
  margin-left: auto;
  margin-right: auto;
  margin-top: ${({size}) => (size >= 700 ? '83px' : '13px')};
  width: 284px;
  height: 50px;
  border-radius: ${({theme}) => theme.borderRadius.button};
`;

const NextButtonText = styled.Text`
  text-align: center;
  color: ${({theme}) => theme.colors.ui.gray};
  font-size: ${({theme}) => theme.typeScale.nextButton};
  line-height: ${({theme}) => theme.lineHeight.nextButton};
`;

const ImageWrapper = styled(LinearGradient)`
  width: 100px;
  height: 100px;
  border-radius: 250px;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  margin-top: ${({size}) => (size >= 700 ? '25%' : '5%')};
  text-align: center;
  line-height: ${({theme}) => theme.lineHeight.onboardTitle};
  font-size: ${({theme}) => theme.typeScale.onboardTitle};
  color: ${({theme}) => theme.colors.ui.onboardBlue};
`;

const MainTextFS = styled.Text`
  margin-top: ${({size}) => (size >= 700 ? '50px' : '30px')};
  text-align: center;
  line-height: ${({theme}) => theme.lineHeight.onboardMain};
  font-size: ${({theme}) => theme.typeScale.onboardMain};
  color: ${({theme}) => theme.colors.ui.onboardGray};
`;

const Subtitle = styled.Text`
  margin-top: ${({size}) => (size >= 700 ? '32px' : '12px')};
  text-align: center;
  line-height: ${({theme}) => theme.lineHeight.onboardMain};
  font-size: ${({theme}) => theme.typeScale.onboardMain};
  color: ${({theme}) => theme.colors.ui.onboardGray};
`;

const List = styled.View`
  margin: 35px auto 0;
`;

const MainWrapper = styled.View`
  flex-direction: row;
  margin-bottom: 2px;
  margin-left: -22px;
`;

const MainImage = styled.Image`
  width: 94px;
  height: 94px;
  border-radius: 250px;
  box-shadow: ${({theme}) => theme.shadow.search};
`;

const MainText = styled.Text`
  margin-left: 17px;
  margin-top: 32px;
  font-weight: bold;
  font-size: ${({theme}) => theme.typeScale.onboardList};
`;

const ConnectorWrapper = styled.View``;

const styles = StyleSheet.create({
  dotStyle: {
    width: 8,
    height: 8,
    marginHorizontal: 15,
    backgroundColor: '#DFDFDF',
  },
  activeDotStyle: {
    width: 14,
    height: 14,
    marginHorizontal: 9,
    borderRadius: 50,
    backgroundColor: ui.blue,
  },
});
