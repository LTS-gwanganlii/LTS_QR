window.onload = function () {
  const userLanguage = navigator.language || navigator.languages[0];
  let request, instaRequest1, instaRequest2, hashtag;
  if (userLanguage === "ko-KR") {
    request = "사진 1장 리뷰 2줄 부탁드립니다!";
    instaRequest1 = "스토리로 작성해주시고 매장을 태그 해 주세요!";
    instaRequest2 =
      "해시태그를 자동으로 복사하였습니다! 스토리 작성후 붙혀넣기 해주세요";
    hashtag =
      "#부산데이트코스 #lasertagsports #레이저태그스포츠 #레이저태그스포츠광안점 #부산서바이벌 #광안리데이트 #레이저서바이벌 #광안리놀거리 #광안리핫플 #부산핫플 #부산여행 #부산가족여행 #부산데이트 #광안리데이트코스 #부산여행코스 #부산맛집 #부산카페 #광안리맛집 #광안리카페 #광안리놀거리 #광안리놀만한곳";
  } else if (userLanguage === "en-US") {
    request = "Please take a photo and write a 2-sentence review!";
    instaRequest1 = "Please write a story and tag the store!";
    instaRequest2 =
      "automatically copied the hashtag! Please paste it after writing the story";
    hashtag =
      "#BusanTourism #BusanVacation #BusanAttractions #GwangalliBeach #Gwangalli #GwangalliDate #LaserTagBusan #LaserTagGwangalli #BusanNightlife #BusanPlayground #ThingsToDoInBusan #BusanActivities #BusanRestaurants #GwangalliRestaurants #BusanFamilyTravel #GwangalliCafe #GwangalliTravel #VisitGwangalli #BusanBeach #TravelToBusan #KoreaTravel #SouthKoreaTravel #ExploreBusan #KoreanVacation #BusanHoliday";
  }
  const naver = document.querySelector(".naver");
  const google = document.querySelector(".google");
  const insta = document.querySelector(".insta");
  naver.addEventListener("click", () => {
    alert(request);
    window.location.href =
      "https://m.place.naver.com/place/1149712929/review/visitor?entry=pll&reviewSort=recent";
  });

  google.addEventListener("click", () => {
    alert(request);
    window.location.href = "https://g.page/r/CXfAXMEY8nB9EAI/review";
  });

  insta.addEventListener("click", () => {
    alert(instaRequest1);
    alert(request);
    alert(instaRequest2);

    navigator.clipboard.writeText(hashtag);
    window.location.href = "instagram://camera";
  });
};
