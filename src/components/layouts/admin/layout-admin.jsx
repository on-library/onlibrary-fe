import HeaderAdmin from "./header-admin";

const LayoutAdmin = ({ children }) => {
  return (
    <>
      <HeaderAdmin />
      {children}
    </>
  );
};

export default LayoutAdmin;
