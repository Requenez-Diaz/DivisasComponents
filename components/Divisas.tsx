import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ButtonCalculate from "./ButtonCalculate";
import Textos from "./Textos";
import Inputs from "./Inputs";

const Divisas = () => {
  const [origen, setOrigen] = useState<string>("");
  const [destino, setDestino] = useState<string>("");
  const [convertir, setConvertir] = useState<number>(0);
  const [result, setResult] = useState<number>(0);
  const [error, setError] = useState<boolean>(false);

  const TipoCambioDivisas = (texto: string) => {
    setOrigen(texto);
  };
  const TipoCambioDestino = (texto: string) => {
    setDestino(texto);
  };
  const TipoCambioConvert = (texto: string) => {
    const number = parseFloat(texto);
    if (isNaN(number)) {
      setError(true);
    } else {
      setError(false);
    }
    setConvertir(number);
  };
  const tipoCambio = () => {
    if (origen === 'dolar' && destino === 'cordoba') {
      const result = convertir * 35.7;
      setResult(result)
    }
    else if (origen === 'dolar' && destino === 'euro') {
        const result = convertir * 0.80
        setResult(result)
    } else if (origen === 'euro' && destino === 'cordoba') {
        const result = convertir * 40
        setResult(result)
    } else if (origen === 'euro' && destino === 'dolar') {
        const result = convertir * 1.20
        setResult(result)
    } else if (origen === 'cordoba' && destino === 'dolar') {
        const result = convertir * 0.020
        setResult(result)
    } else if (origen === 'cordoba' && destino === 'euro') {
        const result = convertir * 0.025
        setResult(result)
    } else {
        alert(
            'Error, Argumentos invalidos'
        )
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
      <Textos text="Cantidad" type="normal" />
      <Inputs
        defaultValue={convertir.toString()}
        errorMessage="solo se admiten numeros"
        onChangeText={TipoCambioConvert}
        handleError={error}
      />

      <ButtonCalculate
        color="Green"
        text="Convertir"
        onPress={tipoCambio}
        disabled={error}
      />

      <Textos text="Result:" type="normal" />
      <Text style={styles.result}>{result.toString()}</Text>
    </View>
  );
};

export default Divisas;

const styles = StyleSheet.create({
  result: {
    fontSize: 40,
    color: "lightslategrey",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
