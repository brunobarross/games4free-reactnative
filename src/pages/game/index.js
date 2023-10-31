import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useState, useEffect } from 'react';
import LoadingArea from '../../components/LoadingArea';
import Constants from 'expo-constants';
import { Linking } from 'react-native';

export default function Game({ route, navigation }) {
  const { itemId } = route.params;
  const [game, setGame] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const apiUrl = Constants?.expoConfig?.extra.apiUrl;
  const apiKey = Constants?.expoConfig?.extra.apiKey;

  const getGame = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(
        `https://gamerpower.p.rapidapi.com/api/giveaway?id=${itemId}`,
        {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': `${apiKey}`,
            'X-RapidAPI-Host': 'gamerpower.p.rapidapi.com',
          },
        },
      );
      const data = await res.json();
      setGame(data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const textoAPI = game?.instructions;
  const arrayStr = textoAPI?.replace(/\r\n/, '<br>').split('<br>');

  useEffect(() => {
    getGame();
  }, [itemId]);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <LoadingArea />
      ) : (
        <ScrollView style={styles.scrollArea}>
          <Image style={styles.img} source={{ uri: game?.thumbnail }} />
          <View style={styles.cardInfo}>
            <Text style={styles.title}>{game?.title}</Text>
            <View style={styles.platformArea}>
              <Text>{game?.type} | </Text>
              <Text
                style={{
                  ...styles.badge,
                  marginRight: 8,
                }}
              >
                {game?.platforms.split(',')[0]}
              </Text>
              {game?.platforms.split(',')[1] && (
                <Text style={styles.badge}>
                  {game?.platforms.split(',')[1]}
                </Text>
              )}
            </View>
            <View style={styles.priceArea}>
              <Text style={styles.freeText}>Grátis</Text>
              <Text style={styles.price}>{game?.worth}</Text>
            </View>
            <Text style={styles.description}>{game?.description}</Text>
          </View>
          <View style={{ width: '100%', padding: 16 }}>
            <TouchableOpacity
              style={styles.buttonGet}
              onPress={() => Linking.openURL(game?.open_giveaway)}
            >
              <Text style={styles.buttonGetText}>Resgatar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollArea: {
    width: '100%',
    flex: 1,
  },

  img: {
    width: '100%',
    height: 150,
    resizeMode: 'stretch',
  },
  cardInfo: {
    flex: 40,
    padding: 16,
  },
  title: {
    color: 'rgba(10,10,10,1)',
    fontWeight: 'bold',
    fontSize: 22,
  },
  description: {
    marginTop: 16,
    fontSize: 16,
  },
  priceArea: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    fontSize: 14,
  },
  freeText: {
    color: ' rgb(39, 70, 144)',
    fontWeight: 'bold',
    fontSize: 16,
  },
  price: {
    color: 'rgba(0,0,0,1)',
    fontWeight: 'bold',
    textDecorationLine: 'line-through',
    marginLeft: 8,
  },
  buttonGet: {
    width: '100%',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(39,70,144,1)',
    marginTop: 48,
    height: 48,
  },
  buttonGetText: {
    color: 'rgba(255,255,255,1)',
    textAlign: 'center',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  platformArea: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    fontSize: 16,
  },
  badge: {
    backgroundColor: '#002c3f',
    color: 'rgba(255,255,255,1)',
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    fontSize: 14,
  },
});
