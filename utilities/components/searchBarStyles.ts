import { StyleSheet } from "react-native";

const searchBarStyles = StyleSheet.create({
  mainWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    width: '100%',
    paddingHorizontal: 10, 
    marginVertical: 10,
  },
  container: {
    flex: 0.96, 
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    height: 55,
    paddingLeft: 15,
    paddingRight: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  searchIcon: {
    width: 20,
    height: 20,
    tintColor: '#A3A3A3',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    marginLeft: 8,
  },
  filterCircle: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#F8F9FA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterIcon: {
    width: 20,
    height: 20,
  },
  qrButton: {
    width: 55,
    height: 55,
    borderRadius: 28,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  qrIcon: {
    width: 24,
    height: 24,
  },
});

export default searchBarStyles;