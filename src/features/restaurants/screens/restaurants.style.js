import styled from "styled-components/native";

export const SafeArea = styled.SafeAreaView`
  flex: 1;
`;

export const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantListContainer = styled.View`
  flex: 1;
  background: #d3d3d3;
  padding: ${(props) => props.theme.space[3]};
`;
