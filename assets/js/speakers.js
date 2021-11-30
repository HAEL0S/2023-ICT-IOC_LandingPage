class Speaker {
  constructor(name, company, position, pic, sns) {
    this.name = name;
    this.company = company;
    this.position = position;
    this.pic = pic;
    this.sns = sns;
  }
};

export function LoadSpeakers() {
    return [
      new Speaker("ss", "aa", "Solutions architect", "assets/images/speakers/speaker-1.jpg",
                  ["https://www.facebook.com/", "https://github.com", "https://www.naver.com"]),
                  
      new Speaker("ss", "aa", "Solutions architect", "assets/images/speakers/speaker-2.jpg",
                  ["https://www.facebook.com/"]),

      new Speaker("ss", "aa", "Solutions architect", "assets/images/speakers/speaker-3.jpg",
                  ["https://www.facebook.com/"]),
                  
      new Speaker("ss", "aa", "Solutions architect", "assets/images/speakers/speaker-4.jpg",
                  ["https://www.twitter.com/"]),
      
    ]
}