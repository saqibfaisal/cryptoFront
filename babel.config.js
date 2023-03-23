module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@app': './app',
          '@components': './app/components',
          '@naviagtion': './app/naviagtion',
          '@redux': './app/redux',
          '@screens': './app/screen',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
