import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Linking } from 'react-native';
export default function About() {

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollArea}>
                <Text style={{
                    ...styles.texto,
                    fontSize: 17,
                    fontWeight: 'bold',
                    marginBottom: 16,

                }}

                >Bem-vindo ao <Text style={{ fontWeight: 'bold' }}

                >Games4Free</Text>: Sua Janela Para o Universo dos Jogos Gratuitos!</Text>
                <Text style={styles.texto}>
                    Essa aplicação foi desenvolvida por <Text style={{ fontWeight: 'bold', color: '#5276CD', }} onPress={() => {
                        Linking.openURL('https://www.linkedin.com/in/altamirobruno/');
                    }}>
                        Altamiro Bruno</Text>, um desenvolvedor com 3 anos de experiência em desenvolvimento de software e que ama jogos.

                </Text>
                <Text style={styles.texto}>O <Text style={{ fontWeight: 'bold' }}>Games4Free</Text> é muito mais do que um aplicativo. É uma plataforma desenvolvida com a tecnologia React Native que traz uma experiência única para os verdadeiros entusiastas de jogos. Se você é alguém que adora descobrir novos títulos emocionantes e, ainda por cima, obtê-los sem gastar um centavo, você está no lugar certo.</Text>
                <Text style={styles.texto}>Nosso objetivo é simplificar a busca por informações sobre jogos e DLCs gratuitos disponíveis em várias das plataformas de jogos mais populares do mundo, incluindo Steam, Epic Games Store, PlayStation Store e Microsoft Store. No <Text style={{ fontWeight: 'bold' }}>Games4Free</Text>, a caça ao tesouro nunca foi tão fácil. Reunimos todas as ofertas imperdíveis em um só lugar, economizando seu tempo e seu dinheiro.</Text>
                <Text style={styles.texto}>
                    O que nos diferencia é a nossa interface. Ela é simples, intuitiva e moderna. Em vez de passar horas pesquisando pela web, você pode acessar o <Text style={{ fontWeight: 'bold' }}>Games4Free</Text> e encontrar todas as ofertas gratuitas de jogos disponíveis com apenas alguns toques na tela. Seja você um veterano da indústria ou um novato em busca de emoção, nossa plataforma foi projetada para agradar a todos.
                </Text>
                <Text style={styles.texto}>
                    Nossa missão é garantir que você nunca mais perca uma oportunidade de adicionar um novo jogo à sua coleção sem gastar um tostão. Os jogos gratuitos estão em constante evolução, e nós estamos sempre atualizando nosso banco de dados para garantir que você esteja sempre por dentro das últimas ofertas.
                </Text>
                <Text style={styles.texto}>
                    Então, sinta-se à vontade para explorar o <Text style={{ fontWeight: 'bold' }}>Games4Free</Text>, navegar pelas nossas listas e descobrir as pérolas escondidas da indústria dos jogos. Junte-se a nós nessa jornada emocionante e comece a construir sua coleção de jogos sem gastar um centavo.
                </Text>
                <Text style={styles.texto}>
                    Estamos felizes por você estar aqui, e esperamos que o <Text style={{ fontWeight: 'bold' }}>Games4Free</Text> torne sua experiência de jogo ainda mais incrível. Seja bem-vindo à nossa comunidade e aproveite o mundo dos jogos gratuitos ao máximo!
                </Text>
                <Text style={styles.texto}>
                    Os dados consumidos aqui são fornecidos pela API <Text
                        onPress={() => {
                            Linking.openURL('https://www.gamerpower.com/api-read');
                        }}
                        style={{ fontWeight: 'bold', color: '#5276CD' }}
                    >Gamepower</Text> da plataforma <Text
                        onPress={() => {
                            Linking.openURL('https://www.gamerpower.com');
                        }}
                        style={{ fontWeight: 'bold', color: '#5276CD' }}>gamepower.com</Text>.
                </Text>

            </ScrollView>


        </View >
    )


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
        marginVertical: 32,
        paddingHorizontal: 24,
    },
    texto: {
        marginTop: 10,
        color: 'white',
        fontSize: 14,
        lineHeight: 24,
    }

});