
const API_KEY = '' //여기선 그냥 API KEY없이 테스트해봄
const PAGE_SIZE = 7; //기본은 10이지만 7로 바꿈 

let newsList = [];
const getNews = async () => {
    const url = new URL(`https://noona-times-be-5ca9402f90d9.herokuapp.com/top-headlines?country=kr&category=entertainment&pageSize=${PAGE_SIZE}`);
    console.log("uuu", url);

    //url호출 - fetch함수
    const response = await fetch(url);
    console.log("rrr", response);
    const data = await response.json();
    newsList = data.articles;
    render();
    console.log("ddd", data);
    console.log("news", newsList);


}

getNews();


// 배열함수 이용 => MAP 사용해서 결과물 새 array return
const render = () => {
    const newsHTML = newsList.map(news => {

        //1.200글자 초과일때 ... 추가  & 2.내용이 없을 때 
        if (news.description == null || news.description === "") {
            news.description = "내용없음";
        } else if (news.description.length > 200) {
            news.description = news.description.slice(0, 200) + "...";
        }


        // news.description == null || news.description == ""
        //     ? "내용없음"
        //     : news.description.length >= 200
        //         ? news.description.slice(0, 201) + "..."
        //         : news.description


        //4.출처가 없다면 - no source
        news.source.name = news.source.name ? news.source.name : 'no source';

        //3. 사진이 없는 경우 
        // this.onerror=null; onerror 이벤트를 한 번만 실행하고, 
        // 이후에는 더 이상 실행되지 않도록 막음.
        //소스 변경 & 크기 스타일 적용

        //5. 몇시간전인지 확인하기
        return `<div class="row news">
            <div class="col-lg-4">
               <img class="news-img-size" src="${news.urlToImage}"
                onerror="this.onerror=null; 
                this.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqEWgS0uxxEYJ0PsOb2OgwyWvC0Gjp8NUdPw&usqp=CAU'; 
                this.style.maxHeight='250px';  this.style.width='100%'; this.style.objectFit='cover';">

            </div>
            <div class="col-lg-8">
                <h2>${news.title}</h2>
                <p> ${news.description}
                </p>
                <div>
                      ${news.source.name}* ${moment(news.publishedAt).fromNow()}
                </div>
            </div>
        </div>`}).join('');

    document.getElementById('news-board').innerHTML = newsHTML;
};



//4번-5번번 다른방법 html에 직접 표시
// <div>${news.rights || "no source"}  ${moment(
//     news.published_date
//  ).fromNow()}</div>






// 햄버거 버튼관련
// 햄버거 버튼 누르면  사이드 메뉴가 보이게 width조정
// let openBtn = document.querySelector(".openbtn");
// openBtn.addEventListener("click",() => 
//     document.getElementById("mySidenav").style.width = "250px" );
// // x 버튼 (&times;) 누르면  사이드 메뉴가 보이게 width조정
// let closeBtn = document.querySelector(".closebtn");
// closeBtn.addEventListener("click",() => 
//     document.getElementById("mySidenav").style.width = "0px" );


// onclick="openNav()" 을 html에 했을 경우. 
const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
};

const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
};


// 서치박스 숨김 & 보이기 관련
const openSearchBox = () => {
    let inputArea = document.querySelector("#input-area"); // ID 선택 시 # 필요
    if (inputArea.style.display === "none" || inputArea.style.display === "") {
        inputArea.style.display = "inline-block"; // 검색창 보이게 하기
        document.querySelector("#search-input").focus(); // 검색창이 열릴 때 자동으로 포커스 주기
    } else {
        inputArea.style.display = "none"; // 검색창 숨기기
    }
};

// const openSearchBox = () => {
//     let inputArea = document.getElementById("input-area");
//     if (inputArea.style.display === "inline") {
//       inputArea.style.display = "none";
//     } else {
//       inputArea.style.display = "inline";
//     }
//   };



