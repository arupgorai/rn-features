import React, {useEffect} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getUsers} from '../redux/features/user/userSlice';

const User = () => {
  const {user, isError, isSuccess, isLoading, message, state} = useSelector(
    state => state.user,
  );
  const dispatch = useDispatch();

  // side effect
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator color="blue" size="large" />
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {user.map(item => (
        <Text key={item.id}>{item.name}</Text>
      ))}
    </View>
  );
};

export default User;
