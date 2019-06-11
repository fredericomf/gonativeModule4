import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  background-color: #111;
  flex: 1;
`;

export const PodcastList = styled.FlatList.attrs({
  contentContainerStyle: { paddingTop: getStatusBarHeight() + 30, paddingBottom: 30 },
})``;

export const PageTitle = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

export const Podcast = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  align-items: center;
  flex-direction: row;
  margin-top: 20px;
  padding: 0 20px;
`;

export const Cover = styled.Image`
  border-radius: 4px;
  height: 80px;
  width: 80px;
`;

export const Info = styled.View`
  margin-left: 15px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const Count = styled.Text`
  color: #c4c4c4;
  font-size: 16px;
  margin-top: 3px;
`;
