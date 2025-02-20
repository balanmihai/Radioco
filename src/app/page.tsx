import AppsWidget from "@/components/AppsWidget";
import BannerTop from "@/components/BannerTop";
import BannerWidget from "@/components/BannerWidget";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import RadioWidget from "@/components/RadioWidget";
import ScheduleWidget from "@/components/ScheduleWidget";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="my-5 sm:px-8">
        <BannerTop/>
      </div>
      <div className="flex-wrap lg:columns-2 h-full my-6 max-w-7xl items-start sm:columns-1  px-1 lg:px-8">
        <div className="mb-5">
          <RadioWidget />
        </div>
        <div className="mb-5">
          <ScheduleWidget />
        </div>
        <div className="mb-5">
          <AppsWidget />
        </div>
        <BannerWidget />
      </div>
    </MaxWidthWrapper>
  );
}
