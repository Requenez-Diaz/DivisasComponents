import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ButtonCalculate from "./ButtonCalculate";
import Textos from "./Textos";
import Inputs from "./Inputs";

const Divisas = () => {
  const [origen, setOrigen] = useState<string>("");
  const [destino, setDestino] = useState<string>("");
  const [cambio, setCambio] = useState<number>(0);
  const [convertir, setConvertir] = useState<number>(0);
  const [result, setResult] = useState<number>(0);
  const [error, setError] = useState<boolean>(false);

  const TipoCambioDivisas = (texto: string) => {
    setOrigen(texto);
  };
  const TipoCambioDestino = (texto: string) => {
    setDestino(texto);
  };
  const TasaCambio = (texto: string) => {
    const number = parseFloat(texto);
    if (isNaN(number)) {
      setError(true);
    } else {
      setError(false);
    }
  };
  const MontoDinero = (texto: string) => {
    const number = parseFloat(texto);
    if (isNaN(number)) {
      setError(true);
    } else {
      setError(false);
    }
    setConvertir(number);
  };
  const tipoCambio = () => {
    if (origen === "USD" && destino === "NIO") {
      const result = convertir * 35.8;  
      setResult(result);
    } else if (origen === "USD" && destino === "EUR") {
      const result = convertir * 0.8;
      setResult(result);
    } else if (origen === "EUR" && destino === "NIO") {
      const result = convertir * 35.8;
      setResult(result);
    } else if (origen === "EUR" && destino === "USD") {
      const result = convertir * 0.99;
      setResult(result);
    } else if (origen === "NIO" && destino === "USD") {
      const result = convertir * 0.027;
      setResult(result);
    } else if (origen === "NIO" && destino === "EUR") {
      const result = convertir * 0.027;
      setResult(result);
    } else if (origen === "CRC" && destino === "NIO") {
      const result = convertir * 50;
      setResult(result);
    } else if (origen === "NIO" && destino === "CRC") {
      const result = convertir * 48;
      setResult(result);
    } else {
      alert("Error, Argumentos invalidos");
    }
  };
  return (
    <View>
      <Textos text="Origen" type="normal" />
      <Inputs
        defaultValue={origen}
        errorMessage="Admitido solo moneda"
        onChangeText={setOrigen}
      />
      <Textos text="Destino" type="normal" />
      <Inputs
        defaultValue={destino}
        errorMessage="Solo se admite clave de la moneda"
        onChangeText={setDestino}
      />
      <Textos text="Tasa de Cambio" type="normal" />
      <Inputs
        defaultValue={cambio.toString()}
        errorMessage="Ingresa la tasa de Cambio de la moneda a cambiar"
        onChangeText={TasaCambio}
        handleError={error}
      />
      <Textos text="Cantidad" type="normal" />
      <Inputs
        defaultValue={convertir.toString()}
        errorMessage="solo se admiten numeros"
        onChangeText={MontoDinero}
        handleError={error}
      />

      <ButtonCalculate
        color="Green"
        text="Convertir"
        onPress={tipoCambio}
        disabled={error}
      />
      <Text style={styles.result}>{result.toString()}</Text>
    </View>
  );
};

export default Divisas;

const styles = StyleSheet.create({
  result: {
    fontSize: 40,
    color: "green",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    textAlign: "center"
  },
  container: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
});
