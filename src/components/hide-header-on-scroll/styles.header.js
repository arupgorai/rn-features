import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrap: {
    width: '100%',
    height: 50,
    paddingHorizontal: 15,
  },
  header: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContainer: {
    paddingHorizontal: 15,
    marginTop: 15,
  },
  headerText: {
    fontSize: 24,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
