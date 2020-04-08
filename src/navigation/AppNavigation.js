// import 'react-native-gesture-handler';
// import React from 'react'
// import {NavigationContainer} from '@react-navigation/native'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {Platform} from 'react-native'
import {MainScreen} from '../screens/MainScreen'
import {PostScreen} from '../screens/PostScreen'
import { THEME } from '../theme';


const PostNavigator = createStackNavigator(
    {
    Main: MainScreen,
    Post: {
        screen: PostScreen
    }

    }, 
 {
    initialRouteName: 'Main',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff'
        }
    },
    headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR
}
);
// const Stack = createStackNavigator()
// function AppNavigation() {
//     return (
//         <NavigationContainer>
//       <Stack.Navigator
//         initialRouteName="Main"
//         // screenOptions={{ gestureEnabled: false }}
//       >
//         <Stack.Screen
//           name="Main"
//           component={MainScreen}
//         //   options={{ title: 'My app' }}
//         />
//         <Stack.Screen
//           name="Post"
//           component={PostScreen}
//         />
//       </Stack.Navigator>
//       </NavigationContainer>
//     );
//   }
// export default AppNavigation;
export const AppNavigation = createAppContainer(PostNavigator)