import { WeaponFactory } from "./di/WeaponFactory";
import { IWeapon } from "./IWeapon";
import { WeaponManager } from "./WeaponManager";

const weaponFactory = new WeaponFactory();
const weaponManager = new WeaponManager(weaponFactory);

const weaponData: IWeapon = {
  name: "weapon_pistol",
  label: "Pistol",
  weapontype: "Pistol",
  ammotype: "AMMO_PISTOL",
  damagereason: "Pistoled / Blasted / Plugged / Bust a cap in",
};

weaponManager.addWeapon("weapon_pistol", weaponData);

// TODO: Add more weapons
// TODO: Improve Weapon Types && Scalability
