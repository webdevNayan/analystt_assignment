
const Props = {}; 

const State = {
  count: 0,
};

const TemplateFunction = (_, state) => {
  return (
    <div>
      <h1>{state.count}</h1>
      <button onclick={handleClick}>Add</button>
    </div>
  );
};

module.exports = {
  Props,
  State,
  TemplateFunction,
};
