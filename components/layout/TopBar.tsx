import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import topBarStyles from '../../utilities/components/topBarStyles';

interface TopBarProps {
  ticketCount?: number;
  variant?: 'default' | 'ticket';
}

const TopBar: React.FC<TopBarProps> = ({ ticketCount = 3, variant = 'default' }) => {
  const isTicketVariant = variant === 'ticket';

  return (
    <View style={topBarStyles.container}>
      <TouchableOpacity style={topBarStyles.iconButton}>
        <Image 
          source={require('../../assets/dashboard.png')} 
          style={topBarStyles.icon} 
          resizeMode="contain" 
        />
      </TouchableOpacity>
      <View style={[
        topBarStyles.ticketPill, 
        isTicketVariant && topBarStyles.ticketPillGreen 
      ]}>
        <Text style={topBarStyles.ticketLabel}>Ticket</Text>
        <View style={[
          topBarStyles.badge, 
          isTicketVariant && topBarStyles.badgeWhite 
        ]}>
          <Text style={topBarStyles.badgeText}>{ticketCount}</Text>
        </View>
      </View>
      <TouchableOpacity style={topBarStyles.iconButton}>
        {isTicketVariant ? (
          <View style={topBarStyles.moreIconContainer}>
            <View style={topBarStyles.dot} />
            <View style={topBarStyles.dot} />
            <View style={topBarStyles.dot} />
          </View>
        ) : (
          <Image 
            source={require('../../assets/notification.png')} 
            style={topBarStyles.icon} 
            resizeMode="contain" 
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default TopBar;