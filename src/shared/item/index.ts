import { ItemType, WeaponType } from "./IItem";
import { ItemManager } from "./ItemManager";

const itemManager = new ItemManager();

// Weapons
// Melee

// Fists
itemManager.addItem("weapon_unarmed", {
  name: "weapon_unarmed",
  label: "Fists",
  weight: 1000,
  type: ItemType.Weapon,
  ammoType: "none",
  weaponType: WeaponType.Melee,
  damage: 10,
  range: 1,
  rateOfFire: 1,
  accuracy: 100,
  clipSize: 1,
  reloadSpeed: 1,
  image: "weapon_unarmed.png",
  unique: true,
  usable: false,
  description: "Fisticuffs",
});

// Dagger
itemManager.addItem("weapon_dagger", {
  name: "weapon_dagger",
  label: "Dagger",
  weight: 1000,
  type: ItemType.Weapon,
  ammoType: "none",
  weaponType: WeaponType.Melee,
  damage: 20,
  range: 1,
  rateOfFire: 1,
  accuracy: 100,
  clipSize: 1,
  reloadSpeed: 1,
  image: "weapon_dagger.png",
  unique: true,
  usable: true,
  description: "A short knife with a pointed and edged blade, used as a weapon",
});

itemManager.addItem("weapon_bat", {
  name: "weapon_bat",
  label: "Bat",
  weight: 1000,
  type: ItemType.Weapon,
  ammoType: "none",
  weaponType: WeaponType.Melee,
  damage: 30,
  range: 1,
  rateOfFire: 1,
  accuracy: 100,
  clipSize: 1,
  reloadSpeed: 1,
  image: "weapon_bat.png",
  unique: true,
  usable: true,
  description: "A stout solid stick",
});

itemManager.addItem("weapon_bottle", {
  name: "weapon_bottle",
  label: "Bottle",
  weight: 1000,
  type: ItemType.Weapon,
  ammoType: "none",
  weaponType: WeaponType.Melee,
  damage: 40,
  range: 1,
  rateOfFire: 1,
  accuracy: 100,
  clipSize: 1,
  reloadSpeed: 1,
  image: "weapon_bottle.png",
  unique: true,
  usable: true,
  description: "A glass or plastic container, typically cylindrical with a narrow neck",
});

itemManager.addItem("weapon_crowbar", {
  name: "weapon_crowbar",
  label: "Crowbar",
  weight: 1000,
  type: ItemType.Weapon,
  ammoType: "none",
  weaponType: WeaponType.Melee,
  damage: 50,
  range: 1,
  rateOfFire: 1,
  accuracy: 100,
  clipSize: 1,
  reloadSpeed: 1,
  image: "weapon_crowbar.png",
  unique: true,
  usable: true,
  description: "A heavy iron lever with one end forged into a wedge",
});

itemManager.addItem("weapon_flashlight", {
  name: "weapon_flashlight",
  label: "Flashlight",
  weight: 1000,
  type: ItemType.Weapon,
  ammoType: "none",
  weaponType: WeaponType.Melee,
  damage: 60,
  range: 1,
  rateOfFire: 1,
  accuracy: 100,
  clipSize: 1,
  reloadSpeed: 1,
  image: "weapon_flashlight.png",
  unique: true,
  usable: true,
  description: "A battery-powered portable light",
});

itemManager.addItem("weapon_golfclub", {
  name: "weapon_golfclub",
  label: "Golf Club",
  weight: 1000,
  type: ItemType.Weapon,
  ammoType: "none",
  weaponType: WeaponType.Melee,
  damage: 70,
  range: 1,
  rateOfFire: 1,
  accuracy: 100,
  clipSize: 1,
  reloadSpeed: 1,
  image: "weapon_golfclub.png",
  unique: true,
  usable: true,
  description: "A club used to hit the ball in golf",
});

