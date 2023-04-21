/* eslint-disable */
import './App.css';
import React, {useState} from 'react';

function App() {

  let [title,setTitle] = useState(['남자코트 추천','강남우동 맛집','영화제 즐기기']);
  let [like, setLike] = useState([0,0,0]);
  let [arrtitle, setArrtitle] = useState(0);

  let posts = '강남고기 맛집';
  let [modal, setModal] = useState(false);
  
  function titleupd(){
    var newtitle = [...title];
    var txt='';
    if(newtitle[0].indexOf('남자')>-1){
      txt='여자';
    }else{
      txt='남자';
    }
    newtitle[0] = txt+"코트추천";
    setTitle(newtitle);
  }

  function titlearray(){
    var titlearr = [...title];
    titlearr.sort();
    setTitle(titlearr);
  }

  function likeup(){
    setLike(like+1);
  }

  
  return (
 
    <div className="App">
     <div className='black-nav'>
      <div>개발 블로그</div>
     </div>

    <button onClick={titleupd}>button</button>

     {/* <div className='list'>
      <h3 id='title1'>{title[0]}<span onClick={likeup}>❤️</span>{like}</h3>
      <p>4월20일 발행</p>
      <hr/>
    </div>

    <div className='list'>
      <h3>{title[1]}</h3>
      <p>4월24일 발행</p>
      <hr/>
    </div> */}
      
      {
        title.map(function(a, i){
          return (
          <div className='list'>
          <h3 onClick={() => {
            setModal(!modal)
          }}>{title[i]}<span onClick={()=>{
            let likey = [...like];
            likey[i] = likey[i]+1;
            setLike(likey)
          }}>❤️</span>{like[i]}</h3>
          <p>4월29일 발행</p>
          <hr/>
        </div>)
        })
      }
 {
      modal == true ? <Modal title={title} titleupd={titleupd} arrtitle={arrtitle}/> : null
      }
    </div>
  );
    function Modal(props){
      return(
        <div className='modal'>
        <h2>{props.title[props.arrtitle]}</h2>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={props.titleupd}>update</button>
      </div>
      )
    }
  
}

export default App;
