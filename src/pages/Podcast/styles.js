import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  background-color: #111;
  flex: 1;
`;

export const EpisodeList = styled.FlatList.attrs({
  contentContainerStyle: { paddingBottom: 30 },
})``;

export const PodcastDetails = styled.View`
  align-items: center;
  padding: 0 0 20px;
  padding-top: ${getStatusBarHeight() + 30}px;
`;

export const Background = styled.ImageBackground`
  height: ${340 + getStatusBarHeight()}px;
  opacity: 0.2;
  position: absolute;
  width: 100%;
`;

export const BackButton = styled.TouchableOpacity.attrs({
  hitSlop: {
    bottom: 5,
    left: 5,
    right: 5,
    top: 5,
  },
})`
  left: 30px;
  position: absolute;
  top: ${getStatusBarHeight() + 30}px;
`;

export const PodcastTitle = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
`;

export const PlayButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  align-items: center;
  align-self: stretch;
  background: #1db954;
  border-radius: 25px;
  height: 50px;
  justify-content: center;
  margin: 30px 40px 0;
`;

export const PlayButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1.5px;
`;

export const Cover = styled.Image`
  border-radius: 8px;
  height: 200px;
  width: 200px;
`;

export const Episode = styled.TouchableOpacity`
  margin-top: 20px;
  padding: 0 20px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const Author = styled.Text`
  color: #c4c4c4;
  font-size: 14px;
  margin-top: 3px;
`;
