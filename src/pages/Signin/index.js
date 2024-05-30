import React from 'react';
import {Platform} from 'react-native';
import {
  Background,
  Container,
  Logo,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
  Link,
  LinkText,
} from './styles';

import {useNavigation} from '@react-navigation/native';
export default function SignIn() {
  //instaciando o hook

  const navigation = useNavigation();
  return (
    <Background>
      <Container behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled>
        <Logo source={require('../../assets/coin.jpg')} />
        <AreaInput>
          <Input placeholder="Seu email" />
        </AreaInput>
        <AreaInput>
          <Input placeholder="Sua senha" />
        </AreaInput>
        <SubmitButton>
          <SubmitText>Acessar</SubmitText>
        </SubmitButton>
        <Link onPress={() => navigation.navigate('SignUp')}>
          <LinkText>Criar uma conta</LinkText>
        </Link>
      </Container>
    </Background>
  );
}
