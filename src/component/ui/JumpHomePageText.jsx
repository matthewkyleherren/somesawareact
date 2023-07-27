export const JumpHomePageText = (props) => {
  return (
    <div
      style={
        props.props === "Company"
          ? {
              color: "#fff",
            }
          : {}
      }
      className="btn-home-page-jump"
    >
      <a
        style={
          props.props === "Company"
            ? {
                backgroundColor: "transparent",
                color: "#fff",
              }
            : {}
        }
        href="/"
      >
        Homepage
      </a>
      &nbsp;/ {props.props}
    </div>
  );
};
