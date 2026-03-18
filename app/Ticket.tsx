import React from 'react';
import { View, Text, ScrollView, SafeAreaView, StatusBar, Image } from 'react-native';
import Button from '../components/Button/Button';
import TopBar from '../components/layout/TopBar';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import ProductCard from '../components/ui/ProductCard';
import ticketStyles from '../utilities/pages/ticketStyles';


const Products = [
  {
    id: 1,
    name: 'Berry Cake',
    price: 12.0,
    description: 'Berry cake blooms.',
    image: require('../assets/berry.png'),
    quantity: 1,
  },
  {
    id: 2,
    name: 'Apple',
    price: 8.0,
    description: 'Apple falls swiftly.',
    image: require('../assets/berry.png'),
    quantity: 1,
  },
  {
    id: 3,
    name: 'Black Tea',
    price: 12.0,
    description: 'Black tea simmers.',
    image: require('../assets/berry.png'),
    quantity: 1,
  },
];

type RootStackParamList = {
  Login: undefined;
  Dashboard: undefined;
  Ticket: undefined;
};
export const Ticket = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const ticketCount = Products.length;
  const subtotal = Products.reduce((sum, p) => sum + p.price * p.quantity, 0);
  const discount = 8.6;
  const total = subtotal - discount;

  return (
    <SafeAreaView style={ticketStyles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <TopBar
        variant="ticket"
        ticketCount={ticketCount}
        onDashboardPress={() => navigation.navigate('Dashboard')}
      />
      <View style={ticketStyles.mainContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={ticketStyles.ticketList}>
                {Products.map(product => (
                  <ProductCard
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    image={product.image}
                    quantity={product.quantity}
                    subtitle={product.description}
                    onAdd={() => {}}
                    onRemove={() => {}}
                    onDelete={() => alert('Deleted!')}
                    style={ticketStyles.ticketItem}
                  />
                ))}
          </View>
          <View style={ticketStyles.summaryBox}>
            <View style={ticketStyles.summaryRow}>
              <Text style={ticketStyles.summaryLabel}>Sub total :</Text>
              <Text style={ticketStyles.summaryValue}>${subtotal.toFixed(2)}</Text>
            </View>
            <View style={ticketStyles.summaryRow}>
              <Text style={ticketStyles.summaryLabel}>Discount :</Text>
              <Text style={ticketStyles.summaryValue}>${discount.toFixed(2)}</Text>
            </View>
            <View style={ticketStyles.summaryRow}>
              <Text style={ticketStyles.summaryLabel}>total :</Text>
              <Text style={ticketStyles.summaryTotal}>${total.toFixed(2)}</Text>
            </View>
          </View>
        </ScrollView>
        <View style={ticketStyles.bottomBarWrapper}>
          <View style={ticketStyles.blackCapsule}>
            <Button
              label="Save"
              variant="secondary"
              style={ticketStyles.saveBtn}
              textStyle={ticketStyles.saveText}
            />
            <Button
              label="Charge"
              variant="primary"
              style={ticketStyles.chargeBtn}
              textStyle={ticketStyles.chargeText}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Ticket;
