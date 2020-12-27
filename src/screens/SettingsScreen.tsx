import React from 'react'
import {Text, View} from 'react-native'
import styled from 'styled-components/native'
import {BackButton, useHistory} from 'react-router-native'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'components/UI/Icon'






function SettingsScreen() {

        const history = useHistory()

        function handleClick() {
            history.push('/main')
        }

        return(
           <View>
               
              
               <Subtitle>Настройки</Subtitle>
                    <Wrapper>
                   <Setting>Политика конфиденциальности</Setting>
                   <Setting>Правила использования</Setting>
                   <Setting>Обратная связь</Setting>
                   </Wrapper>
                   <SettingsButton><StyledGradient
            colors={['#36D1DC', '#5B86E5']}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5}}
            locations={[0.1153, 0.9143]}
            ><Icon name={'Profile'} width={35}/></StyledGradient></SettingsButton>
            <Back  onPress={handleClick}><BackText>Выйти</BackText></Back>
           </View>
        )
}

export default SettingsScreen

const Subtitle = styled.Text`
margin-top: 6px;
color: ${({ theme }) => theme.colors.ui.blue};
font-family: ${({ theme }) => theme.fontFamilyNunitoBold};
font-size: ${({ theme }) => theme.typeScale.Subtitle};
line-height: ${({ theme }) => theme.lineHeight.Subtitle};
font-weight: bold;
text-align: center;
`
const Wrapper = styled.View`
margin-top: 10%;
min-height: 90%;
`

const Setting = styled.Text`
margin-top: 8px;
margin-left: 33px;
font-size: ${({ theme }) => theme.typeScale.Setting};
line-height: ${({ theme }) => theme.lineHeight.Setting};
`

const StyledGradient = styled(LinearGradient)`
width: 50px;
height: 50px;
border-radius: 50px;
justify-content: center;
align-items: center;
`



const SettingsButton = styled.TouchableOpacity`
position: absolute;
right: 31px;
bottom: 38px;
width: 50px;
height: 50px;
border-radius: 50px;
box-shadow: ${({ theme }) => theme.shadow.basic};
z-index: 1;
`
const Back = styled.TouchableOpacity`
position: absolute;
left: 33px;
bottom: 42px;
`;

const BackText = styled.Text`
font-size: ${({ theme }) => theme.typeScale.Back};
line-height: ${({ theme }) => theme.lineHeight.Back};
`;
