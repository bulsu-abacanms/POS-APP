import { StyleSheet } from 'react-native';

export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#fff',
  },
  logoContainer: {
    alignItems: 'flex-start',
    marginBottom: 40,
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom: 4,
  },
  logoTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
    marginBottom: 24,
    marginLeft: 2,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 32,
    color: '#222',
    alignSelf: 'center',
  },
  loginButton: {
    backgroundColor: '#C0E863',
    marginTop: 24,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#222',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
