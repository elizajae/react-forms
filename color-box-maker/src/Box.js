function Box({ backgroundColor, width, height }) {
  return (
    <div
      className="box"
      style={{
        width: width,
        height: height,
        backgroundColor: backgroundColor,
      }}
    />
  );
}

export default Box;
