import { Alert, FlatList, ToastAndroid, View, Text, Image } from "react-native";
import { TaskProps } from "../../screens/Home";
import { Task } from "../Task";
import { styles } from "./styles";


type TaskListProps = {
    tasks: TaskProps[];
    setTasks: (task: TaskProps[]) => void;
}

export function TaskList({tasks, setTasks} : TaskListProps) {

    function handleToggleDone(item:TaskProps) {

        const tasksDone = [...tasks];
        const index = tasks.findIndex((taskItem: TaskProps) => taskItem.content === item?.content);
        
        tasksDone[index] = {...item, done: !item.done}
        
        setTasks(sortTasks(tasksDone));
    }
        
    function handleTaskDelete(item:TaskProps) {
        
        Alert.alert("Remover", `Remover tarefa?`, [
            {
                text    : "Sim",
                onPress : () => {
                    const updatedTaskList = tasks.filter(itemTask => itemTask.content !== item.content);
                    setTasks(updatedTaskList);
                    ToastAndroid.show("Tarefa removida.", ToastAndroid.SHORT);
                }
            },
            {
                text    : "Não",
                style   : "cancel",
            }
        ])
    }

    function sortTasks(sortedList: TaskProps[]) {
        sortedList.sort((a) => {
            return a.done ? 1 : -1;
        });
        return sortedList;
    }

    return (
        <>
            <FlatList
                data            = {tasks}
                keyExtractor    = { item => item?.content}
                renderItem      = {({ item }) =>
                    <Task
                        task        = {item}
                        onCheck     = {() => handleToggleDone(item)}
                        onRemove    = {() => handleTaskDelete(item)}
                    />
                }
                showsVerticalScrollIndicator = { false }
                ListEmptyComponent = {() => (
                    <View style={styles.listEmptyComponent}>
                        <Image
                            style={styles.logo}
                            source={require('../../assets/aly.png')}
                        />
                        <Text style={styles.emptyMessageTitle}>
                            Você ainda não tem tarefas criadas
                        </Text>
                        <Text style={styles.emptyMessageSubtitle}>
                            Crie tarefa e organize seus itens a fazer
                        </Text>
                    </View>
                )}
            />
        </>
    );
}