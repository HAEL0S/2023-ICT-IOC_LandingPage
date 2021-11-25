const Speaker = class {
    constructor(name, compnay, position, pic) {
      this.name = name;
      this.company = compnay;
      this.position = position;
      this.pic = pic;
    }
  };

export function LoadSpeakers() {
    return [
        new Speaker("김상현", "", "Solutions architect", "assets/images/speakers/speaker-7.jpg")
    ]
}