class Speaker {
  constructor(name, company, position, introduction, pic, sns, sessions) {
    this.name = name;
    this.company = company;
    this.position = position;
    this.introduction = introduction;
    this.pic = pic;
    this.sns = sns;
    this.sessions = sessions;
  }
};

class Session {
  constructor(category, title, description, level, startTime, endTime) {
    this.category = category;
    this.title = title;
    this.description = description;
    this.level = level;
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
                  [new Session(sessionCategory[0], "WinUI 3로 녹음기를 만들어보자(feat. Win2D)", "Windows App SDK의 WinUI 3를 이용해 간단한 녹음기를 만들면서 윈폼 및 WPF 개발자가 WinUI 3를 경험하고 개발 할 수 있도록 소개합니다. 더불어서 Win2D를 이용해 빠른 그래픽 효과를 소개할 예정입니다.", 1)]
                ),
      
      new Speaker("민성현", "Samsung Research", "Staff Engineer",
                  "Samsung Research Tizen .NET 팀의 멤버로 기존 Xamarin.Forms를 Tizen 플랫폼에서 지원하는 일을 주로 했고 현재는 .NET6의 MAUI를 지원하는 일을 하고 있습니다.",
                  "assets/images/speakers/sh.min.jpg",
                  ["https://www.facebook.com/", "https://github.com"],
                  [new Session(sessionCategory[0],
                              ".NET MAUI 소개",
                              ".NET MAUI의 새로운 기능을 소개합니다. 이를 통해 Cross Platform App을 만드는 방법을 간략하게 설명하고 실제 Tizen 타겟에서 해당 app이 어떻게 실행되는지 보여줍니다.", 1)]
                ),

      new Speaker("Jason Beres", "Infragistics", "개발자 도구 부회장",
                  "Infragistics의 개발자 도구 부회장이신 Jason Beres와 그의 글로벌 팀은 Infragistics의 모든 개발자 중심 도구, UX 도구 및 비즈니스 솔루션 전반에 걸쳐 고객 중심의 혁신적인 기능을 주도하고 있습니다.<br> 25년 이상의 업계 경험과 Infragistics에서 17년의 경력을 가진 Jason은 Infragistics에서 제품 관리, 기술 전도 및 서비스를 위한 공식 기능을 설립했으며 현재 제품 개발을 운영하고 있습니다. Jason은 SQL Server, C#, Rich Client 및 Web Development와 같은 주제를 다루는 엔터프라이즈 소프트웨어 개발에 관한 10권의 책과 수십 개의 잡지 기사를 저술했습니다. Jason은 세계적으로 컨퍼런스 스피커이자 전 11년 간의 Microsoft MVP이며 UX 및 개발자 커뮤니티에서 매우 활발하게 활동하고 있습니다.",
                  "assets/images/speakers/jason-beres.jfif",
                  ["https://www.facebook.com/", "https://github.com"],
                  [new Session(sessionCategory[1], "Blazor로 앱 개발 가속화", "Blazor 및 Infragistics App Builder를 사용하여  다음과 같은 세션을 제공할 예정입니다.<br>1) App Builder가 무엇이며 WYSIWG에서 코딩 없이 모든 화면을 디자인할 수 있는 방법<br>2) 풍부한 데이터 그리드 및 데이터 차트 컨트롤을 사용하고 한 줄의 코드로 데이터에 바인딩하는 방법<br>3) Dock Manager로 데스크탑과 같은 경험을 만들어 사용자에게 화면 공간 관리에 있어 최고의 유연성을 제공하는 방법", 1)]
                ),

