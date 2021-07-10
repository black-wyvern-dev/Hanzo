import React from 'react';
import { StyleSheet, View, Image, ImageBackground } from 'react-native';
import {
  Surface,
  Title,
  Caption,
  Avatar,
  Subheading,
  useTheme,
} from 'react-native-paper';
import color from 'color';

type Props = {
  id: number;
  name: string;
  handle: string;
  date: string;
  content: string;
  image: string;
  avatar: string;
  comments: number;
  retweets: number;
  hearts: number;
};

export const DetailedTwitt = (props: Props) => {
  const theme = useTheme();

  const contentColor = color(theme.colors.text)
    .alpha(0.8)
    .rgb()
    .string();

  const imageBorderColor = color(theme.colors.text)
    .alpha(0.15)
    .rgb()
    .string();

  return (
    <ImageBackground source={{ uri: 'https://static.wixstatic.com/media/caf856_dfbf5ef9517d41c7abe3dd4e1db08796~mv2.jpg/v1/fill/w_1370,h_3000,al_c,q_90/caf856_dfbf5ef9517d41c7abe3dd4e1db08796~mv2.webp' }} style={{ width: "100%", height: "100%" }}>
      <Surface style={styles.container}>
        <View style={styles.topRow}>
          <Avatar.Image
            style={styles.avatar}
            source={{ uri: props.avatar }}
            size={60}
          />
          <View>
            <Title>{props.name}</Title>
            <Caption style={styles.handle}>{props.handle}</Caption>
          </View>
        </View>
        <Subheading style={[styles.content, { color: contentColor }]}>
          {props.content}
        </Subheading>
        <Image
          source={{ uri: props.image }}
          style={[
            styles.image,
            {
              borderColor: imageBorderColor,
            },
          ]}
        />
      </Surface>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    padding: 20,
  },
  avatar: {
    marginRight: 20,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  handle: {
    marginRight: 3,
    lineHeight: 12,
  },
  content: {
    marginTop: 25,
    fontSize: 20,
    lineHeight: 30,
  },
  image: {
    borderWidth: StyleSheet.hairlineWidth,
    marginTop: 25,
    borderRadius: 20,
    width: '100%',
    height: '50%',
  },
});
