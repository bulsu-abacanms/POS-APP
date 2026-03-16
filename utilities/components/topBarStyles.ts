

import { StyleSheet } from 'react-native';

const topBarStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  iconButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
  },
  icon: {
    width: 24,
    height: 24,
  },
  ticketPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    paddingLeft: 22,
    paddingRight: 6,
    paddingVertical: 6,
    minWidth: 130,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
  },
  ticketPillGreen: {
    backgroundColor: '#B4E169', 
  },
  ticketLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginRight: 10,
  },
  badge: {
    backgroundColor: '#B4E169',
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeWhite: {
    backgroundColor: '#FFFFFF', 
  },
  badgeText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },

  moreIconContainer: {
    height: 18,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#000',
  },
});

export default topBarStyles;

