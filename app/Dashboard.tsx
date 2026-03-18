import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, StatusBar, Image } from 'react-native';
import dashboardStyles from '../utilities/pages/dashboardStyles';
import Button from '../components/Button/Button';
import TopBar from '../components/layout/TopBar';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import ProductCard from '../components/ui/ProductCard';
import SearchBar from '../components/ui/SearchBar'; 

const products = [
  { id: 1, name: 'Berry Cake', price: 12.0, image: require('../assets/berry.png') },
  { id: 2, name: 'Apple', price: 8.0, image: require('../assets/berry.png') },
  { id: 3, name: 'Black Tea', price: 10.0, image: require('../assets/berry.png') },
  { id: 4, name: 'Cashew nuts', price: 25.0, image: require('../assets/berry.png') },

];

type RootStackParamList = {
  Login: undefined;
  Dashboard: undefined;
  Ticket: undefined;
};
const Dashboard = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [search, setSearch] = useState('');
  const [cart, setCart] = useState<{ [key: number]: number }>({});

  const handleAdd = (id: number) => {
    setCart(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const handleRemove = (id: number) => {
    setCart(prev => ({ ...prev, [id]: Math.max((prev[id] || 0) - 1, 0) }));
  };

  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);

  return (
    <SafeAreaView style={dashboardStyles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <TopBar
        ticketCount={totalItems}
        onTicketPress={() => navigation.navigate('Ticket')}
      />
      <View style={dashboardStyles.mainContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={dashboardStyles.scrollContent}
        >
          <View style={dashboardStyles.searchSection}>
            <SearchBar 
              value={search}
              onChangeText={setSearch}
              placeholder="Search.."
              onFilterPress={() => console.log("Filter open")}
              onQRPress={() => console.log("QR Scanner open")}
            />
          </View>
          <View style={dashboardStyles.headerRow}>
            <Text style={dashboardStyles.headerTitle}>All Items</Text>
            <Text style={dashboardStyles.seeAll}>See All</Text>
          </View>
          <View style={dashboardStyles.filterContainer}>
            <Button
              label="Add"
              variant="secondary"
              style={dashboardStyles.filterBtn}
              icon={<Image source={require('../assets/add.png')} style={dashboardStyles.iconRight} resizeMode="contain" />}
              iconPosition="left"
            />
            <Button
              label="All Items"
              variant="secondary"
              style={dashboardStyles.filterBtn}
            />
            <Button
              label="Categories"
              variant="secondary"
              style={dashboardStyles.filterBtn}
              icon={<Image source={require('../assets/dropdown.png')} style={dashboardStyles.iconRight} resizeMode="contain" />}
              iconPosition="right"
            />
          </View>
          <View style={dashboardStyles.productGrid}>
            {filteredProducts.map(product => (
              <View key={product.id} style={dashboardStyles.gridItem}>
                <ProductCard
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  quantity={cart[product.id] || 0}
                  onAdd={() => handleAdd(product.id)}
                  onRemove={() => handleRemove(product.id)}
                />
              </View>
            ))}
          </View>
        </ScrollView>
        <View style={dashboardStyles.bottomBarWrapper}>
          <View style={dashboardStyles.blackCapsule}>
            <Button
              label="Save"
              variant="secondary"
              style={dashboardStyles.saveBtn}
              textStyle={dashboardStyles.saveText}
            />
            <Button
              label="Charge"
              variant="primary"
              style={dashboardStyles.chargeBtn}
              textStyle={dashboardStyles.chargeText}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};



export default Dashboard;