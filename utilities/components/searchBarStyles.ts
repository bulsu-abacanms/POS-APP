import { StyleSheet } from 'react-native';

export const searchBarStyles = StyleSheet.create({
  container: {
    minHeight: 56,
    backgroundColor: '#fff',
    borderRadius: 9999,
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    paddingHorizontal: 24,
    paddingVertical: 12,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  icon: {
    width: 36,
    height: 36,
    marginRight: 12,
    marginLeft: 2,
  },
  input: {
    flex: 1,
    backgroundColor: 'transparent',
    fontSize: 22,
    color: '#111',
    fontFamily: 'System',
    paddingVertical: 0,
  },
  filterButton: {
    marginLeft: 8,
    padding: 8,
    borderRadius: 9999,
    backgroundColor: '#F5F6F7',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
  },
  filterIcon: {
    width: 28,
    height: 28,
  },
});

export default searchBarStyles;