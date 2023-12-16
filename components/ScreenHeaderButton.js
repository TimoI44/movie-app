import React from 'react'
import { TouchableOpacity, Image } from 'react-native'

import styles from '../styles/screenHeaderStyle.style'
import { COLORS } from '../constants'

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Image source={iconUrl} resizeMode='cover' style={styles.buttonImg(dimension)} tintColor={COLORS.accent}/>
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn;