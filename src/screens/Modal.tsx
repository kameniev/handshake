import React, {useState} from 'react';
import styled from 'styled-components/native';
import {TouchableHighlight, View, Text, Modal} from 'react-native';
import Icon from 'components/UI/Icon';
import LinearGradient from 'react-native-linear-gradient';
import {LinearTextGradient} from 'react-native-text-gradient';

function ModalScreen() {
  const [modalVisible, setModalVisible] = useState(true);
  return (
    <Modal animationType="none" transparent={true} visible={modalVisible}>
      <Background
        style={modalVisible ? {backgroundColor: 'rgba(0,0,0,0.5)'} : ''}>
        <ModalWrapper>
          <GradientWrapper
            locations={[0, 1]}
            colors={['#36D1DC', '#5B86E5']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}>
            <GradientText>
              Для поиска других {'\n'} пользователей нужно {'\n'} купить
              подписку
            </GradientText>
          </GradientWrapper>
          <SubtitleWrapper>
            <Subtitle>Подписка на 12 месяцев за </Subtitle>
            <SubtitleBold>$3.99</SubtitleBold>
          </SubtitleWrapper>
          <HandshakeWrapper>
            <Icon name={'Handshake'} />
          </HandshakeWrapper>
          <ArrowWrapper>
            <Icon name={'Arrow'} />
          </ArrowWrapper>
          <NextButton>
            <StyledGradient
              colors={['#36D1DC', '#5B86E5']}
              start={{x: 0, y: 0.5}}
              end={{x: 1, y: 0.5}}
              locations={[0.1153, 0.9143]}>
              <NextButtonText>Купить</NextButtonText>
            </StyledGradient>
          </NextButton>

          <IconWrapper
            onPress={() => {
              setModalVisible(!modalVisible);
            }}>
            <Icon name={'Cancel'} width={20} />
          </IconWrapper>
        </ModalWrapper>
      </Background>
    </Modal>
  );
}

export default ModalScreen;

const ModalWrapper = styled.View`
  margin-left: auto;
  margin-right: auto;
  margin-top: 65%;
  width: 355px;
  height: 204px;
  align-items: center;
  border-radius: ${({theme}) => theme.borderRadius.modal};
  background-color: ${({theme}) => theme.colors.system.white}; ;
`;

const IconWrapper = styled.TouchableOpacity`
  position: absolute;
  right: 15px;
  top: 15px;
`;

const GradientText = styled.Text`
  font-family: ${({theme}) => theme.fontFamilyNunitoBlack};
  font-size: ${({theme}) => theme.typeScale.modalTitle};
  line-height: ${({theme}) => theme.lineHeight.modalTitle};
`;

const Subtitle = styled.Text`
  text-align: center;
  font-family: ${({theme}) => theme.fontFamilyNunitoRegular};
  font-weight: 400;
`;

const SubtitleBold = styled.Text`
  text-align: center;
  font-family: ${({theme}) => theme.fontFamilyNunitoRegular};
  font-weight: 700;
`;

const SubtitleWrapper = styled.View`
  flex-direction: row;
  margin-top: 14px;
`;

const StyledGradient = styled(LinearGradient)`
  width: 246px;
  height: 40px;
  border-radius: 25px;
  justify-content: center;
`;

const NextButton = styled.TouchableOpacity`
  margin-top: 10px;
  width: 246px;
  height: 40px;
  margin-left: auto;
  margin-right: auto;
  border-radius: ${({theme}) => theme.borderRadius.button};
`;

const NextButtonText = styled.Text`
  text-align: center;
  color: ${({theme}) => theme.colors.ui.gray};
  font-size: ${({theme}) => theme.typeScale.nextButton};
  line-height: ${({theme}) => theme.lineHeight.nextButton};
`;

const GradientWrapper = styled(LinearTextGradient)`
  margin-top: 20px;
  text-align: center;
`;

const HandshakeWrapper = styled.View`
  position: absolute;
  right: 10px;
  top: 47px;
  width: 29px;
`;

const ArrowWrapper = styled.View`
  position: absolute;
  left: 10px;
  top: 45px;
  width: 41px;
`;

const Background = styled.View`
  min-height: 100%;
`;
