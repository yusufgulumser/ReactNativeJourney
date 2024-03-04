import React from 'react';

import { View, Text, ScrollView } from 'react-native';

const menuItemsToDisplay = [
  'Hummus \n Moutabal \n Falafel \n Marinated Olives \n Kofta \n Eggplant Salad \n Lentil Burger \n Smoked Salmon \n Kofta Burger \n Turkish Kebab \n Fries \n Buttered Rice \n Bread Sticks \n Pita Pocket \n Lentil Soup \n Greek Salad \n Rice Pilaf \n Baklava \n Tartufo \n Tiramisu \n Panna Cotta',
];

// ScrollView has to be bounded by height
// ScrollView has horizontal property. If it is true menu items are scrolled horizontally.
// ScrollView has indicatorStyle property. It show a indicator on the right when the screen is scrolling.

const MenuItems = () => {
  return (
    <View style={{ flex: 0.75 }}>
      <ScrollView
      horizontal={false}
      indicatorStyle={"white"}
        style={{
          paddingHorizontal: 40,
          paddingVertical: 40,
          backgroundColor: "black",
        }}>
        <Text style={{ color: 'white', fontSize: 40, flexWrap: 'wrap' }}>
          View Menu
        </Text>
        <Text style={{ color: '#F4CE14', fontSize: 36 }}>
          {menuItemsToDisplay[0]}
        </Text>
      </ScrollView>
    </View>
  );
};

export default MenuItems;