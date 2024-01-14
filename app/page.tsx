import { Dijgtal as DijgtalLogo } from "@/components/logos/dijgtal";
import { Everlab as EverlabLogo } from "@/components/logos/everlab";
import { Relevance as RelevanceLogo } from "@/components/logos/relevance";

/* eslint-disable react/no-unescaped-entities */
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex flex-col w-screen max-w-2xl py-8 gap-4">
        <header className="space-y-2 pb-4 border-b border-black">
          <h1 className="font-serif font-medium">Jeffrey Yao</h1>

          <p className="text-[14px]">
            Hi! I'm a software engineer based in Sydney. I currently work as a
            founding engineer at Everlab, building preventative healthcare to
            help Australians live longer, healthier and happier lives.
            <br></br>
            <br></br>
            When I'm not finishing my CS degree at UNSW, I'm gymming or training
            for 6 marathons this year, hanging with mates, taking photos,
            cooking something new, exploring new places, or tinkering on new
            side projects.
            <br></br>
            <br></br>I love meeting new people building cool things and/or
            who're into healthtech, AI and/or design, so if that's you let's
            grab coffee!
          </p>
        </header>

        <section className="text-[14px] space-y-2">
          <h1 className="font-serif font-medium">Work</h1>
          <ul className="space-y-1">
            <li className="flex items-center gap-2">
              <EverlabLogo className="w-4" />
              <p>
                Founding Engineer, Everlab{" "}
                <span className="text-gray-600">(2024 - Now)</span>
              </p>
            </li>

            <li className="flex items-center gap-2">
              <RelevanceLogo className="w-4 overflow-visible" />
              <p>
                Software Engineer, Relevance AI{" "}
                <span className="text-gray-600">(2022 - 2023)</span>
              </p>
            </li>

            <li className="flex items-center gap-2">
              <DijgtalLogo className="w-4" />
              <p>
                Web Engineer, DIJGTAL{" "}
                <span className="text-gray-600">(2022)</span>
              </p>
            </li>
          </ul>
        </section>

        <section className="text-[14px] space-y-2">
          <h1 className="font-serif font-medium">Projects</h1>
          <ul className="space-y-2">
            <li className="flex flex-col gap-1">
              <div className="flex items-center gap-1.5">
                <p>Connect 4 Hoops</p>

                <aside className="rounded-full flex items-center justify-center leading-none text-xs px-1 py-[1px] border-gray-400 text-gray-800 border font-medium ">
                  WIP
                </aside>
              </div>

              <span className="text-xs text-gray-500">
                The arcade game, but at home
              </span>
            </li>

            <li className="flex flex-col gap-1">
              <div className="flex items-center gap-1.5">
                <p>Stacks</p>

                <aside className="rounded-full flex items-center justify-center leading-none text-xs px-1 py-[1px] border-gray-400 text-gray-800 border font-medium ">
                  Up next
                </aside>
              </div>

              <span className="text-xs text-gray-500">
                Your financial picture at a glance. iOS and macOS
              </span>
            </li>
          </ul>
        </section>

        <section className="text-[14px] space-y-2">
          <h1 className="font-serif font-medium">Writing</h1>
          <ul className="space-y-1">
            <li>
              <p>22 Lessons At 22</p>
            </li>

            <li>
              <p>We Have Connect 4 Hoops At Home</p>
            </li>

            <li>
              <p>2022 In Review</p>
            </li>
          </ul>
        </section>

        <section className="text-[14px] space-y-2">
          <h1 className="font-serif font-medium">Links</h1>
          <ul className="space-y-1">
            <li>
              <p>GitHub</p>
            </li>
            <li>
              <p>Twitter</p>
            </li>
            <li>
              <p>hello@jyao.me</p>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
