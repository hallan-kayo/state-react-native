import React, {Component} from 'react';
import { StyleSheet, Text, View,Button,TextInput } from 'react-native';

class states extends Component{

  constructor(props){
    super(props)
    this.estado={
      saudacao:"olá mundo",
      user:225,
      userName:""
    }
  }

  adicionarUsuario=()=>{
    this.setState({
      user:this.estado.user += 1
    })
  }
  
  render(){
    let {saudacao} = this.estado
    let {user} = this.estado
    let{userName} = this.estado
    return (
      <View style={styles.container}>
        <Text>{saudacao} usuario: {user}</Text>
        <TextInput>Nome de Usuário: {userName}</TextInput>
        <TextInput placeholder="usuário" 
        onChangeText = {(userName)=> this.setState({userName})}></TextInput>
        <Button title="somar usuário" onPress={this.adicionarUsuario}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default states
