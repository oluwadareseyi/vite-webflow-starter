import Component from "../classes/Component";
import AutoBind from "../utils/bind";

export default class extends Component {
  constructor() {
    super({
      element: "body",
      elements: {},
    });

    AutoBind(this);
  }
}
