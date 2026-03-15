import { ReactNode } from "react";
import Container from "@/layout/Container";
import Header from "@/compositions/Header/Header";

const MainAppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col">
      <Header/>
      <main className="flex-1 pt-15">
        <Container>{children}</Container>
      </main>
    </div>
  );
};

export default MainAppLayout;
