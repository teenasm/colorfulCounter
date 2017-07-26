import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      counter:1,
      color: 'rgb(112, 77, 17)'
    }
  }

  componentDidMount() {

    let count = this.state.counter;
    let txtcolor = this.state.color;

    setInterval(()=>{
      txtcolor = 'rgb(' + (Math.floor(Math.random() * 256)) + ', ' + (Math.floor(Math.random() * 256)) + ', ' + (Math.floor(Math.random() * 256)) + ')';
      count++;
      this.setState({
        counter: count,
        color:txtcolor
      })
    }, 1500)}


  render() {

    return (
      <View style={styles.container}>
        <Text style={{color:this.state.color}}>counter :{this.state.counter}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dfc6ee',
    alignItems: 'center',
    justifyContent: 'center',
    }
  });
