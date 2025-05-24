import Search from "@/components/Search";
import { Filter, Heart, Lightbulb } from "lucide-react";

export default function Home() {
  return (
    <div className="pt-40 md:h-screen md:w-fit">
      <div className="md:px-0 px-5">
        <h1 className="md:text-5xl text-4xl text-white capitalize font-semibold text-center mb-3">
          Business Name Generator
        </h1>
        <p className="text-white text-center text-xl">
          Generate the perfect Business name by our ai-powered business name
          generator tool!
        </p>
        <Search />
      </div>
      <div className="md:flex justify-between px-36 gap-7 md:px-52 py-20">
        <div className="md:mb-0 mb-10">
          <Lightbulb className="text-primary pb-3" size={30} />
          <h4 className="text-white text-xl font-semibold">Generate Idea</h4>
          <p className="text-white">
            ✨ Unleash your creativity with our Idea Generator – where sparks of
            inspiration meet smart algorithms! Whether you're launching a
            startup, crafting a product, or naming your next big thing, we
            deliver bold, brand-worthy ideas in seconds. Just type, filter, and
            ignite your next success! 🚀
          </p>
        </div>
        <div className="md:mb-0 mb-10">
          <Filter className="text-primary pb-3" size={30} />
          <h4 className="text-white text-xl font-semibold">Filter Result</h4>
          <p className="text-white">
            🎯 Cut through the noise with our smart Filter Result system!
            Instantly refine your ideas by style, length, domain availability,
            and more. Whether you're chasing sleek, quirky, or premium names,
            our filters help you zero in on the perfect match—fast, easy, and
            effortlessly cool. ⚡️✨
          </p>
        </div>
        <div className="md:mb-0 mb-10">
          <Heart className="text-primary pb-3" size={30} />
          <h4 className="text-white text-xl font-semibold">Save Name</h4>
          <p className="text-white">
            💾 Found a name you love? Don’t let it slip away! With our Save Name
            feature, you can bookmark your favorites in one click. Build your
            perfect shortlist, revisit top picks anytime, and stay organized
            while chasing the brand name of your dreams. Your next big idea,
            safely stored! 🌟📌
          </p>
        </div>
      </div>
    </div>
  );
}
