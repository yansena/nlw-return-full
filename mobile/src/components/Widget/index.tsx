import React, { useRef } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { ChatTeardropDots } from 'phosphor-react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'

import { styles } from './styles';
import { theme } from '../../theme';
import { Options } from '../Options';
import { Form } from '../Form';

import { feedbackTypes } from '../../utils/feedbackTypes';
import {Success} from "../Success";

export type FeedbackType = keyof typeof feedbackTypes;

function Widget() {

  const bottomSheatRef = useRef<BottomSheet>(null);

  function handleOpen(){
    bottomSheatRef.current?.expand();
  }

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={handleOpen}>
        <ChatTeardropDots 
          size={24}
          weight="bold"
          color={theme.colors.text_on_brand_color}
        />
      </TouchableOpacity>
      <BottomSheet 
          ref={bottomSheatRef}
          snapPoints={[1, 280]}
          backgroundStyle={styles.modal}
          handleIndicatorStyle={styles.indicator}
      >
        <Success />
      </BottomSheet>
    </>
  );
}

export default gestureHandlerRootHOC(Widget);