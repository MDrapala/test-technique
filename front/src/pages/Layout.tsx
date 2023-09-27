import Menu from "../components/menu";
import Modal from "react-modal";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  Modal.setAppElement("#root");

  return (
    <>
      <Menu />
      <div className="pt-14">{children}</div>
    </>
  );
};

export default Layout;
