type Button = {
  text: string;
  width: string;
  height: string;
};

export default function Button(props: Button) {
  return (
    <button
      style={{
        backgroundColor: 'green',
        color: 'white',
        padding: '10px',
        width: props?.width,
        height: props?.height,
      }}
    >
      {props?.text}
    </button>
  );
}
