import styled from "styled-components/native";
import { FlatList } from "react-native";

export const SafeArea = styled.SafeAreaView`
  flex: 1;
`;

export const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;
