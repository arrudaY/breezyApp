import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width:              '100%',
        flexDirection:      'row',
        flexWrap:           'wrap',
        gap:                16,
        paddingVertical:    20,
        borderBottomWidth:  0.4,
        alignItems:         'center',
        justifyContent:     'center',
       
    },
    buttonCheck: {
        width:              32,
        height:             32,
        borderRadius:       8,
        alignItems:         'center',
        justifyContent:     'center',
    },
    content: {
        flex:               1,
        fontSize:           16,
        lineHeight:         19.6,
    },
    doneTask: {
        textDecorationLine: 'line-through',
    },
    buttonTrash: {
        height:             32,
        width:              32,
        backgroundColor:    'transparent',
        alignItems:         'center',
        justifyContent:     'center',
        borderRadius:       8,
    },
})