itemManager.addItem("weapon_hammer", {
  name: "weapon_hammer",
  label: "Hammer",
  weight: 1000,
  type: ItemType.Weapon,
  ammoType: "none",
  weaponType: WeaponType.Melee,
  damage: 80,
  range: 1,
  rateOfFire: 1,
  accuracy: 100,
  clipSize: 1,
  reloadSpeed: 1,
  image: "weapon_hammer.png",
  unique: true,
  usable: true,
  description: "A tool with a heavy metal head mounted at right angles at the end of a handle",
});

itemManager.addItem("weapon_hatchet", {
  name: "weapon_hatchet",
  label: "Hatchet",
  weight: 1000,
  type: ItemType.Weapon,
  ammoType: "none",
  weaponType: WeaponType.Melee,
  damage: 90,
  range: 1,
  rateOfFire: 1,
  accuracy: 100,
  clipSize: 1,
  reloadSpeed: 1,
  image: "weapon_hatchet.png",
  unique: true,
  usable: true,
  description: "A small axe with a short handle for use in one hand",
});

itemManager.addItem("weapon_knife", {
  name: "weapon_knife",
  label: "Knife",
  weight: 1000,
  type: ItemType.Weapon,
  ammoType: "none",
  weaponType: WeaponType.Melee,
  damage: 100,
  range: 1,
  rateOfFire: 1,
  accuracy: 100,
  clipSize: 1,
  reloadSpeed: 1,
  image: "weapon_knife.png",
  unique: true,
  usable: true,
  description: "A cutting instrument consisting of a blade fixed into a handle",
});

itemManager.addItem("weapon_machete", {
  name: "weapon_machete",
  label: "Machete",
  weight: 1000,
  type: ItemType.Weapon,
  ammoType: "none",
  weaponType: WeaponType.Melee,
  damage: 110,
  range: 1,
  rateOfFire: 1,
  accuracy: 100,
  clipSize: 1,
  reloadSpeed: 1,
  image: "weapon_machete.png",
  unique: true,
  usable: true,
  description: "A broad, heavy knife used as an implement or weapon",
});

itemManager.addItem("weapon_switchblade", {
  name: "weapon_switchblade",
  label: "Switchblade",
  weight: 1000,
  type: ItemType.Weapon,
  ammoType: "none",
  weaponType: WeaponType.Melee,
  damage: 120,
  range: 1,
  rateOfFire: 1,
  accuracy: 100,
  clipSize: 1,
  reloadSpeed: 1,
  image: "weapon_switchblade.png",
  unique: true,
  usable: true,
  description: "A knife with a blade that springs out of the handle when a button is pressed",
});

itemManager.addItem("weapon_nightstick", {
  name: "weapon_nightstick",
  label: "Nightstick",
  weight: 1000,
  type: ItemType.Weapon,
  ammoType: "none",
  weaponType: WeaponType.Melee,
  damage: 130,
  range: 1,
  rateOfFire: 1,
  accuracy: 100,
  clipSize: 1,
  reloadSpeed: 1,
  image: "weapon_nightstick.png",
  unique: true,
  usable: true,
  description: "A short, heavy stick carried by police",
});

itemManager.addItem("weapon_wrench", {
  name: "weapon_wrench",
  label: "Wrench",
  weight: 1000,
  type: ItemType.Weapon,
  ammoType: "none",
  weaponType: WeaponType.Melee,
  damage: 140,
  range: 1,
  rateOfFire: 1,
  accuracy: 100,
  clipSize: 1,
  reloadSpeed: 1,
  image: "weapon_wrench.png",
  unique: true,
  usable: true,
  description: "A tool used for gripping and turning nuts or bolts",
});

itemManager.addItem("weapon_battleaxe", {
  name: "weapon_battleaxe",
  label: "Battleaxe",
  weight: 1000,
  type: ItemType.Weapon,
  ammoType: "none",
  weaponType: WeaponType.Melee,
  damage: 150,
  range: 1,
  rateOfFire: 1,
  accuracy: 100,
  clipSize: 1,
  reloadSpeed: 1,
  image: "weapon_battleaxe.png",
  unique: true,
  usable: true,
  description: "A large broad-bladed axe used in ancient warfare",
});

