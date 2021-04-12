import React from "react";
import { StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";

import { RestaurantInfoCard } from "../components/restaurant-info-card.components";

import {
  SafeArea,
  SearchContainer,
  RestaurantListContainer,
} from "./restaurants.style";

export const RestaurantsScreen = () => {
  return (
    <>
      <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
      <SafeArea>
        <SearchContainer>
          <Searchbar />
        </SearchContainer>

        <RestaurantListContainer>
          <RestaurantInfoCard />
        </RestaurantListContainer>
      </SafeArea>
    </>
  );
};
