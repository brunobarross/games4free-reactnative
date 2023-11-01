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
import axios from 'axios'

export default function Game({ route, navigation }) {
  const { itemId } = route.params;
  const [game, setGame] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const apiUrl = Constants?.expoConfig?.extra.apiUrl;
  const apiKey = Constants?.expoConfig?.extra.apiKey;

  const getGame = async () => {
    try {
      setIsLoading(true);
      const options = {
        method: 'GET',
        url: `https://gamerpower.p.rapidapi.com/api/giveaway?id=${itemId}`,
        headers: {
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': 'gamerpower.p.rapidapi.com'
        }
      };
      const res = await axios.request(options);
      const data = res.data
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
        <>

          <ScrollView style={styles.scrollArea}>
            <Image style={styles.img} source={{ uri: game?.thumbnail }} />
            <View style={styles.cardInfo}>
              <Text style={styles.title}>{game?.title}</Text>
              <View style={styles.platformArea}>
                <Text style={styles.type}>{game?.type} | </Text>
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

          </ScrollView>
          <View style={{ width: '100%', paddingHorizontal: 16, paddingTop: 16, paddingBottom: 24 }}>
            <TouchableOpacity
              style={styles.buttonGet}
              onPress={() => Linking.openURL(game?.open_giveaway_url)}
            >
              <Text style={styles.buttonGetText}>Resgatar</Text>
            </TouchableOpacity>
          </View>
        </>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(31,31,31,1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollArea: {
    width: '100%',
    flex: 1,

  },

  img: {
    width: '100%',
    height: 200,
    resizeMode: 'stretch',
  },
  cardInfo: {
    flex: 40,
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
  },
  description: {
    marginTop: 16,
    fontSize: 16,
    color: 'white'
  },
  type: {
    color: 'white',
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
    color: 'white'
  },
  price: {
    fontWeight: 'bold',
    textDecorationLine: 'line-through',
    marginLeft: 8,
    color: '#818380'
  },
  buttonGet: {
    width: '100%',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(39,70,144,1)',
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
    color: 'white'
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
