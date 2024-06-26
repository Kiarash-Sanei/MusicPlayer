interface Props {
  color: "green" | "red" | "white";
  onClick: () => void;
  text: string;
  textColor?: string;
}
const Button = ({ color, onClick, text, textColor = "" }: Props) => {
  let klass;
  switch (color) {
    case "green":
      klass = "btn btn-success";
      break;
    case "red":
      klass = "btn btn-danger";
      break;
    default:
      klass = "btn bg-white";
  }
  return (
    <a
      className={klass}
      onClick={onClick}
      style={{ margin: "10px", color: textColor }}
    >
      {text}
    </a>
  );
};
export default Button;
