import { Dijgtal as DijgtalLogo } from "@/app/components/logos/dijgtal";
import { Everlab as EverlabLogo } from "@/app/components/logos/everlab";
import { Relevance as RelevanceLogo } from "@/app/components/logos/relevance";
import { getBlogPosts } from "./blog/utils";
import { PostList } from "./components/post-list";

/* eslint-disable react/no-unescaped-entities */
export default function Home() {
  return (
    <section className="space-y-4">
      <header className="space-y-2 pb-4 border-b border-black">
        <h1 className="font-serif font-medium">Jeffrey Yao</h1>

        <p className="text-[14px]">
          Hi! I'm a software engineer based in Sydney. I currently work as a
          founding engineer at Everlab, building preventative healthcare to help
          Australians live longer, healthier and happier lives.
          <br></br>
          <br></br>
          When I'm not finishing my CS degree at UNSW, I'm gymming or training
          for 6 marathons this year, hanging with mates, taking photos, cooking
          something new, exploring new places, or tinkering on new side
          projects.
          <br></br>
          <br></br>I love meeting new people building cool things and/or who're
          into healthtech, AI and/or design, so if that's you let's grab coffee!
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
          <li className="flex flex-col gap-1 cursor-progress">
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

          <li className="flex flex-col gap-1 cursor-context-menu">
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
        <PostList />
      </section>

      <section className="text-[14px] space-y-2">
        <h1 className="font-serif font-medium">Links</h1>
        <ul className="space-y-1">
          <li>
            <a href="https://twitter.com/jeffdyao" target="_blank">
              Twitter
            </a>
          </li>
          <li>
            <a href="https://github.com/jeffreydyao" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/jeffreydyao/" target="_blank">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="mailto:hi@yaojeffrey.com">hi@yaojeffrey.com</a>
          </li>
        </ul>
      </section>
    </section>
  );
}
