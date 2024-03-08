import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImageSlider from '../components/ImageSlider';

export default function home() {
    return (
        <SafeAreaView className='flex-1 flex space-y-5 bg-white' edges={['top']}>
            <StatusBar style='auto' backgroundColor='white' />
            <View className='flex-row justify-between items-center mx-5'>
                <View className='space-y-2'>
                    <Text style={{ fontSize: hp(4.5) }} className='text-wider font-bold text-neutral-700'>Ready To</Text>
                    <Text style={{ fontSize: hp(4.5) }} className='text-wider font-bold text-rose-500'>Workout</Text>
                </View>
                <View className='flex justify-center items-center space-y-2'>
                    <Image className='rounded-3xl' source={require('../assets/images/avater.jpeg')} style={{ height: hp(6), width: wp(13) }} />
                    <View className='bg-neutral-200 flex-1 justify-center rounded-full border-[3px] border-neutral-300 items-center' style={{ height: hp(6), width: wp(13) }}>
                            <Ionicons name="notifications" size={hp(3)} color="gray" />
                    </View>
                </View>
            </View>
            <View>
                <ImageSlider/>
            </View>
        </SafeAreaView>
    )
}