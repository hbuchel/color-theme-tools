import { useState, useEffect, useRef } from 'react';
import { View } from '@aws-amplify/ui-react';
import { type ViewProps } from '@aws-amplify/ui-react';
import { HslColorPicker } from "react-colorful";
import { type HslColor } from "react-colorful";
import Color from 'color';
import { Popover } from '@/components/Popover';
import { Box } from '@/components/Box';


interface SwatchProps extends ViewProps {
  initialColor: HslColor;
  size?: 'small' | 'large';
}

export const Swatch = ({initialColor, size = "small", ...rest}: SwatchProps) => {

  /* todo: fix this type, can't figure out what it should be */
  const initialColorHSL: (HslColor | any) = Color(initialColor).hsl().object();
  const [color, setColor] = useState(initialColorHSL);
  const colorPicker = useRef<HTMLDialogElement>(null);
  // console.log(colorPicker);
  // function openColorPicker() {
  //   colorPicker?.current?.show();
  // }

  // function closeColorPicker() {
  //   colorPicker?.current?.;
  // }

  const swatchEl = <View 
    as="button"
    // onClick={openColorPicker}
    className={`swatch swatch--${size}`} 
    style={{'--background': Color(color).string()} as React.CSSProperties} 
    {...rest}>
  </View>

  return (
    <>
      
      <Popover triggerEl={swatchEl} close={colorPicker?.current?.close()} ref={colorPicker} title="Select a color">
        <HslColorPicker className="picker" color={color} onChange={setColor} />
      </Popover>
      
    </>
  )
}