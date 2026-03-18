import { StyleSheet } from 'react-native';
import { responsiveFontSize, responsivePadding, responsiveMargin, responsiveWidth, responsiveHeight } from './responsive';

const ticketStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F5F5', 
  },
  mainContainer: {
    flex: 1,
    position: 'relative',
    paddingTop: responsiveMargin(10),
    paddingHorizontal: responsivePadding(16), 
  },
  ticketList: {
    paddingTop: responsiveMargin(8),
    paddingHorizontal: 0,
  },
  ticketItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: responsiveWidth(20),
    marginBottom: responsiveMargin(12),
    padding: responsivePadding(12),
    width: '100%', 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  summaryBox: {
    backgroundColor: '#FFF',
    borderRadius: responsiveWidth(24),
    padding: responsivePadding(24),
    marginTop: responsiveMargin(10),
    marginBottom: responsiveMargin(120), 
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 10,
    elevation: 1,
  },

  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: responsiveMargin(15),
  },
  summaryLabel: {
    fontSize: responsiveFontSize(16),
    color: '#757575',
  },
  summaryValue: {
    fontSize: responsiveFontSize(16),
    color: '#212121',
    fontWeight: '500',
  },
  summaryTotal: {
    fontSize: responsiveFontSize(22),
    color: '#000',
    fontWeight: '900',
  },
  bottomBarWrapper: {
    position: 'absolute',
    bottom: responsiveMargin(20),
    left: 0,
    right: 0,
    paddingHorizontal: responsivePadding(20),
  },
  blackCapsule: {
    backgroundColor: '#000',
    flexDirection: 'row',
    borderRadius: responsiveWidth(40),
    padding: responsivePadding(10),
    height: responsiveHeight(60),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  saveBtn: {
    flex: 1,
    backgroundColor: '#FFF',
    borderRadius: responsiveWidth(30),
    marginRight: responsiveMargin(6),
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chargeBtn: {
    flex: 1,
    backgroundColor: '#C0E863', 
    borderRadius: responsiveWidth(30),
    marginLeft: responsiveMargin(6),
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveText: {
    fontWeight: '500',
    fontSize: responsiveFontSize(16),
  },
  chargeText: {
    fontWeight: '500',
    fontSize: responsiveFontSize(16),
  }
});

export default ticketStyles;