# .NET Conf 2022 랜딩 페이지

닷넷데브에서 진행하는 .NET Conf 2022 x Seoul의 랜딩 페이지입니다.

## 사이트 미리보기

[https://dotnetdev-kr.github.io/DotNetConf2022_LandingPage/](https://dotnetdev-kr.github.io/DotNetConf2022_LandingPage/) 에서 미리 보실 수 있습니다.

## 테스트 방법

로컬 디스크에 이 리포지터리를 Clone한 후, 간이 웹 서버를 이용하여 `index.html` 페이지를 볼 수 있기만 하면 쉽게 페이지 미리 보기가 가능합니다. Node.js의 테스트 서버를 이용하는 것이 가장 간편합니다.

Node.js는 [https://nodejs.org/en/download/](https://nodejs.org/en/download/) 에서 각 OS 별로 다운로드하여 설치할 수 있습니다.

Bash 및 호환 셸에서 다음과 같이 명령어를 입력합니다.

```bash
npm install http-server -g
http-server -o --cors
```

PowerShell에서는 다음과 같이 명령어를 입력합니다.

```powershell
npm install http-server -g
http-server -o --cors
```

그 다음, 웹 브라우저로 [http://127.0.0.1:8080/](http://127.0.0.1:8080/) 으로 접속하여 사이트가 잘 표시되는지 확인합니다.

## 컨트리뷰션

페이지 내용을 수정할 것이 있거나 제안할 부분이 있을 경우, 이슈 또는 Pull Request를 보내주십시오.

## 라이선스

이 리포지터리의 라이선스는 MIT 라이선스를 따릅니다.
