class Speaker {
  constructor(name, company, position, pic) {
    this.name = name;
    this.company = company;
    this.position = position;
    this.pic = pic;
  }
};

export function LoadSpeakers() {
    return [
      new Speaker("ss", "", "Solutions architect", "assets/images/speakers/speaker-1.jpg"),
      new Speaker("ss", "", "Solutions architect", "assets/images/speakers/speaker-2.jpg"),
      new Speaker("ss", "", "Solutions architect", "assets/images/speakers/speaker-3.jpg"),
      new Speaker("ss", "", "Solutions architect", "assets/images/speakers/speaker-4.jpg"),
      new Speaker("ss", "", "Solutions architect", "assets/images/speakers/speaker-5.jpg"),
      new Speaker("ss", "", "Solutions architect", "assets/images/speakers/speaker-7.jpg"),
      new Speaker("ss", "", "Solutions architect", "assets/images/speakers/speaker-7.jpg"),
      new Speaker("ss", "", "Solutions architect", "assets/images/speakers/speaker-7.jpg"),
      new Speaker("ss", "", "Solutions architect", "assets/images/speakers/speaker-7.jpg"),
      new Speaker("ss", "", "Solutions architect", "assets/images/speakers/speaker-7.jpg"),
    ]
}