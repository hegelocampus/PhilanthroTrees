const sprites = {};
function importAll (r) {
  r.keys().forEach(key => sprites[key] = r(key));
}

importAll(require.context(`../../../images/sprites/`, true, /\.png$/));

export default sprites;

