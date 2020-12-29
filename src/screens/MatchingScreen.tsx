import React, {useState} from 'react';
import styled from 'styled-components/native';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'components/UI/Icon';
import NextButton from 'components/UI/NextButton';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import searchData from 'data/searchData';
import {Dimensions} from 'react-native';

const windowHeight = Dimensions.get('window').height;

type ParamList = {
  Matching: {
    itemID: string;
  };
};

function MatchingScreen() {
  const [searching, useSearching] = useState(false);

  const navigation = useNavigation();

  const route = useRoute<RouteProp<ParamList, 'Matching'>>();

  function handleClick() {
    useSearching(true);

    setTimeout(
      () =>
        navigation.navigate('MatchingDone', {itemID: route?.params?.itemID}),
      2000,
    );
  }

  return (
    <SafeAreaView>
      <Title>{!searching ? 'Начнем поиск' : 'Ищем...'}</Title>
      <Image
        size={windowHeight}
        source={searchData[parseInt(route?.params?.itemID) - 1].image}
      />
      <Name size={windowHeight}>
        {searchData[parseInt(route?.params?.itemID) - 1].title}
      </Name>
      <IconWrapper>
        <Icon name={'BigConnector'} />
      </IconWrapper>
      <>
        {!searching && (
          <View>
            <ButtonContainer>
              <NextButton title={'Искать'} go={handleClick}></NextButton>
            </ButtonContainer>
            <Description>
              Мы начнём поиск общих знакомых, как только {'\n'} найдём - тебе
              прийдёт пуш-уведомление!
            </Description>
          </View>
        )}
        {searching && (
          <Info>по окончанию поиска получите {'\n'} push-up уведомление </Info>
        )}
      </>
    </SafeAreaView>
  );
}

export default MatchingScreen;

const Title = styled.Text`
  margin-top: 6px;
  color: ${({theme}) => theme.colors.ui.blue};
  font-family: ${({theme}) => theme.fontFamilyNunitoBold};
  font-size: ${({theme}) => theme.typeScale.matchingTitle};
  line-height: ${({theme}) => theme.lineHeight.matchingTitle};
  font-weight: bold;
  text-align: center;
`;

const Image = styled.Image`
  margin-left: auto;
  margin-right: auto;
  margin-top: ${({size}) => (size >= 700 ? '15%' : '5%')};
  width: ${({size}) => (size >= 700 ? '200px' : '140px')};
  height: ${({size}) => (size >= 700 ? '200px' : '140px')};
  border-radius: 250px;
  border-color: white;
  border-width: 4px;
  box-shadow: ${({theme}) => theme.shadow.matchingImage};
`;

const Name = styled.Text`
  margin-left: auto;
  margin-right: auto;
  margin-top: ${({size}) => (size >= 700 ? '44px' : '12px')};
  font-family: ${({theme}) => theme.fontFamilyNunitoBold};
  font-size: ${({theme}) => theme.typeScale.matchingName};
  line-height: ${({theme}) => theme.lineHeight.matchingName};
  font-weight: bold;
`;

const IconWrapper = styled.View`
  margin-top: 26px;
`;

const ButtonContainer = styled.View`
  margin-top: -26px;
`;

const Description = styled.Text`
  margin-left: auto;
  margin-right: auto;
  margin-top: 19px;
  font-style: normal;
  font-weight: 500;
  font-size: ${({theme}) => theme.typeScale.matchingDescription};
  line-height: ${({theme}) => theme.lineHeight.matchingDescription};
  text-align: center;

  color: ${({theme}) => theme.colors.system.black};
`;

const Info = styled.Text`
  margin-top: 50px;
  text-align: center;
  font-family: ${({theme}) => theme.fontFamilyNunitoSemiBold};
  font-size: ${({theme}) => theme.typeScale.matchingInfo};
  line-height: ${({theme}) => theme.lineHeight.matchingInfo};
`;
