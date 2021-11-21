# .NET Conf 2022 랜딩 페이지

닷넷데브에서 진행하는 .NET Conf 2022 x Seoul의 랜딩 페이지입니다.

## 테스트 방법

로컬 디스크에 이 리포지터리를 Clone한 후, 간이 웹 서버를 이용하여 `index.html` 페이지를 볼 수 있기만 하면 쉽게 페이지 미리 보기가 가능합니다. Python 3를 이용하는 것이 가장 간편합니다. Windows OS를 사용할 경우, `Windows에서 Python 사용하는 방법` 소단원을 참고하시기 바랍니다.

Bash 및 호환 셸에서 다음과 같이 명령어를 입력합니다.

```bash
\$ python3 -m http.server 9000
```

PowerShell에서는 다음과 같이 명령어를 입력합니다.

```powershell
PS C:\> python3 -m http.server 9000
```

그 다음, 웹 브라우저로 http://localhost:9000 으로 접속하여 사이트가 잘 표시되는지 확인합니다.

## Windows에서 Python 사용하는 방법

### Windows 10 이상의 컴퓨터

최신 버전의 Windows용 Python을 Microsoft Store에서 쉽게 다운로드할 수 있습니다. 이 문서를 작성하는 현재 기준으로 Python 3.10을 [이 링크](https://www.microsoft.com/store/productId/9PJPW5LDXLZ5)를 클릭하여 다운로드할 수 있습니다.

### WSL을 사용하는 경우

Ubuntu 배포판을 사용하는 경우 Python 3가 이미 배포판에 내장되어있으므로 바로 WSL을 사용하셔도 됩니다.

### 그 외의 경우

[Python 공식 홈페이지](https://www.python.org/) 에서 모든 Windows OS를 위한 Python 다운로드가 가능합니다. Python 3.0 이상을 설치하는 것을 권장합니다.

## 컨트리뷰션

페이지 내용을 수정할 것이 있거나 제안할 부분이 있을 경우, 이슈 또는 Pull Request를 보내주십시오.

## 라이선스

이 리포지터리의 라이선스는 MIT 라이선스를 따릅니다.
