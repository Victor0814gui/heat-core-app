import {Text} from 'react-native';
import {Routes} from './routes';
import {View} from 'react-native';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
      }}
      onTouchMove={e => console.log(e)}
      onPointerMove={e => console.log(e)}
      onPointerUp={e => console.log(e)}
      onPointerLeave={e => console.log(e)}>
      <Routes />
    </View>
  );
}
