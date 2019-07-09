import styled from 'styled-components/native';

import { getBottomSpace } from 'react-native-iphone-x-helper';

import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  align-items: center;
  background: #111;
  flex-direction: row;
  height: ${74 + getBottomSpace()}px;
  justify-content: space-between;
  padding: 0 20px ${getBottomSpace()}px;
  width: 100%;
`;

export const CoverBackground = styled.Image.attrs({
  blurRadius: 5,
})`
  bottom: 0;
  left: 0;
  opacity: 0.2;
  position: absolute;
  right: 0;
  top: 0;
`;

export const EpisodeInfo = styled.View``;

export const Title = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const Author = styled.Text`
  color: #c4c4c4;
  font-size: 14px;
  margin-top: 3px;
`;

export const Controls = styled.View`
  flex-direction: row;
`;

export const ControlButton = styled.TouchableOpacity.attrs({
  hitSlop: {
    bottom: 5,
    left: 5,
    right: 5,
    top: 5,
  },
})`
  margin-left: 10px;
`;

export const ControlIcon = styled(Icon).attrs({
  color: '#FFF',
  size: 32,
})``;