      new Speaker("Greg Lutz", "GrapeCity", "Global Product Manager",
                  "GrapeCity의 Greg Lutz는 GrapeCity의 소프트웨어 컴포넌트의 Global Product Manager로서, 전략, 로드맵, 기능 정의 및 개발을 담당하고 있으며, 개발자에게 차별화된 기능을 제공하기 위해 시장과 경쟁 조건을 연구하고 주도하고 있습니다.<br><br>또한, ASP.NET, WinForms, WPF, WinRT, UWP, Silverlight, Xamarin 및 Blazor를 포함한 Microsoft 개발 스택을 14년 이상 사용하여 개발 및 연구를 진행하고 있으며, 개발자가 더 나은 데스크톱, 웹 및 모바일 앱을 구축하는 데 도움이 되는 250개 이상의 다양한 블로그 포스팅 및 Microsoft .NET 커뮤니티를 위한 다양한 활동을 하고 있습니다.",
                  "assets/images/speakers/Greg-Lutz.jpg",
                  ["https://dev.grapecity.co.kr/", "https://www.facebook.com/GrapeCityKor/", "https://www.youtube.com/channel/UChn5GSeq6vxg0xvQwNFhLHQ", "https://pf.kakao.com/_ClxiWxb", "https://www.grapecity.co.kr/"],
                  [new Session(sessionCategory[0],
                              "당신이 알아야 할 .NET6 와 프로페셔널 데스크톱 애플리케이션 UI/UX의 모든 것",
                              ".NET Framework 및 .NET 5와 비교하여 .NET 6의 다양한 이점을 확인해보세요. 또한, GrapeCity의 ComponentOne 데스크톱 컨트롤을 사용하여, Visual Studio 2022에서 .NET 6 데스크톱 앱을 개발하는 방법을 알아봅니다.",
                              1)]
                ),

      new Speaker("김정수", "프리랜서 개발자", "Udemy 강사",
                  "현재 프리랜서 닷넷 개발자로 활동하며, DotNetAMA Youtube 채널을 운영하고 있습니다.<br>또한 Udemy 강사도 병행하고 있습니다.",
                  "assets/images/speakers/js.kim.png",
                  ["https://www.youtube.com/channel/UCubNpKsnK4Z9L92iroTKyvw"],
                  [new Session(sessionCategory[1],
                              "ASP.NET MVC, 웹 API, 웹 프론트엔드 (Blazor)",
                              "개별 Project에서 EFCore Migration 작업하기",
                              2)]),

      new Speaker("문성원", "플라네타리움", "CTO",
                  "플라네타리움 CTO",
                  "assets/images/speakers/sw.mun.jpg",
                  ["https://www.facebook.com/", "https://github.com"],
                  [new Session(sessionCategory[2],
                                ".NET 6 전환기",
                                ".NET Core 3.1 로 작성된 프로젝트를 .NET 6으로 마이그레이션 했던 일화들을 소개합니다.",
                               3)]),

      new Speaker("김정우", "클라우드메이트", "팀장",
                  "Azure, AWS 환경에서 .NET 을 활용하여 다양한 서비스 개발을 하고 있습니다.<br>Cloud Native 기반의 프로젝트에 관심이 많습니다.<br><br>2020.10~ 클라우드메이트 서비스개발팀 리더<br>2009~2020 모두투어 ERP 자체 개발<br>2005~2008 영림원 프로젝트 협업",
                  "assets/images/speakers/jw.kim.jpg",
                  ["https://www.facebook.com/jungwoo.kim1230", "https://rokag3-gb.github.io/"],
                  [new Session(sessionCategory[3],
                                "ORM의 특성을 비교해보자.",
                                " ADO.NET, EF, Dapper 등 (가능하면 Petapoco 까지) 에 대해 장단점 설명과 성능 비교", 1)]),

      new Speaker("박구삼", "망고슬래브", "",
                  "안녕하세요.<br>닷넷기술과 멀티플랫폼에 관심이 많은 닷넷개발자입니다.<br>잘 부탁드립니다 :)",
                  "assets/images/speakers/gs.park.jpg",
                  ["https://github.com/level120"],
                  [new Session(sessionCategory[4],
                              ".Net 6에서 도입예정인 MAUI 기술 소개 및 Xamarin과의 차이점 알아보기",
                              "Xamarin을 차세대 기술인 MAUI에 대해서 알아보고 현재 기술인 Xamarin과 어떤 차이가 있는지 비교합니다.",
                              0)]),

      new Speaker("김예건", "망고슬래브", "",
                  "망고슬래브 주식회사 소프트웨어 개발팀에서 .NET 으로 제품을 개발하고 있으며, ibocon.tistory.com 이라는 기술 블로그를 운영하고 있습니다.",
                  "assets/images/speakers/yg.kim.jpg",
                  ["https://github.com/ibocon", "https://ibocon.tistory.com"],
                  [new Session(sessionCategory[1],
                              "Blazor WebAssembly + Webpack + Sass + TypeScript", "Blazor WASM 에 Sass 와 TypeScript 를 Webpack 으로 번들링하여 Nuget 패키지로 배포하고 사용하는 과정을 발표하고자 합니다.",
                              2)]),

