
const API_KEY = '' //여기선 그냥 API KEY없이 테스트해봄
// const PAGE_SIZE = 7; //기본은 10이지만 7로 바꿈 

let newsList = [];
const menus = document.querySelectorAll(".menus button");
const sideMenus = document.querySelectorAll(".side-menu-list button");
console.log("mmm", menus);
console.log("sidemmm", sideMenus);

menus.forEach(menu => menu.addEventListener("click", (event) => getNewsByCategory(event)));

//카테고리로 선택할시 사이드 메뉴는 숨기기
const sideMenuContainer = document.getElementById("mySidenav");
// 버튼 클릭 시 바로 처리하는 함수
function handleSideMenuClick(event) {
    getNewsByCategory(event); // 뉴스 불러오기
    sideMenuContainer.style.width = "0"; // 메뉴 닫기
}

// 버튼들 한 번에 이벤트 등록
document.querySelectorAll("#menu-list button").forEach(button => {
    button.onclick = handleSideMenuClick;
});


let totalResults = 0
let page = 1;
const pageSize = 10; //고정된 부부은 const로 선언
const groupSize = 5; //고정된 부부은 const로 선언


let url = new URL(`https://noona-times-be-5ca9402f90d9.herokuapp.com/top-headlines?country=kr&category=entertainment`);


//error handling
const getData = async () => {


    try {

        //fetch하기전에 parameter 
        url.searchParams.set("page", page); //=> &page=page
        url.searchParams.set("pageSize", pageSize)

        //url호출 - fetch함수
        const response = await fetch(url);
        // console.log("rrr", response);


        const data = await response.json();

        if (response.status === 200) {
            if (data.articles.length === 0) {
                throw new Error("No matches for your search");
            }
            newsList = data.articles;
            totalResults = data.totalResults;
            render();
            // console.log("ddd", data);
            // console.log("news", newsList);
            paginationRender();
        } else {
            throw new Error(data.message)
        }


    } catch (error) {
        // console.log("error", error);
        errorRender(error.message);
    }

}

const getNews = async () => {
    url = new URL(`https://noona-times-be-5ca9402f90d9.herokuapp.com/top-headlines?country=kr&category=entertainment`);
    // console.log("uuu", url);

    await getData();

}



//1.버튼들에게 클릭이벤트 주기 
//2. 카테고리별 뉴스 가져오기
//3. 그 뉴스를 보여주기 

const getNewsByCategory = async (event) => {

    page = 1;
    // 클릭하는 버튼마다 카테고리 선택 &  api에 있듯이 소문자 카테고리로 변환
    const category = event.target.textContent.toLowerCase();
    // console.log("category", category);
    url = new URL(`https://noona-times-be-5ca9402f90d9.herokuapp.com/top-headlines?country=kr&category=${category}`)

    await getData();

};



//버튼 대신 엔터키 누를때도 입력가능.
const searchInput = document.getElementById("search-input");
searchInput.addEventListener("keydown", async (event) => {
    if (event.key === "Enter") {
        await getNewsByKeyword();
    }
});



const getNewsByKeyword = async () => {

    page = 1;

    const keyword = document.getElementById("search-input").value;
    // console.log("keyword", keyword);

    let searchInput = document.querySelector("#search-input");

    if (keyword === "") {
        alert("검색어를 입력해주세요!");
        searchInput.focus();

        // 선택지 추가
        const goToMain = confirm("'OK': 검색어 다시입력\n." +
            "'Cancel': 처음 페이지");

        if (!goToMain) {
            getNews();  // 원래 뉴스 페이지 불러오기
        } else {
            // 선택 안 하면 그냥 현재 페이지에 머무르기 (아무 동작 안 함)
            searchInput.focus();  // 다시 포커스 맞추기 (선택사항)
        }

        return;  // 검색어 없을 때는 여기서 끝내기
    }


    // 검색창 비우기
    searchInput.value = "";

    url = new URL(`https://noona-times-be-5ca9402f90d9.herokuapp.com/top-headlines?country=kr&q=${keyword}`)

    await getData();
}



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



//에러메시지 보여주는 함수 (부트스트랩에서 가져오기 - components: alert)
const errorRender = (errorMessage) => {
    const errorHTML = `<div class="alert alert-danger" role="alert">
        ${errorMessage}
    </div>`;

    document.getElementById('news-board').innerHTML = errorHTML;
}

//4번-5번번 다른방법 html에 직접 표시
// <div>${news.rights || "no source"}  ${moment(
//     news.published_date
//  ).fromNow()}</div>




//페이지네이션
const paginationRender = () => {

    //totalResult,
    //page,
    //pageSize, 
    //groupSize


    //구하는 부분
    //totalPages
    const totalPages = Math.ceil(totalResults / pageSize);
    //pageGroup
    const pageGroup = Math.ceil(page / groupSize);
    //lastPage (지금 보고 있는 그 페이지그룹 안에서의 마지막 페이지라는 의미)
    let lastPage = pageGroup * groupSize;

    //마지막 페이지 그룹이 그룹 사이즈보다 작다? lastPage = totalPages
    if (lastPage > totalPages) {
        lastPage = totalPages;
    }


    //firstPage
    const firstPage = lastPage - (groupSize - 1) <= 0 ? 1 : lastPage - (groupSize - 1);
    let paginationHTML = ``;


    //맨처음 페이지가 아닐때에만  > 하고 >> 보여줌 
    if (page > 1) {
        paginationHTML = `<li class="page-item" onclick="moveToPage(1)"><a class="page-link" href="#"> &lt;&lt; </a></li>
        <li class="page-item" onclick="moveToPage(${page - 1})"><a class="page-link" href="#">&lt</a></li>`
    }



    // first - last 는 배열이 아님 => 배열함수 안쓰고 for문 써줌
    // 동적으로 선택한 부분을 부트스트랩에서 active로  표시 
    for (let i = firstPage; i <= lastPage; i++) {
        paginationHTML += `<li class="page-item ${i === page ? 'active' : ''}" onclick="moveToPage(${i})"><a class="page-link" >${i}</a></li>`
    }


    //마지막 페이지가 아닐때에만  > 하고 >> 보여줌 
    if (page < totalPages) {
        paginationHTML += `<li class="page-item" onclick="moveToPage(${page + 1})"><a class="page-link" href="#"> &gt; </a></li>
            <li class="page-item" onclick="moveToPage(${totalPages})"><a class="page-link" href="#"> &gt;&gt; </a></li>`;
    }



    document.querySelector(".pagination").innerHTML = paginationHTML;

    //     <nav aria-label="Page navigation example">
    //   <ul class="pagination">
    //     <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    //     <li class="page-item"><a class="page-link" href="#">1</a></li>
    //     <li class="page-item"><a class="page-link" href="#">2</a></li>
    //     <li class="page-item"><a class="page-link" href="#">3</a></li>
    //     <li class="page-item"><a class="page-link" href="#">Next</a></li>
    //   </ul>
    // </nav>


}



const moveToPage = (pageNum) => {
    console.log("movetopage", pageNum);

    // 페이지 값을 동적으로 바꾸기 
    page = pageNum;
    getData();
}





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


getNews();
// const openSearchBox = () => {
//     let inputArea = document.getElementById("input-area");
//     if (inputArea.style.display === "inline") {
//       inputArea.style.display = "none";
//     } else {
//       inputArea.style.display = "inline";
//     }
//   };




