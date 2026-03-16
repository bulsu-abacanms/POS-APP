import { View, Text, Image, Pressable, ImageSourcePropType } from "react-native";
import React from "react";

interface ProductCardProps {
  image: ImageSourcePropType;
  name: string;
  subtitle?: string;
  price: number;
  quantity: number;
  onAdd?: () => void;
  onRemove?: () => void;
  onDelete?: () => void;
  style?: object;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  name,
  subtitle,
  price,
  quantity,
  onAdd,
  onRemove,
  onDelete,
  style = {},
}) => {
  const isHorizontal = !!subtitle;

  return (
    <View
      style={[
        {
          backgroundColor: '#fff',
          borderRadius: 24,
          padding: 12,
          flexDirection: isHorizontal ? 'row' : 'column',
          width: isHorizontal ? 360 : 190,
          alignItems: isHorizontal ? 'center' : 'flex-start',
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 10,
          elevation: 5,
        },
        style,
      ]}
    >
      <Image
        source={image}
        style={{
          width: isHorizontal ? 110 : '100%',
          height: isHorizontal ? 100 : 130,
          borderRadius: 18,
          marginRight: isHorizontal ? 16 : 0,
          marginBottom: isHorizontal ? 0 : 12,
        }}
        resizeMode="cover"
      />
      <View style={{ flex: 1, width: '100%', justifyContent: 'space-between' }}>
        <View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <Text style={{ fontSize: 17, fontWeight: '700', color: '#000', flex: 1 }}>{name}</Text>
            {isHorizontal && onDelete && (
              <Pressable onPress={onDelete} style={{ padding: 2 }}>
                <Image 
                  source={require("../../assets/delete.png")} 
                  style={{ width: 22, height: 22, }} 
                />
              </Pressable>
            )}
          </View>
          {subtitle && (
            <Text style={{ color: '#888', fontSize: 14, marginTop: 2 }}>{subtitle}</Text>
          )}
        </View>
        <View style={{ 
          flexDirection: 'row', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          marginTop: isHorizontal ? 15 : 10 
        }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}>
            ${price?.toFixed(2)}
          </Text>
          
          <View style={{ 
            flexDirection: 'row', 
            backgroundColor: '#F2F4F5', 
            borderRadius: 25, 
            alignItems: 'center',
            padding: 4,
            minWidth: 90,
            justifyContent: 'space-between'
          }}>
            <Pressable 
              onPress={onRemove} 
              style={{ 
                backgroundColor: '#FFF', 
                width: 28, 
                height: 28, 
                borderRadius: 14, 
                justifyContent: 'center', 
                alignItems: 'center',
                elevation: 2,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.1,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#555' }}>–</Text>
            </Pressable>
            
            <Text style={{ fontSize: 15, fontWeight: '700', color: '#333', marginHorizontal: 6 }}>
              {quantity}
            </Text>
            
           
            <Pressable 
              onPress={onAdd} 
              style={{ 
                backgroundColor: '#B4E169', 
                width: 28, 
                height: 28, 
                borderRadius: 14, 
                justifyContent: 'center', 
                alignItems: 'center' 
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000' }}>+</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;