      new Speaker("이은찬", "당근마켓", "DevOps & Backend Developer",
                  "당근마켓 클라우드 데브옵스 및 백엔드 개발자입니다.<br>쿠버네티스 및 AWS 인프라 SRE 와 Go 언어로 검색인덱서 및 ElasticSearch 클러스터 관리 하였고 이후 Spring 으로 ECommerce 를 작업하다가 현재 Node 로 백엔드 작업 중이고 .NET 으로 언어 리팩토링하고 있습니다.",
                  "assets/images/speakers/ec.lee.jpeg",
                  ["https://www.facebook.com/eunchan123", "https://github.com/ckcks12", "https://eunchan.com"],
                  [new Session(sessionCategory[1],
                               "Go, Spring, Node 개발자가 본 .NET6 (부제 : 엥 이게 Express 가 아니라 C# 이었다고?)",
                               "Go, Spring, Node 를 각각 경험하면서 불편했던 점들과 대비해 .NET 가 버전6에 이르러서 완성된 모습의 장점들과 이해를 담았습니다.",
                               1)]),

      new Speaker("박상만", "루나소프트", "개발본부장",
                  "쇼핑몰에 필요한 유용한 솔류션을 만드는 개발팀을 관리하고 있으며 개발문화를 포함 대용량 처리와 관련된 기술적 내용도 관심이 많아 컨플런스를 이용하여 연구및 공유활동도 하고 있습니다.",
                  "assets/images/speakers/psmon.jpg",
                  ["https://www.facebook.com/groups/akkalabs", "https://wiki.webnori.com"],
                  [new Session(sessionCategory[1],
                               "Blazor를 활용한 그래픽 웹채팅",
                               "게임에 사용되는 렌더링(Canvas)와 SignalR(+Akka.net)을 Blazor에 통합하여 그래픽 웹채팅구현",
                               2)]),

      new Speaker("고요한", "", "Windows Developer",
                  "안녕하세요. 닷넷데브 운영진 고요한입니다.<br>현재는 쉬고 있으며 챗봇 관련하여 닷넷콘에 발표를 진행하게 되었습니다. 2014년도 부터 C++ MFC개발자로 시작했으며 현재 C# WinForm으로 개발을 하고 있는 윈도우 응용프로그래머입니다.<br>기본 CRUD 프로그램 및 ERP 및 키오스크 등 다양한 윈도우 어플리케이션 개발을 해왔으며 마지막 작업으로는 Python으로 연계 프로그램도 담당하였습니다.",
                  "assets/images/speakers/yh.ko.jpg",
                  ["https://www.facebook.com/kimozex", "https://github.com/kimozex", "https://kimozex.notion.site/245263c3c9d54a4f9c9bb437f814b64d"],
                  [new Session(sessionCategory[1],
                              "C#으로 하는 정규표현식",
                              "닷넷을 이용한 슬랙 봇 만들기입니다. 예제를 통한 사용법을 살펴봅니다.",
                              1)]),

      new Speaker("김상현", "Saige Research", "Software Architect",
                  "김상현님은 Software Architect로써 현명한 애플리케이션 서비스를 위한 아키텍처링과 응집력 높은 기술 조직 운영에 관심이 많습니다.<br>애플리케이션 서비스를 위해 요구되는 다양한 기술 이해도를 바탕으로 매년 개최되는 .NET Con에 꾸준히 참가하고 있습니다. 또한 국내 소프트웨어 기술 커뮤니티에서 활발히 활동하고 있습니다.",
                  "assets/images/speakers/sh.kim.jpg",
                  ["https://medium.com/@Thwj", "https://github.com/sang-hyeon"],
                  [new Session(sessionCategory[4],
                              "마이크로서비스에서도 비용 챙길 수 있어! Dapr!",
                              "Microservices와 같은 분산 아키텍처를 운영하면 어쩔수없이 필요로하게 되는 도구들이 많습니다.<br>Dapr는 이러한 도구들의 빌딩 블럭들을 제공함과 동시에 운영에 필요한 다양한 기능을 지원합니다.<br>메세지 브로커? 서비스간 원격 프로시저 호출? Metrics? Dapr안에 모두 있습니다.<br>또한 C#, Java, Python등 여러 언어를 지원하기에 다양한 언어로 구현된 서비스간 통합이 가능합니다.",
                              3)]),

