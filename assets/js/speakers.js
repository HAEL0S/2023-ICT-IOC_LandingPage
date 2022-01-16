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
  constructor(category, title, description, salespoint, level, startTime, endTime) {
    this.category = category;
    this.title = title;
    this.description = description;
    this.salespoint = salespoint;
    this.level = level;
    this.startTime = startTime;
    this.endTime = endTime;
  }
};

const sessionCategory = [".NET 기반의 프로그래밍 언어 (C#, VB.NET, F# 등)",
                         "ASP.NET MVC, 웹 API, 웹 프론트엔드 (Blazor)",
                         "데스크톱 (Windows Forms, WPF, WinUI), 모바일 (MAUI, Xamarin)",
                         "클라우드 컴퓨팅 (AWS, Azure, GCP 및 Container, Kubernetes), DevOps"]

export function LoadSpeakers() {
    return [
      new Speaker("정세일", "마음인", "CTO",
                  "안녕하세요. 정세일 입니다.<br> 온라인에서는 디모이(dimohy)라는 닉네임으로 활동하고 있습니다. .NET 기술을 좋아하고 업무에도 잘 활용하고 있습니다. 닷넷데브 포럼 운영진으로 활동하고 있으며 포럼을 통해 우리나라 .NET 생태계를 확장하고자 노력하고 있습니다. 현재 마음인 기술이사, 신구대학교 강사로 활동하고 있습니다.",
                  "assets/images/speakers/dimohy.jpeg",
                  ["https://www.facebook.com/", "https://github.com", "https://www.naver.com"],
                  [new Session(sessionCategory[2],
                              "WinUI 3로 녹음기를 만들어보자(feat. Win2D)",
                              "Windows App SDK의 WinUI 3를 이용해 간단한 녹음기를 만들면서 윈폼 및 WPF 개발자가 WinUI 3를 경험하고 개발 할 수 있도록 소개합니다. 더불어서 Win2D를 이용해 빠른 그래픽 효과를 소개할 예정입니다.",
                              "WinUI 3 개발 환경, WinUI 3,.NET 패키지 생태계, Win2D",
                              1)]
                ),
      
      new Speaker("민성현", "Samsung Research", "Staff Engineer",
                  "Samsung Research Tizen .NET 팀의 멤버로 기존 Xamarin.Forms를 Tizen 플랫폼에서 지원하는 일을 주로 했고 현재는 .NET6의 MAUI를 지원하는 일을 하고 있습니다.",
                  "assets/images/speakers/sh.min.jpg",
                  ["https://www.facebook.com/", "https://github.com"],
                  [new Session(sessionCategory[2],
                              ".NET MAUI 소개",
                              ".NET MAUI의 새로운 기능을 소개합니다. 이를 통해 Cross Platform App을 만드는 방법을 간략하게 설명하고 실제 Tizen 타겟에서 해당 app이 어떻게 실행되는지 보여줍니다.",
                              "Xamarin를 경험 해본 개발자라면 .NET MAUI에서는 기존 대비 무엇이 어떻게 달라졌는지를 알 수 있는 시간이 될 것입니다. Xamarin을 모르더라도 .NET MAUI을 통해 Cross Platform App을 시작하는 방법을 배울 수 있습니다.",
                              1)]
                ),

      new Speaker("Jason Beres", "Infragistics", "개발자 도구 부회장",
                  "Infragistics의 개발자 도구 부회장이신 Jason Beres와 그의 글로벌 팀은 Infragistics의 모든 개발자 중심 도구, UX 도구 및 비즈니스 솔루션 전반에 걸쳐 고객 중심의 혁신적인 기능을 주도하고 있습니다.<br> 25년 이상의 업계 경험과 Infragistics에서 17년의 경력을 가진 Jason은 Infragistics에서 제품 관리, 기술 전도 및 서비스를 위한 공식 기능을 설립했으며 현재 제품 개발을 운영하고 있습니다. Jason은 SQL Server, C#, Rich Client 및 Web Development와 같은 주제를 다루는 엔터프라이즈 소프트웨어 개발에 관한 10권의 책과 수십 개의 잡지 기사를 저술했습니다. Jason은 세계적으로 컨퍼런스 스피커이자 전 11년 간의 Microsoft MVP이며 UX 및 개발자 커뮤니티에서 매우 활발하게 활동하고 있습니다.",
                  "assets/images/speakers/jason-beres.jfif",
                  [],
                  [new Session(sessionCategory[1],
                              "Blazor로 앱 개발 가속화",
                              "Blazor 및 Infragistics App Builder를 사용하여  다음과 같은 세션을 제공할 예정입니다.<br>1) App Builder가 무엇이며 WYSIWG에서 코딩 없이 모든 화면을 디자인할 수 있는 방법<br>2) 풍부한 데이터 그리드 및 데이터 차트 컨트롤을 사용하고 한 줄의 코드로 데이터에 바인딩하는 방법<br>3) Dock Manager로 데스크탑과 같은 경험을 만들어 사용자에게 화면 공간 관리에 있어 최고의 유연성을 제공하는 방법",
                              "Blazor는 ASP.NET Web Forms 이후 .NET 개발자가 최신 고성능 플랫폼에서 멋진 비즈니스 앱을 빌드하고 제공할 수 있는 가장 큰 기회입니다. .NET 6에는 개발자가 활용할 수 있는 기능이 훨씬 더 많습니다. Infragistics는 앱 개발 프로세스를 10배 가속화하는 기능을 추가하고 있습니다. 위의 세션을 통해 Infragistics를 사용한 놀라운 웹 경험을 하실 수 있습니다.",
                              1)]
                ),

      new Speaker("Greg Lutz", "GrapeCity", "Global Product Manager",
                  "GrapeCity의 Greg Lutz는 GrapeCity의 소프트웨어 컴포넌트의 Global Product Manager로서, 전략, 로드맵, 기능 정의 및 개발을 담당하고 있으며, 개발자에게 차별화된 기능을 제공하기 위해 시장과 경쟁 조건을 연구하고 주도하고 있습니다.<br><br>또한, ASP.NET, WinForms, WPF, WinRT, UWP, Silverlight, Xamarin 및 Blazor를 포함한 Microsoft 개발 스택을 14년 이상 사용하여 개발 및 연구를 진행하고 있으며, 개발자가 더 나은 데스크톱, 웹 및 모바일 앱을 구축하는 데 도움이 되는 250개 이상의 다양한 블로그 포스팅 및 Microsoft .NET 커뮤니티를 위한 다양한 활동을 하고 있습니다.",
                  "assets/images/speakers/Greg-Lutz.jpg",
                  ["https://dev.grapecity.co.kr/", "https://www.facebook.com/GrapeCityKor/", "https://www.youtube.com/channel/UChn5GSeq6vxg0xvQwNFhLHQ", "https://pf.kakao.com/_ClxiWxb", "https://www.grapecity.co.kr/"],
                  [new Session(sessionCategory[2],
                              "당신이 알아야 할 .NET6 와 프로페셔널 데스크톱 애플리케이션 UI/UX의 모든 것",
                              ".NET Framework 및 .NET 5와 비교하여 .NET 6의 다양한 이점을 확인해보세요. 또한, GrapeCity의 ComponentOne 데스크톱 컨트롤을 사용하여, Visual Studio 2022에서 .NET 6 데스크톱 앱을 개발하는 방법을 알아봅니다.",
                              ".NET 6가 무엇이고 왜 사용해야 하는지에 대해서 알아볼 수 있으며, 또한, 서드 파티 컴포넌트를 활용하여 쉽고 빠르게 데스크톱 앱 개발하는 방법을 배울 수 있습니다.",
                              1)]
                ),

      new Speaker("김정수", "프리랜서 개발자", "Udemy 강사",
                  "현재 프리랜서 닷넷 개발자로 활동하며, DotNetAMA Youtube 채널을 운영하고 있습니다.<br>또한 Udemy 강사도 병행하고 있습니다.",
                  "assets/images/speakers/js.kim.png",
                  ["https://www.youtube.com/channel/UCubNpKsnK4Z9L92iroTKyvw"],
                  [new Session(sessionCategory[1],
                              "개별 Project에서 EFCore Migration 작업하기",
                              "CLI방식으로 EFCore Migration 작업하는 것을 직접 보여주고, 개별 Project에서 Migration이 안되는 이유와 해결책을 제시합니다. 마지막으로 Migration으로 script를 추출하는 방법도 알려드립니다.",
                              "개별 프로젝트에서 EFCore Migration을 하지 못했던 청중은 이 영상을 꼭 시청해야 합니다.",
                              1)]),

      new Speaker("문성원", "플라네타리움", "CTO",
                  "플라네타리움 CTO",
                  "assets/images/speakers/sw.mun.jpg",
                  [],
                  [new Session(sessionCategory[0],
                                ".NET 6 전환기",
                                ".NET Core 3.1 로 작성된 프로젝트를 .NET 6으로 마이그레이션 했던 일화들을 소개합니다.",
                                ".NET 6 전환 과정과 어떤 고려사항들이 있는지를 알아볼 수 있습니다.",
                               3)]),

      new Speaker("김정우", "클라우드메이트", "팀장",
                  "Azure, AWS 환경에서 .NET 을 활용하여 다양한 서비스 개발을 하고 있습니다.<br>Cloud Native 기반의 프로젝트에 관심이 많습니다.<br><br>2020.10~ 클라우드메이트 서비스개발팀 리더<br>2009~2020 모두투어 ERP 자체 개발<br>2005~2008 영림원 프로젝트 협업",
                  "assets/images/speakers/jw.kim.jpg",
                  ["https://www.facebook.com/jungwoo.kim1230", "https://rokag3-gb.github.io/"],
                  [new Session(sessionCategory[0],
                                "ORM의 특성을 비교해보자.",
                                "ADO.NET, EF, Dapper 등 (가능하면 Petapoco 까지) 에 대해 장단점 설명과 성능 비교",
                                "풀스택 또는 백엔드 개발자가 RDB와 통신할 때 선택할 수 밖에 없는 ORM에 대해서 장단점, 성능 비교 등의 인사이트를 드리고자 합니다.",
                                1)]),

      new Speaker("박구삼", "망고슬래브", "",
                  "안녕하세요.<br>닷넷기술과 멀티플랫폼에 관심이 많은 닷넷개발자입니다.<br>잘 부탁드립니다 :)",
                  "assets/images/speakers/gs.park.jpg",
                  ["https://github.com/level120"],
                  [new Session(sessionCategory[2],
                              ".NET 6에서 도입예정인 MAUI 기술 소개 및 Xamarin과의 차이점 알아보기",
                              "Xamarin을 차세대 기술인 MAUI에 대해서 알아보고 현재 기술인 Xamarin과 어떤 차이가 있는지 비교합니다.",
                              "기존 Xamarin을 사용한 분들이라면 이제부터 새롭게 도입될 MAUI의 특성을 파악하고 Xamarin과의 차이를 이해할 수 있습니다.<br/>간단한 예제를 통해 그 차이를 눈으로 쉽게 확인할 수 있습니다.",
                              0)]),

      new Speaker("김예건", "망고슬래브", "",
                  "망고슬래브 주식회사 소프트웨어 개발팀에서 .NET 으로 제품을 개발하고 있으며, ibocon.tistory.com 이라는 기술 블로그를 운영하고 있습니다.",
                  "assets/images/speakers/yg.kim.jpg",
                  ["https://github.com/ibocon", "https://ibocon.tistory.com"],
                  [new Session(sessionCategory[1],
                              "Blazor WebAssembly + Webpack + Sass + TypeScript",
                              "Blazor WASM 에 Sass 와 TypeScript 를 Webpack 으로 번들링하여 Nuget 패키지로 배포하고 사용하는 과정을 발표하고자 합니다.",
                              "Blazor 는 .NET 에서 JavaScript (React, Vue 등) 에 대응하여 최신 개발 트렌드인 SPA 를 개발할 수 있는 방법입니다. 그러나 마이크로소프트 공식 문서에는 JavaScript FE 개발자에게 익숙한 도구인 Sass 와 TypeScript 를 함께 사용하는 방법을 제공하지 않고 있습니다. 따라서 저의 발표는 .NET 으로 BE를 개발하고 JavaScript 로 FE 를 개발하던 개발자들에게 큰 도움이 될 수 있으리라 생각합니다.",
                              2)]),

      new Speaker("이은찬", "당근마켓", "DevOps & Backend Developer",
                  "당근마켓 클라우드 데브옵스 및 백엔드 개발자입니다.<br>쿠버네티스 및 AWS 인프라 SRE 와 Go 언어로 검색인덱서 및 ElasticSearch 클러스터 관리 하였고 이후 Spring 으로 ECommerce 를 작업하다가 현재 Node 로 백엔드 작업 중이고 .NET 으로 언어 리팩토링하고 있습니다.",
                  "assets/images/speakers/ec.lee.jpeg",
                  ["https://www.facebook.com/eunchan123", "https://github.com/ckcks12", "https://eunchan.com"],
                  [new Session(sessionCategory[1],
                               "Go, Spring, Node 개발자가 본 .NET6 (부제 : 엥 이게 Express 가 아니라 C# 이었다고?)",
                               "Go, Spring, Node 를 각각 경험하면서 불편했던 점들과 대비해 .NET 가 버전6에 이르러서 완성된 모습의 장점들과 이해를 담았습니다.",
                               "Go, Spring, Node 세가지 언어를 쓰며 불편하거나 답답했던 부분이 제가 느낀 것과 같다면 .NET6 는 정확하게 그 부분을 해결해 줄 것입니다. 또한 한국에서는 특히나 .NET 이 생소합니다. 우리가 Java/Kotlin Spring 에 빠져있는 동안 눈부시게 발전한 .NET 을 만나보세요! 쉽고 간단하면서 철학(오피니언)이 들어있는 .NET6 는 우리를 더 빠르고 안전한 개발로 인도할 것 입니다!",
                               1)]),

      new Speaker("박상만", "루나소프트", "개발본부장",
                  "쇼핑몰에 필요한 유용한 솔류션을 만드는 개발팀을 관리하고 있으며 개발문화를 포함 대용량 처리와 관련된 기술적 내용도 관심이 많아 컨플런스를 이용하여 연구및 공유활동도 하고 있습니다.",
                  "assets/images/speakers/psmon.jpg",
                  ["https://www.facebook.com/groups/akkalabs", "https://wiki.webnori.com"],
                  [new Session(sessionCategory[1],
                               "Blazor를 활용한 그래픽 웹채팅",
                               "게임에 사용되는 렌더링(Canvas)와 SignalR(+Akka.net)을 Blazor에 통합하여 그래픽 웹채팅구현",
                               "- Blazor에서 C#코드로 Canvas(그래픽) 객체를 제어하는것을 알수 있습니다.<br/>- SignalR과 Akka.net 을 연동하여 네트워크 기능을으로 확장하는 방법을 알수 있습니다.",
                               2)]),

      new Speaker("고요한", "", "Windows Developer",
                  "안녕하세요. 닷넷데브 운영진 고요한입니다.<br>현재는 쉬고 있으며 챗봇 관련하여 닷넷콘에 발표를 진행하게 되었습니다. 2014년도 부터 C++ MFC개발자로 시작했으며 현재 C# WinForm으로 개발을 하고 있는 윈도우 응용프로그래머입니다.<br>기본 CRUD 프로그램 및 ERP 및 키오스크 등 다양한 윈도우 어플리케이션 개발을 해왔으며 마지막 작업으로는 Python으로 연계 프로그램도 담당하였습니다.",
                  "assets/images/speakers/yh.ko.jpg",
                  ["https://www.facebook.com/kimozex", "https://github.com/kimozex", "https://kimozex.notion.site/245263c3c9d54a4f9c9bb437f814b64d"],
                  [new Session(sessionCategory[0],
                              "C#으로 하는 정규표현식",
                              "C#에서 Regex 클래스에 대해서 소개합니다. 간단한 정규표현식에 대해서 소개하는 세션입니다. .net interactive를 이용하여 발표가 진행됩니다.",
                              "정규표현식에 대한 간단한 소개 및 예제를 통한 실제 사례를 확인해 보실 수 있습니다.",
                              1)]),

      new Speaker("김상현", "Saige Research", "Software Architect",
                  "김상현님은 Software Architect로써 현명한 애플리케이션 서비스를 위한 아키텍처링과 응집력 높은 기술 조직 운영에 관심이 많습니다.<br>애플리케이션 서비스를 위해 요구되는 다양한 기술 이해도를 바탕으로 매년 개최되는 .NET Conf에 꾸준히 참가하고 있습니다. 또한 국내 소프트웨어 기술 커뮤니티에서 활발히 활동하고 있습니다.",
                  "assets/images/speakers/sh.kim.jpg",
                  ["https://medium.com/@Thwj", "https://github.com/sang-hyeon"],
                  [new Session(sessionCategory[3],
                              "마이크로서비스에서도 비용 챙길 수 있어! Dapr!",
                              "Microservices와 같은 분산 아키텍처를 운영하면 어쩔수없이 필요로하게 되는 도구들이 많습니다.<br>Dapr는 이러한 도구들의 빌딩 블럭들을 제공함과 동시에 운영에 필요한 다양한 기능을 지원합니다.<br>메세지 브로커? 서비스간 원격 프로시저 호출? Metrics? Dapr안에 모두 있습니다.<br>또한 C#, Java, Python등 여러 언어를 지원하기에 다양한 언어로 구현된 서비스간 통합이 가능합니다.",
                              "이 시간을 통해 Dapr의 컨셉을 확인하고 현재까지 지원되는 기능을 알아볼 수 있습니다.<br>또한 함께 오피셜 샘플을 보면서 실제 적용 사례를 확인 해봅니다.",
                              3)]),

      new Speaker("남정현", "데브시스터즈", "테크니컬 라이터",
                  "Microsoft MVP로 2009년부터 활동해오고 있으며, 현재는 테크니컬 라이터로서 기술 작가와 오픈 소스 개발 활동을 병행하고 있습니다.",
                  "assets/images/speakers/nam.png",
                  ["https://github.com/rkttu", "https://rkttu.com/"],
                  [new Session(sessionCategory[2],
                              "인터넷 뱅킹에 자유를! 식탁보 프로젝트 이야기",
                              "인터넷 뱅킹을 Windows PC에서 사용할 때 느끼는 불편함을 최소화하기 위하여 시작한 식탁보라는 오픈 소스 유틸리티를 개발하며서 적용했던 여러 가지 기술들에 대한 이야기를 풀어봅니다. 오래된 UI 프레임워크를 가지고 MSI 인스톨러 패키지를 만들고, 코드 서명을 입히며, GitHub Action을 이용하여 자동 빌드하고 릴리스를 적용하는 노하우에 대해 이야기합니다.",
                              "데스크톱 애플리케이션을 개발하고 배포하는 과정을 자동화하는 방법, 요즈음 데스크톱 애플리케이션을 배포할 때 고려해야 할 사항에 대한 정보가 필요하신 분들께 요긴한 내용들로 구성하였습니다.<br />또한 닷넷 프레임워크에서 닷넷 6로 전환을 고민하시는 분들께 \"실제 사례\"를 전달해드릴 수 있는 의미있는 세션이 될 것이라고 생각합니다.",
                              3),
                   new Session(sessionCategory[3],
                              "IIS/ASP.NET과 Azure로 시작하는 모던 Stateless 서비스 개발",
                              "IIS/ASP.NET 기반의 웹 애플리케이션을 클라우드 서비스로 빠르게 전환할 수 있는 또 다른 방법인 윈도우 컨테이너를 알아보고, 애저 웹 서비스에 배포하는 과정도 살펴봅니다.",
                              "코드 수정을 최소화하면서 IIS/ASP.NET 기반의 웹 애플리케이션을 클라우드 기반으로 옮기는 방법을 고민 중인 분들을 위한 새로운 마이그레이션 방법을 소개하고, 윈도우 컨테이너에 대한 내용에 관심있으신 분들을 위해서도 실질적인 내용을 다룹니다.",
                              3)]),

      new Speaker("이종인", "DesignMe AI", "Developer",
                  "모든 곳에 가고자 하는 .NET으로 모든 곳에 돌아가는 서비스를 개발하고 있는 개발자입니다. Microsoft MVP로 8년 째 활동 중입니다.",
                  "assets/images/speakers/jongin.lee.jpg",
                  [],
                  [new Session(sessionCategory[0],
                              "WinUI로 iOS, Android 심지어 웹 앱까지 개발할 수 있다고? Uno Platform 소개",
                              "WinUI와 C#으로 윈도우 앱을 개발할 때 사용하는 코드 그대로 iOS, Andorid 앱 심지어 웹까지 개발할 수 있으며 MAUI 등 여러 닷넷의 크로스플랫폼 개발 방법 중 Pixel Perfect 개념을 지향하고 있는 Uno Platform을 소개합니다.",
                              "WinUI로 데스크탑을 개발할 때 사용하던 XAML 문법과 코드 그대로 iOS, Android 심지어 웹앱까지 개발할 수 있는 Uno Platform에 대해 알아봅니다.",
                              2),
                   new Session(sessionCategory[2],
                              "미니멀하게 만드는 API 서버 : .NET 6 Minimal API",
                              "지금까지의 닷넷 중 가장 빠른 닷넷인 .NET6에서 매우 간단한 코드로 API를 만들 수 있는 Minimal APIs에 대해 알아봅니다.",
                              ".NET6에서 소개된 Minimal APIs에 대해 알아봅니다.",
                              2)],
                      ),
      
      new Speaker("최영선", "Microsoft", "Support Engineer (Azure PaaS)",
                  "마이크로소프트에서 Support Engineer 로 Azure App Service 지원을 맡고 있습니다.<br>Azure Web App, Function App에 대한 관심이 많습니다.",
                  "assets/images/speakers/ys.c.jpg",
                  ["https://www.facebook.com/yeongseonchoe", "https://www.linkedin.com/in/yeongseonchoe"],
                  [new Session(sessionCategory[1],
                              "Azure Application insight를 이용한 ASP.NET Core 모니터링",
                              "Azure Application Insights는 Azure에서 제공하는 Application Performance Monitoring 서비스입니다. 어플리케이션의 성능 및 가용성을 모니터링 할 수 있습니다. 이번 발표에서는 ASP.NET Core application에서 Application Insight를 적용하여 Application 모니터링 하는 방법에 대해 이야기하고자 합니다.",
                              "ASP.NET Core Application에 Application Insights를 적용하는 방법에 대해서 배울 수 있습니다. 또한 Application Insights가 제공하는 다양한 기능을 알 수 있습니다. 이를 통해 Application의 성능을 분석하는 방법을 배울 수 있습니다.",
                              1)]),

      new Speaker("유저스틴", "Microsoft", "Senior Cloud Advocate",
                  "마이크로소프트에서 시니어 클라우드 아드보캇으로 일하고 있습니다.<br>개발자 커뮤니티에서 주로 애저 클라우드와 닷넷을 얘기합니다.",
                  "assets/images/speakers/justin-yoo.png",
                  ["https://twitter.com/justinchronicle", "https://github.com/justinyoo", "https://blog.aliencube.org"],
                  [new Session(sessionCategory[3],
                              "신상! 닷넷 6를 위한 애저 펑션 OpenAPI 확장 기능 소개",
                              "애저 펑션에서 사용하는 OpenAPI 확장 기능이 이제 닷넷 6에서도 작동합니다. API 통합을 위해 디팩토 표준인 OpenAPI 문서를 실시간으로 생성해주는 이 확장 기능을 이용해 애저 펑션 앱을 만드는 방법, 그리고 기존 애저 펑션 앱을 닷넷 6로 손쉽게 업그레이드 하는 방법에 대해 소개합니다.",
                              "80% 이상의 애저 펑션 앱은 HTTP API 형태로 사용한다고 합니다. HTTP API를 표현하는 방법으로 OpenAPI 문서가 디팩토 표준으로 쓰이는데요, 이를 아주 손쉽게 구현할 수 있습니다. 또한, 이를 이용하면 다른 애플리케이션과도 연동이 가능합이다. 이 세션을 통해 청중은 마우스 클릭 몇 번 만으로 애저 펑션에 OpenAPI 확장 기능을 추가하고 곧바로 사용할 수 있는지 알 수 있습니다.",
                              1)])
    ]
}