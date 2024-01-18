import AppsWidget from "@/components/AppsWidget";
import BlogsWidget from "@/components/BlogsWidget";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import RadioWidget from "@/components/RadioWidget";
import ScheduleWidget from "@/components/ScheduleWidget";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="mt-12 grid max-w-7xl grid-cols-2 items-start gap-6 sm:my-12  lg:grid-cols-2">
        <RadioWidget />
        <AppsWidget />
        <ScheduleWidget />
        <BlogsWidget />
      </div>
    </MaxWidthWrapper>
  );
}
