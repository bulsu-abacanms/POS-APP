import { StyleSheet } from 'react-native';
import {responsiveFontSize,responsivePadding,responsiveMargin,responsiveWidth,responsiveHeight} from './responsive';

const dashboardStyles = StyleSheet.create({
  safeArea: {
    flex: 1, 
    backgroundColor: '#F8F9FA', 
  },
  mainContainer: {
    flex: 1,
    position: 'relative',
  },
  scrollContent: {
    paddingBottom: 120, 
  },
  searchSection: {
    marginTop: 10,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 25,
    marginBottom: 15,
  },
  headerTitle: {
    fontSize: responsiveFontSize(22),
    fontWeight: '700',
    color: '#000',
  },
  seeAll: {
    fontSize: responsiveFontSize(14),
    color: '#8E8E93',
  },
  filterContainer: {
    flexDirection: 'row',
    paddingHorizontal: responsivePadding(16),
    gap: responsiveMargin(10),
    marginBottom: responsiveMargin(20),
  },
  filterBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: responsiveWidth(20),
    paddingHorizontal: responsivePadding(18),
    height: responsiveHeight(40),
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#E5E5EA',
    marginRight: responsiveMargin(8),
    gap: responsiveMargin(8),
  },
  iconRight: {
    width: responsiveWidth(20),
    height: responsiveHeight(20),
    marginLeft: responsiveMargin(6),
  },
  filterBtnText: {
    color: '#222',
    fontWeight: '500',
    fontSize: responsiveFontSize(16),
  },
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: responsivePadding(16),
    justifyContent: 'space-between',
  },
  gridItem: {
    flexBasis: '48%',
    marginBottom: responsiveMargin(16),
  },
  bottomBarWrapper: {
    position: 'absolute',
    bottom: responsiveMargin(50),
    left: 0,
    right: 0,
    paddingHorizontal: responsivePadding(20),
    zIndex: 10,
  },
  blackCapsule: {
    backgroundColor: '#000',
    flexDirection: 'row',
    borderRadius: responsiveWidth(40),
    padding: responsivePadding(10),
    width: '100%',
    height: responsiveHeight(60),
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: responsiveHeight(10) },
    shadowOpacity: 0.25,
    shadowRadius: responsiveWidth(10),
    elevation: 5,
  },
  saveBtn: {
    flex: 1,
    backgroundColor: '#FFF',
    height: '100%',
    borderRadius: responsiveWidth(30),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: responsiveMargin(6),
  },
  chargeBtn: {
    flex: 1,
    backgroundColor: '#FFF', 
    height: '100%',
    borderRadius: responsiveWidth(30),
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: responsiveMargin(6),
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

export default dashboardStyles;
