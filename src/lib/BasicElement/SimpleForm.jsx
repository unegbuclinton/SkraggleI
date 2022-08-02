export const EmptySimpleForm = ({ children, style = {}, icon = {} }) => {
  return (
    // <div style={parentStyle}>
    <form>
      <button style={style}>
        {icon?.jsx && <span style={{ color: icon.color, marginRight: 2 }}>{icon?.jsx}</span>}
        {children}
      </button>
      <button style={style}>
        {icon?.jsx && <span style={{ color: icon.color, marginRight: 2 }}>{icon?.jsx}</span>}
        {children}
      </button>
    </form>
    // </div>
  );
};
