import React, { useState, useEffect } from "react";
import { Image, StyleSheet } from "react-native";

function MonsterPart(props) {
  const { imgSrc } = props;

  return <Image style={styles.img} source={imgSrc} />;
}

const styles = StyleSheet.create({
  img: {
    height: 150,
    resizeMode: "contain"
  }
});

export default MonsterPart;
