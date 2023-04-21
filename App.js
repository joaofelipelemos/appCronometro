import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function App() {
  const nome = "João Felipe Lemos";

  return (
    <View style={styles.container}>
      <Image
        source={require("./src/crono.png")}
        style={{ width: 350, height: 425 }}
      />

      <Text style={styles.timer}>00:00:00</Text>

      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnTexto}>Começar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnTexto}>Limpar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.areaUltima}>
        <Text style={styles.textoCorrida}>Ultimo tempo 00:05:11</Text>
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
