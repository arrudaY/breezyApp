import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex:               1,
        backgroundColor:    '#EEEAE3',
        paddingHorizontal:  16,
    },
    header: {
    },
    title: {
        color:              '#3C402B',
        fontSize:           80,
        fontFamily:         'YoungSerif-Regular',
        marginTop:          120,
        alignSelf:          'center',
    },
    input: {
        flex:               1,
        backgroundColor:    '#FFF',
        color:              '#3C402B',
        padding:            16,
        paddingLeft:        24,
        fontSize:           16,
    },
    buttonAdd: {
        width:              56,
        backgroundColor:   '#FFF',
        alignItems:         'center',
        justifyContent:     'center',
        paddingRight:       4,
    },
    form: {
        width:              '100%',
        flexDirection:      'row',
        borderRadius:       30,
        overflow:           'hidden',
        shadowColor:        "#3C402B",
        shadowOffset: {
            width:          0,
            height:         1,
        },
        shadowOpacity:      0.18,
        shadowRadius:       1.00,
        elevation:          1,
    },
    tasksInfoContainer: {
        flexDirection:      'row',
        justifyContent:     'space-between',
        marginTop:          32,
        paddingBottom:      10,
        borderBottomWidth:  0.4,
    },
    tasksInfo: {
        flexDirection:      'row',
        gap:                8,
        alignItems:         'center',
        justifyContent:     'center',
    },
    buttonDoneAll: {
        width:              32,
        height:             32,
        borderRadius:       8,
        alignItems:         'center',
        justifyContent:     'center',
    },
    infoText: {
        fontSize:           14,
        fontWeight:         'bold',
        color:              '#3C402B',
    },
    infoCounter: {
        paddingHorizontal:  8,
        paddingVertical:    2,
        justifyContent:     'center',
        alignItems:         'center',
        borderRadius:       15,
        backgroundColor:    '#5CD6A0',
        color:              '#3C402B',
        fontSize:           14,
        fontWeight:         'bold',
    },
});