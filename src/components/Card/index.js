import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Linking } from 'react-native';

export default function Card({ game }) {
  return (
    <View style={styles.card}>
      <Image style={styles.img} source={{ uri: game.thumbnail }} />
      <View style={styles.cardInfo}>
        <Text style={styles.title}>{game.title}</Text>
        <View style={styles.platformArea}>
          <Text>
            {game.type} |{" "}
          </Text>
          <Text style={
            {
              ...styles.badge,
              marginRight: 8,
            }
          }>
            {game.platforms.split(",")[0]}
          </Text>
          {
            game.platforms.split(",")[1] &&
            <Text style={styles.badge}>
              {game.platforms.split(",")[1]}
            </Text>
          }


        </View>
        <View style={styles.priceArea}>
          <Text style={styles.freeText}>Grátis</Text>
          <Text style={styles.price}>{game.worth}</Text>
        </View>
        <Text style={styles.description} numberOfLines={2}>
          {game.description}
        </Text>
        <TouchableOpacity
          style={styles.buttonGet}
          onPress={() => Linking.openURL(game.open_giveaway)}
        >
          <Text style={styles.buttonGetText}>Resgatar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    marginBottom: 32,
    overflow: 'hidden',
    borderRadius: 8,
    backgroundColor: 'rgba(255,255,255,1)',
  },
  img: {
    height: 150,
    flex: 60,
    resizeMode: 'stretch',
  },
  cardInfo: {
    flex: 40,
    padding: 16,
  },
  title: {
    color: 'rgba(10,10,10,1)',
    fontWeight: 'bold',
    fontSize: 18,
  },
  description: {
    marginTop: 8,
    fontSize: 14,
  },
  priceArea: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    fontSize: 14,
  },
  freeText: {
    color: ' rgb(39, 70, 144)',
    fontWeight: 'bold',
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
    marginTop: 24,
    height: 40,
  },
  buttonGetText: {
    color: 'rgba(255,255,255,1)',
    textAlign: 'center',
    fontSize: 14,
    textTransform: 'uppercase',
  },
  platformArea: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    fontSize: 14,
  },
  badge: {
    backgroundColor: '#002c3f',
    color: 'rgba(255,255,255,1)',
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    fontSize: 12,
  }
});
