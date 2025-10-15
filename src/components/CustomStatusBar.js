import { StatusBar, View } from 'react-native';

function CustomStatusbar({color}) {
    return (
        <View style={{
            paddingTop: StatusBar.currentHeight, 
            backgroundColor: color 
        }}>
            <StatusBar
                translucent={true}
                backgroundColor={color }
                barStyle={'dark-content'}
                animated={true}
            />
        </View>
    );
}
export default CustomStatusbar;