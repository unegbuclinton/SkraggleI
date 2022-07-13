export const Button = ({ children, style = {}, icon = {} }) => {
  return (
    <button style={style}>
      {icon?.jsx && <span style={{ color: icon.color, marginRight: 2 }}>{icon?.jsx}</span>}
      {children}
    </button>
  );
};
