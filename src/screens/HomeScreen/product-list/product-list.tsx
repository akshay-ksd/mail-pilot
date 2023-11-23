import { View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import styles from '../styles'
import useGetAllProducts from '../api_hooks/use-get-all-products/useGetAllProducts'
import ProductSingleList from '../molecules/product-single-list/product-single-list'
import {SimpleRecycler} from 'react-native-simple-recyclerlistview';
import colors from '../../../components/constants/colors'
import ScreenRatio from '../../../components/constants/ScreenRatio'
import {RefreshControl} from 'react-native-gesture-handler';


const ProductList = () => {
  const [loading,getAllProduct]:any = useGetAllProducts()
  const recyclerRef = useRef<SimpleRecycler>(null);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(()=>{
    get_product()
  },[])

  const get_product =async()=>{
    const data = await getAllProduct();
    recyclerRef?.current?.loadDataFromApi(data?.products);
  }

  const onRefresh = () => {
   
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.center}>
          <ActivityIndicator size={20} color={colors.black} />
        </View>
      ) : (
        <SimpleRecycler
          ref={recyclerRef}
          rowRenderer={(_type, data, index, _extendedState) => {
            return <ProductSingleList index={index} item={data?.item} />;
          }}
          height={ScreenRatio.height}
          width={ScreenRatio.width}
          emptyText="No Data Found"
          emptyTextStyle={styles.center}
          scrollViewProps={{
            refreshControl: (
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            ),
          }}
          renderFooter={() => (
            <View>
              <View style={{height: 100}} />
            </View>
          )}
        />
      )}
    </View>
  )
}

export default ProductList