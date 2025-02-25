import { MyIntro } from "./components/MyIntro";
import { MyName } from "./components/MyName";
import { MyMbti } from "./components/MyMbti";
import { LikeImg } from "./components/LikeImg";


function App() {

  const containerStyle = {
    backgroundColor: "#e9e9e9",  
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",      
    alignItems: "center",         
    justifyContent: "center",     
    gap: "20px"
  };

  const boxStyle = {
    backgroundColor: "#ffffff",   
    padding: "20px",
    width: "400px",              
    textAlign: "left",            
    borderRadius: "10px",
    boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)"
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <MyIntro intro="안녕하세요! 저는 개발을 배우고 있는 중입니다."/>
      </div>
      <div style={boxStyle}>
        <MyName name="이나경 입니다!" />
      </div>
      <div style={boxStyle}>
        <MyMbti mbti="제 MBTI는 ISFP입니다!" />
      </div>
      <div style={boxStyle}>
        <LikeImg imgUrl="https://img.animalplanet.co.kr/news/2020/07/02/700/phwu2tzju026fa9rl5g3.jpg"/>
      </div>
    </div>
  );
}

export default App;
