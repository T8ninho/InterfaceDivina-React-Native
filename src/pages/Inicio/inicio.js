import React from 'react';
import { View, Text } from 'react-native';
import { Container, TitlePrimary } from './inicio.style';
import TextInputExt from '../../ui/Components/TextInputExt/TextInputExt';
import ButtonExt from '../../ui/Components/ButtonExt/ButtonExt';

export default function Inicio(){
    return(
        <Container>
            
            <TitlePrimary>Sou o inicio</TitlePrimary>
        <View style={{width: '100%'}}>
            <TextInputExt  label={'E-mail ou Telefone'}></TextInputExt>
            <ButtonExt>Eu sou um botão</ButtonExt>
        </View>
        </Container>
    )
}