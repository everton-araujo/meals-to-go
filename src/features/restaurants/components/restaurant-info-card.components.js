import React from "react";
import { SvgXml } from "react-native-svg";

import star from "../../../../assets/star";
import open from "../../../../assets/open";

import { Spacer } from "../../../components/spacer/spacer.components";

import {
  Card,
  Cover,
  Rating,
  StatusContainer,
  IconsContainer,
  OpenIcon,
  ClosedTemporarilyText,
  RestaurantIcon,
} from "./restaurant-info-card.style";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "data:image/jpeg;base64,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",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
    place_id,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <Card>
      <Cover source={{ uri: photos[0] }} />
      <Card.Title key={name} title={name} subtitle={address} />
      <StatusContainer>
        <Rating>
          {ratingArray.map((_, index) => (
            <SvgXml
              key={`star-${place_id}-${index}`}
              xml={star}
              width={20}
              height={20}
            />
          ))}
        </Rating>

        <IconsContainer>
          <OpenIcon>
            {isClosedTemporarily ? (
              <ClosedTemporarilyText>CLOSED TEMPORARILY</ClosedTemporarilyText>
            ) : (
              isOpenNow && <SvgXml xml={open} width={50} height={50} />
            )}
          </OpenIcon>

          <Spacer position="left" size="large">
            <RestaurantIcon source={{ uri: icon }} />
          </Spacer>
        </IconsContainer>
      </StatusContainer>
    </Card>
  );
};
