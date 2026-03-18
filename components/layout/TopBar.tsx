import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import topBarStyles from '../../utilities/components/topBarStyles';

interface TopBarProps {
  ticketCount?: number;
  variant?: 'default' | 'ticket';
  onTicketPress?: () => void;
  onDashboardPress?: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ ticketCount = 3, variant = 'default', onTicketPress, onDashboardPress }) => {
  const isTicketVariant = variant === 'ticket';

  return (
    <View style={topBarStyles.container}>
      <TouchableOpacity style={topBarStyles.iconButton} onPress={onDashboardPress}>
        <Image 
          source={require('../../assets/dashboard.png')} 
          style={topBarStyles.icon} 
          resizeMode="contain" 
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={[topBarStyles.ticketPill, isTicketVariant && topBarStyles.ticketPillGreen]}
        onPress={onTicketPress}
        activeOpacity={0.8}
      >
        <Text style={topBarStyles.ticketLabel}>Ticket</Text>
        <View style={[topBarStyles.badge, isTicketVariant && topBarStyles.badgeWhite]}>
          <Text style={topBarStyles.badgeText}>{ticketCount}</Text>
        </View>
      </TouchableOpacity>
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