import { isProperty, isGone, isNew, isEvent } from './utils.js';

export const createDom = (fiber) => {
  const dom =
    fiber.type === 'TEXT_ELEMENT'
      ? document.createTextNode('')
      : document.createElement(fiber.type);

  const isProperty = (key) => key !== 'children';

  Object.keys(fiber.props)
    .filter(isProperty)
    .forEach((name) => {
      dom[name] = fiber.props[name];
    });

  Object.keys(fiber.props)
    .filter(isEvent)
    .forEach((name) => {
      const eventType = name.toLowerCase().substring(2);
      dom.addEventListener(eventType, fiber.props[name]);
    });
  return dom;
};

export function updateDom(dom, prevProps, nextProps) {
  // remove old props
  Object.keys(prevProps)
    .filter(isProperty)
    .filter(isGone)
    .forEach((name) => (key[name] = ''));
  // Set new or changed properties
  Object.keys(nextProps)
    .filter(isProperty)
    .filter(isNew)
    .forEach((name) => (key[name] = prevProps[name]));
  //Remove old or changed event listeners
  Object.keys(prevProps)
    .filter(isEvent)
    .filter((key) => !(key in nextProps) || isNew(prevProps, nextProps)(key))
    .forEach((name) => {
      const eventType = name.toLowerCase().substring(2);
      dom.removeEventListener(eventType, prevProps[name]);
    });
  // Add event listeners
  Object.keys(nextProps)
    .filter(isEvent)
    .forEach((name) => {
      const eventType = name.toLowerCase().substring(2);
      dom.addEventListener(eventType, nextProps[name]);
    });
}
