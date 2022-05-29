
import './App.css';
import  myImage from './imageInSrc.jpg';
import video from './video.mp4';
function App() {
  return (
    <div >
      <div style={{border: "solid 1px black",maxWidth:"100vw"}}>

        <h1 className="title red">Hajar</h1>

        <br/>

          <img src={myImage}/>

            <br/>

              <img src="/imageInPublic.jpg"/>

      </div>

      <video style={{width:"320" ,height:"240"}} controls>

        <source src={video} type="video/mp4"/>

      </video>
    </div>
  );
}

export default App;
