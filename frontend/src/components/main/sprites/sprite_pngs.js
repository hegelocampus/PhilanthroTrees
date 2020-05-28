const sprites = {};
function importAll (r) {
  r.keys().forEach(path => sprites[path] = r(path));
}

importAll(require.context(`../../../images/sprites/`, true, /\.png$/));

export default sprites;

