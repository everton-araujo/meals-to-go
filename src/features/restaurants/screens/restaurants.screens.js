import React, { useContext } from "react";
import { StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { ActivityIndicator } from "react-native-paper";

import { RestaurantInfoCard } from "../components/restaurant-info-card.components";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

import { Spacer } from "../../../components/spacer/spacer.components";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { SearchContainer, RestaurantList, Loading } from "./restaurants.style";

export const RestaurantsScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);

  return (
    <>
      <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
      <SafeArea>
        <SearchContainer>
          <Searchbar />
        </SearchContainer>

        <Loading>
          {isLoading && <ActivityIndicator size="large" color="#4CD5EE" />}
        </Loading>

        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      </SafeArea>
    </>
  );
};
