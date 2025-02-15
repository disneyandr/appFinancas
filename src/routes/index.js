import React from 'react';

import {View, ActivityIndicator} from 'react-native';
import AuthRoutes from './authroutes';

function Routes() {
  const loading = false;
  const signed = false;

  return signed ? <View /> : <AuthRoutes />;
}

export default Routes;
