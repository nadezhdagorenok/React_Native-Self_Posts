import React from 'react'
import {View, Text, StyleSheet, Image, Button, ScrollView, Alert} from 'react-native'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import {AppHeaderIcon} from '../components/AppHeaderIcon'
import { DATA } from '../data'
import { THEME } from '../theme'

export const PostScreen = ({navigation}) => {
    const postId = navigation.getParam('postId')
    const post = DATA.find(item => item.id === postId)
    
    const removeHandler = () => {
        Alert.alert(
            "Post deleting",
      "Are you sure to delete your post?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        { text: "Delete", 
        style: 'destructive',
        onPress: () => console.log("Delete Pressed") }
      ],
      { cancelable: false }

        )
    }
    return (
        <ScrollView>
            <Image style={styles.image} source={{uri: post.img}} />
            <View style={styles.textWrap}>
              <Text style={styles.title} >{post.text}</Text>
            </View>
            <Button title="Delete" color={THEME.DANGER_COLOR} onPress={removeHandler} />
        </ScrollView>
    )
}

PostScreen.navigationOptions = ({navigation}) => {
    const date = navigation.getParam('date')
    const booked = navigation.getParam('booked')
    const iconName = booked ? 'ios-star' : 'ios-star-outline'
    return {
      headerTitle: `Post from ${new Date(date).toLocaleDateString()}`,
      headerRight: (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item title="Take photo" iconName={iconName} onPress={() => console.log('Press photo')} />
        </HeaderButtons>
        )
  }
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    textWrap: {
        padding: 10

    },
    title: {
        fontFamily: 'open-regular'

    }
})
