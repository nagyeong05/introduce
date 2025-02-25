export const LikeImg = ({ imgUrl }) => {
    return (
        <div>
            <h2>MY LikeImg</h2>
            <img src={imgUrl} alt="좋아하는 이미지" style={{ width: "300px" }} />
        </div>
    );
};