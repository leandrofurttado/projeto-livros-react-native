import { HStack, Heading, VStack, Image, Icon } from "native-base";
import { BookOpen, IdentificationCard, ShoppingCart, SoccerBall, StarFour } from 'phosphor-react-native'
import FutCardsLogo from "../assets/bayernlogo.png"
import BayernLogo from "../assets/bayernlogo.png"
import MessiLogo from "../assets/messi.jpg"
import { useEffect, useState } from "react";
import React from "react";
import { Loading } from "../components/loading";
import { TouchableOpacity, View } from "react-native";
import STYLES from "../styles/stylesPages";




export function Home() {
    const [userData, setUserData] = useState(null);
    const [roletaOn, setRoletaOn] = useState(true);
  
    useEffect(() => {
      // Função assíncrona para buscar os dados da API
      async function fetchData() {
        try {
            const response = await fetch('https://futcardsbrasil.000webhostapp.com/usuarios/consultar/40');
            const data = await response.json();
            setUserData(data); // Armazena os dados da API no estado
        } catch (error) {
            setUserData(false);
        }
      }
  
      fetchData(); // Chama a função de busca de dados quando o componente for montado
    }, []);
  
    return (
      <View style={{ flex: 1 }}>
        <VStack flex={1} bg="green.900" alignItems="center" px={8} py={24}>
          <HStack
            w="full"
            h="24"
            justifyContent="center"
            alignItems="center"
            display="flex"
            backgroundColor="green.900"
          >
            <Image
              source={BayernLogo}
              resizeMode="contain"
              size={150}
              borderRadius={30}
              alt="perfil-img"
            />
          </HStack>

          <Heading color="gray.100" fontSize="xl" mt={10}>
            {userData ? `Bem vindo, ${userData.nome_completo}!` : <Loading/>}
          </Heading>

          <Heading display="flex" color="gray.100" fontSize="xl" mt={5}>
            FC Points: {userData ? userData.credits : '-'}
          </Heading>

          {/* Editar */}
          <TouchableOpacity
            style={STYLES.button_style_editarPerfil}
          > 
            <IdentificationCard size={30} weight="bold" color="black" style={{ display: 'flex' }} />
            <Heading display="flex" color="black" fontSize="xl" alignItems="center" ml={2}>
              Editar perfil
            </Heading>
          </TouchableOpacity>

          {/* Loja de cartas */}
          <TouchableOpacity
            style={STYLES.button_style}
            
          > 
            <ShoppingCart size={30} weight="bold" color="white" style={{ display: 'flex' }} />
            <Heading display="flex" color="gray.100" fontSize="xl" alignItems="center" ml={2}>
              Loja de cartas
            </Heading>
          </TouchableOpacity>

          {/* Inventário */}
          <TouchableOpacity
            style={STYLES.button_style}
          > 

            <BookOpen size={30} weight="bold" color="white" style={{ display: 'flex' }} />
            <Heading display="flex" color="gray.100" fontSize="xl" alignItems="center" ml={2}>
              Minhas Cartas
            </Heading>
          </TouchableOpacity>

        </VStack>

        <TouchableOpacity
          style={{
            backgroundColor: roletaOn ? 'gold' : 'white',
            borderRadius: 10,
            padding: 5,
            position: 'absolute',
            bottom: 20,
            left: 0,
            right: 0,
            alignItems: 'center',
            marginHorizontal: 20,
            justifyContent: 'center',
          }}
        >

          <Heading display="flex" color="black" fontSize="xl" mb={2}>
            {roletaOn ? 'Roleta diária disponível' : 'Roleta indisponível, aguarde para jogar.'}
          </Heading>
          <StarFour size={30} weight="bold" color="black" />
        </TouchableOpacity>
      </View>
    );
  }