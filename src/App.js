import Center from './Layout/Center';
import Header from './Layout/Header';
import Left from './Layout/Left';
import Right from './Layout/Right';
import style from './App.less'
function App() {
  return (
    <div className={style.main}>
      <Header />
      <div className={style.content}>
        <Left />
        <Center />
        <Right />
      </div>
    </div>
  );
}

export default App;
