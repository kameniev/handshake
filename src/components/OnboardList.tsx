import React from 'react';
import styled from 'styled-components/native';
import Icon from './UI/Icon';
import LinearGradient from 'react-native-linear-gradient';
import {Dimensions} from 'react-native';

const windowHeight = Dimensions.get('window').height;

export default function OnboardLost() {
  return (
    <List size={windowHeight}>
      <MainWrapper size={windowHeight}>
        <ImageWrapper
          size={windowHeight}
          colors={['rgba(132, 250, 176, 1)', 'rgba(143, 211, 244, 1)']}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}
          locations={[0.1153, 0.9143]}>
          <MainImage
            size={windowHeight}
            source={require('../assets/images/1.jpg')}
          />
        </ImageWrapper>
        <MainText size={windowHeight}>Егор Крид</MainText>
      </MainWrapper>

      <EllipseWrapper>
        <Icon name={'Ellipse'} />
      </EllipseWrapper>

      <Wrapper>
        <Image source={require('../assets/images/4.jpg')} />
        <Text size={windowHeight}>Гусселейман</Text>
      </Wrapper>

      <EllipseWrapper>
        <Icon name={'Ellipse'}></Icon>
      </EllipseWrapper>

      <Wrapper>
        <Image source={require('../assets/images/2.jpg')} />
        <Text size={windowHeight}>Ирина Шейк</Text>
      </Wrapper>

      <EllipseWrapper>
        <Icon name={'Ellipse'} />
      </EllipseWrapper>

      <Wrapper>
        <Image source={require('../assets/images/3.jpg')} />
        <Text size={windowHeight}>Миша Литвин</Text>
      </Wrapper>

      <EllipseWrapper>
        <Icon name={'Ellipse'} />
      </EllipseWrapper>

      <MainWrapper size={windowHeight}>
        <ImageWrapper
          size={windowHeight}
          colors={['#36D1DC', '#5B86E5']}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}
          locations={[0.1153, 0.9143]}>
          <MainImage
            size={windowHeight}
            source={require('../assets/images/4.jpg')}
          />
        </ImageWrapper>
        <MainText size={windowHeight}>Кори Тейлор</MainText>
      </MainWrapper>
    </List>
  );
}

const ImageWrapper = styled(LinearGradient)`
  width: ${({size}) => (size >= 700 ? '100px' : '70px')};
  height: ${({size}) => (size >= 700 ? '100px' : '70px')};
  border-radius: 250px;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.View`
  flex-direction: row;
  margin-bottom: 5px;
`;

const Image = styled.Image`
  width: 54px;
  height: 54px;
  border-radius: 47px;
  border-color: ${({theme}) => theme.colors.system.white};
  border-width: 2px;
  box-shadow: ${({theme}) => theme.shadow.search};
`;

const Text = styled.Text`
  margin-left: ${({size}) => (size >= 700 ? '39px' : '24px')};
  margin-top: 11px;
  font-size: ${({theme}) => theme.typeScale.search};
`;

const List = styled.View`
  margin-top: ${({size}) => (size >= 700 ? '32px' : '15px')};
  margin-left: auto;
  margin-right: auto;
`;

const MainWrapper = styled.View`
  flex-direction: row;
  margin-bottom: 2px;
  margin-left: ${({size}) => (size >= 700 ? '-22px' : '-10px')};
`;

const MainImage = styled.Image`
  width: ${({size}) => (size >= 700 ? '94px' : '64px')};
  height: ${({size}) => (size >= 700 ? '94px' : '64px')};
  border-radius: 250px;
  box-shadow: ${({theme}) => theme.shadow.search};
`;

const MainText = styled.Text`
  margin-left: 17px;
  margin-top: ${({size}) => (size >= 700 ? '32px' : '18px')};
  font-weight: bold;
  font-size: ${({theme}) => theme.typeScale.onboardList};
`;

const EllipseWrapper = styled.View`
  margin-bottom: 2px;
  margin-top: 2px;
`;
