import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  padding: 3em;
  display: flex;
  justify-content: center;
  //background-color: red;
`

export const ContainerAvatar1 = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 180px;
  height: 311px;
  background-color: #252A40;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  z-index: 1;
`

export const ContainerAvatar2 = styled.div`
  position: relative;
  padding: 0 1em;
  margin-right: 1em;
`

export const ContainerAvatar3 = styled.div`
  padding: 0 1em;
  margin-left: 1em;
`

export const ContainerNameTOP1 = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-bottom: 4em;
`

export const ContainerNameTOP2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  z-index: 1;
  position: absolute;
  top: 166px;
  left: 58px;
`

export const ContainerNameTOP3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  z-index: 1;
  position: absolute;
`

export const NameTOP1 = styled.span`
  position: absolute;
  top: -100px;
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.font.family.default};
  font-weight: 700;
  font-size: 19pt;
`

export const NameTOP2 = styled.span`
  position: absolute;
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.font.family.default};
  font-weight: 700;
  font-size: 19pt;
`

export const NameTOP3 = styled.span`
  position: absolute;
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.font.family.default};
  font-weight: 700;
  font-size: 19pt;
  left: 10px;
  top: 16px;
`

export const PointsTOP1 = styled.span`
  position: absolute;
  color: ${(props) => props.theme.colors.top1};
  font-family: ${(props) => props.theme.font.family.default};
  font-size: 15pt;
  font-weight: 600;
  top: -66px;
`

export const PointsTOP2 = styled.span`
  position: absolute;
  color: ${(props) => props.theme.colors.top2};
  font-family: ${(props) => props.theme.font.family.default};
  font-size: 15pt;
  font-weight: 600;
  top: 40px;
`

export const PointsTOP3 = styled.span`
  position: absolute;
  color: ${(props) => props.theme.colors.top3};
  font-family: ${(props) => props.theme.font.family.default};
  font-size: 15pt;
  font-weight: 600;
  top: 53px;
  left: 45px;
`

export const Bar = styled.div`
  position: absolute;
  width: 567px;
  height: 191px;
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 20px;
  top: 169px;
  left: 400px;
  z-index: 0;
`