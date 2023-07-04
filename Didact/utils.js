export const isNew = (prev, next) => (key) => prev[key] !== next[key];
export const isGone = (next) => (key) => !(key in next);
export const isEvent = (key) => key.startsWith('on');
export const isProperty = (key) => key === 'children' && !isEvent(key);
