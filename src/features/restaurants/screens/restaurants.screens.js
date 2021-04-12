import React from "react";
import { StatusBar, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";

import { RestaurantInfoCard } from "../components/restaurant-info-card.components";
import { Spacer } from "../components/spacer/spacer.components";

import { SafeArea, SearchContainer, RestaurantList } from "./restaurants.style";

export const RestaurantsScreen = () => {
  return (
    <>
      <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
      <SafeArea>
        <SearchContainer>
          <Searchbar />
        </SearchContainer>

        <RestaurantList
          data={[
            { name: 1 },
            { name: 2 },
            { name: 3 },
            { name: 4 },
            { name: 5 },
            { name: 6 },
          ]}
          renderItem={() => (
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard />
            </Spacer>
          )}
          keyExtractor={(item) => item.name}
        />
      </SafeArea>
    </>
  );
};