itemManager.addItem("weapon_poolcue", {
  name: "weapon_poolcue",
  label: "Pool Cue",
  weight: 1000,
  type: ItemType.Weapon,
  ammoType: "none",
  weaponType: WeaponType.Melee,
  damage: 160,
  range: 1,
  rateOfFire: 1,
  accuracy: 100,
  clipSize: 1,
  reloadSpeed: 1,
  image: "weapon_poolcue.png",
  unique: true,
  usable: true,
  description: "A stick used to strike the cue ball in billiards and pool",
});

itemManager.addItem("weapon_briefcase", {
  name: "weapon_briefcase",
  label: "Briefcase",
  weight: 1000,
  type: ItemType.Weapon,
  ammoType: "none",
  weaponType: WeaponType.Melee,
  damage: 170,
  range: 1,
  rateOfFire: 1,
  accuracy: 100,
  clipSize: 1,
  reloadSpeed: 1,
  image: "weapon_briefcase.png",
  unique: true,
  usable: true,
  description: "A flat, rectangular container, typically made of leather, for carrying documents or books",
});

itemManager.addItem("weapon_briefcase_02", {
  name: "weapon_briefcase_02",
  label: "Briefcase 02",
  weight: 1000,
  type: ItemType.Weapon,
  ammoType: "none",
  weaponType: WeaponType.Melee,
  damage: 180,
  range: 1,
  rateOfFire: 1,
  accuracy: 100,
  clipSize: 1,
  reloadSpeed: 1,
  image: "weapon_briefcase_02.png",
  unique: true,
  usable: true,
  description: "A flat, rectangular container, typically made of leather, for carrying documents or books",
});

itemManager.addItem("garbage_bag", {
  name: "garbage_bag",
  label: "Garbage Bag",
  weight: 1000,
  type: ItemType.Weapon,
  ammoType: "none",
  weaponType: WeaponType.Melee,
  damage: 190,
  range: 1,
  rateOfFire: 1,
  accuracy: 100,
  clipSize: 1,
  reloadSpeed: 1,
  image: "garbage_bag.png",
  unique: true,
  usable: true,
  description: "A large plastic bag for rubbish",
});

itemManager.addItem("weapon_handcuffs", {
  name: "weapon_handcuffs",
  label: "Handcuffs",
  weight: 1000,
  type: ItemType.Weapon,
  ammoType: "none",
  weaponType: WeaponType.Melee,
  damage: 200,
  range: 1,
  rateOfFire: 1,
  accuracy: 100,
  clipSize: 1,
  reloadSpeed: 1,
  image: "weapon_handcuffs.png",
  unique: true,
  usable: true,
  description: "A pair of lockable linked metal rings for securing a prisoner's wrists",
});

itemManager.addItem("weapon_bread", {
  name: "weapon_bread",
  label: "Bread",
  weight: 1000,
  type: ItemType.Weapon,
  ammoType: "none",
  weaponType: WeaponType.Melee,
  damage: 210,
  range: 1,
  rateOfFire: 1,
  accuracy: 100,
  clipSize: 1,
  reloadSpeed: 1,
  image: "weapon_bread.png",
  unique: true,
  usable: true,
  description: "Food made of flour, water, and yeast or another leavening agent, mixed together and baked",
});

itemManager.addItem("weapon_stone_hatchet", {
  name: "weapon_stone_hatchet",
  label: "Stone Hatchet",
  weight: 1000,
  type: ItemType.Weapon,
  ammoType: "none",
  weaponType: WeaponType.Melee,
  damage: 220,
  range: 1,
  rateOfFire: 1,
  accuracy: 100,
  clipSize: 1,
  reloadSpeed: 1,
  image: "weapon_stone_hatchet.png",
  unique: true,
  usable: true,
  description: "A small axe with a stone blade",
});

itemManager.addItem("weapon_candycane", {
  name: "weapon_candycane",
  label: "Candy Cane",
  weight: 1000,
  type: ItemType.Weapon,
  ammoType: "none",
  weaponType: WeaponType.Melee,
  damage: 230,
  range: 1,
  rateOfFire: 1,
  accuracy: 100,
  clipSize: 1,
  reloadSpeed: 1,
  image: "weapon_candycane.png",
  unique: true,
  usable: true,
  description: "A cane-shaped stick of candy",
});

