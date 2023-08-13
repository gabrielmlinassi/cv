import { ReactNode } from "react";

type OperationsLayoutProps = {
  children: ReactNode;
};

export const OperationsLayout = ({ children }: OperationsLayoutProps) => {
  return (
    <div>
      <header className="fixed inset-x-0 top-0 ml-[200px] flex h-[75px] items-center border-b bg-gray-50 px-8">
        <h1 className="grow text-xl font-bold">Operations</h1>
        <ul>
          <li>Toggle mode</li>
        </ul>
      </header>
      <aside className="fixed inset-y-0 left-0 flex w-[200px] flex-col border-r bg-gray-50">
        <div className="flex h-[75px] items-center border-b px-8">LOGO</div>
        <ul className="mt-8 grow px-8">
          <li>some item</li>
        </ul>
        <ul className="space-y-2 px-8 pb-8">
          <li>Github</li>
          <li>File an issue</li>
        </ul>
      </aside>
      <main>{children}</main>
    </div>
  );
};
