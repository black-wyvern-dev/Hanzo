import { Twitt } from '../Components/twitt';
import { NotificationTwitt } from '../Components/notificationTwitt';

type TwittProps = React.ComponentProps<typeof Twitt>;

export const twitts: Omit<TwittProps, 'onPress'>[] = [
  {
    id: 1,
    name: '🌈 Josh',
    handle: '@JoshWComeau',
    date: '10h',
    content:
      '🔥 Automatically use "smart" directional curly quotes with the `quotes` CSS property! Even handles nested quotes with the <q> tag :o',
    image: 'https://pbs.twimg.com/media/EOUrCOcWAAA71rA?format=png&name=small',
    avatar: 'https://avatarfiles.alphacoders.com/246/thumb-246518.jpg',
    comments: 12,
    retweets: 36,
    hearts: 175,
  },
  {
    id: 2,
    name: 'Satyajit Sahoo',
    handle: '@satya164',
    date: '20h',
    content:
      'Not sure if I should be proud or ashamed of this piece of art 😅\n\n#Typescript',
    image: 'https://pbs.twimg.com/media/EONH4KWX4AEV-JP?format=jpg&name=medium',
    avatar: 'data:image/jpeg;base64,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',
    comments: 64,
    retweets: 87,
    hearts: 400,
  },
  {
    id: 3,
    name: 'Elvin',
    handle: '@elvin_not_11',
    date: '14h',
    content:
      'Hid the home indicator from the app so the device resembles an actual iPod even more. Thanks @flipeesposito for the suggestion!',
    image:
      'https://static.antyweb.pl/uploads/2014/09/IPod_classic_6G_80GB_packaging-2007-09-22-1420x670.jpg',
    avatar:
      'https://avatars.githubusercontent.com/u/1071625?v=4',
    comments: 23,
    retweets: 21,
    hearts: 300,
  },
  {
    id: 5,
    name: 'Satyajit Sahoo',
    handle: '@satya164',
    date: '20h',
    content:
      'Not sure if I should be proud or ashamed of this piece of art 😅\n\n#Typescript',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlXoFgUXPAoOwRFRMvLDs3eybkvd7rua4u4Q&usqp=CAU',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEPx6KO4hGj6LtZyPz_Fiih_QpVDtKGCxHnXHi91-DxQlqKBn1Q-vlyRy2X_CGAz79lfU&usqp=CAU',
    comments: 64,
    retweets: 87,
    hearts: 400,
  },
  {
    id: 6,
    name: 'Jackie',
    handle: '@elvin_not_11',
    date: '14h',
    content:
      'Hid the home indicator from the app so the device resembles an actual iPod even more. Thanks @flipeesposito for the suggestion!',
    image:
      'https://techcrunch.com/wp-content/uploads/2017/07/gettyimages-532623560.jpg?w=738',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnfVQhW81PzNyflczJXUJ2jkus78Wx_piYyWHsdc32d1oGQVI0Pu4uxemq3zLfX508GMk&usqp=CAU',
    comments: 23,
    retweets: 21,
    hearts: 300,
  },
];
type TwittOldProps = React.ComponentProps<typeof Twitt>;

export const twittsold: Omit<TwittOldProps, 'onPress'>[] = [
  {
    id: 6,
    name: 'Jackie',
    handle: '@elvin_not_11',
    date: '14h',
    content:
      'Hid the home indicator from the app so the device resembles an actual iPod even more. Thanks @flipeesposito for the suggestion!',
    image:
      'https://techcrunch.com/wp-content/uploads/2017/07/gettyimages-532623560.jpg?w=738',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnfVQhW81PzNyflczJXUJ2jkus78Wx_piYyWHsdc32d1oGQVI0Pu4uxemq3zLfX508GMk&usqp=CAU',
    comments: 23,
    retweets: 21,
    hearts: 300,
  },
  {
    id: 2,
    name: 'Satyajit Sahoo',
    handle: '@satya164',
    date: '20h',
    content:
      'Not sure if I should be proud or ashamed of this piece of art 😅\n\n#Typescript',
    image: 'https://pbs.twimg.com/media/EONH4KWX4AEV-JP?format=jpg&name=medium',
    avatar: 'data:image/jpeg;base64,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',
    comments: 64,
    retweets: 87,
    hearts: 400,
  },
  {
    id: 1,
    name: '🌈 Josh',
    handle: '@JoshWComeau',
    date: '10h',
    content:
      '🔥 Automatically use "smart" directional curly quotes with the `quotes` CSS property! Even handles nested quotes with the <q> tag :o',
    image: 'https://pbs.twimg.com/media/EOUrCOcWAAA71rA?format=png&name=small',
    avatar: 'https://avatarfiles.alphacoders.com/246/thumb-246518.jpg',
    comments: 12,
    retweets: 36,
    hearts: 175,
  },
  {
    id: 5,
    name: 'Satyajit Sahoo',
    handle: '@satya164',
    date: '20h',
    content:
      'Not sure if I should be proud or ashamed of this piece of art 😅\n\n#Typescript',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlXoFgUXPAoOwRFRMvLDs3eybkvd7rua4u4Q&usqp=CAU',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEPx6KO4hGj6LtZyPz_Fiih_QpVDtKGCxHnXHi91-DxQlqKBn1Q-vlyRy2X_CGAz79lfU&usqp=CAU',
    comments: 64,
    retweets: 87,
    hearts: 400,
  },
  {
    id: 4,
    name: '🌈 Sojh',
    handle: '@JoshWComeau',
    date: '10h',
    content:
      '🔥 Automatically use "smart" directional curly quotes with the `quotes` CSS property! Even handles nested quotes with the <q> tag :o',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLg-i16-RjkI0hSiPzatuOl4V0cJqC1H1Qrw&usqp=CAU',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyysTFnbAT9udteBbtvKB-NzMYcHtOMHu1ejJ6P_LecRsIz02RAqJ_qFJrrO2djLw_r78&usqp=CAU',
    comments: 12,
    retweets: 36,
    hearts: 175,
  },
];

