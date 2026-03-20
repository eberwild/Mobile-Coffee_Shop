// Fallback for using MaterialIcons on Android and web.

/*
import Ionicons from '@expo/vector-icons/Ionicons';
import { SymbolWeight, SymbolViewProps } from 'expo-symbols';
import { ComponentProps } from 'react';
import { OpaqueColorValue, type StyleProp, type TextStyle } from 'react-native';

type IconMapping = Record<SymbolViewProps['name'], ComponentProps<typeof Ionicons>['name']>;
type IconSymbolName = keyof typeof MAPPING;
*/
/**
 * Add your SF Symbols to Material Icons mappings here.
 * - see Material Icons in the [Icons Directory](https://icons.expo.fyi).
 * - see SF Symbols in the [SF Symbols](https://developer.apple.com/sf-symbols/) app.
 */
/*
const MAPPING = {
  'house.fill': 'home',
  'house': 'home-outline',
  'paperplane.fill': 'paper-plane',
} as IconMapping;
 */

/**
 * An icon component that uses native SF Symbols on iOS, and Material Icons on Android and web.
 * This ensures a consistent look across platforms, and optimal resource usage.
 * Icon `name`s are based on SF Symbols and require manual mapping to Material Icons.
 */
/*
export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>;
  weight?: SymbolWeight;
}) {
  return <Ionicons color={color} size={size} name={MAPPING[name]} style={style} />;
}
*/

import React from 'react';
import * as MaterialIcons from '@expo/vector-icons/MaterialIcons';
import * as Ionicons from '@expo/vector-icons/Ionicons';
import * as FontAwesome from '@expo/vector-icons/FontAwesome';
import * as Feather from '@expo/vector-icons/Feather';
import { StyleProp, TextStyle } from 'react-native';

type IconPack = 'MaterialIcons' | 'Ionicons' | 'FontAwesome' | 'Feather';

type IconConfig = {
  pack: IconPack;
  name: string;
};

const ICONS: Record<string, IconConfig> = {
  'home': { pack: 'Ionicons', name: 'home-outline' },
  'home.fill': { pack: 'Ionicons', name: 'home' },

  'paperplane' : { pack:'Ionicons' , name: 'paper-plane-outline'},
  'paperplane.fill' : { pack: 'Ionicons' , name: 'paper-plane'},

  'person': { pack: 'Ionicons', name: 'person-outline' },
  'person.fill': { pack: 'Ionicons', name: 'person' },

  'send': { pack: 'MaterialIcons', name: 'send' },
  'code': { pack: 'MaterialIcons', name: 'code' },

  'star': { pack: 'FontAwesome', name: 'star' },

  'edit': { pack: 'Feather', name: 'edit' },
};

type Props = {
  name: keyof typeof ICONS;
  size?: number;
  color?: string;
  style?: StyleProp<TextStyle>;
};

export function Icon({ name, size = 24, color = 'black', style }: Props) {
  const icon = ICONS[name];

  if (!icon) return null;

  switch (icon.pack) {
    case 'Ionicons':
      return <Ionicons.default name={icon.name as any} size={size} color={color} style={style} />;
    case 'MaterialIcons':
      return <MaterialIcons.default name={icon.name as any} size={size} color={color} style={style} />;
    case 'FontAwesome':
      return <FontAwesome.default name={icon.name as any} size={size} color={color} style={style} />;
    case 'Feather':
      return <Feather.default name={icon.name as any} size={size} color={color} style={style} />;
    default:
      return null;
  }
}