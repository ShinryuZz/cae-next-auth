import Header from "./Header";

const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <main className="bg-neutral-50 px-6 py-20 text-center text-neutral-800">
        {children}
      </main>
    </>
  );
};

export default Layout;
