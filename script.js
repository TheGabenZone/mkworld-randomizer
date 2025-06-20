// Mario Kart characters and their images
const characters = [
    { name: 'Mario', image: 'https://mario.wiki.gallery/images/5/51/MarioMKworld.png', stats: { speed: 6, acceleration: 6, weight: 6, handling: 6 } },
    { name: 'Luigi', image: 'https://mario.wiki.gallery/images/b/b5/LuigiMKworld.png', stats: { speed: 6, acceleration: 6, weight: 6, handling: 6 } },
    { name: 'Peach', image: 'https://mario.wiki.gallery/images/a/a1/PeachMKworld.png', stats: { speed: 5, acceleration: 7, weight: 5, handling: 7 } },
    { name: 'Daisy', image: 'https://mario.wiki.gallery/images/c/cc/DaisyMKworld.png', stats: { speed: 5, acceleration: 7, weight: 5, handling: 7 } },
    { name: 'Yoshi', image: 'https://mario.wiki.gallery/images/c/c9/YoshiMKworld.png', stats: { speed: 5, acceleration: 7, weight: 5, handling: 7 } },
    { name: 'Toad', image: 'https://mario.wiki.gallery/images/8/81/ToadMKworld.png', stats: { speed: 4, acceleration: 8, weight: 4, handling: 8 } },
    { name: 'Koopa Troopa', image: 'https://mario.wiki.gallery/images/4/4e/KoopaMKworld.png', stats: { speed: 4, acceleration: 8, weight: 4, handling: 8 } },
    { name: 'Bowser', image: 'https://mario.wiki.gallery/images/a/af/BowserMKworld.png', stats: { speed: 9, acceleration: 3, weight: 9, handling: 3 } },
    { name: 'Wario', image: 'https://mario.wiki.gallery/images/3/3d/WarioMKworld.png', stats: { speed: 8, acceleration: 4, weight: 8, handling: 4 } },
    { name: 'Waluigi', image: 'https://mario.wiki.gallery/images/5/52/WaluigiMKworld.png', stats: { speed: 8, acceleration: 4, weight: 8, handling: 4 } },
    { name: 'Rosalina', image: 'https://mario.wiki.gallery/images/0/06/RosalinaMKworld.png', stats: { speed: 7, acceleration: 5, weight: 7, handling: 5 } },
    { name: 'Pauline', image: 'https://mario.wiki.gallery/images/d/d7/PaulineMKworld.png', stats: { speed: 7, acceleration: 5, weight: 7, handling: 5 } },
    { name: 'Baby Mario', image: 'https://mario.wiki.gallery/images/0/0b/Babymariomkworld.png', stats: { speed: 3, acceleration: 9, weight: 3, handling: 9 } },
    { name: 'Baby Luigi', image: 'https://mario.wiki.gallery/images/a/af/Babyluigimkworld.png', stats: { speed: 3, acceleration: 9, weight: 3, handling: 9 } },
    { name: 'Baby Peach', image: 'https://mario.wiki.gallery/images/8/82/Babypeachmkworld.png', stats: { speed: 3, acceleration: 10, weight: 2, handling: 9 } },
    { name: 'Baby Daisy', image: 'https://mario.wiki.gallery/images/d/d5/Babydaisymkworld.png', stats: { speed: 3, acceleration: 10, weight: 2, handling: 9 } },
    { name: 'Baby Rosalina', image: 'https://mario.wiki.gallery/images/a/aa/Babyrosalinamkworld.png', stats: { speed: 3, acceleration: 9, weight: 3, handling: 9 } },
    { name: 'Lakitu', image: 'https://mario.wiki.gallery/images/2/23/Lakitumkworld.png', stats: { speed: 4, acceleration: 8, weight: 4, handling: 8 } },
    { name: 'Toadette', image: 'https://mario.wiki.gallery/images/6/6f/Toadettemkworld.png', stats: { speed: 4, acceleration: 8, weight: 4, handling: 8 } },
    { name: 'Bowser Jr.', image: 'https://mario.wiki.gallery/images/7/79/Bowserjrmkworld.png', stats: { speed: 5, acceleration: 7, weight: 5, handling: 7 } },
    { name: 'Birdo', image: 'https://mario.wiki.gallery/images/1/12/Birdomkworld.png', stats: { speed: 6, acceleration: 6, weight: 6, handling: 6 } },
    { name: 'King Boo', image: 'https://mario.wiki.gallery/images/8/80/Kingboomkworld.png', stats: { speed: 7, acceleration: 5, weight: 7, handling: 5 } },
    { name: 'Shy Guy', image: 'https://mario.wiki.gallery/images/e/ea/Shyguymkworld.png', stats: { speed: 4, acceleration: 8, weight: 4, handling: 8 } },
    { name: 'Donkey Kong', image: 'https://mario.wiki.gallery/images/3/31/Dkmkworld.png', stats: { speed: 8, acceleration: 4, weight: 8, handling: 4 } },
];

