import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useState } from "react";

let timer = null;
let ss = 0;
let mm = 0;
let hh = 0;

export default function App() {
  const nome = "João Felipe Lemos";
  const [numero, setNumero] = useState(0);
  const [textoVai, setTextoVai] = useState("Começar");
  const [ultimoTempo, setUltimoTempo] = useState(null);

  function start() {
    if (timer !== null) {
      clearInterval(timer);
      timer = null;
      setTextoVai("Começar");
    } else {
      timer = setInterval(() => {
        ss++;

        if (ss == 60) {
          ss = 0;
          mm++;
        }
        if (mm == 60) {
          mm = 0;
          hh++;
        }
        let format =
          (hh < 10 ? "0" + hh : hh) +
          ":" +
          (mm < 10 ? "0" + mm : mm) +
          ":" +
          (ss < 10 ? "0" + ss : ss);
        setNumero(format);
      }, 1000);
    }
  }

  function reset() {}

  return (
    <View style={styles.container}>
      <Image
        source={require("./src/crono.png")}
        style={{ width: 350, height: 425 }}
      />

      <Text style={styles.timer}>{numero}</Text>

      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btn} onPress={start}>
          <Text style={styles.btnTexto}>{textoVai}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={reset}>
          <Text style={styles.btnTexto}>Limpar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.areaUltima}>
        <Text style={styles.textoCorrida}>
          {ultimoTempo ? "Ultimo tempo: " + ultimoTempo : ""}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00aeef",
    alignItems: "center",
    justifyContent: "center",
  },
  timer: {
    marginTop: -160,
    fontSize: 45,
    fontWeight: "bold",
    color: "#fff",
  },
  btnArea: {
    flexDirection: "row",
    marginTop: 130,
    height: 40,
  },
  btn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 40,
    margin: 15,
    borderRadius: 9,
  },
  btnTexto: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#00aeef",
  },
  areaUltima: {
    marginTop: 40,
  },
  textoCorrida: {
    fontSize: 25,
    color: "#fff",
    fontStyle: "italic",
  },
});
