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
const allCharacters = [...characters, ...npcs];

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

// Function to randomize character and vehicle
function randomize() {
    // Add animation class
    characterImage.classList.add('randomizing');
    vehicleImage.classList.add('randomizing');
    
    // Get random character (from allCharacters) and vehicle
    const randomCharacter = getRandomItem(allCharacters);
    const randomVehicle = getRandomItem(vehicles);
    
    // Update images and names with a slight delay for animation
    setTimeout(() => {
        characterImage.src = randomCharacter.image;
        characterName.textContent = randomCharacter.name;
        vehicleImage.src = randomVehicle.image;
        vehicleName.textContent = randomVehicle.name;
        
        // Render stats graph
        renderStatsGraph(randomCharacter, randomVehicle);
        
        // Remove animation class
        characterImage.classList.remove('randomizing');
        vehicleImage.classList.remove('randomizing');
    }, 300);
}

// Add click event listener to randomize button
randomizeBtn.addEventListener('click', randomize);

// Initial randomization
randomize(); 