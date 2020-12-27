import LoginButton from 'components/LoginButton'
import * as React from 'react'
import {Text, Platform, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, SafeAreaView} from 'react-native'
import styled from 'styled-components/native'

import  {LinearTextGradient} from 'react-native-text-gradient'





function LoginScreen() {
        return(
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
            <Container>
            <GradientWrapper><GradientText
            locations={[0.0509, 0.5673, 0.9590]}
            colors={["#FF057C", "#8D0B93", "#321575"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            ><Title>handshake</Title></GradientText></GradientWrapper>
            


            <LoginButton/>
            <Description>Нажимая войти вы принимаете условия {"\n"} лицензионного соглашения для пользователя</Description>
            </Container>
            </KeyboardAvoidingView> 
            </TouchableWithoutFeedback>
        )
}

export default LoginScreen

const Title = styled.Text`
color: ${({ theme }) => theme.colors.ui.blue};
font-family: ${({ theme }) => theme.fontFamilyNunitoBlack};
font-size: ${({ theme }) => theme.typeScale.Title};
`

const GradientText = styled(LinearTextGradient)`
text-align: center;
`

const GradientWrapper = styled.View`
margin-top: 30%;

`


const Container = styled.View`
justify-content: space-around;
`

const Description = styled.Text`

margin-left: auto;
margin-right: auto;
margin-top: 19px;
font-style: normal;
font-weight: 500;
font-size: ${({ theme }) => theme.typeScale.Description};
line-height: ${({ theme }) => theme.lineHeight.Description};
letter-spacing: 0.005px;
text-decoration-line: underline;

color: #000000;

opacity: 0.4;
` 

