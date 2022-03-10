import React from "react";
import { FlatList } from "react-native";

import { WINDOW_HEIGHT, WINDOW_WIDTH } from "../../constants/constants";

const Carousel = ({ data, renderItem }) => {
  const gap = WINDOW_WIDTH * 0.025;
  const offset = WINDOW_WIDTH * 0.075;
  const pageWidth = WINDOW_WIDTH * 0.8;

  return (
    <FlatList
      horizontal={true}
      contentContainerStyle={{
        paddingHorizontal: gap + offset / 2,
        marginVertical: WINDOW_HEIGHT * 0.05,
      }}
      data={data}
      renderItem={renderItem}
      pagingEnabled={true}
      snapToInterval={pageWidth + gap * 2}
      keyExtractor={(item) => (item._id ? item._id : 0)}
    />
  );
};

export default Carousel;
