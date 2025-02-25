import { MyIntro } from "./components/MyIntro";
import { MyName } from "./components/MyName";
import { MyMbti } from "./components/MyMbti";
import { LikeImg } from "./components/LikeImg";


function App() {
  return (
    <div style={{ 
      backgroundColor: '#e9e9e9', 
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "center",
      paddingLeft: "30px",
      gap: "20px"
    }}>
      <MyIntro intro="안녕하세요! 저는 개발을 배우고 있는 중입니다."/>
      <MyName name="이나경 입니다!" />
      <MyMbti mbti="제 MBTI는 ISFP" />
      <LikeImg imgUrl="https://img.animalplanet.co.kr/news/2020/07/02/700/phwu2tzju026fa9rl5g3.jpg"/>
    </div>
  );
}

export default App;
