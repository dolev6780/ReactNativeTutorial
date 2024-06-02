import { Text, View, Pressable } from 'react-native';
import React, { Component } from 'react';

export default function CustomButton({ title }) {
  return (
    <View>
      <Pressable style={{ backgroundColor: 'blue' }}>
        <Text>gal</Text>
      </Pressable>
    </View>
  );
}