// Handguns
// Pistol
itemManager.addItem("weapon_pistol", {
  name: "weapon_pistol",
  label: "Walther P99",
  weight: 1000,
  type: ItemType.Weapon,
  ammoType: "pistol",
  weaponType: WeaponType.Handgun,
  damage: 10,
  range: 10,
  rateOfFire: 1,
  accuracy: 100,
  clipSize: 10,
  reloadSpeed: 1,
  image: "weapon_pistol.png",
  unique: true,
  usable: false,
  description: "A small firearm designed to be held in one hand",
});

itemManager.addItem("weapon_pistol_mk2", {
  name: "weapon_pistol_mk2",
  label: "Pistol Mk II",
  weight: 1000,
  type: ItemType.Weapon,
  ammoType: "pistol",
  weaponType: WeaponType.Handgun,
  damage: 20,
  range: 10,
  rateOfFire: 1,
  accuracy: 100,
  clipSize: 10,
  reloadSpeed: 1,
  image: "weapon_pistol_mk2.png",
  unique: true,
  usable: false,
  description: "An upgraded small firearm designed to be held in one hand",
});

// Combat Pistol
itemManager.addItem("weapon_combatpistol", {
  name: "weapon_combatpistol",
  label: "Combat Pistol",
  weight: 1000,
  type: ItemType.Weapon,
  ammoType: "pistol",
  weaponType: WeaponType.Handgun,
  damage: 30,
  range: 10,
  rateOfFire: 1,
  accuracy: 100,
  clipSize: 10,
  reloadSpeed: 1,
  image: "weapon_combatpistol.png",
  unique: true,
  usable: false,
  description: "A combat version small firearm designed to be held in one hand",
});

// AP Pistol
itemManager.addItem("weapon_appistol", {
  name: "weapon_appistol",
  label: "AP Pistol",
  weight: 1000,
  type: ItemType.Weapon,
  ammoType: "pistol",
  weaponType: WeaponType.Handgun,
  damage: 40,
  range: 10,
  rateOfFire: 1,
  accuracy: 100,
  clipSize: 10,
  reloadSpeed: 1,
  image: "weapon_appistol.png",
  unique: true,
  usable: false,
  description: "A small firearm designed to be held in one hand that is automatic",
});

// SNS Pistol
itemManager.addItem("weapon_snspistol", {
  name: "weapon_snspistol",
  label: "SNS Pistol",
  weight: 1000,
  type: ItemType.Weapon,
  ammoType: "pistol",
  weaponType: WeaponType.Handgun,
  damage: 50,
  range: 10,
  rateOfFire: 1,
  accuracy: 100,
  clipSize: 10,
  reloadSpeed: 1,
  image: "weapon_snspistol.png",
  unique: true,
  usable: false,
  description: "A small firearm designed to be held in one hand",
});

// SNS Pistol Mk II
itemManager.addItem("weapon_snspistol_mk2", {
  name: "weapon_snspistol_mk2",
  label: "SNS Pistol Mk II",
  weight: 1000,
  type: ItemType.Weapon,
  ammoType: "pistol",
  weaponType: WeaponType.Handgun,
  damage: 60,
  range: 10,
  rateOfFire: 1,
  accuracy: 100,
  clipSize: 10,
  reloadSpeed: 1,
  image: "weapon_snspistol_mk2.png",
  unique: true,
  usable: false,
  description: "An upgraded small firearm designed to be held in one hand",
});

// Ray Pistol
itemManager.addItem("weapon_raypistol", {
  name: "weapon_raypistol",
  label: "Ray Pistol",
  weight: 1000,
  type: ItemType.Weapon,
  ammoType: "pistol",
  weaponType: WeaponType.Handgun,
  damage: 70,
  range: 10,
  rateOfFire: 1,
  accuracy: 100,
  clipSize: 10,
  reloadSpeed: 1,
  image: "weapon_raypistol.png",
  unique: true,
  usable: false,
  description: "A small firearm designed to be held in one hand that fires a ray",
});

