import {TouchableOpacity, Text} from "react-native"
import styles from "util/estilos";


export function Btn () {
    return (
    <>
        <TouchableOpacity styles={styles.btnParaContador} onPress={aumentarCont}>
            <Text styles={styles.btnParaContador}>Boton</Text>
        </TouchableOpacity>
    
    
    </>
    )
}


