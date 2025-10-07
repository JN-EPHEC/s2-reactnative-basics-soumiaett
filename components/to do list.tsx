import { StyleSheet, Text, View } from 'react-native';

type Props = {
  text: string;
};

const TodoItem = ({ text }: Props) => {
  return (
    <View style ={styles.item}>
      <Text style={styles.itemText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f2f2f2',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
});

export default TodoItem;