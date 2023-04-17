import logo from './logo.svg';
import './App.css';
import MyHeader from './components/UI/MyHeader';
import Mealitem from './components/Meals/Mealitem';
import Modal from './components/UI/Modal';
import Cartprovioder from './store/CartContext';
function App() {
  return (
   <Cartprovioder>
    <MyHeader></MyHeader>
    <Mealitem></Mealitem>
   </Cartprovioder>
  );
}

export default App;
