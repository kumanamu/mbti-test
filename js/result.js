import { results, mbtis } from "./data.js";
// console.log('test')
// console.log(results[0].title);

// console.log(results[0].results[0])

// console.log(results[0].jobs[1]);

// console.log(mbtis.intp);


//http://127.0.0.1:5500/result.html?mbti=infp
//쿼리 리스틍을 가져와야함.

const mbti = new URLSearchParams(location.search).get('mbti')
console.log("mbti:", mbti)            // 예상: intp
console.log("mbtis[mbti]:", mbtis[mbti]) // 예상: undefined 
//받아온 mbti=infp 에 따른 results 결과를 받아서 변수로
const resultMbti= results[mbtis[mbti]]
console.log(resultMbti)

// //1. 각각의 태그를 지정해야 함
// 타이틀 요소 (h1)
const titleEl = document.querySelector('.page-title')

// 캐릭터 이미지 요소 (img.character)
const characterEl = document.querySelector('.character')

// 특징 문장들 박스 (div.box 여러 개 → 배열 형태로 가져옴)
const boxEls = document.querySelectorAll('.box')

// 직업 정보 (div.job 여러 개 → 배열 형태로 가져옴)
const jobEls = document.querySelectorAll('.job')

// 강의 링크 요소 (a.lecture)
const lectureEl = document.querySelector('.lecture')

// 강의 이미지 요소 (a.lecture 안의 img)
const lectureImgEl = document.querySelector('.lecture img')
// //위의 내용에 innerHtml로 표시
// //단 queryselectorAll로 가져온 것들을
// // forEach 구문을 이용해서 처리(문법은 찾아서)


titleEl.innerHTML = resultMbti.title
characterEl.src = resultMbti.character



boxEls.forEach(function(box, i) {
  box.innerHTML = resultMbti.results[i]
})

jobEls.forEach((job, i) => {
  job.innerHTML = resultMbti.jobs[i]
})

lectureEl.href = resultMbti.lectureUrl
lectureImgEl.src = resultMbti.lectureImg


// lectureImgEl.setAttribute('src', result.lectureImg)
// lectureEl.setAttribute('href', result.lectureUrl)

// console.log("선택된 MBTI:", mbti)
// console.log("mbtis[mbti]:", mbtis[mbti])
// console.log("mbtis[mbti].result:", mbtis[mbti]?.result)
