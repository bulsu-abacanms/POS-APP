import { StyleSheet } from 'react-native';

const chargeCardStyles = StyleSheet.create({
  card: {
    backgroundColor: '#C0E863', 
    borderRadius: 20, 
    paddingTop: 35,      
    paddingLeft: 30,      
    width: 370, 
    height: 170, 
    flexDirection: 'column',
    position: 'relative',
    overflow: 'hidden',
  },
  header: {
    marginTop: 0, 
    marginLeft: 0, 
  },
  title: {
    fontSize: 18,        
    color: '#333',       
    fontWeight: '500',
    marginBottom: 4,    
  },
  amount: {
    fontSize: 42,       
    fontWeight: 'bold',
    color: '#000',      
    marginTop: 0,
  },
  circleLarge: {
    position: 'absolute',
    right: -90,
    top: -15,
    width: 290,
    height: 290,
    borderRadius: 145,
    backgroundColor: 'rgba(255, 255, 255, 0.35)',
    zIndex: 0,
  },
  circleSmall: {
    position: 'absolute',
    right: -30,
    top: 50,
    width: 170,
    height: 170,
    borderRadius: 85,
    backgroundColor: 'rgba(255, 255, 255, 0.18)',
    zIndex: 0,
  },
});

export default chargeCardStyles;