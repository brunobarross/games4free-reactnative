import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  RefreshControl,
  Alert,
} from 'react-native';
import Card from '../../components/Card/index.js';
import Tabs from '../../components/Tabs/index.js';
import LoadingArea from '../../components/LoadingArea/index.js';
import { useEffect, useState, useRef } from 'react';
import { FlashList } from '@shopify/flash-list';
import axios from 'axios'
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';


export default function Home({ navigation }) {
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [tabActive, setTabActive] = useState('all');
  const [quantity, setQuantity] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const listRef = useRef();
  const apiUrl = Constants?.expoConfig?.extra.apiUrl;
  const apiKey = Constants?.expoConfig?.extra.apiKey;
  const getGames = async () => {

    try {
      setIsLoading(true);
      const options = {
        method: 'GET',
        url: `${apiUrl}`,
        headers: {
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': 'gamerpower.p.rapidapi.com'
        }
      };
      const res = await axios.request(options);
      const data = res.data
      setGames(data);
      if (tabActive === 'all') {
        setQuantity(data.length);
      }
    } catch (err) {
      console.log(err);
      Alert.alert(
        err.message,
      )
    } finally {
      setIsLoading(false);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    getGames();
    handlelickTabs(tabActive);
    setRefreshing(false);
  };

  const scrollToTop = () => {
    listRef.current.scrollToOffset({ offset: 0, animated: true });
  };

  const handlelickTabs = (tipo) => {
    if (!games.length) return
    const jogosFiltrados = games?.filter((jogo) => {
      const plataformas = [
        'Epic Games Store',
        'Steam',
        'GOG',
        'Playstation 4',
        'Xbox 360',
        'Xbox One',
        'Nintendo Switch',
        'Ubisoft',
        'Android',
      ];
      if (tipo === 'games') {
        setTabActive('games');
        return (
          jogo.type === 'Game' &&
          plataformas.some((plataforma) => jogo.platforms.includes(plataforma))
        );
      } else if (
        tipo === 'expansoes' &&
        plataformas.some((plataforma) => jogo.platforms.includes(plataforma))
      ) {
        setTabActive('expansoes');
        return jogo.type === 'DLC';
      } else if (tipo === 'all') {
        setTabActive('all');
        return true;
      }
    });
    scrollToTop();
    setFilteredGames(jogosFiltrados);
  };

  useEffect(() => {
    getGames();
  }, []);

  useEffect(() => {
    setQuantity(filteredGames.length);
  }, [filteredGames]);

  return (
    <View style={styles.container}>
      <SafeAreaView />

      {isLoading ? (
        <LoadingArea />
      ) : (
        <>
          <Tabs tabActive={tabActive} handlelickTabs={handlelickTabs} />

          <View
            style={{
              height: '100%',
              width: '100%',
              paddingTop: 32,
              paddingHorizontal: 24,
            }}
          >
            <Text style={styles.quantidade}>
              Mostrando {quantity} disponíveis
            </Text>
            <FlashList
              ref={listRef}
              initialNumToRender={10}
              keyExtractor={(item) => item.id}
              data={
                filteredGames && filteredGames.length > 0
                  ? filteredGames
                  : games
              }
              estimatedItemSize={200}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
              renderItem={({ item }) => <Card game={item} navigation={navigation} />}
            />
          </View>
        </>
      )}

      <StatusBar style="light" />
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
  tabs: {
    flexDirection: 'row',
  },
  tab: {
    flex: 1,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,1)',
  },
  tabText: {
    color: 'rgba(0,0,0,1)',
    fontWeight: 'bold',
  },
  cardsArea: {
    marginTop: 32,
    width: '100%',
    paddingHorizontal: 24,
  },
  quantidade: {
    paddingBottom: 32,
    color: 'rgba(255,255,255,1)',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
});
