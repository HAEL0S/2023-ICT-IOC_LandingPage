class Speaker {
  constructor(name, company, position, introduction, pic, sns) {
    this.name = name;
    this.company = company;
    this.position = position;
    this.introduction = introduction;
    this.pic = pic;
    this.sns = sns;
  }
};

export function LoadSpeakers() {
    return [
      new Speaker("정세일", "마음인", "CTO",
                  "안녕하세요. 정세일 입니다.<br> 온라인에서는 디모이(dimohy)라는 닉네임으로 활동하고 있습니다. .NET 기술을 좋아하고 업무에도 잘 활용하고 있습니다. 닷넷데브 포럼 운영진으로 활동하고 있으며 포럼을 통해 우리나라 .NET 생태계를 확장하고자 노력하고 있습니다. 현재 마음인 기술이사, 신구대학교 강사로 활동하고 있습니다.",
                  "assets/images/speakers/dimohy.jpeg",
                  ["https://www.facebook.com/", "https://github.com", "https://www.naver.com"]),
      
      new Speaker("민성현", "Samsung Research", "Staff Engineer",
                  "Samsung Research Tizen .NET 팀의 멤버로 기존 Xamarin.Forms를 Tizen 플랫폼에서 지원하는 일을 주로 했고 현재는 .NET6의 MAUI를 지원하는 일을 하고 있습니다.",
                  "assets/images/speakers/sh.min.jpg",
                  ["https://www.facebook.com/", "https://github.com"]),

      new Speaker("Jason Beres", "Infragistics", "",
                  "Infragistics의 개발자 도구 부회장이신 Jason Beres와 그의 글로벌 팀은 Infragistics의 모든 개발자 중심 도구, UX 도구 및 비즈니스 솔루션 전반에 걸쳐 고객 중심의 혁신적인 기능을 주도하고 있습니다.<br> 25년 이상의 업계 경험과 Infragistics에서 17년의 경력을 가진 Jason은 Infragistics에서 제품 관리, 기술 전도 및 서비스를 위한 공식 기능을 설립했으며 현재 제품 개발을 운영하고 있습니다. Jason은 SQL Server, C#, Rich Client 및 Web Development와 같은 주제를 다루는 엔터프라이즈 소프트웨어 개발에 관한 10권의 책과 수십 개의 잡지 기사를 저술했습니다. Jason은 세계적으로 컨퍼런스 스피커이자 전 11년 간의 Microsoft MVP이며 UX 및 개발자 커뮤니티에서 매우 활발하게 활동하고 있습니다.",
                  "assets/images/speakers/jason-beres.jfif",
                  ["https://www.facebook.com/", "https://github.com"]),

      new Speaker("Greg Lutz", "GrapeCity", "ComponentOne Global Product Manager",
                  "GrapeCity - ComponentOne Global Product Manager",
                  "assets/images/speakers/Greg-Lutz.jpg",
                  ["https://www.facebook.com/", "https://github.com"]),

      new Speaker("김정수", "", "",
                  "저는 프로그램 개발자로서 ASP와 ASP.NET SI 및 SM 업무를 담당하였습니다.<br>여러 회사에서 인사 총무 등의 인트라넷 시스템과 포털사이트 시스템 개발 및 운영을 해왔습니다. 프로그래밍 언어는 ASP.NET C#을 실무에서 주로 다루었고, DATABASE는 Oracle과 MSSQL Server를 실무에서 많이 사용하였습니다.<br>Udemy 강사로도 활동하고 있습니다.",
                  "assets/images/speakers/js.kim.jpg",
                  ["https://www.facebook.com/", "https://github.com"]),

      new Speaker("문성원", "플라네타리움", "CTO",
                  "플라네타리움 CTO",
                  "assets/images/speakers/sw.mun.jpg",
                  ["https://www.facebook.com/", "https://github.com"]),

      new Speaker("김정우", "클라우드메이트", "팀장",
                  "Azure, AWS 환경에서 .NET 을 활용하여 다양한 서비스 개발을 하고 있습니다.<br>Cloud Native 기반의 프로젝트에 관심이 많습니다.<br><br>2020.10~ 클라우드메이트 서비스개발팀 리더<br>2009~2020 모두투어 ERP 자체 개발<br>2005~2008 영림원 프로젝트 협업",
                  "assets/images/speakers/jw.kim.jpg",
                  ["https://www.facebook.com/jungwoo.kim1230", "https://rokag3-gb.github.io/"]),

      new Speaker("정유진", "", "GitHub Campus Expert",
                  "이화여자대학교에 재학 중인 학생 정유진입니다.<br>한국 최초 GitHub Campus Expert로 선정되어 다양한 행사 및 활동들에 참여하고 주최하며 학생 개발자 및 엔지니어 커뮤니티를 활성화시키는데 힘을 쓰고 있습니다.",
                  "assets/images/speakers/yj.jeong.jpg",
                  ["https://www.facebook.com/", "https://github.com"]),

      new Speaker("박구삼", "망고슬래브", "",
                  "안녕하세요.<br>닷넷기술과 멀티플랫폼에 관심이 많은 닷넷개발자입니다.<br>잘 부탁드립니다 :)",
                  "assets/images/speakers/gs.park.jpg",
                  ["https://www.facebook.com/", "https://github.com"]),

      new Speaker("김예건", "망고슬래브", "",
                  "망고슬래브 주식회사 소프트웨어 개발팀에서 .NET 으로 제품을 개발하고 있으며, ibocon.tistory.com 이라는 기술 블로그를 운영하고 있습니다.",
                  "assets/images/speakers/yg.kim.jpg",
                  ["https://www.facebook.com/", "https://github.com"]),

      new Speaker("이은찬", "당근마켓", "DevOps & Beck-end Developer",
                  "당근마켓 클라우드 데브옵스 및 백엔드 개발자입니다.<br>쿠버네티스 및 AWS 인프라 SRE 와 Go 언어로 검색인덱서 및 ElasticSearch 클러스터 관리 하였고 이후 Spring 으로 ECommerce 를 작업하다가 현재 Node 로 백엔드 작업 중이고 .NET 으로 언어 리팩토링하고 있습니다.",
                  "assets/images/speakers/ec.lee.jpeg",
                  ["https://www.facebook.com/", "https://github.com"]),

      new Speaker("박상만", "루나소프트", "",
                  "...",
                  "assets/images/speakers/psmon.jpg",
                  ["https://www.facebook.com/", "https://github.com"]),

      new Speaker("고요한", "", "Windows Developer",
                  "...",
                  "assets/images/speakers/yh.ko.jpg",
                  ["https://www.facebook.com/", "https://github.com"]),

      new Speaker("김상현", "Saige Research", "Software architect",
                  "...",
                  "assets/images/speakers/sh.kim.jpg",
                  ["https://medium.com/@Thwj", "https://github.com/sang-hyeon"]),
    ]
}