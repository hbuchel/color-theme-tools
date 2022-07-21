import '@aws-amplify/ui-react/styles.css';
import './App.css'
import { Colors } from '@/components/Colors';
import { Box } from '@/components/Box';

function App() {
  return (
    <Box size="xxxl">
      <Colors colorGroup="red">test</Colors>
    </Box>
    
  )
}

export default App
