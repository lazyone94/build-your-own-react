import Didact from "./Didact/index.js";

const container = document.getElementById("root");

// const element = {
//   type: "h1",
//   props: {
//     title: "foot",
//     children: "hello",
//   },
// };

// const node = document.createElement(element.type);
// node["title"] = element.props.title;

// const text = document.createTextNode("");
// text.nodeValue = element.props.children;

// node.appendChild(text);

// container.appendChild(node);

const element = Didact.createElement(
  "div",
  {
    id: "foo",
  },
  Didact.createElement("a", null, "bar"),
  Didact.createElement("b")
);

Didact.render(element, container);
