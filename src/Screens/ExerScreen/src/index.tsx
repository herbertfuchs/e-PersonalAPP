import React, { useState } from "react";
import {
  View,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import { OpenExerc } from "./components/PopUps/button";
import { ButtonOut } from "./components/PopUps/buttonout";
import { Modal } from "./components/PopUps/modal";

import { styles } from "./styles";
import ImgPrincipal from "../../../assets/funcional.png";

export function VideoPlayer() {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const handleModal = () => setIsModalVisible(() => !isModalVisible);
  // Segundo PopUps
  const [isModalVisibleTwo, setIsModalVisibleTwo] = React.useState(false);
  const handleModalTwo = () => setIsModalVisibleTwo(() => !isModalVisibleTwo);
  // Terceiro PopUps
  const [isModalVisibleThree, setIsModalVisibleThree] = React.useState(false);
  const handleModalThree = () =>
    setIsModalVisibleThree(() => !isModalVisibleThree);
  // Terceiro PopUps
  const [isModalVisibleFour, setIsModalVisibleFour] = React.useState(false);
  const handleModalFour = () =>
    setIsModalVisibleFour(() => !isModalVisibleFour);
  // Terceiro PopUps
  const [isModalVisibleFive, setIsModalVisibleFive] = React.useState(false);
  const handleModalFive = () =>
    setIsModalVisibleFive(() => !isModalVisibleFive);

  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [customInterval, setCustomInterval] = useState<NodeJS.Timer>();

  const startTimer = () => {
    setCustomInterval(
      setInterval(() => {
        changeTime();
      }, 1000)
    );
  };
  const stopTimer = () => {
    if (customInterval) {
      clearInterval(customInterval);
    }
  };
  const clear = () => {
    stopTimer();
    setSeconds(0);
    setMinutes(0);
  };
  const changeTime = () => {
    setSeconds((prevState) => {
      if (prevState + 1 == 60) {
        setMinutes(minutes + 1);
        return 0;
      }
      return prevState + 1;
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.videoView}>
        <Image style={styles.imgPrincipal} source={ImgPrincipal} />
      </View>
      <Text style={styles.titleVideo}>Exercício Funcional</Text>
      <Text style={styles.cronometro}>
        {minutes < 10 ? "0" + minutes : minutes}:
        {seconds < 10 ? "0" + seconds : seconds}
      </Text>
      <View style={styles.cronometroContent}>
        <TouchableOpacity onPress={startTimer}>
          <Text>Começar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={stopTimer}>
          <Text>Pausar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={clear}>
          <Text>Limpar</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scroll}>
        <OpenExerc title="Abdominal Supra Solo" onPress={handleModal} />
        <Modal isVisible={isModalVisible}></Modal>
        <OpenExerc title="Agachamento" onPress={handleModalTwo} />
        <OpenExerc title="Burpee" onPress={handleModalThree} />
        <OpenExerc title="Afundo" onPress={handleModalFour} />
        <OpenExerc title="Prancha" onPress={handleModalFive} />
      </ScrollView>

      <Modal isVisible={isModalVisible}>
        <Modal.Container>
          <Modal.Header title="ABDOMINAL SUPRA SOLO" />
          <Modal.Body>
            <Image
              source={{
                uri: "https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/abdominal.gif",
              }}
              style={styles.img}
            />
            <Text> 3 séries de 15 repitições cada!</Text>
          </Modal.Body>
          <Modal.Footer>
            <ButtonOut title="Acabei!" onPress={handleModal} />
          </Modal.Footer>
        </Modal.Container>
      </Modal>

      <Modal isVisible={isModalVisibleTwo}>
        <Modal.Container>
          <Modal.Header title="AGACHAMENTO" />
          <Modal.Body>
            <Image
              source={{
                uri: "https://www.mundoboaforma.com.br/wp-content/uploads/2020/11/agachamento-livre-1.gif",
              }}
              style={styles.img}
            />
            <Text> 3 séries de 15 repitições cada!</Text>
          </Modal.Body>
          <Modal.Footer>
            <ButtonOut title="Acabei!" onPress={handleModalTwo} />
          </Modal.Footer>
        </Modal.Container>
      </Modal>

      <Modal isVisible={isModalVisibleThree}>
        <Modal.Container>
          <Modal.Header title="BURPEE" />
          <Modal.Body>
            <Image
              source={{
                uri: "https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/burpee.gif",
              }}
              style={styles.img}
            />
            <Text> 3 séries de 15 repitições cada!</Text>
          </Modal.Body>
          <Modal.Footer>
            <ButtonOut title="Acabei!" onPress={handleModalThree} />
          </Modal.Footer>
        </Modal.Container>
      </Modal>

      <Modal isVisible={isModalVisibleFour}>
        <Modal.Container>
          <Modal.Header title="AFUNDO" />
          <Modal.Body>
            <Image
              source={{
                uri: "https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/pernas-afundo-tradicional-sem-pesos-1.gif",
              }}
              style={styles.img}
            />
            <Text> 3 séries de 15 repitições cada!</Text>
          </Modal.Body>
          <Modal.Footer>
            <ButtonOut title="Acabei!" onPress={handleModalFour} />
          </Modal.Footer>
        </Modal.Container>
      </Modal>

      <Modal isVisible={isModalVisibleFive}>
        <Modal.Container>
          <Modal.Header title="PRANCHA" />
          <Modal.Body>
            <Image
              source={{
                uri: "https://www.mundoboaforma.com.br/wp-content/uploads/2020/11/01431301-Bridge-straight-arm_Waist_360_logo.gif",
              }}
              style={styles.img}
            />
            <Text> 3 séries de 40 segundos cada!</Text>
          </Modal.Body>
          <Modal.Footer>
            <ButtonOut title="Acabei!" onPress={handleModalFive} />
          </Modal.Footer>
        </Modal.Container>
      </Modal>
    </SafeAreaView>
  );
}
