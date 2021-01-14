const createBoxMesh = (sizes) => {
  const x = sizes.x/2;
  const y = sizes.y/2;
  const z = sizes.z/2;
  const triangles = [
    [[-x, -y, -z], [x, -y, -z], [-x, -y, z]], [[x, -y, z], [-x, -y, z], [x, -y, -z]], // left box edge
    [[-x, y, z], [x, y, -z], [-x, y, -z]], [[x, y, -z], [-x, y, z], [x, y, z]], // right box edge
    [[-x, -y, z], [-x, y, -z], [-x, -y, -z]], [[-x, y, z], [-x, y, -z], [-x, -y, z]], // rear box edge
    [[x, -y, -z], [x, y, -z], [x, -y, z]], [[x, -y, z], [x, y, -z], [x, y, z]], // front box edge
    [[-x, -y, -z], [-x, y, -z], [x, -y, -z]], [[x, y, -z], [x, -y, -z], [-x, y, -z]], // bottom box edge
    [[x, -y, z], [-x, y, z], [-x, -y, z]], [[-x, y, z], [x, -y, z], [x, y, z]] // top box edge
  ];
  return triangles;
};

module.exports = createBoxMesh;
