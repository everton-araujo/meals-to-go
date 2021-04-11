import styled from "styled-components/native";
import { Card as CardPaper } from "react-native-paper";

export const Card = styled(CardPaper)`
  background: ${(props) => props.theme.colors.bg.primary};
`;

export const Cover = styled(CardPaper.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background: ${(props) => props.theme.colors.bg.primary};
`;

export const Rating = styled.View`
  flex-direction: row;
  padding-left: ${(props) => props.theme.space[3]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

export const StatusContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const OpenIcon = styled.View`
  padding-right: ${(props) => props.theme.space[4]};
  margin-top: -48px;
`;

export const ClosedTemporarilyText = styled.Text`
  padding-top: 18px;
  margin-right: -${(props) => props.theme.space[2]};
  color: ${(props) => props.theme.colors.text.red};
`;
