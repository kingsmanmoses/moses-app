import { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Goalinput from './components/Goalinput';
import Goalitem from './components/Goalitem';

export default function App() {
  // to control modal
  const [modalvisble, setModalvisble] = useState(false);
  const startaddmodal = () => {
    setModalvisble(true);
  };

  const endmodal = () => {
    setModalvisble(false);
  };

  // for adding the goal and also control it
  const [listgoal, setListgoal] = useState([]);

  const addgoal = (entergoal) => {
    setListgoal((currentlistgoal) => [
      ...currentlistgoal,
      { text: entergoal, id: Math.random().toString() },
    ]);
    endmodal();
  };

  // To remove some list goals
  const deletelist = (id) => {
    setListgoal((currentlistgoal) => {
      return currentlistgoal.filter((goal) => goal.id !== id);
    });
  };
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.Appcontainer}>
        <Button title="Add New Goal" color="#5e0acc" onPress={startaddmodal} />
        <Goalinput
          visible={modalvisble}
          onCancel={endmodal}
          Onaddgoal={addgoal}
        />
        {/* for listing the goals */}
        <View style={styles.goalCont}>
          <FlatList
            keyExtractor={(item, index) => {
              return item.id;
            }}
            data={listgoal}
            renderItem={(itemData) => {
              return (
                <Goalitem
                  id={itemData.item.id}
                  onDelete={deletelist}
                  text={itemData.item.text}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  Appcontainer: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a',
  },
  goalCont: {
    flex: 5,
  },
});