type NotificationTwittProps = React.ComponentProps<typeof NotificationTwitt>;

export const notificationTweets: Array<NotificationTwittProps> = [
  {
    id: 1,
    content:
      'In any case, the focus is not react navigation, but the possibility of writing your app once and running it on several different platforms.  Then you use the technology you want, for example for the interface, I choose @rn_paper',
    name: 'Leandro Fevre',
    people: [
      {
        name: 'Evan Bacon 🥓',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdMTZL21aQpN7dmzIGPb7O_kya4l6dRmovzgsSoPu3CZTjllrRiwgMJCAAMROZzDsfFnY&usqp=CAU',
      },
      {
        name: 'Leandro Favre',
        image:
          'https://pbs.twimg.com/profile_images/1265688225076690945/JpshyTTJ_400x400.png',
      },
    ],
  },
  {
    id: 2,
    content: "It's finally somewhat bright on my way to work 🥳",
    name: 'Tomasz Łakomy',
    people: [
      {
        name: 'Wojteg1337',
        image:
          'https://pbs.twimg.com/profile_images/1164452902913675264/cn3bEqJp_400x400.jpg',
      },
    ],
  },
  {
    id: 3,
    content:
      'What they say during code review:\n\n"I see your point, but this is extra work - how about we create a ticket for it and get to it next sprint?"\n\nWhat they mean:\n\n"I literally don\'t give a single shit about it and this ticket will rot in the backlog for eternity"',
    name: 'Tomasz Łakomy',
    people: [
      {
        name: 'Nader Dabit',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6jNYSF6WxLWCK6PCtO_Gn1414nz3xvhwa9xeSAYd2fvTH5tr-A1S-e9x-hydR1MATQMM&usqp=CAU',
      },
    ],
  },
  {
    id: 4,
    content:
      'In any case, the focus is not react navigation, but the possibility of writing your app once and running it on several different platforms.  Then you use the technology you want, for example for the interface, I choose @rn_paper',
    name: 'Leandro Fevre',
    people: [
      {
        name: 'Evan Bacon 🥓',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwXMIxiIdm7Ec9IAyEvwSs1sHxC5COlrE24LNdk6DRFY0aS8Rk8oqvvmjscC8yRB9kX48&usqp=CAU',
      },
      {
        name: 'Leandro Favre',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6j0Y9Vf3L6cdau9fVyhs6nIkU01M9B5TkAjvfP9h0pQ-WhgVPZjoij-WcpKalJUUmP0o&usqp=CAU',
      },
    ],
  },
  {
    id: 5,
    content: "It's finally somewhat bright on my way to work 🥳",
    name: 'Tomasz Łakomy',
    people: [
      {
        name: 'Wojteg1337',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrYTOHAJrUChV13CIFyQLJph22wM6ekhQcsaWU3ww9KfvgpjjNxCqJmtEqYezz7c9Bbdo&usqp=CAU',
      },
    ],
  },
  {
    id: 6,
    content:
      'What they say during code review:\n\n"I see your point, but this is extra work - how about we create a ticket for it and get to it next sprint?"\n\nWhat they mean:\n\n"I literally don\'t give a single shit about it and this ticket will rot in the backlog for eternity"',
    name: 'Tomasz Łakomy',
    people: [
      {
        name: 'Nader Dabit',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwiVAti_pEf-jIsBolv3jmJG2fIo0ioMmbsodQdT3hCS0R8lu-pBfJZSNnPguWGrt2P3o&usqp=CAU',
      },
    ],
  },
];