const npcs = [
    { name: 'Nabbit', image: 'https://mario.wiki.gallery/images/4/4d/Nabbitmkworld.png', stats: { speed: 4, acceleration: 8, weight: 4, handling: 8 } },
    { name: 'Piranha Plant', image: 'https://mario.wiki.gallery/images/b/b1/MKWorld_Piranha_Plant_Racer.png', stats: { speed: 7, acceleration: 5, weight: 7, handling: 5 } },
    { name: 'Hammer Bro', image: 'https://mario.wiki.gallery/images/8/8a/Hammerbromkworld.png', stats: { speed: 6, acceleration: 6, weight: 6, handling: 6 } },
    { name: 'Monty Mole', image: 'https://mario.wiki.gallery/images/9/95/Montymolemkworld.png', stats: { speed: 5, acceleration: 7, weight: 5, handling: 7 }  },
    { name: 'Goomba', image: 'https://mario.wiki.gallery/images/a/a6/MKworld_Goomba.png', stats: { speed: 3, acceleration: 9, weight: 3, handling: 9 } },
    { name: 'Spike', image: 'https://mario.wiki.gallery/images/4/4d/Spikemkworld.png', stats: { speed: 3, acceleration: 9, weight: 3, handling: 9 } },
    { name: 'Sidestepper', image: 'https://mario.wiki.gallery/images/3/33/Mario_Kart_World_Sidestepper.png', stats: { speed: 3, acceleration: 9, weight: 3, handling: 9 } },
    { name: 'Cheep Cheep', image: 'https://mario.wiki.gallery/images/2/29/Mario_Kart_World_Cheep_Cheep.png', stats: { speed: 4, acceleration: 8, weight: 4, handling: 8 } },
    { name: 'Dry Bones', image: 'https://mario.wiki.gallery/images/d/d3/MK_NS2_Dry_Bones.png', stats: { speed: 3, acceleration: 9, weight: 3, handling: 9 } },
    { name: 'Wiggler', image: 'https://mario.wiki.gallery/images/9/93/MKWorld_Wiggler.png', stats: { speed: 8, acceleration: 4, weight: 8, handling: 4 } },
    { name: 'Cataquack', image: 'https://mario.wiki.gallery/images/6/6b/Cataquackmkworld.png', stats: { speed: 7, acceleration: 5, weight: 7, handling: 5 } },
    { name: 'Pianta', image: 'https://mario.wiki.gallery/images/2/2f/Mario_Kart_World_Pianta.png', stats: { speed: 7, acceleration: 5, weight: 7, handling: 5 } },
    { name: 'Rocky Wrench', image: 'https://mario.wiki.gallery/images/e/e9/Mario_Kart_World_Rocky_Wrench.png', stats: { speed: 6, acceleration: 6, weight: 6, handling: 6 } },
    { name: 'Conkdor', image: 'https://mario.wiki.gallery/images/2/22/MKWorld_Conkdor_icon.png', stats: { speed: 7, acceleration: 5, weight: 7, handling: 5 } },
    { name: 'Pokey', image: 'https://mario.wiki.gallery/images/f/fc/Pokey_MKWorld_Select.png', stats: { speed: 6, acceleration: 6, weight: 6, handling: 6 } },
    { name: 'Peepa', image: 'https://mario.wiki.gallery/images/4/42/Peepa_MKWorld_Select.png', stats: { speed: 3, acceleration: 9, weight: 3, handling: 9 } },
    { name: 'Swoop', image: 'https://mario.wiki.gallery/images/2/27/Swoop_MKWorld_Select.png', stats: { speed: 3, acceleration: 10, weight: 2, handling: 9 } },
    { name: 'Cow', image: 'https://mario.wiki.gallery/images/f/f4/Cow_MKWorld_Select.png', stats: { speed: 3, acceleration: 10, weight: 2, handling: 9 } },
    { name: 'Stingby', image: 'https://mario.wiki.gallery/images/5/50/Stingby_MKWorld_Select.png', stats: { speed: 4, acceleration: 8, weight: 4, handling: 8 } },
    { name: 'Fish Bones', image: 'https://mario.wiki.gallery/images/4/4a/MKWorld_Fishbone_Select.png', stats: { speed: 3, acceleration: 9, weight: 3, handling: 9 } },
    { name: 'Coin Coffer', image: 'https://mario.wiki.gallery/images/2/2c/Coin_Coffer_MKWorld_Select.png', stats: { speed: 5, acceleration: 7, weight: 5, handling: 7 } },
    { name: 'Snowman', image: 'https://mario.wiki.gallery/images/8/8e/SnowmanSelect.png', stats: { speed: 7, acceleration: 5, weight: 7, handling: 5 } },
    { name: 'Penguin', image: 'https://mario.wiki.gallery/images/9/90/PenguinSelect.png', stats: { speed: 6, acceleration: 6, weight: 6, handling: 6 } },
    { name: 'Dolphin', image: 'https://mario.wiki.gallery/images/6/69/Dolphin_MKWorld_Select.png', stats: { speed: 5, acceleration: 7, weight: 5, handling: 7 } },
    { name: 'Para-Biddybud', image: 'https://mario.wiki.gallery/images/9/90/Bbmkworld.png', stats: { speed: 3, acceleration: 10, weight: 2, handling: 9 } },
    { name: 'Chargin Chuck', image: 'https://mario.wiki.gallery/images/2/21/Chargin%27_Chuck_MKWorld_Select.png', stats: { speed: 3, acceleration: 10, weight: 2, handling: 9 } }
];

