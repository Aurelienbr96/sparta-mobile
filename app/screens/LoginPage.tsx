import React from 'react';

import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';

const MyInput = ({...props}: TextInputProps) => (
  <TextInput
    className={
      'bg-white py-4 pl-4 border-2 border-gray-200 w-full mt-6 rounded-lg'
    }
    placeholderTextColor="gray"
    {...props}
  />
);

export const LoginPage = ({navigation}) => {
  return (
    <View className="flex-1 h-screen w-screen justify-center items-center px-6">
      <Text className="text-3xl text-white">Sparta</Text>
      <Image
        source={require('../assets/sparta-logo.png')}
        className="w-[200px] h-[200px]"
        resizeMode={'cover'}
      />
      <Text className="text-3xl mt-20 text-white">
        Where your fitness comes true..
      </Text>
      <MyInput placeholder="Email" />
      <MyInput placeholder="password" />
      <TouchableOpacity
        onPress={() => navigation.navigate('Dashboard')}
        className="w-full bg-black mt-6 rounded-lg flex justify-center items-center py-6">
        <Text className="text-white">Login ..</Text>
      </TouchableOpacity>
    </View>
  );
};
