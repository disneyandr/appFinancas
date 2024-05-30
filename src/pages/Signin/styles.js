import styled from 'styled-components/native';

export const Background = styled.View`
  flex: 1;
  background-color: #f0f4ff;
`;
export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
`;
export const AreaInput = styled.View`
  flex-direction: row;
`;
export const Input = styled.TextInput`
  background-color: #fff;
  width: 90%;
  font-size: 17px;
  padding: 10px;
  border-radius: 8px;
  color: #121212;
  margin-bottom: 15px;
`;
export const SubmitButton = styled.TouchableOpacity`
  width: 90%;
  height: 45px;
  background-color: #6200ea;

  padding: 10px 20px;
  border-radius: 8px;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
`;
export const SubmitText = styled.Text`
  font-size: 20px;
  color: #fff;
`;
export const Link = styled.TouchableOpacity`
  margin-top: 10px;
  margin-bottom: 10px;
`;
export const LinkText = styled.Text``;
