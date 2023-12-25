export const drawCircle = (props) => {
  const { ctx, posX, posY, radius, color } = props;

  ctx.beginPath();
  ctx.arc(posX, posY, radius, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.strokeStyle = color;
  ctx.stroke();
};

export const drawBezier = (props) => {
  const { ctx, posX, posY, radius, color } = props;

  ctx.beginPath();
  ctx.arc(posX, posY, radius, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.strokeStyle = color;
  ctx.stroke();
};

export const getRandomColor = () => {
  return `rgb(${255 * Math.random()}, ${255 * Math.random()},${
    255 * Math.random()
  })`;
};
