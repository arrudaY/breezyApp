import { TouchableOpacity, View, Text } from "react-native";
import { styles } from "./styles";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { TaskProps } from "../../screens/Home";

type TasksProps = {
    task:       TaskProps;
    onCheck:    () => void;
    onRemove:   () => void;
}

export function Task({ task, onCheck, onRemove } : TasksProps) {

    return (
        <View style={styles.container}>

            <TouchableOpacity
                style   = {styles.buttonCheck}
                onPress = {onCheck}
            >
                <MaterialIcons
                    name    = { task.done ? 'check' : 'radio-button-unchecked'}
                    size    = {28}
                    color   = {task.done ? '#5CD6A0' :'#3C402B'}
                />
            </TouchableOpacity>

            <Text style={[styles.content, task.done && styles.doneTask]}>
                { task.content }
            </Text>

            <TouchableOpacity style={styles.buttonTrash} onPress={onRemove}>
                <MaterialIcons
                    name    = 'delete-outline'
                    size    = {24}
                    color   = {'#3C402B'}
                />
            </TouchableOpacity>
        </View>
    );
}