const outfits = [
    { name: 'Touring Mario', image: 'https://mario.wiki.gallery/images/6/67/Mariotourmkworld.png', stats: { speed: 6, acceleration: 6, weight: 6, handling: 6 } },
    { name: 'Pro Racer Mario', image: 'https://mario.wiki.gallery/images/f/fd/MKWorld_Mario_Pro_Racer_Outfit.png', stats: { speed: 6, acceleration: 6, weight: 6, handling: 6 } },
    { name: 'Mechanic Mario', image: 'https://mario.wiki.gallery/images/6/6f/MKWorld_Mechanic_Mario.png', stats: { speed: 6, acceleration: 6, weight: 6, handling: 6 } },
    { name: 'Dune Rider Mario', image: 'https://mario.wiki.gallery/images/0/00/MKWorld_Mario_Costume_6.png', stats: { speed: 6, acceleration: 6, weight: 6, handling: 6 } },
    { name: 'Cowboy Mario', image: 'https://mario.wiki.gallery/images/6/68/Mario_Cowboy_MKWorld_Select.png', stats: { speed: 6, acceleration: 6, weight: 6, handling: 6 } },
    { name: 'Sightseeing Mario', image: 'https://mario.wiki.gallery/images/e/e5/Sightseeing_MarioSelect.png', stats: { speed: 6, acceleration: 6, weight: 6, handling: 6 } },
    { name: 'Aviator Mario', image: 'https://mario.wiki.gallery/images/3/34/MKWorld_Mario_Costume_3.png', stats: { speed: 6, acceleration: 6, weight: 6, handling: 6 } },
    { name: 'Happi Mario', image: 'https://mario.wiki.gallery/images/c/c8/Mhmkworld.png', stats: { speed: 6, acceleration: 6, weight: 6, handling: 6 } },
    { name: 'All-Terrain Mario', image: 'https://mario.wiki.gallery/images/6/6e/Mario_All_Terrain.png', stats: { speed: 6, acceleration: 6, weight: 6, handling: 6 } },
    { name: 'Touring Luigi', image: 'https://mario.wiki.gallery/images/6/60/Luigitourmkworld.png', stats: { speed: 6, acceleration: 6, weight: 6, handling: 6 } },
    { name: 'Pro Racer Luigi', image: 'https://mario.wiki.gallery/images/5/5f/Luigi_Pro_Racer.png', stats: { speed: 6, acceleration: 6, weight: 6, handling: 6 } },
    { name: 'Mechanic Luigi', image: 'https://mario.wiki.gallery/images/d/dc/MKWorld_Luigi_Mechanic_alt.png', stats: { speed: 6, acceleration: 6, weight: 6, handling: 6 } },
    { name: 'Farmer Luigi', image: 'https://mario.wiki.gallery/images/9/9e/Luigi_Farmer_MKWorld_Select.png', stats: { speed: 6, acceleration: 6, weight: 6, handling: 6 } },
    { name: 'Happi Luigi', image: 'https://mario.wiki.gallery/images/e/ec/Lhmkworld.png', stats: { speed: 6, acceleration: 6, weight: 6, handling: 6 } },
    { name: 'All-Terrain Luigi', image: 'https://mario.wiki.gallery/images/b/b6/MKWorld_Luigi_All-Terrain_alt.png', stats: { speed: 6, acceleration: 6, weight: 6, handling: 6 } },
    { name: 'Oasis Luigi', image: 'https://mario.wiki.gallery/images/f/ff/MKWorld_Luigi_Oasis_alt.png', stats: { speed: 6, acceleration: 6, weight: 6, handling: 6 } },
    { name: 'Gondolier Luigi', image: 'https://mario.wiki.gallery/images/5/58/Luigi_Gondolier.png', stats: { speed: 6, acceleration: 6, weight: 6, handling: 6 } },
    { name: 'Touring Peach', image: 'https://mario.wiki.gallery/images/4/4d/Peachtourmkworld.png', stats: { speed: 5, acceleration: 7, weight: 5, handling: 7 } },
    { name: 'Pro Racer Peach', image: 'https://mario.wiki.gallery/images/a/a6/MKWorld_Peach_Costume_1.png', stats: { speed: 5, acceleration: 7, weight: 5, handling: 7 } },
    { name: 'Farmer Peach', image: 'https://mario.wiki.gallery/images/7/74/Peach_Farmer_MKWorld_Select.png', stats: { speed: 5, acceleration: 7, weight: 5, handling: 7 } },
    { name: 'Sightseeing Peach', image: 'https://mario.wiki.gallery/images/b/b8/MKWorld_Peach_Sightseeing_alt.png', stats: { speed: 5, acceleration: 7, weight: 5, handling: 7 } },
    { name: 'Aviator Peach', image: 'https://mario.wiki.gallery/images/e/ee/MKWorld_Peach_Aviator_alt.png', stats: { speed: 5, acceleration: 7, weight: 5, handling: 7 } },
    { name: 'Yukata Peach', image: 'https://mario.wiki.gallery/images/b/b8/Phmkworld.png', stats: { speed: 5, acceleration: 7, weight: 5, handling: 7 } },
    { name: 'Aero Peach', image: 'https://mario.wiki.gallery/images/b/b0/MKWorld_Peach_Costume_5.png', stats: { speed: 5, acceleration: 7, weight: 5, handling: 7 } },
    { name: 'Touring Daisy', image: 'https://mario.wiki.gallery/images/a/ad/Daisytourmkworld.png', stats: { speed: 5, acceleration: 7, weight: 5, handling: 7 } },
    { name: 'Pro Racer Daisy', image: 'https://mario.wiki.gallery/images/c/cc/MK_World_Daisy_black_scarf_costume.png', stats: { speed: 5, acceleration: 7, weight: 5, handling: 7 } },
    { name: 'Oasis Daisy', image: 'https://mario.wiki.gallery/images/4/4e/Daisy_Oasis.png', stats: { speed: 5, acceleration: 7, weight: 5, handling: 7 } },
    { name: 'Aero Daisy', image: 'https://mario.wiki.gallery/images/5/52/MKWorld_Daisy_Costume_3.png', stats: { speed: 5, acceleration: 7, weight: 5, handling: 7 } },
    { name: 'Vacation Daisy', image: 'https://mario.wiki.gallery/images/6/64/MKWorld_Daisy_Vacation_alt.png', stats: { speed: 5, acceleration: 7, weight: 5, handling: 7 } },
    { name: 'Touring Yoshi', image: 'https://mario.wiki.gallery/images/5/5d/Yoshitourmkworld.png', stats: { speed: 5, acceleration: 7, weight: 5, handling: 7 } },
    { name: 'Pro Racer Yoshi', image: 'https://mario.wiki.gallery/images/f/f6/MKWorld_Yoshi_Pro_Racer_alt.png', stats: { speed: 5, acceleration: 7, weight: 5, handling: 7 } },
    { name: 'Matsuri Yoshi', image: 'https://mario.wiki.gallery/images/8/8c/Ymmkworld.png', stats: { speed: 5, acceleration: 7, weight: 5, handling: 7 } },
    { name: 'Swimwear Yoshi', image: 'https://mario.wiki.gallery/images/1/14/MKW_Orange_Yoshi_swim.png', stats: { speed: 5, acceleration: 7, weight: 5, handling: 7 } },
    { name: 'Aristocrat Yoshi', image: 'https://mario.wiki.gallery/images/9/9d/MKW_Purple_Yoshi_top_hat.png', stats: { speed: 5, acceleration: 7, weight: 5, handling: 7 } },
    { name: 'Soft Server Yoshi', image: 'https://mario.wiki.gallery/images/c/cc/Yoshi_Pink_MKWorld_Select.png', stats: { speed: 5, acceleration: 7, weight: 5, handling: 7 } },
    { name: 'Biker Yoshi', image: 'https://mario.wiki.gallery/images/6/62/YoshiBikerSelect.png', stats: { speed: 5, acceleration: 7, weight: 5, handling: 7 } },
    { name: 'Pro Racer Toad', image: 'https://mario.wiki.gallery/images/a/a5/MKWorld_Toad_Costume_3.png', stats: { speed: 4, acceleration: 8, weight: 4, handling: 8 } },
    { name: 'Explorer Toad', image: 'https://mario.wiki.gallery/images/4/4a/MKWorld_Toad_Costume_1.png', stats: { speed: 4, acceleration: 8, weight: 4, handling: 8 } },
    { name: 'Engineer Toad', image: 'https://mario.wiki.gallery/images/f/fd/MKWorld_Toad_train_outfit.png', stats: { speed: 4, acceleration: 8, weight: 4, handling: 8 } },
    { name: 'Burger Bud Toad', image: 'https://mario.wiki.gallery/images/5/59/ToadBurgerSelect.png', stats: { speed: 4, acceleration: 8, weight: 4, handling: 8 } },
    { name: 'Runner Koopa Troopa', image: 'https://mario.wiki.gallery/images/b/b0/Krtourmkworld.png', stats: { speed: 4, acceleration: 8, weight: 4, handling: 8 } },
    { name: 'Pro Racer Koopa Troopa', image: 'https://mario.wiki.gallery/images/d/d3/MKWorld_Koopa_Troopa_Pro_Racer_alt.png', stats: { speed: 4, acceleration: 8, weight: 4, handling: 8 } },
    { name: 'All-Terrain Koopa Troopa', image: 'https://mario.wiki.gallery/images/c/c9/MKWorld_Koopa_Troopa_All-Terrain_alt.png', stats: { speed: 4, acceleration: 8, weight: 4, handling: 8 } },
    { name: 'Sailor Koopa Troopa', image: 'https://mario.wiki.gallery/images/3/31/MKWorld_Koopa_Troopa_Sailor_alt.png', stats: { speed: 4, acceleration: 8, weight: 4, handling: 8 } },
    { name: 'Work Crew Koopa Troopa', image: 'https://mario.wiki.gallery/images/a/a4/MKWorld_Construction_Koopa.png', stats: { speed: 4, acceleration: 8, weight: 4, handling: 8 } },
    { name: 'Bowser', image: 'https://mario.wiki.gallery/images/a/af/BowserMKworld.png', stats: { speed: 9, acceleration: 3, weight: 9, handling: 3 } },
    { name: 'Pro Racer Bowser', image: 'https://mario.wiki.gallery/images/e/ec/MKWorld_Bowser_Pro_Racer_alt.png', stats: { speed: 9, acceleration: 3, weight: 9, handling: 3 } },
    { name: 'All-Terrain Bowser', image: 'https://mario.wiki.gallery/images/7/72/Bowser_All_Terrain.png', stats: { speed: 9, acceleration: 3, weight: 9, handling: 3 } },
    { name: 'Biker Bowser', image: 'https://mario.wiki.gallery/images/b/b4/Bowser_Biker.png', stats: { speed: 9, acceleration: 3, weight: 9, handling: 3 } },
    { name: 'Supercharged Bowser', image: 'https://mario.wiki.gallery/images/0/0c/Bowser_Costume_1_MKWorld_Select.png', stats: { speed: 9, acceleration: 3, weight: 9, handling: 3 } },
    { name: 'Pro Racer Wario', image: 'https://mario.wiki.gallery/images/9/9f/Wario_Racer.png', stats: { speed: 8, acceleration: 4, weight: 8, handling: 4 } },
    { name: 'Oasis Wario', image: 'https://mario.wiki.gallery/images/9/99/Wario_Oasis.png', stats: { speed: 8, acceleration: 4, weight: 8, handling: 4 } },
    { name: 'Biker Wario', image: 'https://mario.wiki.gallery/images/6/6c/Wario_Biker.png', stats: { speed: 8, acceleration: 4, weight: 8, handling: 4 } },
    { name: 'Work Crew Wario', image: 'https://mario.wiki.gallery/images/a/a7/Wario_Construction.png', stats: { speed: 8, acceleration: 4, weight: 8, handling: 4 } },
    { name: 'Pirate Wario', image: 'https://mario.wiki.gallery/images/4/49/Wario_Pirate.png', stats: { speed: 8, acceleration: 4, weight: 8, handling: 4 } },
    { name: 'Wicked Wasp Wario', image: 'https://mario.wiki.gallery/images/3/36/Wario_Wicked_Wasp_MKWorld_Select.png', stats: { speed: 8, acceleration: 4, weight: 8, handling: 4 } },
    { name: 'Road Ruffian Wario', image: 'https://mario.wiki.gallery/images/b/b0/Wario_Road_Ruffian.png', stats: { speed: 8, acceleration: 4, weight: 8, handling: 4 } },
    { name: 'Pro Racer Waluigi', image: 'https://mario.wiki.gallery/images/9/93/Waluigi_Dune_Rider.png', stats: { speed: 8, acceleration: 4, weight: 8, handling: 4 } },
    { name: 'Biker Waluigi', image: 'https://mario.wiki.gallery/images/8/87/Waluigi_Biker.png', stats: { speed: 8, acceleration: 4, weight: 8, handling: 4 } },
    { name: 'Road Ruffian Waluigi', image: 'https://mario.wiki.gallery/images/a/a6/Waluigi_Road_Ruffian.png', stats: { speed: 8, acceleration: 4, weight: 8, handling: 4 } },
    { name: 'Wampire Waluigi', image: 'https://mario.wiki.gallery/images/1/12/Waluigi_Wampire.png', stats: { speed: 8, acceleration: 4, weight: 8, handling: 4 } },
    { name: 'Mariachi Waluigi', image: 'https://mario.wiki.gallery/images/8/8f/Waluigi_Mariachi_MKWorld_Select.png', stats: { speed: 8, acceleration: 4, weight: 8, handling: 4 } },
    { name: 'Touring Rosalina', image: 'https://mario.wiki.gallery/images/c/c0/Rtourmkworld.png', stats: { speed: 7, acceleration: 5, weight: 7, handling: 5 } },
    { name: 'Pro Racer Rosalina', image: 'https://mario.wiki.gallery/images/7/7c/Rosalina_Racer.png', stats: { speed: 7, acceleration: 5, weight: 7, handling: 5 } },
    { name: 'Aero Rosalina', image: 'https://mario.wiki.gallery/images/0/06/Rosalina_Biker.png', stats: { speed: 7, acceleration: 5, weight: 7, handling: 5 } },
    { name: 'Aurora Rosalina', image: 'https://mario.wiki.gallery/images/4/47/MKW_Rosalina_Aurora_alt.png', stats: { speed: 7, acceleration: 5, weight: 7, handling: 5 } },
    { name: 'Aero Pauline', image: 'https://mario.wiki.gallery/images/c/ce/Pauline_Aero.png', stats: { speed: 7, acceleration: 5, weight: 7, handling: 5 } },
    { name: 'Pro Racer Baby Mario', image: 'https://mario.wiki.gallery/images/2/2f/Baby_Mario_Racer.png', stats: { speed: 3, acceleration: 9, weight: 3, handling: 9 } },
    { name: 'Swimwear Baby Mario', image: 'https://mario.wiki.gallery/images/9/96/Baby_Mario_Swimwear.png', stats: { speed: 3, acceleration: 9, weight: 3, handling: 9 } },
    { name: 'Work Crew Baby Mario', image: 'https://mario.wiki.gallery/images/2/25/Baby_Mario_Work_Crew.png', stats: { speed: 3, acceleration: 9, weight: 3, handling: 9 } },
    { name: 'Pro Racer Baby Luigi', image: 'https://mario.wiki.gallery/images/2/25/Baby_Luigi_Racer.png', stats: { speed: 3, acceleration: 9, weight: 3, handling: 9 } },
    { name: 'Work Crew Baby Luigi', image: 'https://mario.wiki.gallery/images/1/1b/Baby_Luigi_Work_Crew.png', stats: { speed: 3, acceleration: 9, weight: 3, handling: 9 } },
    { name: 'Touring Baby Peach', image: 'https://mario.wiki.gallery/images/2/27/Bptourmkworld.png', stats: { speed: 3, acceleration: 10, weight: 2, handling: 9 } },
    { name: 'Pro Racer Baby Peach', image: 'https://mario.wiki.gallery/images/b/bb/Baby_Peach_Racer.png', stats: { speed: 3, acceleration: 10, weight: 2, handling: 9 } },
    { name: 'Explorer Baby Peach', image: 'https://mario.wiki.gallery/images/7/71/Bpermkworld.png', stats: { speed: 3, acceleration: 10, weight: 2, handling: 9 } },
    { name: 'Sailor Baby Peach', image: 'https://mario.wiki.gallery/images/1/1b/Baby_Peach_Sailor.png', stats: { speed: 3, acceleration: 10, weight: 2, handling: 9 } },
    { name: 'Touring Baby Daisy', image: 'https://mario.wiki.gallery/images/7/79/Bdtourmkworld.png', stats: { speed: 3, acceleration: 10, weight: 2, handling: 9 } },
    { name: 'Pro Racer Baby Daisy', image: 'https://mario.wiki.gallery/images/0/02/Baby_Daisy_Racer.png', stats: { speed: 3, acceleration: 10, weight: 2, handling: 9 } },
    { name: 'Explorer Baby Daisy', image: 'https://mario.wiki.gallery/images/3/32/Bdermkworld.png', stats: { speed: 3, acceleration: 10, weight: 2, handling: 9 } },
    { name: 'Sailor Baby Daisy', image: 'https://mario.wiki.gallery/images/9/99/MKWorld_Baby_Daisy_alternate_outfit.png', stats: { speed: 3, acceleration: 10, weight: 2, handling: 9 } },
    { name: 'Touring Baby Rosalina', image: 'https://mario.wiki.gallery/images/7/75/Brtourmkworld.png', stats: { speed: 3, acceleration: 9, weight: 3, handling: 9 } },
    { name: 'Pro Racer Baby Rosalina', image: 'https://mario.wiki.gallery/images/8/83/MKWorld_Baby_Rosalina_Pro_Racer_alt.png', stats: { speed: 3, acceleration: 9, weight: 3, handling: 9 } },
    { name: 'Explorer Baby Rosalina', image: 'https://mario.wiki.gallery/images/5/50/Brermkworld.png', stats: { speed: 3, acceleration: 9, weight: 3, handling: 9 } },
    { name: 'Sailor Baby Rosalina', image: 'https://mario.wiki.gallery/images/d/d6/Baby_Rosalina_Sailor.png', stats: { speed: 3, acceleration: 9, weight: 3, handling: 9 } },
    { name: 'Pit Crew Lakitu', image: 'https://mario.wiki.gallery/images/9/92/MKWorld_Lakitu_Pit_Crew_alt.png', stats: { speed: 4, acceleration: 8, weight: 4, handling: 8 } },
    { name: 'Fisherman Lakitu', image: 'https://mario.wiki.gallery/images/b/bf/MK_World_Lakitu_Fisherman_char_select.png', stats: { speed: 4, acceleration: 8, weight: 4, handling: 8 } },
    { name: 'Pro Racer Toadette', image: 'https://mario.wiki.gallery/images/9/96/MKWorld_New_Toadette_Costume.png', stats: { speed: 4, acceleration: 8, weight: 4, handling: 8 } },
    { name: 'Soft Server Toadette', image: 'https://mario.wiki.gallery/images/c/c1/Toadette_Soft_Server_MKWorld_Select.png', stats: { speed: 4, acceleration: 8, weight: 4, handling: 8 } },
    { name: 'Conductor Toadette', image: 'https://mario.wiki.gallery/images/0/01/MKWorld_Toadette_Costume_2.png', stats: { speed: 4, acceleration: 8, weight: 4, handling: 8 } },
    { name: 'Explorer Toadette', image: 'https://mario.wiki.gallery/images/6/69/MKWorld_Toadette_Costume_1.png', stats: { speed: 4, acceleration: 8, weight: 4, handling: 8 } },
    { name: 'Pro Racer Bowser Jr.', image: 'https://mario.wiki.gallery/images/0/05/MKWorld_Bowser_Jr_Pro_Racer_alt.png', stats: { speed: 5, acceleration: 7, weight: 5, handling: 7 } },
    { name: 'Biker Bowser Jr.', image: 'https://mario.wiki.gallery/images/3/39/Bowser_Jr_Biker.png', stats: { speed: 5, acceleration: 7, weight: 5, handling: 7 } },
    { name: 'Explorer Bowser Jr.', image: 'https://mario.wiki.gallery/images/7/73/Junior_Explorer.png', stats: { speed: 5, acceleration: 7, weight: 5, handling: 7 } },
    { name: 'Pro Racer Birdo', image: 'https://mario.wiki.gallery/images/0/06/Birdo_Racer.png', stats: { speed: 6, acceleration: 6, weight: 6, handling: 6 } },
    { name: 'Vacation Birdo', image: 'https://mario.wiki.gallery/images/6/66/Birdo_Vacation.png', stats: { speed: 6, acceleration: 6, weight: 6, handling: 6 } },
    { name: 'Pro Racer King Boo', image: 'https://mario.wiki.gallery/images/7/7c/MKWorld_King_Boo_racing_outfit.png', stats: { speed: 7, acceleration: 5, weight: 7, handling: 5 } },
    { name: 'Aristocrat King Boo', image: 'https://mario.wiki.gallery/images/5/56/King_Boo_Aristocrat.png', stats: { speed: 7, acceleration: 5, weight: 7, handling: 5 } },
    { name: 'Pirate King Boo', image: 'https://mario.wiki.gallery/images/e/e2/MKWorld_King_Boo_pirate_outfit.png', stats: { speed: 7, acceleration: 5, weight: 7, handling: 5 } },
    { name: 'Pit Crew Shy Guy', image: 'https://mario.wiki.gallery/images/b/bc/Shy_Guy_Racer.png', stats: { speed: 4, acceleration: 8, weight: 4, handling: 8 } },
    { name: 'Slope Styler Shy Guy', image: 'https://mario.wiki.gallery/images/8/8d/Shy_Guy_Sloper.png', stats: { speed: 4, acceleration: 8, weight: 4, handling: 8 } },
    { name: 'All-Terrain Donkey Kong', image: 'https://mario.wiki.gallery/images/b/be/Donkey_Kong_All_Terrain.png', stats: { speed: 8, acceleration: 4, weight: 8, handling: 4 } },
];

