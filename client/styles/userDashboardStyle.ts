import styled from 'styled-components';

export const ContainerUsers = styled.div`
  margin-top: 2em;
  padding: 1em;
  //border-bottom: 1px solid #a8a8a8;
  display: flex;
  justify-content: space-between;
`

export const Avatar = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff;
  border-radius: 100%;
  -webkit-box-shadow: 5px 5px 10px -3px rgba(0,0,0,0.69); 
  box-shadow: 5px 5px 10px -3px rgba(0,0,0,0.69);
` 

export const UserName = styled.h2`
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.font.family.default};
  font-size: 15pt;
  font-weight: 500;
  margin-left: 1em;
`

export const ContainerIcons = styled.div`
  display: flex;
  align-items: center;
`

export const ContainerAvatarName = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`