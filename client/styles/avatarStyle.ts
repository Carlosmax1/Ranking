import styled from "styled-components";

export interface AvatarUserProps {
  url: string;
}

export const Number1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  background-color: ${(props) => props.theme.colors.top1};
  position: absolute;
  top: 80%;
  right: 35.3%;
  border-radius: 10px;
  font-family: ${(props) => props.theme.font.family.default};
  color: ${(props) => props.theme.colors.white};
  font-weight: 700;
`

export const Number2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  background-color: ${(props) => props.theme.colors.top2};
  position: absolute;
  top: 80%;
  right: 35.3%;
  border-radius: 10px;
  font-family: ${(props) => props.theme.font.family.default};
  color: ${(props) => props.theme.colors.white};
  font-weight: 700;
`

export const Number3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  background-color: ${(props) => props.theme.colors.top3};
  position: absolute;
  top: 80%;
  right: 35.3%;
  border-radius: 10px;
  font-family: ${(props) => props.theme.font.family.default};
  color: ${(props) => props.theme.colors.white};
  font-weight: 700;
`

export const Avatar1 = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 100%; 
  background-color: #fff;
  border: 5px solid ${(props) => props.theme.colors.top1};
  z-index: 1;
  top: -50px;
`
export const Avatar2 = styled.div`
  z-index: 1;
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 100%; 
  background-color: #fff;
  border: 5px solid ${(props) => props.theme.colors.top2};
  margin-top: 3em;
  
`
export const Avatar3 = styled.div`
  z-index: 1;
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 100%; 
  background-color: #fff;
  border: 5px solid ${(props) => props.theme.colors.top3};
  margin-top: 3em;
`

export const AvatarUserContainer = styled.div`

`

export const AvatarUser = styled.div<AvatarUserProps>` 
  background: url(${(props) => props.url});
  background-position: center;
  background-size: cover;
  width: 70px;
  height: 70px;
  border-radius: 100%;
  margin: 1em;
`

export const AvatarUsersContainerInfos = styled.div`
  padding: 0.9em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #5F5959;
`

export const Name = styled.span`
  font-family: ${(props) => props.theme.font.family.default};
  color: ${(props) => props.theme.colors.white};
  font-weight: 600;
`

export const Points = styled.span`
  font-family: ${(props) => props.theme.font.family.default};
  color: ${(props) => props.theme.colors.white};
  font-weight: 600;
`