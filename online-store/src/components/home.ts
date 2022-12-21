import { LegoItem } from "./types";

class Home {
  data: Array<LegoItem>;

  constructor(data: Array<LegoItem>) {
    this.data = data;
  }

  async render() {
  }
}

export default Home;