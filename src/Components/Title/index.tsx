import { Text } from 'react-native';
import styles from './styles';

type TitleProps = {
    text: string
}

export default function Title(props: TitleProps){

    return (
        <Text style={styles.title}>
            {props.text}
        </Text>
    )
}