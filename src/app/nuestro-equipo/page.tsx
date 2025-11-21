import AnimatedCounters from "@/app/nuestro-equipo/AnimatedCounters";
import Team from "../../components/Home/Team";
import SkillProgress from "@/app/nuestro-equipo/SkillProgress";

export default function TeamPage() {
  return (
    <div className="container" style={{ paddingTop: 120 }}>
      <Team />
      <AnimatedCounters />
      <SkillProgress />
    </div>
  );
}
