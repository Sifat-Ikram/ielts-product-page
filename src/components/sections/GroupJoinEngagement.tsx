import { Section } from "@/type/product";
import Image from "next/image";

type GroupJoinEngagementValue = {
  background: {
    image: string;
    primary_color: string;
    secondary_color: string;
  };
  cta: {
    clicked_url: string;
    color: string;
    text: string;
  };
  description: string;
  description_color: string;
  id: string;
  thumbnail: string;
  title: string;
  title_color: string;
  top_left_icon_img: string;
};

export type GroupJoinEngagementSection = Omit<Section, "type" | "values"> & {
  type: "group_join_engagement";
  values: GroupJoinEngagementValue[];
};

export default function GroupJoinEngagement(props: { section: unknown }) {
  const section = props.section as GroupJoinEngagementSection;
  const groupJoin = section?.values?.[0];

  if (!groupJoin) return null;

  return (
    <div
      className="p-10 rounded-xl flex flex-col-reverse md:flex-row gap-10 justify-between items-center"
      style={{
        backgroundImage: `url(${groupJoin.background.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: groupJoin.description_color || "#fff",
      }}
    >
      <div className="w-full md:w-1/2 space-y-5">
        <Image
          src={groupJoin?.top_left_icon_img}
          alt="thumbnail"
          height={80}
          width={180}
        />
        <h1 className={`text-xl font-semibold ${groupJoin?.title_color}`}>
          {groupJoin?.title}
        </h1>
        <h1 className={`text-base font-medium ${groupJoin?.description_color}`}>
          {groupJoin?.description}
        </h1>
        <a
          href={groupJoin.cta.clicked_url}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-green-500 border-b-2 border-green-700 hover:bg-green-600 rounded-lg text-white py-3 text-lg font-semibold text-center"
        >
          {groupJoin.cta.text}
        </a>
      </div>
      <div className="hidden md:flex w-1/2 space-y-5">
        <Image src={groupJoin?.thumbnail} alt="thumbnail" height={300} width={500} />
      </div>
    </div>
  );
}
