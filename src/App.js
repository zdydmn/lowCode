import Center from './Layout/Center';
import Header from './Layout/Header';
import Left from './Layout/Left';
import Right from './Layout/Right';
import { CanvasContext } from "./Context";
import { useCanvas } from './store/hooks';
import { useReducer, useEffect } from 'react';
import style from './App.less'

function App() {
  const canvas = useCanvas()
  const [, forceUpdata] = useReducer((x) => x + 1, 0)
  useEffect(() => {
    const unSubscribe = canvas.subscribe(forceUpdata)
    return () => {
      unSubscribe()
    }
  }, [canvas])
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