// Ceramic Pistol
itemManager.addItem("weapon_ceramicpistol", {
  name: "weapon_ceramicpistol",
  label: "Ceramic Pistol",
  weight: 1000,
  type: ItemType.Weapon,
  ammoType: "pistol",
  weaponType: WeaponType.Handgun,
  damage: 80,
  range: 10,
  rateOfFire: 1,
  accuracy: 100,
  clipSize: 10,
  reloadSpeed: 1,
  image: "weapon_ceramicpistol.png",
  unique: true,
  usable: false,
  description: "A small firearm designed to be held in one hand made of ceramic",
});

// Flare Gun
itemManager.addItem("weapon_flaregun", {
  name: "weapon_flaregun",
  label: "Flare Gun",
  weight: 1000,
  type: ItemType.Weapon,
  ammoType: "pistol",
  weaponType: WeaponType.Handgun,
  damage: 60,
  range: 10,
  rateOfFire: 1,
  accuracy: 100,
  clipSize: 10,
  reloadSpeed: 1,
  image: "weapon_flaregun.png",
  unique: true,
  usable: false,
  description: "A gun that fires flares",
});

// Stun Gun
itemManager.addItem("weapon_stungun", {
  name: "weapon_stungun",
  label: "Taser",
  weight: 1000,
  type: ItemType.Weapon,
  ammoType: "none",
  weaponType: WeaponType.Handgun,
  damage: 50,
  range: 10,
  rateOfFire: 1,
  accuracy: 100,
  clipSize: 10,
  reloadSpeed: 1,
  image: "weapon_stungun.png",
  unique: true,
  usable: false,
  description: "A weapon firing barbs attached by wires to batteries, causing temporary paralysis",
});

// Heavy Pistol
itemManager.addItem("weapon_heavypistol", {
  name: "weapon_heavypistol",
  label: "Heavy Pistol",
  weight: 1000,
  type: ItemType.Weapon,
  ammoType: "pistol",
  weaponType: WeaponType.Handgun,
  damage: 60,
  range: 10,
  rateOfFire: 1,
  accuracy: 100,
  clipSize: 10,
  reloadSpeed: 1,
  image: "weapon_heavypistol.png",
  unique: true,
  usable: false,
  description: "A hefty firearm designed to be held in one hand (or attempted)",
});

itemManager.addItem("weapon_heavypistol_mk2", {
  name: "weapon_heavypistol_mk2",
  label: "Heavy Pistol Mk2",
  weight: 1000,
  type: ItemType.Weapon,
  ammoType: "pistol",
  weaponType: WeaponType.Handgun,
  damage: 70,
  range: 10,
  rateOfFire: 1,
  accuracy: 100,
  clipSize: 10,
  reloadSpeed: 1,
  image: "weapon_heavypistol_mk2.png",
  unique: true,
  usable: false,
  description: "An upgraded hefty firearm designed to be held in one hand",
});

// Vintage Pistol
itemManager.addItem("weapon_vintagepistol", {
  name: "weapon_vintagepistol",
  label: "Vintage Pistol",
  weight: 1000,
  type: ItemType.Weapon,
  ammoType: "pistol",
  weaponType: WeaponType.Handgun,
  damage: 80,
  range: 10,
  rateOfFire: 1,
  accuracy: 100,
  clipSize: 10,
  reloadSpeed: 1,
  image: "weapon_vintagepistol.png",
  unique: true,
  usable: false,
  description: "An antique firearm designed to be held in one hand",
});

itemManager.addItem("weapon_vintagepistol_mk2", {
  name: "weapon_vintagepistol_mk2",
  label: "Vintage Pistol Mk2",
  weight: 1000,
  type: ItemType.Weapon,
  ammoType: "pistol",
  weaponType: WeaponType.Handgun,
  damage: 90,
  range: 10,
  rateOfFire: 1,
  accuracy: 100,
  clipSize: 10,
  reloadSpeed: 1,
  image: "weapon_vintagepistol_mk2.png",
  unique: true,
  usable: false,
  description: "An upgraded antique firearm designed to be held in one hand",
});

