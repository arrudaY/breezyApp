import { View, Text, TextInput, TouchableOpacity, Alert, Keyboard } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { TaskList } from "../../components/TaskList";

export type TaskProps = {
    content : string;
    done    : boolean;
}

export function Home() {

    const [tasks, setTasks] = useState<TaskProps[]>([]);
    const [taskContent, setTaskContent] = useState('');

    const createdTasksCount = tasks.length;
    const doneTasksCount = tasks.filter (
        (tasks) => tasks.done ).length;
    

    function handleTaskAdd() {
        
        if (!taskContent) {
            return;
        }

        const data = {
            'content'   : taskContent,
            'done'      : false,
        }

        setTasks((prevState) => [...prevState, data]);
        setTaskContent('');
        Keyboard.dismiss();
    }

    function clearTasks() {
        Alert.alert('Limpar', 'Limpar lista de tarefas?', [
            {
                text: "Sim",
                onPress: () => setTasks([]),
            },
            {
                text:"Não",
                style: "cancel"
            }
        ]);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>
                    breezy
                </Text>

                <View style={styles.form}>
                    <TextInput
                        style                   = {styles.input}
                        placeholder             = 'Adicione uma nova tarefa'
                        placeholderTextColor    = {'#6B6B6B'}
                        value                   = {taskContent}
                        onChangeText            = {setTaskContent}
                        onBlur                  = {() => {
                            if (taskContent !== '') {
                                handleTaskAdd()
                            }
                        }}
                    />
                <TouchableOpacity
                    style   = {styles.buttonAdd}
                    onPress = {handleTaskAdd}
                >
                    <MaterialIcons
                        name    = 'add-task'
                        size    = {24}
                        color   = {'#3C402B'}                     
                    />
                </TouchableOpacity>
                </View>

                <View style={styles.tasksInfoContainer}>
                    
                    <TouchableOpacity style={styles.buttonDoneAll} onPress={clearTasks}>
                        <MaterialIcons
                            name    = "done-all"
                            size    = {24}
                            color   = {'#3C402B'}
                        />
                    </TouchableOpacity>
                        
                    <View style={styles.tasksInfo}>
                        
                        <Text style={styles.infoText}>
                            Concluídas
                        </Text>

                        <Text style={styles.infoCounter}>
                            {doneTasksCount}/{createdTasksCount}
                        </Text>
                        
                    </View>
                </View>
            </View>

            <TaskList tasks={tasks} setTasks={setTasks}/>
        
        </View>
    )
}