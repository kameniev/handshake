import React from 'react'
import styled from 'styled-components/native'
import Icon, {IconName} from './Icon'
import {TouchableOpacity} from 'react-native'



type IconTextInputProps = {
   title: string,
   icon: IconName
}

export default function PasswordInput({title, icon} : IconTextInputProps) {

        return(
            <Container>
           <InputContainer>
              <PersonTextInput placeholder={"Никнейм или имя пользователя"}/>
              <TouchableOpacity><Flag><Icon name={icon}/></Flag></TouchableOpacity>
           </InputContainer>
           </Container>
        )
}



const Container = styled.View`
padding-left: 10px;
padding-right: 10px;
`

const InputContainer = styled.View`
flex-direction: row;
height: 50px;
margin-top: 27px;
padding-left: 20px;
border-radius: ${({ theme }) => theme.borderRadius.Input};
background: ${({ theme }) => theme.colors.system.white};
box-shadow: ${({ theme }) => theme.shadow.basic};
`


const PersonTextInput = styled.TextInput`
flex: 1;
margin-right: 8px;
`


const Flag = styled.View`
width: 15px;
height: 15px;
margin-right: 17px;
margin-top: 18px;
`


