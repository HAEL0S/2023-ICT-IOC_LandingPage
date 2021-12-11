class Speaker {
  constructor(name, company, position, introduction, pic, sns, session) {
    this.name = name;
    this.company = company;
    this.position = position;
    this.introduction = introduction;
    this.pic = pic;
    this.sns = sns;
    this.session = session;
  }
};

class Session {
  constructor(category, title, description, startTime, endTime) {
    this.category = category;
    this.title = title;
    this.description = description;
    this.startTime = startTime;
    this.endTime = endTime;
  }
};

const sessionCategory = ["데스크톱 (Windows Forms, WPF, WinUI), 모바일 (MAUI, Xamarin)",
                         "ASP.NET MVC, 웹 API, 웹 프론트엔드 (Blazor)",
                         ".NET SDK",
                         ".NET 기반의 프로그래밍 언어 (C#, VB.NET, F# 등)",
                         "클라우드 컴퓨팅 (AWS, Azure, GCP 및 Container, Kubernetes), DevOps"]

export function LoadSpeakers() {
    return [
      new Speaker("정세일", "마음인", "CTO",
                  "안녕하세요. 정세일 입니다.<br> 온라인에서는 디모이(dimohy)라는 닉네임으로 활동하고 있습니다. .NET 기술을 좋아하고 업무에도 잘 활용하고 있습니다. 닷넷데브 포럼 운영진으로 활동하고 있으며 포럼을 통해 우리나라 .NET 생태계를 확장하고자 노력하고 있습니다. 현재 마음인 기술이사, 신구대학교 강사로 활동하고 있습니다.",
                  "assets/images/speakers/dimohy.jpeg",
                  ["https://www.facebook.com/", "https://github.com", "https://www.naver.com"],
                  new Session(sessionCategory[0], "WinUI 3로 녹음기를 만들어보자(feat. Win2D)", "Windows App SDK의 WinUI 3를 이용해 간단한 녹음기를 만들면서 윈폼 및 WPF 개발자가 WinUI 3를 경험하고 개발 할 수 있도록 소개합니다. 더불어서 Win2D를 이용해 빠른 그래픽 효과를 소개할 예정입니다.")),
      
      new Speaker("민성현", "Samsung Research", "Staff Engineer",
                  "Samsung Research Tizen .NET 팀의 멤버로 기존 Xamarin.Forms를 Tizen 플랫폼에서 지원하는 일을 주로 했고 현재는 .NET6의 MAUI를 지원하는 일을 하고 있습니다.",
                  "assets/images/speakers/sh.min.jpg",
                  ["https://www.facebook.com/", "https://github.com"],
                  new Session(sessionCategory[0], ".NET MAUI 소개", ".NET MAUI의 새로운 기능을 소개합니다. 이를 통해 Cross Platform App을 만드는 방법을 간략하게 설명하고 실제 Tizen 타겟에서 해당 app이 어떻게 실행되는지 보여줍니다.")),

      new Speaker("Jason Beres", "Infragistics", "개발자 도구 부회장",
                  "Infragistics의 개발자 도구 부회장이신 Jason Beres와 그의 글로벌 팀은 Infragistics의 모든 개발자 중심 도구, UX 도구 및 비즈니스 솔루션 전반에 걸쳐 고객 중심의 혁신적인 기능을 주도하고 있습니다.<br> 25년 이상의 업계 경험과 Infragistics에서 17년의 경력을 가진 Jason은 Infragistics에서 제품 관리, 기술 전도 및 서비스를 위한 공식 기능을 설립했으며 현재 제품 개발을 운영하고 있습니다. Jason은 SQL Server, C#, Rich Client 및 Web Development와 같은 주제를 다루는 엔터프라이즈 소프트웨어 개발에 관한 10권의 책과 수십 개의 잡지 기사를 저술했습니다. Jason은 세계적으로 컨퍼런스 스피커이자 전 11년 간의 Microsoft MVP이며 UX 및 개발자 커뮤니티에서 매우 활발하게 활동하고 있습니다.",
                  "assets/images/speakers/jason-beres.jfif",
                  ["https://www.facebook.com/", "https://github.com"],
                  new Session(sessionCategory[1], "Blazor로 앱 개발 가속화", "Blazor 및 Infragistics App Builder를 사용하여  다음과 같은 세션을 제공할 예정입니다.<br>1) App Builder가 무엇이며 WYSIWG에서 코딩 없이 모든 화면을 디자인할 수 있는 방법<br>2) 풍부한 데이터 그리드 및 데이터 차트 컨트롤을 사용하고 한 줄의 코드로 데이터에 바인딩하는 방법<br>3) Dock Manager로 데스크탑과 같은 경험을 만들어 사용자에게 화면 공간 관리에 있어 최고의 유연성을 제공하는 방법")),

      new Speaker("Greg Lutz", "GrapeCity", "Global Product Manager",
                  "GrapeCity의 Greg Lutz는 GrapeCity의 소프트웨어 컴포넌트의 Global Product Manager로서, 전략, 로드맵, 기능 정의 및 개발을 담당하고 있으며, 개발자에게 차별화된 기능을 제공하기 위해 시장과 경쟁 조건을 연구하고 주도하고 있습니다.<br><br>또한, ASP.NET, WinForms, WPF, WinRT, UWP, Silverlight, Xamarin 및 Blazor를 포함한 Microsoft 개발 스택을 14년 이상 사용하여 개발 및 연구를 진행하고 있으며, 개발자가 더 나은 데스크톱, 웹 및 모바일 앱을 구축하는 데 도움이 되는 250개 이상의 다양한 블로그 포스팅 및 Microsoft .NET 커뮤니티를 위한 다양한 활동을 하고 있습니다.",
                  "assets/images/speakers/Greg-Lutz.jpg",
                  ["https://dev.grapecity.co.kr/", "https://www.facebook.com/GrapeCityKor/", "https://www.youtube.com/channel/UChn5GSeq6vxg0xvQwNFhLHQ", "https://pf.kakao.com/_ClxiWxb", "https://www.grapecity.co.kr/"],
                  new Session(sessionCategory[0], "WinUI 시작하기 (가제)", "데스크톱 앱 개발을 위해 Microsoft에서 새롭게 릴리즈한 WinUI에 대해서 알아보세요. WinUI를 시작하는 방법과 이를 활용하여 쉽고 빠른 개발을 위한 가이드를 제공합니다.")),

      new Speaker("김정수", "프리랜서 개발자", "Udemy 강사",
                  "현재 프리랜서 닷넷 개발자로 활동하며, DotNetAMA Youtube 채널을 운영하고 있습니다.<br>또한 Udemy 강사도 병행하고 있습니다.",
                  "assets/images/speakers/js.kim.png",
                  ["https://www.youtube.com/channel/UCubNpKsnK4Z9L92iroTKyvw"],
                  new Session(sessionCategory[1], "EFCore Migration 작업 및 Bootstrap5 계층형 메뉴 제작", "1. Library에서 EFCore Migration 작업하기<br>2. Bootstrap5 계층형 메뉴 만들기")),

      new Speaker("문성원", "플라네타리움", "CTO",
                  "플라네타리움 CTO",
                  "assets/images/speakers/sw.mun.jpg",
                  ["https://www.facebook.com/", "https://github.com"],
                  new Session(sessionCategory[2], ".NET 6 전환기", ".NET Core 3.1 로 작성된 프로젝트를 .NET 6으로 마이그레이션 했던 일화들을 소개합니다.")),

      new Speaker("김정우", "클라우드메이트", "팀장",
                  "Azure, AWS 환경에서 .NET 을 활용하여 다양한 서비스 개발을 하고 있습니다.<br>Cloud Native 기반의 프로젝트에 관심이 많습니다.<br><br>2020.10~ 클라우드메이트 서비스개발팀 리더<br>2009~2020 모두투어 ERP 자체 개발<br>2005~2008 영림원 프로젝트 협업",
                  "assets/images/speakers/jw.kim.jpg",
                  ["https://www.facebook.com/jungwoo.kim1230", "https://rokag3-gb.github.io/"],
                  new Session(sessionCategory[3], "ORM의 특성을 비교해보자.", " ADO.NET, EF, Dapper 등 (가능하면 Petapoco 까지) 에 대해 장단점 설명과 성능 비교")),

      new Speaker("정유진", "", "GitHub Campus Expert",
                  "이화여자대학교에 재학 중인 학생 정유진입니다.<br>한국 최초 GitHub Campus Expert로 선정되어 다양한 행사 및 활동들에 참여하고 주최하며 학생 개발자 및 엔지니어 커뮤니티를 활성화시키는데 힘을 쓰고 있습니다.",
                  "assets/images/speakers/yj.jeong.jpg",
                  ["https://www.facebook.com/", "https://github.com"],
                  new Session(sessionCategory[4], "닷넷 6 콘솔 앱을 도커 컨테이너화하여 깃헙 액션으로 활용하기", "초보자들도 따라할 수 있게끔 처음부터 닷넷 6 콘솔 앱을 만들고, 이를 도커 컨테이너화하여 깃헙액션으로 원하는 메시지를 출력하는 형태로 커스텀하여 최대한 쉽고 편안하게 발표하고자 합니다.")),

      new Speaker("박구삼", "망고슬래브", "",
                  "안녕하세요.<br>닷넷기술과 멀티플랫폼에 관심이 많은 닷넷개발자입니다.<br>잘 부탁드립니다 :)",
                  "assets/images/speakers/gs.park.jpg",
                  ["https://github.com/level120"],
                  new Session(sessionCategory[4], ".Net 6와 Azure Function 4.0 그리고 OpenAPI Extension 소개", "닷넷6.0 발표로 인해 Azure Function 4.0을 맞아 어떤 변경점이 있는지와 REST API를 Azure Function을 이용해 개발할 때 도움이 되는 OpenAPI 확장을 소개합니다.")),

      new Speaker("김예건", "망고슬래브", "",
                  "망고슬래브 주식회사 소프트웨어 개발팀에서 .NET 으로 제품을 개발하고 있으며, ibocon.tistory.com 이라는 기술 블로그를 운영하고 있습니다.",
                  "assets/images/speakers/yg.kim.jpg",
                  ["https://github.com/ibocon", "https://ibocon.tistory.com"],
                  new Session(sessionCategory[1], "Blazor WebAssembly + Webpack + Sass + TypeScript", "Blazor WASM 에 Sass 와 TypeScript 를 Webpack 으로 번들링하여 Nuget 패키지로 배포하고 사용하는 과정을 발표하고자 합니다.")),

      new Speaker("이은찬", "당근마켓", "DevOps & Backend Developer",
                  "당근마켓 클라우드 데브옵스 및 백엔드 개발자입니다.<br>쿠버네티스 및 AWS 인프라 SRE 와 Go 언어로 검색인덱서 및 ElasticSearch 클러스터 관리 하였고 이후 Spring 으로 ECommerce 를 작업하다가 현재 Node 로 백엔드 작업 중이고 .NET 으로 언어 리팩토링하고 있습니다.",
                  "assets/images/speakers/ec.lee.jpeg",
                  ["https://www.facebook.com/eunchan123", "https://github.com/ckcks12", "https://eunchan.com"],
                  new Session(sessionCategory[1], "Go, Spring, Node 개발자가 본 .NET6 (부제 : 엥 이게 Express 가 아니라 C# 이었다고?)", "Go, Spring, Node 를 각각 경험하면서 불편했던 점들과 대비해 .NET 가 버전6에 이르러서 완성된 모습의 장점들과 이해를 담았습니다.")),

      new Speaker("박상만", "루나소프트", "",
                  "...",
                  "assets/images/speakers/psmon.jpg",
                  ["https://www.facebook.com/", "https://github.com"],
                  new Session(sessionCategory[1], "Blazor를 활용한 그래픽 웹채팅", "게임에 사용되는 렌더링(Canvas)와 SignalR(+Akka.net)을 Blazor에 통합하여 그래픽 웹채팅구현")),

      new Speaker("고요한", "", "Windows Developer",
                  "안녕하세요. 닷넷데브 운영진 고요한입니다.<br>현재는 쉬고 있으며 챗봇 관련하여 닷넷콘에 발표를 진행하게 되었습니다. 2014년도 부터 C++ MFC개발자로 시작했으며 현재 C# WinForm으로 개발을 하고 있는 윈도우 응용프로그래머입니다.<br>기본 CRUD 프로그램 및 ERP 및 키오스크 등 다양한 윈도우 어플리케이션 개발을 해왔으며 마지막 작업으로는 Python으로 연계 프로그램도 담당하였습니다.",
                  "assets/images/speakers/yh.ko.jpg",
                  ["https://www.facebook.com/kimozex", "https://github.com/kimozex", "https://kimozex.notion.site/245263c3c9d54a4f9c9bb437f814b64d"],
                  new Session("챗봇", "SlackBotMessages을 이용한 슬랫 봇 만들기", "닷넷을 이용한 슬랙 봇 만들기입니다.")),

      new Speaker("김상현", "Saige Research", "Software Architect",
                  "김상현님은 Software Architect로써 현명한 애플리케이션 서비스를 위한 아키텍처링과 응집력 높은 기술 조직 운영에 관심이 많습니다.<br>애플리케이션 서비스를 위해 요구되는 다양한 기술 이해도를 바탕으로 매년 개최되는 .NET Con에 꾸준히 참가하고 있습니다. 또한 국내 소프트웨어 기술 커뮤니티에서 활발히 활동하고 있습니다.",
                  "assets/images/speakers/sh.kim.jpg",
                  ["https://medium.com/@Thwj", "https://github.com/sang-hyeon"],
                  new Session(sessionCategory[4],
                              "마이크로서비스에서도 비용 챙길 수 있어! Dapr!", "Microservices와 같은 분산 아키텍처를 운영하면 어쩔수없이 필요로하게 되는 도구들이 많습니다.<br>Dapr는 이러한 도구들의 빌딩 블럭들을 제공함과 동시에 운영에 필요한 다양한 기능을 지원합니다.<br>메세지 브로커? 서비스간 원격 프로시저 호출? Metrics? Dapr안에 모두 있습니다.<br>또한 C#, Java, Python등 여러 언어를 지원하기에 다양한 언어로 구현된 서비스간 통합이 가능합니다."))
    ]
}