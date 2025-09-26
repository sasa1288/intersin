import { getMainMenuInfo } from '@/lib/get-main-menu';
import Link from 'next/link';

interface IMenuItem {
  id: number;
  title: string;
  url: string;
}

export const HeaderNav = async () => {
  const { logo, MainMenuItems } = await getMainMenuInfo();
  // console.log(MainMenuItems);

  return (
    <header className="w-full bg-white shadow-none border-b border-transparent">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src={`${process.env.STRAPI_HOST}${logo.url}`}
            alt="Intersin by SaSa"
            className="h-19 w-auto"
          />
        </div>
        {/* Nav */}
        <nav className="flex-1 ml-12">
          <ul className="flex items-center gap-7">
            {MainMenuItems.map((item: IMenuItem) => (
              <li key={item.id}>
                <Link
                  href={item.url}
                  className="text-base text-[#111111] hover:text-[#FF3B58] font-semibold transition"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* Portal Cliente */}
        <Link
          href="#"
          className="bg-[#8B7BEA] text-white font-semibold px-5 py-2 rounded-full shadow hover:bg-[#4A3CA4] transition"
        >
          Portal de Cliente
        </Link>
      </div>
    </header>
  );
};
