import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Message from './Message';

export default function FetchOperations() {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  //GET METHOD
  const fetchMessages = () => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then(response => response.json())
      .then(realData => setData(realData));
  };
  //POST METHOD
  const addMessages = () => {
    const requestBody = {
      title: title,
      body: description,
    };
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(),
    })
      .then(response => response.json())
      .then(realData => {
        if (realData) {
          requestBody.id = data.length + 1;
          let updatedMessages = [...data, requestBody];
        }
      });
  };
  useEffect(() => {
    fetchMessages();
  }, []);
  return (
    <View style={styles.rootContainer}>
      <View style={styles.headerTitle}>
        <Text style={styles.titleText}>FetchOperations</Text>
      </View>
      <View style={styles.topView}>
        <TextInput
          style={styles.inputField}
          placeholder="Title"
          value={title}
          onChangeText={text => setTitle(text)}
        />
        <TextInput
          style={styles.inputField}
          placeholder="Description"
          value={description}
          onChangeText={text => setDescription(text)}
        />
        <TouchableOpacity style={styles.button} onPress={() => addMessages()}>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            ADD
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{height: 600}}>
        <FlatList
          // horizontal
          showsHorizontalScrollIndicator={false} // scrolling indication
          data={data}
          renderItem={({item}) => <Message {...item} />}
          ItemSeparatorComponent={() => <View style={styles.separator}></View>}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    //flex: 1,
    backgroundColor: '#fffff5',
    //height: 600,
  },
  headerTitle: {
    backgroundColor: 'black',
    padding: 20,
  },
  titleText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  separator: {
    borderWidth: 0.2,
    borderColor: '#353535',
  },
  inputField: {
    height: 70,
    width: '80%',
    borderRadius: 10,
    borderWidth: 1,

    margin: 10,
  },
  topView: {
    margin: 30,
  },
  button: {
    height: 40,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    backgroundColor: 'black',
    borderRadius: 15,
  },
});
