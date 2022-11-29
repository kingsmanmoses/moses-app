import { Pressable, StyleSheet, Text, View } from 'react-native';

const Goalitem = (props) => {
  return (
    <View style={styles.goalitem}>
      <Pressable
        style={({ pressed }) => pressed && styles.pressitem}
        onPress={props.onDelete.bind(this, props.id)}
      >
        <Text style={styles.goaltext}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

export default Goalitem;

const styles = StyleSheet.create({
  goalitem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    padding: 8,
  },
  pressitem: {
    opacity: 0.5,
  },
  goaltext: {
    color: '#fff',
  },
});
