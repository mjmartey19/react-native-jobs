import { useState } from 'react'
import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../constants';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components'

function Home() {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite}}>
        <Text>Good </Text>
    </SafeAreaView>
  )
}

export default Home
