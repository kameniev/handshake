import React from 'react';
import styled from 'styled-components/native';
import searchData from 'data/searchData';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import matchedData from 'data/matchedData';
import Icon from 'components/UI/Icon';
import NextButton from 'components/UI/NextButton';
import {Dimensions} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {StyleSheet} from 'react-native';

const windowHeight = Dimensions.get('window').height;
const flatlistHeight = windowHeight - 540;

type ParamList = {
  MatchingDone: {
    itemID: string;
  };
};

function MatchingDoneScreen() {
  const route = useRoute<RouteProp<ParamList, 'MatchingDone'>>();

  const renderSearchItem = ({item}) => {
    switch (item.key) {
      case '1':
        return (
          <BigWrapper>
            <Icon name={'Ellipse'} />
            <Wrapper>
              <Image source={item.image} />
              <Text>{item.title}</Text>
            </Wrapper>
            <IconWrapper>
              <Icon name={'Ellipse'} />
            </IconWrapper>
          </BigWrapper>
        );
      default:
        return (
          <BigWrapper>
            <Wrapper>
              <Image source={item.image} />
              <Text>{item.title}</Text>
            </Wrapper>
            <IconWrapper>
              <Icon name={'Ellipse'} />
            </IconWrapper>
          </BigWrapper>
        );
    }
  };

  return (
    <SafeAreaView>
      <HeaderWrapper>
        <Title>Есть контакт!</Title>

        <ImageWrapper
          colors={['rgba(132, 250, 176, 1)', 'rgba(143, 211, 244, 1)']}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}
          locations={[0.1153, 0.9143]}>
          <MainImage
            source={searchData[parseInt(route?.params?.itemID) - 1].image}
          />
        </ImageWrapper>

        <MainText>
          {searchData[parseInt(route?.params?.itemID) - 1].title}
        </MainText>
      </HeaderWrapper>

      <FlatlistWrapper>
        <FlatList
          contentContainerStyle={styles.contentContainer}
          data={matchedData}
          renderItem={renderSearchItem}></FlatList>
      </FlatlistWrapper>

      <FooterWrapper>
        <SecondaryImageWrapper
          colors={['#36D1DC', '#5B86E5']}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}
          locations={[0.1153, 0.9143]}>
          <SecondaryImage source={require('../assets/images/2.jpg')} />
        </SecondaryImageWrapper>

        <SecondaryText>Кори Тейлор</SecondaryText>
        <Description>Вы знакомы через 4 рукопожатия!</Description>
        <ButtonContainer>
          <NextButton
            title={'Поделиться'}
            go={() => console.log('success')}></NextButton>
        </ButtonContainer>
      </FooterWrapper>
    </SafeAreaView>
  );
}

export default MatchingDoneScreen;

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 40,
    flexGrow: 1,
  },
});

const FlatList = styled.FlatList`
  height: ${flatlistHeight}px;
  margin: 0 auto;
`;

const FlatlistWrapper = styled.View``;

const Title = styled.Text`
  margin-top: 6px;
  color: ${({theme}) => theme.colors.ui.blue};
  font-family: ${({theme}) => theme.fontFamilyNunitoBold};
  font-size: ${({theme}) => theme.typeScale.matchingTitle};
  line-height: ${({theme}) => theme.lineHeight.matchingTitle};
  font-weight: bold;
  text-align: center;
`;

const MainImage = styled.Image`
  width: 130px;
  height: 130px;
  border-radius: 250px;
`;

const ImageWrapper = styled(LinearGradient)`
  margin: 26px auto 0;
  width: 138px;
  height: 138px;
  border-radius: 250px;
  justify-content: center;
  align-items: center;
  box-shadow: ${({theme}) => theme.shadow.matchingImage};
`;

const MainText = styled.Text`
  margin: 16px auto 0;
  font-family: ${({theme}) => theme.fontFamilyNunitoBold};
  font-size: ${({theme}) => theme.typeScale.matchingMainText};
  line-height: ${({theme}) => theme.lineHeight.matchingMainText};
`;

const HeaderWrapper = styled.View`
  margin-bottom: 13px;
`;

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

const BigWrapper = styled.View``;

const Text = styled.Text`
  margin-left: 15px;
  font-family: ${({theme}) => theme.fontFamilyNunitoRegular};
  font-size: ${({theme}) => theme.typeScale.matchingItem};
  line-height: ${({theme}) => theme.lineHeight.matchingItem};
`;

const Image = styled.Image`
  width: 54px;
  height: 54px;
  border-radius: 47px;
  box-shadow: ${({theme}) => theme.shadow.matchingImage};
`;

const SecondaryImage = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 60px;
  box-shadow: ${({theme}) => theme.shadow.matchingImage};
`;

const FooterWrapper = styled.View``;

const SecondaryImageWrapper = styled(LinearGradient)`
  margin: 26px auto 0;
  width: 86px;
  height: 86px;
  border-radius: 47px;
  justify-content: center;
  align-items: center;
  box-shadow: ${({theme}) => theme.shadow.matchingImage};
`;

const SecondaryText = styled.Text`
  margin: 7px auto 0;
  font-family: ${({theme}) => theme.fontFamilyNunitoBold};
  font-size: ${({theme}) => theme.typeScale.matchingMainText};
  line-height: ${({theme}) => theme.lineHeight.matchingMainText};
`;

const Description = styled.Text`
  margin: 5px auto 0;
  font-family: ${({theme}) => theme.fontFamilyNunitoSemiBold};
  font-size: ${({theme}) => theme.typeScale.matchingItem};
  line-height: ${({theme}) => theme.lineHeight.matchingItem};
`;

const ButtonContainer = styled.View`
  margin: -40px auto 0;
`;

const IconWrapper = styled.View`
  margin-top: 4px;
  margin-bottom: 4px;
`;
