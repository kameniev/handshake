import React from 'react'
import styled from 'styled-components/native'
import Icon from './UI/Icon'
import LinearGradient from 'react-native-linear-gradient'


export default function OnboardLost() {
    return(
        <List>
                    <MainWrapper>
                    <ImageWrapper  
                    colors={['rgba(132, 250, 176, 1)', 'rgba(143, 211, 244, 1)']}
                    start={{x: 0, y: 0.5}}
                    end={{x: 1, y: 0.5}}
                    locations={[0.1153, 0.9143]}><MainImage source={require('../assets/images/1.jpg')}/></ImageWrapper>
                    <MainText>Егор Крид</MainText>
                    </MainWrapper>

                    <EllipseWrapper><Icon name={'Ellipse'}/></EllipseWrapper>

                    <Wrapper>
                    <Image source={require('../assets/images/4.jpg')}/>
                    <Text>Гусселейман</Text>
                    </Wrapper>

                    <EllipseWrapper><Icon name={'Ellipse'}></Icon></EllipseWrapper>

                    <Wrapper>
                    <Image source={require('../assets/images/2.jpg')}/>
                    <Text>Ирина Шейк</Text>
                    </Wrapper>

                    <EllipseWrapper><Icon name={'Ellipse'}/></EllipseWrapper>

                    <Wrapper>
                    <Image source={require('../assets/images/3.jpg')}/>
                    <Text>Миша Литвин</Text>
                    </Wrapper>

                    <EllipseWrapper><Icon name={'Ellipse'}/></EllipseWrapper>

                    <MainWrapper>
                    <ImageWrapper  
                    colors={['#36D1DC', '#5B86E5']}
                    start={{x: 0, y: 0.5}}
                    end={{x: 1, y: 0.5}}
                    locations={[0.1153, 0.9143]}> 
                    <MainImage source={require('../assets/images/4.jpg')}/></ImageWrapper>   
                    <MainText>Кори Тейлор</MainText>
                    </MainWrapper>
                    </List>
    )
}

const ImageWrapper = styled(LinearGradient)`
width: 100px;
height: 100px;
border-radius: 250px;
justify-content: center;
align-items: center;
`

const Wrapper = styled.View`
flex-direction: row;
margin-bottom: 5px;
`

const Image = styled.Image`
width: 54px;
height: 54px;
border-radius: 47px;
border-color: ${({ theme }) => theme.colors.system.white};
border-width: 2px;
box-shadow: ${({ theme }) => theme.shadow.Search};
`

const Text = styled.Text`
margin-left: 39px;
margin-top: 11px;
font-size: ${({ theme }) => theme.typeScale.Search};
`


const List = styled.View`
margin-top: 32px;
margin-left: 65px;
`


const MainWrapper = styled.View`
flex-direction: row;
margin-bottom: 2px;
margin-left: -22px;
`

const MainImage = styled.Image`
width: 94px;
height: 94px;
border-radius: 250px;
box-shadow: ${({ theme }) => theme.shadow.Search};
`

const MainText = styled.Text`
margin-left: 17px;
margin-top: 32px;
font-weight: bold;
font-size: ${({ theme }) => theme.typeScale.OnboardList};
`

const EllipseWrapper = styled.View`
margin-bottom: 2px;
margin-top: 2px;
margin-left: -65px;
`

