import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { COLORS } from '../../theme';
import { Pressable, TouchableHighlight } from 'react-native-windows';
import { Circle } from './components/circle';

export const salasDoDiscord = [
  {
    nome: "Sala Geral",
    descricao: "Converse sobre diversos assuntos",
    membros: 150,
    online: 75,
    salas: [
      "Mecânica Clássica",
      "Termodinâmica",
      "Eletromagnetismo",
      "Óptica",
      "Física Nuclear",
      "Física de Partículas",
      "Astrofísica",
      "Física Quântica",
      "Relatividade",
      "Física Experimental",
      "Física de Fluidos",
      "Física de Semicondutores",
      "Física Estatística",
      "Física Computacional",
      "Física Quântica Aplicada",
      "Física de Materiais",
      "Física de Plasma",
      "Física Biológica",
      "Física de Ondas",
      "Física de Estado Sólido",
    ]
  },
  {
    nome: "Sala de Jogos",
    descricao: "Converse sobre jogos e organize partidas",
    membros: 100,
    online: 50,
    salas: [
      "Desenvolvimento Web",
      "Inteligência Artificial",
      "Aprendizado de Máquina",
      "Ciência de Dados",
      "Programação Orientada a Objetos",
      "Desenvolvimento de Jogos",
      "Segurança da Informação",
      "Computação em Nuvem",
      "Desenvolvimento de Aplicativos Mobile",
      "Programação Funcional",
      "Desenvolvimento de Aplicativos Desktop",
      "Programação em Linguagem de Montagem",
      "Programação de Sistemas Embarcados",
      "Desenvolvimento de Software de Banco de Dados",
      "Desenvolvimento de Interfaces de Usuário (UI/UX)",
      "Programação de Redes e Protocolos",
      "Desenvolvimento de Aplicações Web em Tempo Real",
      "Programação Paralela e Concorrente",
      "Desenvolvimento de Chatbots e Assistentes Virtuais",
      "Programação de Dispositivos Móveis (Android, iOS)",
    ]
  },
  {
    nome: "Sala de Programação",
    descricao: "Discuta sobre programação e compartilhe projetos",
    membros: 0,
    online: 0,
    salas: []
  },
  {
    nome: "Sala de Arte",
    descricao: "Compartilhe e aprecie trabalhos artísticos",
    membros: 50,
    online: 20,
    salas: [
      "Desenvolvimento Web",
      "Inteligência Artificial",
      "Aprendizado de Máquina",
      "Ciência de Dados",
      "Programação Orientada a Objetos",
      "Desenvolvimento de Jogos",
      "Segurança da Informação",
      "Computação em Nuvem",
      "Desenvolvimento de Aplicativos Mobile",
      "Programação Funcional",
      "Desenvolvimento de Aplicativos Desktop",
      "Programação em Linguagem de Montagem",
      "Programação de Sistemas Embarcados",
      "Desenvolvimento de Software de Banco de Dados",
      "Desenvolvimento de Interfaces de Usuário (UI/UX)",
      "Programação de Redes e Protocolos",
      "Desenvolvimento de Aplicações Web em Tempo Real",
      "Programação Paralela e Concorrente",
      "Desenvolvimento de Chatbots e Assistentes Virtuais",
      "Programação de Dispositivos Móveis (Android, iOS)",
    ]
  }
];

const singleChanel = {
  nome: "Sala de Jogos",
  descricao: "Converse sobre jogos e organize partidas",
  membros: 100,
  online: 50,
  salas: [
    "Desenvolvimento Web",
    "Inteligência Artificial",
    "Aprendizado de Máquina",
    "Ciência de Dados",
    "Programação Orientada a Objetos",
    "Desenvolvimento de Jogos",
    "Segurança da Informação",
    "Computação em Nuvem",
    "Desenvolvimento de Aplicativos Mobile",
    "Programação Funcional",
    "Desenvolvimento de Aplicativos Desktop",
    "Programação em Linguagem de Montagem",
    "Programação de Sistemas Embarcados",
    "Desenvolvimento de Software de Banco de Dados",
    "Desenvolvimento de Interfaces de Usuário (UI/UX)",
    "Programação de Redes e Protocolos",
    "Desenvolvimento de Aplicações Web em Tempo Real",
    "Programação Paralela e Concorrente",
    "Desenvolvimento de Chatbots e Assistentes Virtuais",
    "Programação de Dispositivos Móveis (Android, iOS)",
  ]
};

