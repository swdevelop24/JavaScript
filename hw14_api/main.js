
const API_KEY='' //여기선 그냥 API KEY없이 테스트해봄
const PAGE_SIZE = 7; //기본은 10이지만 7로 바꿈 


const getNews =async ()=>{
    const url=new URL(`https://noona-times-be-5ca9402f90d9.herokuapp.com/top-headlines?country=kr&category=entertainment&pageSize=${PAGE_SIZE}`);
    console.log("uuu", url);

   //url호출 - fetch함수
    const response = await fetch(url);  
    console.log("rrr", response); 
    const data = await response.json(); 
    const news = data.articles; 
    console.log("ddd", data);
    console.log("news", news);
    


    
}


getNews(); 