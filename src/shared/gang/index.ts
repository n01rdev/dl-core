import { Gang } from "./Gang";
import { GangManager } from "./GangManager";
import { Grade, GradeLevel } from "./IGang";

const gangFactory = (label: string, grades: Record<string, Grade>) => new Gang(label, grades);
const gangManager = new GangManager(gangFactory);

gangManager.addGang("none", { label: "No Gang", grades: { "0": { name: GradeLevel.Unaffiliated } } });

gangManager.addGang("lostmc", {
  label: "The Lost MC",
  grades: {
    "0": { name: GradeLevel.Recruit },
    "1": { name: GradeLevel.Enforcer },
    "2": { name: GradeLevel.ShotCaller },
    "3": { name: GradeLevel.Boss, isBoss: true },
  },
});

gangManager.addGang("ballas", {
  label: "Ballas",
  grades: {
    "0": { name: GradeLevel.Recruit },
    "1": { name: GradeLevel.Enforcer },
    "2": { name: GradeLevel.ShotCaller },
    "3": { name: GradeLevel.Boss, isBoss: true },
  },
});

gangManager.addGang("vagos", {
  label: "Vagos",
  grades: {
    "0": { name: GradeLevel.Recruit },
    "1": { name: GradeLevel.Enforcer },
    "2": { name: GradeLevel.ShotCaller },
    "3": { name: GradeLevel.Boss, isBoss: true },
  },
});

gangManager.addGang("cartel", {
  label: "Cartel",
  grades: {
    "0": { name: GradeLevel.Recruit },
    "1": { name: GradeLevel.Enforcer },
    "2": { name: GradeLevel.ShotCaller },
    "3": { name: GradeLevel.Boss, isBoss: true },
  },
});
gangManager.addGang("families", {
  label: "Families",
  grades: {
    "0": { name: GradeLevel.Recruit },
    "1": { name: GradeLevel.Enforcer },
    "2": { name: GradeLevel.ShotCaller },
    "3": { name: GradeLevel.Boss, isBoss: true },
  },
});

gangManager.addGang("triads", {
  label: "Triads",
  grades: {
    "0": { name: GradeLevel.Recruit },
    "1": { name: GradeLevel.Enforcer },
    "2": { name: GradeLevel.ShotCaller },
    "3": { name: GradeLevel.Boss, isBoss: true },
  },
});
