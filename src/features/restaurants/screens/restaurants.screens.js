import React, { useContext } from "react";
import { StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";

import { RestaurantInfoCard } from "../components/restaurant-info-card.components";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

import { Spacer } from "../../../components/spacer/spacer.components";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { SearchContainer, RestaurantList } from "./restaurants.style";

export const RestaurantsScreen = () => {
  const restaurantContext = useContext(RestaurantsContext);

  return (
    <>
      <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
      <SafeArea>
        <SearchContainer>
          <Searchbar />
        </SearchContainer>

        <RestaurantList
          data={restaurantContext.restaurants}
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
