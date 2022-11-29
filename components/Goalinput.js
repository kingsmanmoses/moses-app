import { useState } from 'react';
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

const Goalinput = (props) => {
  const [entergoal, setEntergoal] = useState('');
  const goalinput = (enteredtext) => {
    setEntergoal(enteredtext);
  };

  const addgoal = () => {
    props.Onaddgoal(entergoal);
    setEntergoal('');
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputCont}>
        <Image style={styles.image} source={require('../assets/goal1.png')} />
        <TextInput
          onChangeText={goalinput}
          style={styles.Textinput}
          placeholder="Add Your Goals"
          value={entergoal}
        />
        <View style={styles.buttoncont}>
          <View style={styles.button}>
            <Button onPress={addgoal} title="Add Goal" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Goalinput;

const styles = StyleSheet.create({
  inputCont: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b',
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  Textinput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#000',
    borderRadius: 6,
    width: '100%',
    marginRight: 8,
    padding: 16,
  },
  buttoncont: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
