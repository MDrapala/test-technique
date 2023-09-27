import Menu from "../components/menu";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Menu />
      <div className="pt-14">{children}</div>
    </>
  );
};

export default Layout;
