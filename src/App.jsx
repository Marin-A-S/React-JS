import { MessageClass } from './components-class/Message';
import './index.css'

export const App = () => {
  return (
    <div>
      <MessageClass messageList={['App_props_1 ', 'App_props_2 ', 'App_props_3 ']} />
    </div>
  );
}