import './App.css';
import Dictionary from './Dictionary';

function App() {
  return (
    <div className='container'>
       <div className='row'>
      <header><img src="https://www.dictionary.shecodes.io/static/media/logo.951ad035.png" alt="shecodeslogo" className="img-fluid shecodeslogo"/></header>
      <div className='col-md-9 dictionary-part '>
<Dictionary defaultWord="friend"/>
</div>
<footer><span><p>This page is coded by <a href="https://fancy-pastelito-ab221e.netlify.app/about.html">Shiva Aboufazel</a> and it's open source on <a href='https://github.com/ShivaAbf/dictionary-project'>github</a> and hosted on <a href='https://benevolent-basbousa-543c21.netlify.app/'>netlify</a></p></span></footer>
</div>
</div>
  );
}

export default App;
