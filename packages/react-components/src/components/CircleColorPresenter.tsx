export function CircleColorPresenter(props) {
  return (
    <div
      style={{
        width: 30,
        height: 30,
        borderRadius: "50%",
        background: props.token.value,
      }}
    ></div>
  );
}
