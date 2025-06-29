import Hero from "./components/hero";
import { FloatingNav } from "./components/ui/floating-navbar";
import Grid from "./components/grid";
import { navItems } from "@/data";
import { Experience } from "./components/experience";
import RecentProject from "./components/recent-project";

export default function Home() {
  return (
    <main className="bg-black-100 relative flex justify-center items-center flex-col mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Experience />
        <RecentProject />
      </div>
    </main>
  );
}
