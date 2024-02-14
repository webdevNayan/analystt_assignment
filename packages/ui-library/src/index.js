const { init } = require('snabbdom');
const { h } = require('snabbdom/h');
const { Props, State, TemplateFunction } = require('./types');

const patch = init([]);

let currentState = { ...State };

let vnode;

const render = (template, props) => {
  vnode = patch(vnode || document.getElementById('app'), template(props, currentState));
};

const updateState = (newState) => {
  console.log('State changed:', newState);
  currentState = { ...currentState, ...newState };
  render(defaultTemplate, {});
};

const defaultTemplate = (props, state) => TemplateFunction(props, state);

const handleClick = () => {
  console.log('Button clicked');
  updateState({ count: currentState.count + 1 });
};

console.log('Component mounted');

render(defaultTemplate, {});

const { proxy } = require('snabbdom/h');
const nextHandler = {
  set(target, property, value) {
    if (property === 'count') {
      console.log('State changed:', { count: value });
    }
    target[property] = value;
    return true;
  },
};
currentState = new Proxy(currentState, nextHandler);
