import Header from "@/components/ui/Header";

type Props = {
  children: React.ReactNode;
};
const dashboardLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className="px-3 lg:px-14">{children}</main>
    </>
  );
};

export default dashboardLayout;
