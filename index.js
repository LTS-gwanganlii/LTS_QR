const naver = document.querySelector(".naver");
const google = document.querySelector(".google");
const insta = document.querySelector(".insta");
naver.addEventListener("click",()=>{
    alert("사진 1장 리뷰 2줄 부탁드립니다!");
    window.location.href = "https://m.place.naver.com/place/1149712929/review/visitor?entry=pll&reviewSort=recent";
});

google.addEventListener("click",()=>{
    alert("사진 1장 리뷰 2줄 부탁드립니다!");
    window.location.href = "https://g.page/r/CXfAXMEY8nB9EAI/review";
})

insta.addEventListener("click",()=>{
    alert("스토리로 작성해주시고 매장을 태그 해 주세요!");
    alert("사진1장 리뷰 2줄 부탁드립니다!");
    alert("해시태그를 자동으로 복사하였습니다! 스토리 작성후 붙혀넣기 해주세요");
    const textToCopy = "#부산데이트코스 #lasertagsports #레이저태그스포츠 #레이저태그스포츠광안점 #부산서바이벌 #광안리데이트 #레이저서바이벌 #광안리놀거리 #광안리핫플 #부산핫플 #부산여행 #부산가족여행 #부산데이트 #광안리데이트코스 #부산여행코스 #부산맛집 #부산카페 #광안리맛집 #광안리카페 #광안리놀거리 #광안리놀만한곳";
    navigator.clipboard.writeText(textToCopy)
    window.location.href = "instagram://camera";
})