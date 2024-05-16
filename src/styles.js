import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bkg};
`;

export const Titulo = styled.Text`
  color: ${props => props.cor};
  font-size: 25px;
`;
