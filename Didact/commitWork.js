import { createDom, updateDom } from './dom.js';

// 更新DOM
function commitWork(fiber) {
  if (!fiber) {
    return;
  }

  // const domParent = fiber.parent.dom;
  let parentFiber = fiber.parent;
  while (!parentFiber.dom) {
    parentFiber = parentFiber.parent;
  }
  const domParent = parentFiber.dom;
  if (fiber.effectTag === 'PLACEMENT' && fiber.dom != null) {
    domParent.appendChild(fiber.dom);
  } else if (fiber.effectTag === 'UPDATE' && fiber.dom != null) {
    updateDom(fiber.dom, fiber.alternate.props, fiber.props);
  } else if (fiber.effectTag === 'DELETION') {
    domParent.removeChild(fiber.dom);
  }
  commitWork(fiber.child);
  commitWork(fiber.sibling);
}

export default commitWork;
