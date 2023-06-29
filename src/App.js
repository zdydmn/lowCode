import Center from './Layout/Center';
import Header from './Layout/Header';
import Left from './Layout/Left';
import Right from './Layout/Right';
import style from './App.less'
import { CanvasContext } from "./Context";
import { useCanvas } from './store/canvas';

function App() {
  const canvas = useCanvas()
  console.log(canvas.getCanvas(), '<--');
  return (
    <div className={style.main}>
      <CanvasContext.Provider value={canvas}>
        <Header />
        <div className={style.content}>
          <Left />
          <Center />
          <Right />
        </div>
      </CanvasContext.Provider>
    </div>
  );
}

export default App;
