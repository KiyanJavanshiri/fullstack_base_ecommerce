import { ReactNode } from "react";
import Container from "@/layout/Container";
import Header from "@/compositions/Header/Header";
import Footer from "@/compositions/Footer";

const MainAppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1 pt-15">
        <Container>{children}</Container>
      </main>
      <Footer />
    </div>
  );
};

export default MainAppLayout;
