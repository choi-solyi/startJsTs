// OMDb API
// http://www.omdbapi.com/

// Query String 문자데이터로 검색한다!
// 주소?속성=값&속성=값&속성=값

// axios : 프로미스 기반의 HTTP 클라이언트 for 브라우저 / 노드
//http 요청을 처리해주는 기능

import axios from 'axios'
function fetchMovies(){
  axios
    .get('https://www.omdbapi.com/?apikey=7035c60c&s=frozen')
    .then(res => {
      console.log(res)
      const h1El = document.querySelector('h1')
      const imgEL = document.querySelector('img')
      h1El.textContent = res.data.Search[0].Title
      imgEL.src = res.data.Search[0].Poster
    })
}
fetchMovies();