// Revolver
itemManager.addItem("weapon_revolver", {
  name: "weapon_revolver",
  label: "Revolver",
  weight: 1000,
  type: ItemType.Weapon,
  ammoType: "pistol",
  weaponType: WeaponType.Handgun,
  damage: 100,
  range: 10,
  rateOfFire: 1,
  accuracy: 100,
  clipSize: 10,
  reloadSpeed: 1,
  image: "weapon_revolver.png",
  unique: true,
  usable: false,
  description: "A pistol with revolving chambers enabling several shots to be fired without reloading",
});

// Revolver Mk2
itemManager.addItem("weapon_revolver_mk2", {
  name: "weapon_revolver_mk2",
  label: "Revolver Mk2",
  weight: 1000,
  type: ItemType.Weapon,
  ammoType: "pistol",
  weaponType: WeaponType.Handgun,
  damage: 110,
  range: 10,
  rateOfFire: 1,
  accuracy: 100,
  clipSize: 10,
  reloadSpeed: 1,
  image: "weapon_revolver_mk2.png",
  unique: true,
  usable: false,
  description: "An upgraded pistol with revolving chambers enabling several shots to be fired without reloading",
});

// Navy Revolver
itemManager.addItem("weapon_navyrevolver", {
  name: "weapon_navyrevolver",
  label: "Navy Revolver",
  weight: 1000,
  type: ItemType.Weapon,
  ammoType: "pistol",
  weaponType: WeaponType.Handgun,
  damage: 120,
  range: 10,
  rateOfFire: 1,
  accuracy: 100,
  clipSize: 10,
  reloadSpeed: 1,
  image: "weapon_navyrevolver.png",
  unique: true,
  usable: false,
  description: "A pistol with revolving chambers enabling several shots to be fired without reloading",
});

// Double-Action
itemManager.addItem("weapon_doubleaction", {
  name: "weapon_doubleaction",
  label: "Double-Action",
  weight: 1000,
  type: ItemType.Weapon,
  ammoType: "pistol",
  weaponType: WeaponType.Handgun,
  damage: 120,
  range: 10,
  rateOfFire: 1,
  accuracy: 100,
  clipSize: 10,
  reloadSpeed: 1,
  image: "weapon_doubleaction.png",
  unique: true,
  usable: false,
  description: "A pistol with revolving chambers enabling several shots to be fired without reloading",
});

// Marksman Pistol
itemManager.addItem("weapon_marksmanpistol", {
  name: "weapon_marksmanpistol",
  label: "Marksman Pistol",
  weight: 1000,
  type: ItemType.Weapon,
  ammoType: "pistol",
  weaponType: WeaponType.Handgun,
  damage: 130,
  range: 10,
  rateOfFire: 1,
  accuracy: 100,
  clipSize: 10,
  reloadSpeed: 1,
  image: "weapon_marksmanpistol.png",
  unique: true,
  usable: false,
  description: "A very accurate small firearm designed to be held in one hand",
});

// Gadget Pistol
itemManager.addItem("weapon_gadgetpistol", {
  name: "weapon_gadgetpistol",
  label: "Gadget Pistol",
  weight: 1000,
  type: ItemType.Weapon,
  ammoType: "pistol",
  weaponType: WeaponType.Handgun,
  damage: 140,
  range: 10,
  rateOfFire: 1,
  accuracy: 100,
  clipSize: 10,
  reloadSpeed: 1,
  image: "weapon_gadgetpistol.png",
  unique: true,
  usable: false,
  description: "A small firearm designed to be held in one hand with gadgets",
});

// RayCarbine
itemManager.addItem("weapon_raycarbine", {
  name: "weapon_raycarbine",
  label: "Ray Carbine",
  weight: 1000,
  type: ItemType.Weapon,
  ammoType: "pistol",
  weaponType: WeaponType.Handgun,
  damage: 150,
  range: 10,
  rateOfFire: 1,
  accuracy: 100,
  clipSize: 10,
  reloadSpeed: 1,
  image: "weapon_raycarbine.png",
  unique: true,
  usable: false,
  description: "A small firearm designed to be held in one hand that fires a ray",
});
