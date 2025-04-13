import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import { fonts } from '@/styles/styles'

export default function ThemedTabBar(props: BottomTabBarProps) {
  return (
    <View style={{
      flexDirection: 'row',
      backgroundColor: Colors.background,
      height: 70,
    }}>
      {props.state.routes.map((route, index) => {
        const { options } = props.descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = props.state.index === index;

        const iconMap = {
          index: 'chart-pie',
          scanner: 'qrcode',
          profile: 'user-large',
        }

        const iconName = iconMap[route.name] || 'circle-question'

        const onPress = () => {
          const event = props.navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) props.navigation.navigate(route.name);
        }

        return (
          <Pressable
            key={route.key}
            onPress={onPress}
            style={({ pressed }) => [
              {
                flex: isFocused ? 3 : 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: isFocused ? Colors.secondary : Colors.background_400,
                borderRadius: 20,
                marginVertical: 15,
                marginHorizontal: 10,
                opacity: pressed ? 0.6 : 1,
              },
            ]}
          >
            <FontAwesome6
              name={iconName}
              size={20}
              color={isFocused ? '#fff' : Colors.background_200}
            />
            {isFocused && (
              <Text style={[fonts.medium, { color: '#fff', marginLeft: 8, fontSize: 14 }]}>
                {label}
              </Text>
            )}
          </Pressable>
        );
      })}
    </View>
  )
}
