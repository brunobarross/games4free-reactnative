import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Card from '../../components/Card/index.js';
import { useEffect, useState } from 'react';

export default function Home() {
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [tabActive, setTabActive] = useState('games');
  const [quantity, setQuantity] = useState(0);

  const getGames = async () => {
    try {
      const res = await fetch(
        `https://gamerpower.p.rapidapi.com/api/giveaways/`,
        {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': `59df7faf5emsh2cb45c52d4b33e3p18956fjsn99432fdbfb5d`,
            'X-RapidAPI-Host': 'gamerpower.p.rapidapi.com',
          },
        },
      );
      const data = await res.json();
      console.log(data);
      setGames(data);
      setQuantity(data.length);
    } catch (err) {
      console.log(err);
    }
  };

  const handlelickTabs = async (tipo) => {
    const jogosFiltrados = await games.filter((jogo) => {
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
      }
    });
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
      <View style={styles.tabs}>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => handlelickTabs('games')}
        >
          <Text
            style={{
              ...styles.tabText,
              color:
                tabActive === 'games' ? 'rgba(39, 70, 144,1)' : 'rgba(0,0,0,1)',
            }}
          >
            Games
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.tab,
            borderLeftWidth: 1,
            borderLeftColor: 'rgba(0,0,0,0.1)',
          }}
          onPress={() => handlelickTabs('expansoes')}
        >
          <Text
            style={{
              ...styles.tabText,
              color:
                tabActive === 'expansoes'
                  ? 'rgba(39, 70, 144,1)'
                  : 'rgba(0,0,0,1)',
            }}
          >
            DLC
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.quantidade}>Mostrar {quantity} disponíveis</Text>
      <FlatList
        style={styles.cardsArea}
        data={filteredGames && filteredGames.length > 0 ? filteredGames : games}
        renderItem={({ item }) => <Card game={item} />}
      />
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
    paddingHorizontal: 16,
  },
  quantidade: {
    paddingTop: 48,
    color: 'rgba(255,255,255,1)',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    paddingHorizontal: 16,
  },
});
