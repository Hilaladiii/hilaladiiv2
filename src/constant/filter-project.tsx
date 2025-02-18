import {
  SiNestjs,
  SiReact,
  SiDocker,
  SiPrisma,
  SiMysql,
  SiJenkins,
  SiMongodb,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

export const FILTER_PROJECT_ITEM = [
  {
    icon: <SiReact size={20} />,
    name: "React",
  },
  {
    icon: <RiNextjsFill size={20} />,
    name: "Nextjs",
  },
  {
    icon: <SiPrisma size={20} />,
    name: "Prisma",
  },
  {
    icon: <SiNestjs size={20} />,
    name: "NestJS",
  },
  {
    icon: <SiMysql size={20} />,
    name: "MySQL",
  },
  {
    icon: <SiMongodb size={20} />,
    name: "MongoDB",
  },
  {
    icon: <SiJenkins size={20} />,
    name: "Jenkins",
  },
  {
    icon: <SiDocker size={20} />,
    name: "Docker",
  },
];
