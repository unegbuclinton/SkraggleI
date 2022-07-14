export const EmptyStickyButton = ({ children, style = {}, icon = {}, parentStyle = {} }) => {
  return (
    <div style={parentStyle}>
      <button style={style}>
        {icon?.jsx && <span style={{ color: icon.color, marginRight: 2 }}>{icon?.jsx}</span>}
        {children}
      </button>
    </div>
  );
};
