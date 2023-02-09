import React, {useCallback} from 'react';
import {FlatList, View} from 'react-native';
import {Order} from '../slices/orderSlice';
import EachOrder from '../components/EachOrder';
import {useAppSelector} from '../store';

function Orders() {
  const orders = useAppSelector(state => state.order.orders);
  const renderItem = useCallback(({item}: {item: Order}) => {
    return <EachOrder item={item} />;
  }, []);

  return (
    <View>
      <FlatList
        data={orders}
        keyExtractor={item => item.orderId}
        renderItem={renderItem}
      />
    </View>
  );
}

export default Orders;
