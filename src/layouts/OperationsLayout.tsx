import { ReactNode } from "react";

type OperationsLayoutProps = {
  children: ReactNode;
};

export const OperationsLayout = ({ children }: OperationsLayoutProps) => {
  return (
    <div className="grid h-screen grid-cols-[200px,1fr] grid-rows-[75px,1fr]">
      <header className="col-start-2 flex items-center border-b bg-gray-50 px-8">
        <h1 className="grow text-xl font-bold">Operations</h1>
        <ul>
          <li>Toggle mode</li>
        </ul>
      </header>
      <aside className="row-span-2 row-start-1 flex flex-col border-r bg-gray-50">
        <div className="flex h-[75px] items-center border-b px-8">LOGO</div>
        <ul className="mt-8 grow px-8">
          <li>some item</li>
        </ul>
        <ul className="space-y-2 px-8 pb-8">
          <li>Github</li>
          <li>File an issue</li>
        </ul>
      </aside>
      <main className="col-start-2">{children}</main>
    </div>
  );
};
