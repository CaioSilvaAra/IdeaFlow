import React, { forwardRef, Fragment, LegacyRef} from "react";

import { View, Text, TextInput, TextInputProps, TouchableOpacity } from 'react-native'
import { styles } from "./style";
import {MaterialIcons, FontAwesome, Octicons} from '@expo/vector-icons'


type IconComponent = React.ComponentType<React.ComponentProps<typeof MaterialIcons>> |
                     React.ComponentType<React.ComponentProps<typeof FontAwesome>> |
                     React.ComponentType<React.ComponentProps<typeof Octicons>>

type Props = TextInputProps & {
    IconLeft?: IconComponent,
    IconRigth?: IconComponent,
    iconLeftName?: string,
    iconRigthName?: string,
    title?: string,
    onIconLeftPress?: () => void,
    onIconRigthPress?: () => void,

}


export const Find = forwardRef((Props:Props, ref: LegacyRef<TextInput> | null)=>{
    const {IconLeft,
            IconRigth,
            iconLeftName,
            iconRigthName,
            title,
            onIconLeftPress,
            onIconRigthPress,
            ...rest} = Props
    
    const calulateSizeWidth = ()=>{
        if(IconLeft && IconRigth){
            return '85%'
        }else if(IconLeft || IconRigth){
            return '85%'
        }else{
            return '85%'
        }
    }

    return(
        
        <Fragment>
            {title&&<Text style={styles.text}>{title}</Text>}
            <View style={styles.boxInput}>
                {IconLeft && iconLeftName &&(
                    <TouchableOpacity onPress={onIconLeftPress}>
                        <IconLeft name={iconLeftName as any} size={25} color={'gray'} style={styles.icon}/>
                    </TouchableOpacity>

                )}
                
                <TextInput
                    style={[
                        styles.input,{width:calulateSizeWidth()}
                    ]}

                    {...rest}
                />
                {IconRigth && iconRigthName &&(
                    <TouchableOpacity onPress={onIconRigthPress}>
                        <IconRigth name={iconRigthName as any} size={25} color={'gray'} style={styles.icon}/>
                    </TouchableOpacity>

                )}
                
            </View>
        </Fragment>
        
    )

})