      new Speaker("남정현", "데브시스터즈", "테크니컬 라이터",
                  "Microsoft MVP로 2009년부터 활동해오고 있으며, 현재는 테크니컬 라이터로서 기술 작가와 오픈 소스 개발 활동을 병행하고 있습니다.",
                  "assets/images/speakers/nam.png",
                  ["https://github.com/rkttu", "https://rkttu.com/"],
                  [new Session(sessionCategory[0],
                              "인터넷 뱅킹에 자유를! 식탁보 프로젝트 이야기",
                              "인터넷 뱅킹을 Windows PC에서 사용할 때 느끼는 불편함을 최소화하기 위하여 시작한 식탁보라는 오픈 소스 유틸리티를 개발하며서 적용했던 여러 가지 기술들에 대한 이야기를 풀어봅니다. 오래된 UI 프레임워크를 가지고 MSI 인스톨러 패키지를 만들고, 코드 서명을 입히며, GitHub Action을 이용하여 자동 빌드하고 릴리스를 적용하는 노하우에 대해 이야기합니다.",
                              3)]),

      new Speaker("이종인", "DesignMe AI", "Developer",
                  "모든 곳에 가고자 하는 .NET으로 모든 곳에 돌아가는 서비스를 개발하고 있는 개발자입니다. Microsoft MVP로 8년 째 활동 중입니다.",
                  "assets/images/speakers/jongin.lee.jpg",
                  ["https://www.naver.com"],
                  [new Session(sessionCategory[0],
                              "WinUI로 iOS, Android 심지어 웹 앱까지 개발할 수 있다고? Uno Platform 소개",
                              "WinUI와 C#으로 윈도우 앱을 개발할 때 사용하는 코드 그대로 iOS, Andorid 앱 심지어 웹까지 개발할 수 있으며 MAUI 등 여러 닷넷의 크로스플랫폼 개발 방법 중 Pixel Perfect 개념을 지향하고 있는 Uno Platform을 소개합니다.",
                              2),
                   new Session(sessionCategory[1],
                              "ASP.NET MVC, 웹 API, 웹 프론트엔드 (Blazor)",
                              "미니멀하게 만드는 API 서버 : .NET 6 Minimal APIs (추후 수정)",
                              2)],
                      ),
      
      new Speaker("최영선", "Microsoft", "Support Engineer (Azure PaaS)",
                  "마이크로소프트에서 Support Engineer 로 Azure App Service 지원을 맡고 있습니다.<br>Azure Web App, Function App에 대한 관심이 많습니다.",
                  "assets/images/speakers/ys.c.jpg",
                  ["https://www.naver.com"],
                  [new Session(sessionCategory[1],
                              "Azure Application insight를 이용한 ASP.NET Core 모니터링",
                              "Azure Application Insights는 Azure에서 제공하는 Application Performance Monitoring 서비스입니다. 어플리케이션의 성능 및 가용성을 모니터링 할 수 있습니다. 이번 발표에서는 ASP.NET Core application에서 Application Insight를 적용하여 Application 모니터링 하는 방법에 대해 이야기하고자 합니다.",
                              1)]),

      new Speaker("유저스틴", "Microsoft", "Senior Cloud Advocate",
                  "마이크로소프트에서 시니어 클라우드 아드보캇으로 일하고 있습니다.<br>개발자 커뮤니티에서 주로 애저 클라우드와 닷넷을 얘기합니다.",
                  "assets/images/speakers/justin-yoo.png",
                  ["https://www.naver.com"],
                  [new Session(sessionCategory[1],
                              "신상! 닷넷 6를 위한 애저 펑션 OpenAPI 확장 기능 소개",
                              "애저 펑션에서 사용하는 OpenAPI 확장 기능이 이제 닷넷 6에서도 작동합니다. API 통합을 위해 디팩토 표준인 OpenAPI 문서를 실시간으로 생성해주는 이 확장 기능을 이용해 애저 펑션 앱을 만드는 방법, 그리고 기존 애저 펑션 앱을 닷넷 6로 손쉽게 업그레이드 하는 방법에 대해 소개합니다.",
                              1)])
    ]
}