// Mario Kart vehicles and their images
const vehicles = [
    { name: 'Standard Kart', image: 'https://mario.wiki.gallery/images/a/af/MKWorld_Kart_Standard_Kart.png', stats: { speed: 4, acceleration: 5, weight: 3, handling: 4 } },
    { name: 'Rally Kart', image: 'https://mario.wiki.gallery/images/4/44/MKWorld_Kart_Rally_Kart.png', stats: { speed: 5, acceleration: 4, weight: 4, handling: 3 } },
    { name: 'Standard Bike', image: 'https://mario.wiki.gallery/images/d/d7/MKWorld_Bike_Standard_Bike.png', stats: { speed: 0, acceleration: 9, weight: 1, handling: 6 } },
    { name: 'Rally Bike', image: 'https://mario.wiki.gallery/images/f/f8/MKWorld_Bike_Rally_Bike.png', stats: { speed: 1, acceleration: 8, weight: 1, handling: 6 } },
    { name: 'Plushbuggy', image: 'https://mario.wiki.gallery/images/2/26/MKWorld_Kart_Plushbuggy.png', stats: { speed: 4, acceleration: 5, weight: 3, handling: 4 } },
    { name: 'Baby Blooper', image: 'https://mario.wiki.gallery/images/7/71/MKWorld_Kart_Baby_Blooper.png', stats: { speed: 3, acceleration: 6, weight: 2, handling: 5 } },
    { name: 'Cute Scoot', image: 'https://mario.wiki.gallery/images/3/3c/MKWorld_Bike_Cute_Scoot.png', stats: { speed: 0, acceleration: 9, weight: 1, handling: 6 } },
    { name: 'Mach Rocket', image: 'https://mario.wiki.gallery/images/8/89/MKWorld_Bike_Mach_Rocket.png', stats: { speed: 2, acceleration: 7, weight: 1, handling: 6 } },
    { name: 'Zoom Buggy', image: 'https://mario.wiki.gallery/images/1/1c/MKWorld_Kart_Zoom_Buggy.png', stats: { speed: 5, acceleration: 4, weight: 4, handling: 3 } },
    { name: 'Hyper Pipe', image: 'https://mario.wiki.gallery/images/0/0e/MKWorld_Bike_Hyper_Pipe.png', stats: { speed: 1, acceleration: 8, weight: 1, handling: 6 } },
    { name: 'Chargin Truck', image: 'https://mario.wiki.gallery/images/d/d4/MKWorld_Kart_Chargin_Truck.png', stats: { speed: 7, acceleration: 1, weight: 6, handling: 2 } },
    { name: 'Funky Dorrie', image: 'https://mario.wiki.gallery/images/1/14/MKWorld_ATV_Funky_Dorrie.png', stats: { speed: 5, acceleration: 5, weight: 5, handling: 1 } },
    { name: 'Hot Rod', image: 'https://mario.wiki.gallery/images/6/63/MKWorld_Kart_Hot_Rod.png', stats: { speed: 5, acceleration: 4, weight: 4, handling: 3 } },
    { name: 'Ribbit Revster', image: 'https://mario.wiki.gallery/images/9/99/MKWorld_Kart_Ribbit_Revster.png', stats: { speed: 5, acceleration: 4, weight: 4, handling: 3 } },
    { name: 'Tune Thumper', image: 'https://mario.wiki.gallery/images/e/e9/MKWorld_Bike_Tune_Thumper.png', stats: { speed: 0, acceleration: 9, weight: 1, handling: 6 } },
    { name: 'Junkyard Hog', image: 'https://mario.wiki.gallery/images/3/3b/MKWorld_ATV_Junkyard_Hog.png', stats: { speed: 7, acceleration: 3, weight: 5, handling: 1 }  },
    { name: 'Roadster Royale', image: 'https://mario.wiki.gallery/images/b/be/MKWorld_Kart_Roadster_Royale.png', stats: { speed: 5, acceleration: 4, weight: 4, handling: 3 } },
    { name: 'B Dasher', image: 'https://mario.wiki.gallery/images/e/e0/MKWorld_Kart_B_Dasher.png', stats: { speed: 5, acceleration: 4, weight: 4, handling: 3 } },
    { name: 'W Twin Chopper', image: 'https://mario.wiki.gallery/images/2/2c/MKWorld_Bike_W-Twin_Chopper.png', stats: { speed: 6, acceleration: 3, weight: 3, handling: 4 } },
    { name: 'Lobster Roller', image: 'https://mario.wiki.gallery/images/4/4b/MKWorld_ATV_Lobster_Roller.png', stats: { speed: 7, acceleration: 2, weight: 7, handling: 0 }  },
    { name: 'Carpet Flyer', image: 'https://mario.wiki.gallery/images/0/0d/MKWorld_Kart_Carpet_Flyer.png', stats: { speed: 5, acceleration: 4, weight: 4, handling: 3 } },
    { name: 'Biddybuggy', image: 'https://mario.wiki.gallery/images/d/db/MKWorld_Kart_Biddybuggy.png', stats: { speed: 2, acceleration: 7, weight: 2, handling: 5 } },
    { name: 'Tiny Titan', image: 'https://mario.wiki.gallery/images/7/7c/MKWorld_Kart_Tiny_Titan.png', stats: { speed: 7, acceleration: 1, weight: 6, handling: 2 } },
    { name: 'Dread Sled', image: 'https://mario.wiki.gallery/images/5/52/MKWorld_ATV_Dread_Sled.png', stats: { speed: 5, acceleration: 3, weight: 4, handling: 4 } },
    { name: 'Stellar Sled', image: 'https://mario.wiki.gallery/images/5/5a/MKWorld_Kart_Stellar_Sled.png', stats: { speed: 8, acceleration: 0, weight: 6, handling: 2 }  },
    { name: 'Reel Racer', image: 'https://mario.wiki.gallery/images/a/aa/MKWorld_Kart_Reel_Racer.png', stats: { speed: 7, acceleration: 2, weight: 4, handling: 3 }  },
    { name: 'Bumble V', image: 'https://mario.wiki.gallery/images/7/73/MKWorld_Kart_Bumble_V.png', stats: { speed: 5, acceleration: 4, weight: 4, handling: 3 } },
    { name: 'Fin Twin', image: 'https://mario.wiki.gallery/images/b/b0/MKWorld_Bike_Fin_Twin.png', stats: { speed: 1, acceleration: 8, weight: 1, handling: 6 } },
    { name: 'R.O.B. H.O.G.', image: 'https://mario.wiki.gallery/images/a/a1/MKWorld_Bike_ROB_HOG_Famicom.png', stats: { speed: 2, acceleration: 7, weight: 1, handling: 6 } },
    { name: 'Cloud 9', image: 'https://mario.wiki.gallery/images/4/4f/MKWorld_Kart_Cloud_9.png', stats: { speed: 5, acceleration: 4, weight: 4, handling: 3 } },
    { name: 'Dolphin Dasher', image: 'https://mario.wiki.gallery/images/d/d8/MKWorld_Bike_Dolphin_Dasher.png', stats: { speed: 1, acceleration: 8, weight: 1, handling: 6 } },
    { name: 'Blastronaut III', image: 'https://mario.wiki.gallery/images/9/9b/MKWorld_Kart_Blastronaut_III.png', stats: { speed: 4, acceleration: 6, weight: 4, handling: 2 } },
    { name: 'Big Horn', image: 'https://mario.wiki.gallery/images/b/bd/MKWorld_Kart_Big_Horn.png', stats: { speed: 6, acceleration: 2, weight: 6, handling: 2 } },
    { name: 'Lil Dumpy', image: 'https://mario.wiki.gallery/images/5/5c/MKWorld_Kart_Li%27l_Dumpy.png', stats: { speed: 7, acceleration: 1, weight: 6, handling: 2 } },
    { name: 'Loco Moto', image: 'https://mario.wiki.gallery/images/b/b7/MKWorld_Bike_Loco_Moto.png', stats: { speed: 3, acceleration: 6, weight: 2, handling: 5 } },
    { name: 'Mecha Trike', image: 'https://mario.wiki.gallery/images/6/69/MKWorld_Kart_Mecha_Trike.png', stats: { speed: 7, acceleration: 1, weight: 6, handling: 2 } },
    { name: 'Pipe Frame', image: 'https://mario.wiki.gallery/images/e/e5/MKWorld_Kart_Pipe_Frame.png', stats: { speed: 1, acceleration: 8, weight: 2, handling: 5 } },
    { name: 'Billdozer', image: 'https://mario.wiki.gallery/images/5/58/MKWorld_Kart_Billdozer.png', stats: { speed: 6, acceleration: 2, weight: 6, handling: 2 } },
    { name: 'Rallygator', image: 'https://mario.wiki.gallery/images/a/a8/MKWorld_ATV_Rallygator.png', stats: { speed: 6, acceleration: 3, weight: 7, handling: 0 }  },
    { name: 'Bowser Bruiser', image: 'https://mario.wiki.gallery/images/b/b2/MKWorld_ATV_Bowser_Bruiser.png', stats: { speed: 7, acceleration: 1, weight: 6, handling: 2 } }
];

