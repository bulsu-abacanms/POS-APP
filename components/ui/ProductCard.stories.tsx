import ProductCard from "./ProductCard";
import { View } from "react-native";

export default {
  title: "UI/ProductCard",
  component: ProductCard,
};


export const Default = () => (
  <View style={{ padding: 24, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <ProductCard
      image={require("../../assets/berry.png")}
      name="Berry Cake"
      subtitle={undefined} 
      price={12.00}
      quantity={1}
      onAdd={() => {}}
      onRemove={() => {}}
      onDelete={undefined} 
    />
  </View>
);


export const WithSubtitle = () => (
  <View style={{ padding: 24, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <ProductCard
      image={require("../../assets/berry.png")}
      name="Berry Cake"
      subtitle="Berry cake blooms." 
      price={12.00}
      quantity={1}
      onAdd={() => {}}
      onRemove={() => {}}
      onDelete={() => alert('Deleted!')}
    />
  </View>
);