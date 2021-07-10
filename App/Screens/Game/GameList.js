import * as React from 'react';
import {
  Text,
  StatusBar,
  View,
  Image,
  ImageBackground
} from 'react-native';

import SafeAreaView from 'react-native-safe-area-view';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import SliderEntry from '../../Components/SliderEntry';
import styles, { colors } from './GameListStyle';
import { sliderWidth, itemWidth } from './GameSliderEntryStyle';
// import { useGlobals } from '../../contexts/Global';

const GameList = ({ navigation }) => {

  const ENTRIES1 = [
    {
      title: 'Beautiful and dramatic Antelope Canyon',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
      illustration: 'https://i.ytimg.com/vi/7oUDRogbwBo/hqdefault.jpg'
    },
    {
      title: 'Earlier this morning, NYC',
      subtitle: 'Lorem ipsum dolor sit amet',
      illustration: 'https://i.pcmag.com/imagery/roundup-products/01chZU9MuKPaPW1jxbsiPSQ..1616427936.jpg'
    },
    {
      title: 'White Pocket Sunset',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
      illustration: 'https://play-lh.googleusercontent.com/lqNw-GF7pAHsmQiWe7m42ikhvxof2Zocix9OOr_W6bCiqfUhoB19Pb-PG-vtyBBCFw=w412-h220-rw'
    },
    {
      title: 'Acrocorinth, Greece',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
      illustration: 'https://i.gadgets360cdn.com/large/FAU-G_Google_play_1606736732649.jpg?downsize=400:*&output-quality=80'
    },
    {
      title: 'The lone tree, majestic landscape of New Zealand',
      subtitle: 'Lorem ipsum dolor sit amet',
      illustration: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFMHI_MnxXOGoQQuG_Rw-U5I_yZXQTUhW-rw&usqp=CAU'
    },
    {
      title: 'Middle Earth, Germany',
      subtitle: 'Lorem ipsum dolor sit amet',
      illustration: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzxyYe1hn43gqS82h5BRG6TmAE8MC2zEqQGA&usqp=CAU'
    }
  ];

  const _renderItem = ({ item, index }) => {
    return <SliderEntry data={item} even={(index + 1) % 2 === 0} />;
  }

  const momentumExample = (number, title) => {
    return (
      <View>
        <ImageBackground
          source=
          {{ uri: 'https://www.gameogre.com/wp-content/uploads/2017/06/mobilegamecategories-696x348.png' }}
          style={styles.imageBackgroundStyle}
        >
          <View style={styles.imageBackgroundOverlay}>
            <View style={styles.exampleContainer}>
              <Text style={styles.title}>{`Game Room`}</Text>
              <Text style={styles.subtitle}>{title}</Text>
              <Carousel
                data={ENTRIES1}
                renderItem={_renderItem}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
                inactiveSlideScale={0.95}
                inactiveSlideOpacity={1}
                enableMomentum={true}
                activeSlideAlignment={'start'}
                containerCustomStyle={styles.slider}
                contentContainerCustomStyle={styles.sliderContentContainer}
                activeAnimationType={'spring'}
                activeAnimationOptions={{
                  friction: 4,
                  tension: 40
                }}
              />
            </View>
          </View>
        </ImageBackground>
      </View >
    );
  }
  let example2 = momentumExample(2, 'Momentum | Left-aligned | Active animation');

  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="rgb(234, 164, 67)"
        translucent={true}
      />
      {example2}
    </SafeAreaView>
  );
};

export default GameList;