// Combine characters and npcs for randomization
const allCharacters = [...characters, ...npcs, ...outfits];

// Get DOM elements
const characterImage = document.getElementById('character-image');
const characterName = document.getElementById('character-name');
const vehicleImage = document.getElementById('vehicle-image');
const vehicleName = document.getElementById('vehicle-name');
const randomizeBtn = document.getElementById('randomize-btn');

// Function to get random item from array
function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

const statsList = ['speed', 'acceleration', 'weight', 'handling'];
const statsLabels = {
    speed: 'Speed',
    acceleration: 'Acceleration',
    weight: 'Weight',
    handling: 'Handling'
};

function renderStatsGraph(character, vehicle) {
    const statsGraph = document.getElementById('stats-graph');
    // Calculate total stats
    const totals = {};
    let maxStat = 0;
    statsList.forEach(stat => {
        const charStat = character.stats ? character.stats[stat] : 0;
        const vehStat = vehicle.stats ? vehicle.stats[stat] : 0;
        totals[stat] = charStat + vehStat;
        if (totals[stat] > maxStat) maxStat = totals[stat];
    });
    // Set a minimum maxStat for scaling
    maxStat = Math.max(maxStat, 20);
    // Render bars
    statsGraph.innerHTML = `
        <div class="bar-graph">
            ${statsList.map(stat => `
                <div class="bar-item">
                    <span class="bar-value">${totals[stat]}</span>
                    <div class="bar-label">${statsLabels[stat]}</div>
                    <div class="bar-outer">
                        <div class="bar-inner" style="height: ${(totals[stat] / maxStat) * 100}%"></div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// Settings logic
const settingsCog = document.getElementById('settings-cog');
const settingsPanel = document.getElementById('settings-panel');
const toggleOutfits = document.getElementById('toggle-outfits');
const toggleNpcs = document.getElementById('toggle-npcs');

function getActiveCharacters() {
    let pool = [...characters];
    if (toggleOutfits.checked) pool = pool.concat(outfits);
    if (toggleNpcs.checked) pool = pool.concat(npcs);
    return pool;
}

settingsCog.addEventListener('click', () => {
    settingsPanel.classList.toggle('hidden');
});

document.addEventListener('click', (e) => {
    if (!settingsPanel.classList.contains('hidden') &&
        !settingsPanel.contains(e.target) &&
        e.target !== settingsCog &&
        !settingsCog.contains(e.target)) {
        settingsPanel.classList.add('hidden');
    }
});

toggleOutfits.addEventListener('change', () => {
    randomize();
});
toggleNpcs.addEventListener('change', () => {
    randomize();
});

// Function to randomize character and vehicle
function randomize() {
    characterImage.classList.add('randomizing');
    vehicleImage.classList.add('randomizing');
    // Use settings
    const activeCharacters = getActiveCharacters();
    const randomCharacter = getRandomItem(activeCharacters);
    const randomVehicle = getRandomItem(vehicles);
    characterImage.src = randomCharacter.image;
    characterName.textContent = randomCharacter.name;
    vehicleImage.src = randomVehicle.image;
    vehicleName.textContent = randomVehicle.name;
    renderStatsGraph(randomCharacter, randomVehicle);
    characterImage.classList.remove('randomizing');
    vehicleImage.classList.remove('randomizing');
}

// Add click event listener to randomize button
randomizeBtn.addEventListener('click', randomize);

// Initial randomization
randomize(); 