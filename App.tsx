import React, {useState} from "react";
import {SafeAreaView, View, Text, FlatList, Switch} from "react-native"

const data = [
  {id: 0, name: 'Kafe Kodlama', isFavorite: true},
  {id: 1, name: 'Bug Kafe', isFavorite: false},
  {id: 2, name: 'Tekno Kafe', isFavorite: false},
  {id: 3, name: 'KafeKod', isFavorite: true},
  {id: 4, name: 'Kodlayan Kafe', isFavorite: false},
  {id: 5, name: 'Veri Durağı', isFavorite: true},
  ];

const App = () => {
  const [cafeList, setCafeList] = useState(data)
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false)

  function onFavoritesChange(isFavoriteSelected) {
    setShowOnlyFavorites(isFavoriteSelected)
    isFavoriteSelected 
    ? setCafeList(cafeList.filter(cafe => cafe.isFavorite))
    : setCafeList(data)
  }
 
  return(
    <SafeAreaView>
      <View style = {{margin: 10}}>
        <Text style = {{fontSize: 20}}>Show Only Favorites</Text>
        <Switch value = {showOnlyFavorites} onValueChange = {onFavoritesChange}/>
      </View>
  
      <FlatList
      data = {cafeList}
      renderItem = {({item}) => <Text style = {{fontSize: 18}}>{item.name}</Text>}
      />
    </SafeAreaView>
  )
}

export default App;