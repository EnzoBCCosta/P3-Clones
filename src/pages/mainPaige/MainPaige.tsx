import React from 'react';
import { View, Text, Image, ScrollView, ImageSourcePropType } from 'react-native';
import { mainStyles } from './styles';

const fotoServidor = require('../../../assets/Server.png');
const fotoAmigo = require('../../../assets/1-1Profile.png');
const minhaFoto = require('../../../assets/minhafoto.jpg');

interface AvatarProps {
  imageUrl: ImageSourcePropType;
  statusColor: string;
  size?: number;
}

const Avatar: React.FC<AvatarProps> = ({ imageUrl, statusColor, size = 48 }) => {
  const statusSize = size * 0.3;

  return (
    <View style={[mainStyles.avatarContainer, { width: size, height: size }]}>
      <Image source={imageUrl} style={[mainStyles.avatarImage, { borderRadius: size / 2 }]} />
      <View style={[
        mainStyles.statusIndicator,
        {
          backgroundColor: statusColor,
          width: statusSize,
          height: statusSize,
          borderRadius: statusSize / 2
        }
      ]} />
    </View>
  );
};

export const MainScreen: React.FC = () => {
  return (
    <View style={mainStyles.container}>

      <View style={mainStyles.sidebar}>
        <View style={[mainStyles.serverButton, mainStyles.serverButtonActive]}>
          <Text style={mainStyles.serverTextActive}>💬</Text>
        </View>

        <View style={mainStyles.separator} />

        <Image source={fotoServidor} style={mainStyles.serverIcon} />

        <View style={mainStyles.addServerButton}>
          <Text style={mainStyles.addServerText}>+</Text>
        </View>
      </View>

      <View style={mainStyles.mainContent}>

        <View style={mainStyles.header}>
          <Text style={mainStyles.headerTitle}>Mensagens</Text>
          <View style={mainStyles.searchBarContainer}>
            <Text style={mainStyles.searchText}>🔍     Adicionar amigos</Text>
          </View>
        </View>

        <ScrollView style={mainStyles.friendsList}>
          <View style={mainStyles.featuredCard}>
            <Avatar imageUrl={fotoAmigo} statusColor="#F23F43" size={64} />
          </View>

          <View style={mainStyles.chatItem}>
            <Avatar imageUrl={fotoAmigo} statusColor="#F23F43" size={40} />
            <Text style={mainStyles.chatName}>1-1</Text>
          </View>

          <View style={mainStyles.inviteContainer}>
            <Text style={mainStyles.inviteText}>Convide mais amigos</Text>
          </View>
        </ScrollView>

        <View style={mainStyles.userFooter}>
          <View style={mainStyles.userInfoContainer}>
            <Avatar imageUrl={minhaFoto} statusColor="#23A55A" size={42} />
            <View style={mainStyles.userTextContainer}>
              <Text style={mainStyles.userName}>Eu ˇ</Text>
              <Text style={mainStyles.userStatusText}>Disponível</Text>
            </View>
          </View>
        </View>

      </View>
    </View>
  );
};
