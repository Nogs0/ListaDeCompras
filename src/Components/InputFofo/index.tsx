import { Text, TextInput, View } from 'react-native';
import styles from './style';
import { validateColumnSchema } from '@nozbe/watermelondb/Schema';

type InputFofoProps = {
    label: string,
    value: string,
    placeholder: string,
    setInput: (value: string) => void;
}

export default function InputFofo(props: InputFofoProps) {

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{props.label}</Text>
            <TextInput
                placeholder={props.placeholder}
                style={styles.input}
                value={props.value}
                onChangeText={(val) => props.setInput(val)}
                keyboardType='numeric'
            />
        </View>
    )
} 