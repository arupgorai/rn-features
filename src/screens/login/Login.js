import React, { useState } from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';

import { images } from '../../constants';
import { Input } from '../../components';
import { styles } from './styles.login';

const Login = () => {
  const [isVisible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <ImageBackground source={images.babySleeping} style={styles.imageStyle}>
        <Text style={styles.loginHeading}>LOGIN</Text>
      </ImageBackground>
      <View style={styles.inputWrap}>
        <Input
          label="Email Address"
          value=""
          placeholder="Enter your email"
          containerStyle={{ marginBottom: moderateVerticalScale(28) }}
          keyboardType="email-address"
        />
        <Input
          label="Password"
          value=""
          placeholder="Enter your password"
          secureTextEntry={true}
          rightComponent={
            <TouchableOpacity onPress={() => setVisible(!isVisible)}>
              <Image
                source={isVisible ? images.visiblity_on : images.visiblity_off}
                style={{ width: 20, height: 20 }}
              />
            </TouchableOpacity>
          }
        />
      </View>
    </View>
  );
};

export default Login;
