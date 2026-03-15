import { ReactNode } from "react";
import Container from "@/layout/Container";

const MainAppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col">
      <header></header>
      <main className="flex-1">
        <Container>{children}</Container>
      </main>
    </div>
  );
};

export default MainAppLayout;
