import styled from "styled-components/native";
import { FlatList } from "react-native";

export const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const Loading = styled.View`
  position: absolute;
  top: 50%;
  left: 45%;
`;
