const getParametersTree = (parameters = []) => {
  const map = new Map();
  const tree = [];

  parameters.forEach((param) => {
    map.set(param.id, { ...param, children: [] });
  });

  parameters.forEach((param) => {
    if (param.parentId) {
      map.get(param.parentId).children.push(map.get(param.id));
    } else {
      tree.push(map.get(param.id));
    }
  });

  return tree;
};

const parameters = [
  { title: "Родитель 1", id: 1 },
  { title: "Ребенок 1.1", id: 2, parentId: 1 },
  { title: "Родитель 2", id: 3 },
  { title: "Ребенок 2.1", id: 4, parentId: 3 },
  { title: "Ребенок 2.1.1", id: 5, parentId: 4 },
];

const result = getParametersTree(parameters);
console.log(JSON.stringify(result, null, 2));
