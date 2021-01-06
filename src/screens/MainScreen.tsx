import * as React from 'react';
import {
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import styled from 'styled-components/native';
import IconTextInput from 'components/UI/IconTextInput';
import searchData from 'data/searchData';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'components/UI/Icon';
import Modal from 'screens/Modal';
import {useNavigation} from '@react-navigation/native';

function MainScreen() {
  const navigation = useNavigation();

  const renderSearchItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Matching', {itemID: item.key})}>
        <Wrapper>
          <Image source={item.image}></Image>
          <Text>{item.title}</Text>
        </Wrapper>
      </TouchableOpacity>
    );
  };

  const headerComponent = () => {
    return (
      <HeaderWrapper>
        <Subtitle>Рукопожатия со звёздами</Subtitle>
        <StyledModal />
      </HeaderWrapper>
    );
  };
  return (
    <SafeAreaView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <SettingsButton onPress={() => navigation.navigate('Settings')}>
            <StyledGradient
              colors={['#36D1DC', '#5B86E5']}
              start={{x: 0, y: 0.5}}
              end={{x: 1, y: 0.5}}
              locations={[0.1153, 0.9143]}>
              <Icon name={'Settings'} width={35} />
            </StyledGradient>
          </SettingsButton>
          <FlatListContainer>
            <IconTextInput
              title={'Никнейм или имя пользователя'}
              icon={'Search'}
            />

            <FlatList
              data={searchData}
              renderItem={renderSearchItem}
              ListHeaderComponent={headerComponent}></FlatList>
          </FlatListContainer>
        </Container>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

export default MainScreen;

const HeaderWrapper = styled.View`
  margin-bottom: 32px;
`;

const FlatListContainer = styled.View`
  height: 100%;
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
  width: 50px;
  height: 50px;
  border-radius: 50px;
  box-shadow: ${({theme}) => theme.shadow.basic};
  right: 31px;
  bottom: 31px;
  z-index: 1;
`;

const Subtitle = styled.Text`
  margin-top: 10px;
  color: ${({theme}) => theme.colors.ui.blue};
  font-family: ${({theme}) => theme.fontFamilyNunitoBold};
  font-size: ${({theme}) => theme.typeScale.subtitle};
  line-height: ${({theme}) => theme.lineHeight.subtitle};
  font-weight: bold;
  text-align: center;
`;

const Container = styled.View`
  justify-content: space-around;
`;

const Wrapper = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
  margin-left: 12px;
`;

const Image = styled.Image`
  width: 54px;
  height: 54px;
  border-radius: 47px;
  border-width: 2px;
  border-color: ${({theme}) => theme.colors.system.white};
  box-shadow: ${({theme}) => theme.shadow.search};
`;

const Text = styled.Text`
  margin-left: 26px;
  margin-top: 11px;
  font-size: ${({theme}) => theme.typeScale.search};
`;

const StyledModal = styled(Modal)``;
