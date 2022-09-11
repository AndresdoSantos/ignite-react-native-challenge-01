import { Dimensions, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 24,
    backgroundColor: '#1A1A1A',
    flex: 1,
    position: 'relative',
  },
  concludedAndUnconcludedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    paddingTop: 60,
    marginBottom: 20,
  },
  concludedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  concludedText: {
    color: '#4EA8DE',
    fontWeight: 'bold',

    marginRight: 8,
  },
  concludedQuantity: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: '#333333',

    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 9999,
  },
  concludedQuantityText: {
    color: '#fff',
  },
  unconcludedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  unconcludedText: {
    color: '#8284FA',
    fontWeight: 'bold',

    marginRight: 8,
  },
  unconcludedQuantity: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: '#333333',

    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 9999,
  },
  unconcludedQuantityText: {
    color: '#fff',
  },
  inputAndButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',

    width: '100%',

    position: 'absolute',
    top: -27,
    right: 24,
    left: 24,
  },
  input: {
    height: 54,
    backgroundColor: '#262626',
    paddingHorizontal: 16,
    marginRight: 8,
    flex: 1,
    borderWidth: 1,
    borderColor: '#262626',

    borderRadius: 6,
    color: '#fff',
  },
  inputFocus: {
    height: 54,
    backgroundColor: '#262626',
    paddingHorizontal: 16,
    marginRight: 8,
    flex: 1,

    borderRadius: 6,
    color: '#fff',

    borderWidth: 1,
    borderColor: '#5E60CE',
  },
  button: {
    height: 54,
    width: 54,
    backgroundColor: '#1E6F9F',

    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 6,
  },
  emptyListContainer: {
    alignItems: 'center',
    justifyContent: 'center',

    marginTop: Dimensions.get('screen').height / 5,
  },
  emptyListTitle: {
    color: '#808080',
    fontSize: 14,
    fontWeight: 'bold',

    marginTop: 16,
  },
  emptyListDescription: {
    color: '#808080',
    fontSize: 14,
  },
  taskCard: {
    height: 54,
    backgroundColor: '#262626',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    marginVertical: 4,

    borderWidth: 1,
    borderColor: '#333333',

    borderRadius: 8,
  },
  taskCheck: {
    height: 17.45,
    width: 17.45,
    borderWidth: 2,
    borderColor: '#4EA8DE',

    borderRadius: 9999,
    marginHorizontal: 12,
  },
  taskChecked: {
    height: 17.45,
    width: 17.45,
    borderWidth: 2,
    borderColor: '#5E60CE',
    backgroundColor: '#5E60CE',
    borderRadius: 9999,
    marginHorizontal: 12,

    alignItems: 'center',
    justifyContent: 'center',
  },
  taskTitle: {
    color: '#F2F2F2',
    fontSize: 14,

    flex: 1,
  },
})
