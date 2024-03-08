import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { LinearGradient } from 'expo-linear-gradient'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Animated, { FadeIn, FadeInDown, FadeOut } from 'react-native-reanimated';
import { useRouter } from 'expo-router';


export default function index() {
  const router = useRouter();
  const handleClick = () => {
    router.push('home')
  }
  return (
    <View className="flex-1 flex justify-end">
      <StatusBar style='auto' backgroundColor='white' />
      <Image className="h-full w-full absolute" source={require('../assets/images/bg.jpg')} />

      <LinearGradient colors={['transparent', '#18181b',]}
        style={{ width: wp(100), height: hp(70) }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.8 }}
        className='flex justify-end space-y-8 pb-12'

      >
        <Animated.View entering={FadeInDown.damping()} className="flex items-center">
          <Text style={{ fontSize: hp(5) }} className="text-white font-bold tracking-wide">
            Best <Text className="text-rose-500">Workouts</Text>
          </Text>
          <Text style={{ fontSize: hp(5) }} className="text-white font-bold tracking-wide">
            For You
          </Text>
        </Animated.View>


        <Animated.View entering={FadeInDown.damping()} >
          <TouchableOpacity style={{ height: hp(7), width: wp(80) }} className="bg-rose-500  rounded-full border-[2px] border-neutral-200 flex justify-center items-center mx-auto" onPress={handleClick} >
            <Text style={{ fontSize: hp(3) }} className='text-white fint-bold tracking-wide bg-transparent'>
              Get Started
            </Text>
          </TouchableOpacity>
        </Animated.View>

      </LinearGradient>

    </View>
  )
}