export const ansewrs = [
  {
    content: "Você já ouviu falar sobre a Teoria das Cordas?",
    author: "Victor Guilherme",
  },
  {
    content: "Sim, é uma teoria fascinante! Ela propõe que as partículas fundamentais não são pontos, mas sim cordas vibrantes em diferentes modos de vibração.",
    author: "Victor Guilherme",
  },
  {
    content: "Exatamente! E a teoria sugere que essas cordas vibrantes existem em uma dimensão a mais do que podemos perceber.",
    author: "Victor Guilherme",
  },
  {
    content: "Isso mesmo! Essa dimensão extra é chamada de dimensão espacial compactificada. Ela é tão pequena que não a percebemos no nosso dia a dia.",
    author: "Victor Guilherme",
  },
  {
    content: "É incrível pensar em como uma teoria tão abstrata pode ter implicações tão profundas na compreensão da natureza.",
    author: "Victor Guilherme",
  },
  {
    content: "Com certeza! A Teoria das Cordas busca unificar a gravidade com as outras forças fundamentais, como o eletromagnetismo. Ela pode nos fornecer uma visão mais completa do universo.",
    author: "Victor Guilherme",
  },
  {
    content: "E não podemos esquecer da teoria da relatividade de Einstein, que revolucionou nossa compreensão do espaço e do tempo.",
    author: "Victor Guilherme",
  },
  {
    content: "Verdade! A teoria da relatividade nos mostrou que o espaço e o tempo estão interligados, formando uma 'teia' no espaço-tempo.",
    author: "Victor Guilherme",
  },
  {
    content: "E também introduziu o conceito de curvatura do espaço-tempo devido à presença de massa e energia, o que explica a gravidade.",
    author: "Victor Guilherme",
  },
  {
    content: "É fascinante como a física teórica nos leva a questionar nossa percepção do universo e nos desafia a buscar respostas para os mistérios mais profundos.",
    author: "Victor Guilherme",
  },
  {
    content: "Com certeza! E o mais emocionante é que ainda temos muito a descobrir. A física é um campo em constante evolução, e quem sabe quais novas teorias revolucionárias surgirão no futuro.",
    author: "Victor Guilherme",
  },
]

const ansewrs2 = [
  {
    author: "Victor Guilherme",
    content: "Você já ouviu falar sobre a Teoria das Supercordas?"
  },
  {
    author: "Victor Guilherme",
    content: "Sim, é uma extensão da Teoria das Cordas que propõe a existência de múltiplas dimensões espaciais, além das três que conhecemos."
  },
  {
    author: "Victor Guilherme",
    content: "Exatamente! A Teoria das Supercordas sugere que o universo tem 10 dimensões, sendo 9 dimensões espaciais e 1 dimensão temporal."
  },
  {
    author: "Victor Guilherme",
    content: "Essas dimensões extras são compactificadas em escalas extremamente pequenas, o que as torna invisíveis para nós em nosso mundo macroscópico."
  },
  {
    author: "Victor Guilherme",
    content: "E as cordas nessa teoria não são mais apenas uma dimensão unidimensional, mas sim uma entidade multidimensional chamada 'supercorda'",
  },
  {
    author: "Victor Guilherme",
    content: "Correto! As supercordas possuem propriedades vibracionais complexas, que determinam as partículas e as forças que observamos no universo."
  },
  {
    author: "Victor Guilherme",
    content: "E a Teoria das Supercordas busca unificar todas as forças fundamentais da natureza, incluindo a gravidade, em uma única estrutura matemática coesa."
  },
  {
    author: "Victor Guilherme",
    content: "Sim, é um objetivo ambicioso. A teoria propõe que as partículas elementares que conhecemos, como elétrons e quarks, são resultantes das diferentes vibrações das supercordas."
  },
  {
    author: "Victor Guilherme",
    content: "E essas vibrações das supercordas correspondem a diferentes modos de oscilação que geram partículas com diferentes massas e propriedades."
  },
  {
    author: "Victor Guilherme",
    content: "É intrigante pensar que a riqueza de fenômenos físicos que observamos no universo pode surgir a partir das vibrações de uma entidade fundamental como a supercorda."
  },
  {
    author: "Victor Guilherme",
    content: "Com certeza! A Teoria das Supercordas representa uma abordagem profunda e desafiadora para compreender a natureza em seu nível mais fundamental."
  },
  {
    author: "Victor Guilherme",
    content: "Apesar de ainda ser uma área de pesquisa ativa, a Teoria das Supercordas oferece uma perspectiva fascinante sobre a estrutura do universo e a unificação das forças fundamentais."
  },
  {
    author: "Victor Guilherme",
    content: "Sem dúvida, é emocionante acompanhar os avanços nesse campo e ver como essas teorias nos levam a repensar a natureza da realidade."
  },
  {
    author: "Victor Guilherme",
    content: "Absolutamente. A física teórica continua a nos surpreender com suas ideias inovadoras e conceitos profundos que ampliam nosso entendimento do cosmos."
  },
]

export const rooms = [
  {
    id: 0,
    ansewrs: ansewrs,
  },
  {
    id: 1,
    ansewrs: ansewrs2
  }
]

export function Navbar({ navigation, ...rest }: any) {


  const renderItem = ({ _, index }: any) => (
    <Circle onPress={() => navigation.navigate("Home", { itemId: index })} />
  )

  return (
    <View style={styles.container}>
      <FlatList
        data={new Array(16).fill(singleChanel)}
        ListHeaderComponent={
          <Circle onPress={() => navigation.navigate("PrivateConversations")} />
        }
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: 70,
    backgroundColor: COLORS.grey_130,
  },
  list: {
    // alignItems: "center",
  },
  serverItem: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginVertical: 4,
    backgroundColor: COLORS.grey_300,
  }
})