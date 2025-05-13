import { Outlet } from "react-router-dom";

const DefaultView: React.FC = () => {
  return (
    <div
      style={{
        height: "100vh",
        // background: "#000000",
        background:
          "linear-gradient(134deg, rgba(0, 0, 0, 1) 0%, rgba(82, 82, 82, 1) 52%, rgba(0, 0, 0, 1) 100%)",
      }}
    >
      <div>Header</div>
      <Outlet />
      <div>Footer</div>
    </div>
  );
};

export default DefaultView;
