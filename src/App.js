import logo from './logo.svg';
import './App.css';
import PersonCard from  './components/PersonCard';

function App() {
  return (
    <div id='person'>
      <PersonCard  firstName={"Jane"} lastName={ "Doe" } age = { 45 } hairColor = { "brown" }/>
      <PersonCard  firstName={"John"} lastName={ "Smith" } age = { 12 } hairColor = { "black" }/>
      <PersonCard  firstName={"Millard"} lastName={ "Fillmore "} age = { 15 } hairColor = { "green" }/>
      <PersonCard  firstName={"Maria"} lastName={ "Williams" } age = { 32 } hairColor = { "blue" }/>
      </div>
  );
}

export default App;
