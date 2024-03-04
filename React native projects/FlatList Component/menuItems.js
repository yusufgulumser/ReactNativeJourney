import React from 'react';

import { View, Text, FlatList, StyleSheet } from 'react-native';

// FlatList has two required props: data and renderItem.
const menuItemsToDisplay = [
    { name: 'Hummus', id: '1A' },
    { name: 'Moutabal', id: '2B' },
    { name: 'Falafel', id: '3C' },
    { name: 'Marinated Olives', id: '4D' },
    { name: 'Kofta', id: '5E' },
    { name: 'Eggplant Salad', id: '6F' },
    { name: 'Lentil Burger', id: '7G' },
    { name: 'Smoked Salmon', id: '8H' },
    { name: 'Kofta Burger', id: '9I' },
    { name: 'Turkish Kebab', id: '10J' },
    { name: 'Fries', id: '11K' },	
    { name: 'Buttered Rice', id: '12L' },
    { name: 'Bread Sticks', id: '13M' },
    { name: 'Pita Pocket', id: '14N' },
    { name: 'Lentil Soup', id: '15O' },
    { name: 'Greek Salad', id: '16Q' },
    { name: 'Rice Pilaf', id: '17R' },
    { name: 'Baklava', id: '18S' },
    { name: 'Tartufo', id: '19T' },
    { name: 'Tartufo', id: '20U' },
    { name: 'Tiramisu', id: '21V' },
    { name: 'Panna Cotta', id: '22W' },
  ];

// creating a component with a name property
  const Item = ({ name }) => (
    <View style={menuStyles.innerContainer}>
      <Text style={menuStyles.itemText}>{name}</Text>
    </View>
  );

const MenuItems = () => {
    // renderItem is a function that takes an item object and returns a rendered Item component with the name prop set to the item's name property.
    const renderItem=({item})=><Item name={item.name}/>
  return (
    <View style={menuStyles.container}>
        <Text style={menuStyles.headerText}>
          View Menu
        </Text>
        <FlatList data={menuItemsToDisplay} renderItem={renderItem} keyExtractor={item=> item.id}></FlatList>
    </View>
  );
};

export default MenuItems;

const menuStyles = StyleSheet.create({
    container: {
      flex: 0.75,
    },
    innerContainer: {
      paddingHorizontal: 40,
      paddingVertical: 20,
      backgroundColor: 'black',
    },
    headerText: {
      color: 'white',
      fontSize: 40,
      flexWrap: 'wrap',
      textAlign: 'center',
    },
    itemText: {
      color: '#F4CE14',
      fontSize: 36,
    },
  });