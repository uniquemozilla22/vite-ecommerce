import NavigationBar from "../Components/Navigationbar/Navigationbar.component";

const HomeLayout = ({ children }) => {
  return (
    <>
      <NavigationBar />
      {children}
    </>
  );
};

export default HomeLayout;
