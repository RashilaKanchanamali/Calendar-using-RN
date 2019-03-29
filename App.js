import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment'

export default class AddCelendar extends Component {
  constructor() {
    super()
    this.state = {
      isVisible: false,
      chosenDate: ''
    }
  }

  handlePicker = (datetime) => {
    this.setState({
      isVisible: false,
      chosenDate: moment(datetime).format('MMMM, Do YYYY , HH:mm')
    })
  }
  showPicker = () => {
    this.setState({
      isVisible: true
    })
  }
  hidelePicker = () => {
    this.setState({
      isVisible: false,
    })
  }

  render() {
    return (
      <View style={styles.container}>
        
        <Text style={styles.showTime}> 
        {this.state.chosenDate}</Text>
        
        <TouchableOpacity 
        style={styles.button}  
        onPress={this.showPicker}>

        <Text style= {styles.text}>Date</Text>

        </TouchableOpacity>
        
        <DateTimePicker
          isVisible={this.state.isVisible}
          onConfirm={this.handlePicker}
          onCancel={this.hidePicker}
          mode={'datetime'}
          is24Hour={true}/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  justifyContent: 'flex-start',
  alignItems: 'center',
  backgroundColor: '#979a99'
},
button: {
  width: 80,
  height: 45,
  backgroundColor: '#5c1577',
  borderRadius: 20,
  justifyContent: 'center'
},
text: {
  fontSize: 18,
  color: 'white',
  textAlign: 'center'
},
showTime: {
  color: 'black',
  fontSize: 20
}

});