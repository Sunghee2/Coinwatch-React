# Coinwatch_web

### [프로젝트 1] 암호화폐 시세 확인 프로그램 만들기
 - React 를 이용하여 암호화폐 시세를 확인하는 프로그램을 작성하시오.
 - https://www.cryptocompare.com/api/ 의 API를 참고하시오. (다른 가능한 api가 있다면 사용하여도 무방함)

##### 기본 구현 사항
 - 최소 다음과 같은 UI 를 가져야 함
    - 코인 리스트 페이지: 주요한 Coin 들의 간단한 정보와 현재 가격이 리스트 되어야 함
    - 코인 상세 페이지: 코인에 대한 상세 정보와 가격에 대한 상세 정보가 나타나야 함
 - React, Redux 등 수업시간에 배운 기술을 사용하여야 함
 - 본 과제는 개인 과제이며, 개인별로 발표자료를 준비하여 개발 내용을 발표하여야 한다. 별도의 보고서 대신 발표자료로 보고서를 대신하며, 과제 제출 후 전체 코드는 github에 공개하는 것을 필수 요건으로 한다.

##### 과제 제출
 - 발표: 5월 8일 / 10일
 - 발표 자료 제출: Tahiti 사이트에 업로드 (5월 7일까지) - 파일 사이즈가 너무 클 경우 조교에게 이메일 제출
 - github 주소 공개: 5월 11일
##### 평가 기준
 - 사이트 완성도 30점, 발표 30점, 보고서(발표 자료) 10점, 소스 코드 10점
 - 기본 구현 사항 외에 추가 구현 내용에 따라 추가 20점 부여 - 추가 내용은 보고서 및 발표에서 잘 제시하세요.

> 참고: https://github.com/brillout/awesome-react-components





##### 18-04-20

- [x] 이름 card-title 넣기
- [x] input-button 정리 & 중앙정렬
- [x] PRICE 3자리 , 구분
- [x] change24Hprice

> ##### error  "_" is not defined  no-undef
>
> .eslintrc.json  아래와 같이. 그리고 파일 상단에 /* global _ */

```json
{
    "globals": {
        "_": false
    }
}
```



해야할 것

- 자꾸 전체 다 다시 리로드됨.. 가격만 바뀔때로

  ​



##### 18-04-24

- [x] card 투명하게

- [x] TradingView chart 넣기(api) -> 

- [x] coin 설명하는 tab 넣기

- [x] containers 나누기

- [x] details, list reducer/action

- [x] coinlist 불러와서 full name으로 바꿈

- [x] coin img 넣기 -> api img에 흰배경.................................

- [x] 배경이미지 바꿈

  ​

> 참고 : https://github.com/rafaelklaessen/react-tradingview-widget

> 이미지 public/img/~에 넣었더니 src/에 넣어야 된다고 에러남.

> 
>
> ##### Failed to load https://www.cryptocompare.com/api/data/coinlist/: No 'Access-Control-Allow-Origin' header is present on the requested resource.
>
> js의 동일 출처 정책 때문. 크롬에 아래 플로그인 설치
>
> https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?utm_source=chrome-ntp-icon



해야할 것

- tab 클릭이 안 됨(해결)

- 이름 옆에 이미지를 두고 싶음..

- 차트 종가로 라인 그리기

  ​



##### 18-04-26

- [x] 코드 정리 (검색창 어떻게 할 것인지 생각해보기..)

- [x] CoinHome - CoinShow 나눔

- [x] 각 코인마다 차트 바꿈

- [x] CoinShow - sticky header

- [x] 정보 탭따로 components로 나눔

- [x] 탭 클릭

  ​



> 참고 : https://github.com/yahoo/react-stickynode
>
> https://github.com/jonjaques/react-loaders

> 탭 안눌린 것 -> 부트스트랩 js script 안넣어서
>
> show페이지에 symbol, id 다 필요한데 이걸로 fetchCoinList 하기 그럼...

해야할 것

- 탭 로딩

- css불편해서 sass..깔까 고민중...

  ​

##### 18-05-01

home에 작은 차트 하나씩 그리고 싶었는데 api coin 하나씩 콜해야됨.... 

- [x] %에 색 넣기

