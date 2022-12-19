import { LegoCategory, LegoSize, Interest } from "./enums";
import { legoItem } from "./interfaces_and_types";

let legoData : legoItem[] = [
{
  id : 1,
  name: 'Freight Train',
  ageFrom: 7,
  price: 199.99,
  category: LegoCategory.City,
  numbOfDetails: 1153,
  sizeOfDetails: LegoSize.Small,
  interests : [Interest.Cars, Interest.Trains],
  description: 'The remote-controlled train is loaded with authentic features and functions and comes with 33 track pieces and 6 minifigures. This toy train set can be given as a holiday, birthday or any-other-day surprise for kids and train enthusiasts aged 7 and up.',
  amountOnStock: 2,
  urlImage: ['../assets/img/1.png', '../assets/img/1-1.png'],
},
{
  id : 2,
  name: 'Train Station',
  ageFrom: 7,
  price: 99.99,
  category: LegoCategory.City,
  numbOfDetails: 907,
  sizeOfDetails: LegoSize.Small,
  interests : [Interest.Cars, Interest.Trains, Interest.Buildings],
  description: 'Packed with features for imaginative play. Includes a 2-level train terminal, platform, toy bus, road-and-rail truck, portable toilet, grade crossing and 6 minifigures.',
  amountOnStock: 4,
  urlImage: ['../assets/img/2.png', '../assets/img/2-1.png'],
},
{ id : 3,
  name: 'Lunar Research Base',
  ageFrom: 7,
  price: 129.99,
  category: LegoCategory.City,
  numbOfDetails: 786,
  sizeOfDetails: LegoSize.Small,
  interests : [Interest.Cars, Interest.Travel, Interest.Vehicles, Interest.Space],
  description: 'Moon base playset for kids aged 7+. Kids step into the future of space exploration with this authentically detailed, NASA-inspired Lunar Research Base playset.',
  amountOnStock: 4,
  urlImage: ['../assets/img/3.png', '../assets/img/3-1.png'],
},
{
  id : 4,
  name: 'Lunar Space Station',
  ageFrom: 6,
  price: 79.99,
  category: LegoCategory.City,
  numbOfDetails: 500,
  sizeOfDetails: LegoSize.Small,
  interests : [Interest.Space, Interest.Travel],
  description: 'Designed for budding astronauts. This 500-piece playset includes a toy Lunar Space Station with a docking space capsule, plus 5 astronaut minifigures.',
  amountOnStock: 8,
  urlImage: ['../assets/img/4.png', ''],
},
{
  id : 5,
  name: 'Mobile Crane',
  ageFrom: 7,
  price: 39.99,
  category: LegoCategory.City,
  numbOfDetails: 340,
  sizeOfDetails: LegoSize.Small,
  interests : [Interest.Cars, Interest.RealLifeHeroes],
  description: 'Multifunctional construction toy. Kids with a passion for construction vehicles will love this toy mobile crane with lots of realistic details and functions.',
  amountOnStock: 1,
  urlImage: ['../assets/img/5.png', '../assets/img/5-1.png'],
},
{
  id : 6,
  name: 'Express Passenger Train',
  ageFrom: 7,
  price: 189.99,
  category: LegoCategory.City,
  numbOfDetails: 764,
  sizeOfDetails: LegoSize.Small,
  interests : [Interest.Trains],
  description: 'Premium-quality Express Passenger Train set. LEGO® Powered Up train set featuring a bullet locomotive with dimmable headlights, a dining car, passenger car, and platform.',
  amountOnStock: 2,
  urlImage: ['../assets/img/6.png', '../assets/img/6-1.png'],
},
{ id : 7,
  name: 'Barn & Farm Animals',
  ageFrom: 4,
  price: 69.99,
  category: LegoCategory.City,
  numbOfDetails: 230,
  sizeOfDetails: LegoSize.Small,
  interests : [Interest.Animals, Interest.Buildings],
  description: 'Toy animal farm playset for kids aged 4+. Introduce children aged 4+ to a world of creative animal-care play with this Barn & Farm Animals playset.',
  amountOnStock: 4,
  urlImage: ['../assets/img/7.png', '../assets/img/7-1.png'],
},
{
  id : 8,
  name: 'Farmers Market Van',
  ageFrom: 5,
  price: 44.99,
  category: LegoCategory.City,
  numbOfDetails: 310,
  sizeOfDetails: LegoSize.Small,
  interests : [Interest.Cars, Interest.RealLifeHeroes],
  description: 'Toy mobile farmers market playset. Kids get to run a mobile farmers market with this playset, featuring a cool veggie truck, veggie patch and fun characters.',
  amountOnStock: 8,
  urlImage: ['../assets/img/8.png', '../assets/img/8-1.png'],
},
{ id : 9,
  name: 'Lunar Roving Vehicle',
  ageFrom: 6,
  price: 39.99,
  category: LegoCategory.City,
  numbOfDetails: 275,
  sizeOfDetails: LegoSize.Small,
  interests : [Interest.Space, Interest.Vehicles],
  description: 'Space-themed playset for kids aged 6+. Exciting space missions await with this NASA-inspired lunar rover – packed with realistic features for imaginative play.',
  amountOnStock: 1,
  urlImage: ['../assets/img/9.png', '../assets/img/9-1.png'],
},
{
  id : 10,
  name: 'Bathtub Stunt Bike',
  ageFrom: 5,
  price: 7.99,
  category: LegoCategory.City,
  numbOfDetails: 14,
  sizeOfDetails: LegoSize.Small,
  interests : [Interest.Cars],
  description: 'Real stunt action for kids. Send kids’ play soaring with this cool playset, featuring a flywheel-powered bathtub stunt bike for performing real stunts.',
  amountOnStock: 2,
  urlImage: ['../assets/img/10.png', '../assets/img/10-1.png'],
},
{ id : 11,
  name: 'Fire Station',
  ageFrom: 6,
  price: 69.99,
  category: LegoCategory.City,
  numbOfDetails: 1153,
  sizeOfDetails: LegoSize.Small,
  interests : [Interest.Buildings, Interest.RealLifeHeroes],
  description: 'Multi-feature toy fire station set for ages 6+. The LEGO® City Fire Station is packed with fun features for action-packed play and includes 2 LEGO City TV characters.',
  amountOnStock: 5,
  urlImage: ['../assets/img/11.png', '../assets/img/11-1.jpg'],
},
{
  id : 12,
  name: 'Town Center',
  ageFrom: 6,
  price: 99.99,
  category: LegoCategory.City,
  numbOfDetails: 790,
  sizeOfDetails: LegoSize.Small,
  interests : [Interest.Cars, Interest.Buildings],
  description: 'Expandable town center playset. This premium playset is packed with story-inspiring features kids will love, plus an expandable LEGO® City Road Plate system.',
  amountOnStock: 7,
  urlImage: ['../assets/img/12.png', '../assets/img/12-1.png'],
},
{ id : 13,
  name: "Anna and Olaf's Castle Fun",
  ageFrom: 4,
  price: 29.99,
  category: LegoCategory.Frozen,
  numbOfDetails: 108,
  sizeOfDetails: LegoSize.Small,
  interests : [Interest.Princesses, Interest.Buildings, Interest.Animals],
  description: 'Designed for kids aged 4 and up. This learn-to-build LEGO® ǀ Disney set is an imaginative play option for youngsters with a passion for Disney’s Frozen.',
  amountOnStock: 1,
  urlImage: ['../assets/img/13.png', '../assets/img/frozen.jpg'],
},
{
  id : 14,
  name: "Elsa’s Castle Courtyard",
  ageFrom: 5,
  price: 9.99,
  category: LegoCategory.Frozen,
  numbOfDetails: 53,
  sizeOfDetails: LegoSize.Small,
  interests : [Interest.Buildings, Interest.Princesses],
  description: 'A treat with endless play options. This LEGO® ǀ Disney set is designed for kids to quickly build and play out their favorite Frozen adventures.',
  amountOnStock: 2,
  urlImage: ['../assets/img/14.png', '../assets/img/frozen.jpg'],
},
{ id : 15,
  name: "Anna and Elsa's Frozen Wonderland",
  ageFrom: 4,
  price: 44.99,
  category: LegoCategory.Frozen,
  numbOfDetails: 154,
  sizeOfDetails: LegoSize.Small,
  interests : [Interest.Buildings, Interest.Princesses],
  description: 'An exciting set developed for kids aged 4+. This set includes easy-to-follow instructions and Starter Bricks to guide kids with a fun experience as they learn to build.',
  amountOnStock: 4,
  urlImage: ['../assets/img/15.png', '../assets/img/frozen.jpg'],
},
{
  id : 16,
  name: 'Elsa and the Nokk Storybook Adventures',
  ageFrom: 5,
  price: 19.99,
  category: LegoCategory.Frozen,
  numbOfDetails: 125,
  sizeOfDetails: LegoSize.Small,
  interests : [Interest.Princesses],
  description: 'Endless play and fun in a portable storybook. Fans of Disney’s Frozen 2 can play out open-ended adventures with the cool characters included in this complete micro-world.',
  amountOnStock: 8,
  urlImage: ['../assets/img/16.png', '../assets/img/frozen.jpg'],
},
{ id : 17,
  name: "Elsa's Wagon Adventure",
  ageFrom: 7,
  price: 199.99,
  category: LegoCategory.Frozen,
  numbOfDetails: 127,
  sizeOfDetails: LegoSize.Small,
  interests : [Interest.Animals, Interest.Princesses],
  description: 'This set has Instructions PLUS! A fun and easy tool that helps you build!',
  amountOnStock: 1,
  urlImage: ['../assets/img/17.png', '../assets/img/frozen.jpg'],
},
{
  id : 18,
  name: 'The Ice Castle',
  ageFrom: 14,
  price: 219.99,
  category: LegoCategory.Frozen,
  numbOfDetails: 1709,
  sizeOfDetails: LegoSize.Small,
  interests : [Interest.Buildings, Interest.Princesses],
  description: 'An iconic set for Disney’s Frozen fans. This striking LEGO® | Disney set, with 3 floors full of movie-related details, lets fans recreate the castle in all its glory.',
  amountOnStock: 2,
  urlImage: ['../assets/img/18.png', '../assets/img/frozen.jpg'],
},
{ id : 19,
  name: 'Frozen Ice Castle',
  ageFrom: 2,
  price: 49.99,
  category: LegoCategory.Frozen,
  numbOfDetails: 59,
  sizeOfDetails: LegoSize.Small,
  interests : [Interest.Princesses, Interest.Buildings],
  description: 'Light-up Disney Frozen playset. With a familiar setting and much-loved Disney characters to inspire role-play, your toddler will never want to ‘Let It Go’.',
  amountOnStock: 5,
  urlImage: ['../assets/img/19.png', '../assets/img/frozen.jpg'],
},
{
  id : 20,
  name: "Anna’s Castle Courtyard",
  ageFrom: 5,
  price: 9.99,
  category: LegoCategory.Frozen,
  numbOfDetails: 74,
  sizeOfDetails: LegoSize.Small,
  interests : [Interest.Buildings, Interest.Princesses],
  description: 'A treat designed for quick building and play. This open-ended LEGO® ǀ Disney Frozen set is made for kids to quickly build and start playing out creative adventures.',
  amountOnStock: 7,
  urlImage: ['../assets/img/20.png', '../assets/img/frozen.jpg'],
},
{ id : 21,
  name: 'Bookshop',
  ageFrom: 16,
  price: 199.99,
  category: LegoCategory.Creator,
  numbOfDetails: 2504,
  sizeOfDetails: LegoSize.Small,
  interests : [Interest.Fantasy, Interest.Buildings],
  description: 'Start a new story. Expand your Modular Building collection with this exclusive NEW bookshop.',
  amountOnStock: 1,
  urlImage: ['../assets/img/21.png', '../assets/img/creator.jpg'],
},
{
  id : 22,
  name: 'Haunted House',
  ageFrom: 18,
  price: 299.99,
  category: LegoCategory.Creator,
  numbOfDetails: 3231,
  sizeOfDetails: LegoSize.Small,
  interests : [Interest.Fantasy, Interest.Buildings],
  description: 'Drop in for a visit. Ride the elevator to nowhere with the Fairground Collection Haunted House.',
  amountOnStock: 2,
  urlImage: ['../assets/img/22.png', '../assets/img/creator.jpg'],
},
{ id : 23,
  name: "Santa’s Visit",
  ageFrom: 18,
  price: 99.99,
  category: LegoCategory.Creator,
  numbOfDetails: 1445,
  sizeOfDetails: LegoSize.Small,
  interests : [Interest.Fantasy, Interest.Buildings],
  description: 'Make holiday traditions together. Share the building fun with family members and create a display piece you can rebuild every year.',
  amountOnStock: 4,
  urlImage: ['../assets/img/23.png', '../assets/img/creator.jpg'],
},
{
  id : 24,
  name: 'Queer Eye – The Fab 5 Loft',
  ageFrom: 18,
  price: 99.99,
  category: LegoCategory.Creator,
  numbOfDetails: 974,
  sizeOfDetails: LegoSize.Small,
  interests : [Interest.Fantasy, Interest.Buildings],
  description: 'Join the Fab 5 for a gorgeous building project. Fans of the Queer Eye TV show will feel right at home recreating the decor and details of the guys’ original Atlanta loft.',
  amountOnStock: 8,
  urlImage: ['../assets/img/24.png', '../assets/img/creator.jpg'],
},
{ id : 25,
  name: 'Porsche 911',
  ageFrom: 18,
  price: 1458.99,
  category: LegoCategory.Creator,
  numbOfDetails: 1153,
  sizeOfDetails: LegoSize.Small,
  interests : [Interest.Fantasy, Interest.Cars],
  description: 'VIP-Only Online Car Meet. Be there as Porsche and LEGO® designers introduce the new LEGO Porsche 911. Not a VIP? Join today!',
  amountOnStock: 1,
  urlImage: ['../assets/img/25.png', '../assets/img/creator.jpg'],
},
{
  id : 26,
  name: 'NASA Apollo 11 Lunar Lander',
  ageFrom: 16,
  price: 99.99,
  category: LegoCategory.Creator,
  numbOfDetails: 1087,
  sizeOfDetails: LegoSize.Small,
  interests : [Interest.Fantasy, Interest.Travel, Interest.Space, Interest.RealLifeHeroes],
  description: 'An icon of space exploration. Celebrate the 50th anniversary of the first manned lunar landing, with this accurately detailed Apollo 11 Lunar Landing replica.',
  amountOnStock: 2,
  urlImage: ['../assets/img/26.png', '../assets/img/creator.jpg'],
},
{ id : 27,
  name: 'Optimus Prime',
  ageFrom: 18,
  price: 179.99,
  category: LegoCategory.Creator,
  numbOfDetails: 1508,
  sizeOfDetails: LegoSize.Small,
  interests : [Interest.Fantasy, Interest.Robots],
  description: 'An icon rises. In robot mode, the model stands over 13.5 in. (35 cm) tall.',
  amountOnStock: 5,
  urlImage: ['../assets/img/27.png', '../assets/img/creator.jpg'],
},
{
  id : 28,
  name: 'Colosseum',
  ageFrom: 18,
  price: 549.99,
  category: LegoCategory.Creator,
  numbOfDetails: 9036,
  sizeOfDetails: LegoSize.Small,
  interests : [Interest.Fantasy, Interest.Buildings],
  description: 'Monumental build! Includes historic architectural details like the surviving archways.',
  amountOnStock: 7,
  urlImage: ['../assets/img/28.png', '../assets/img/creator.jpg'],
},
{ id : 29,
  name: 'High-Speed Train',
  ageFrom: 7,
  price: 19.99,
  category: LegoCategory.Creator,
  numbOfDetails: 284,
  sizeOfDetails: LegoSize.Small,
  interests : [Interest.Fantasy, Interest.Trains],
  description: 'Keep in touch. Sign up to receive communications from LEGO® Marketing and be the first to know about new sets, product updates, promotions and much more',
  amountOnStock: 1,
  urlImage: ['../assets/img/29.png', '../assets/img/creator.jpg'],
},
{
  id : 30,
  name: 'Back to the Future Time Machine',
  ageFrom: 18,
  price: 199.99,
  category: LegoCategory.Creator,
  numbOfDetails: 1872,
  sizeOfDetails: LegoSize.Small,
  interests : [Interest.Fantasy, Interest.Cars, Interest.Travel],
  description: 'Details from the Flux Capacitor to Mr. Fusion. From one of the most beloved film franchises, this is a fantastic build for fans.',
  amountOnStock: 2,
  urlImage: ['../assets/img/30.png', '../assets/img/creator.jpg'],
},
{ id : 31,
  name: 'Robot Inventor',
  ageFrom: 10,
  price: 359.99,
  category: LegoCategory.Creator,
  numbOfDetails: 949,
  sizeOfDetails: LegoSize.Small,
  interests : [Interest.Robots, Interest.Vehicles],
  description: 'Build, code and play with Robot Inventor! Inspire minds with a physical-meets-digital world filled with interactive, remote-control robots and intelligent vehicles.',
  amountOnStock: 4,
  urlImage: ['../assets/img/31.png', '../assets/img/creator.jpg'],
},
{
  id : 32,
  name: 'LEGO® Education BricQ Motion Prime Set',
  ageFrom: 10,
  price: 119.99,
  category: LegoCategory.Creator,
  numbOfDetails: 564,
  sizeOfDetails: LegoSize.Small,
  interests : [Interest.Robots],
  description: 'Sturdy storage box with color-coded sorting trays for easy classroom management. Replacement elements also included.',
  amountOnStock: 8,
  urlImage: ['../assets/img/32.png', '../assets/img/creator.jpg'],
},
{ id : 33,
  name: 'Jeep® Wrangler',
  ageFrom: 9,
  price: 39.99,
  category: LegoCategory.Technic,
  numbOfDetails: 665,
  sizeOfDetails: LegoSize.Small,
  interests : [Interest.Cars],
  description: 'LEGO® Technic™ Jeep® Wrangler building kit. Create endless off-road adventures with this feature-packed model. It’s a perfect gift for any Jeep® fan.',
  amountOnStock: 1,
  urlImage: ['../assets/img/33.png', '../assets/img/technic.png'],
},
{
  id : 34,
  name: 'Material Handler',
  ageFrom: 10,
  price: 149.99,
  category: LegoCategory.Technic,
  numbOfDetails: 835,
  sizeOfDetails: LegoSize.Small,
  interests : [Interest.Cars],
  description: 'Discover how a material handler works. Kids aged 10+ will love exploring all the manual and pneumatic functions of this LEGO® Technic™ Material Handler (42144) toy model set',
  amountOnStock: 2,
  urlImage: ['../assets/img/34.png', '../assets/img/technic.png'],
},
{ id : 35,
  name: 'McLaren Formula 1™ Race Car',
  ageFrom: 18,
  price: 199.99,
  category: LegoCategory.Technic,
  numbOfDetails: 1434,
  sizeOfDetails: LegoSize.Small,
  interests :[Interest.Cars],
  description: 'Fuel your passion. Get ready for the ultimate challenge – building an authentic LEGO® Technic™ version of the McLaren Formula 1™ race car.',
  amountOnStock: 5,
  urlImage: ['../assets/img/35.png', '../assets/img/technic.png'],
},
{
  id : 36,
  name: 'Heavy-duty Tow Truck',
  ageFrom: 11,
  price: 159.99,
  category: LegoCategory.Technic,
  numbOfDetails: 2017,
  sizeOfDetails: LegoSize.Small,
  interests : [Interest.Cars],
  description: 'Build the LEGO® Technic™ Heavy-duty Tow Truck. A rewarding build and a perfect gift idea for any fan of powerful vehicles and trucks.',
  amountOnStock: 7,
  urlImage: ['../assets/img/36.png', '../assets/img/technic.png'],
},
{ id : 37,
  name: 'Lamborghini Sián FKP 37',
  ageFrom: 18,
  price: 449.99,
  category: LegoCategory.Technic,
  numbOfDetails: 3696,
  sizeOfDetails: LegoSize.Small,
  interests : [Interest.Cars],
  description: 'Take it for a test drive. See the exclusive new LEGO® Technic™ Lamborghini Sián FKP 37 in action.',
  amountOnStock: 2,
  urlImage: ['../assets/img/37.png', '../assets/img/technic.png'],
},
{
  id : 38,
  name: 'Ferrari Daytona SP3',
  ageFrom: 18,
  price: 449.99,
  category: LegoCategory.Technic,
  numbOfDetails: 3778,
  sizeOfDetails: LegoSize.Small,
  interests : [Interest.Cars],
  description: 'Feel the power. Build the authentic V12 engine with moving pistons.',
  amountOnStock: 3,
  urlImage: ['../assets/img/38.png', '../assets/img/technic.png'],
},
{ id : 39,
  name: 'App-Controlled Cat® D11 Bulldozer',
  ageFrom: 18,
  price: 499.99,
  category: LegoCategory.Technic,
  numbOfDetails: 3854,
  sizeOfDetails: LegoSize.Small,
  interests : [Interest.Cars],
  description: 'Build and discover a construction icon. Construction fans will love building this action-packed LEGO® Technic™ Cat® D11 Bulldozer and exploring its many functions.',
  amountOnStock: 4,
  urlImage: ['../assets/img/39.png', '../assets/img/technic.png'],
},
{
  id : 40,
  name: 'App-Controlled Transformation Vehicle',
  ageFrom: 9,
  price: 149.99,
  category: LegoCategory.Technic,
  numbOfDetails: 772,
  sizeOfDetails: LegoSize.Small,
  interests : [Interest.Vehicles],
  description: 'Fast-action fun in a model that flips! Build and play with 2 vehicles in 1 model with this App-Controlled Transformation Vehicle that flips when it hits a wall.',
  amountOnStock: 8,
  urlImage: ['../assets/img/40.png', '../assets/img/technic.png'],
},
{ id : 41,
  name: 'Wild Animals of Europe',
  ageFrom: 2,
  price: 54.99,
  category: LegoCategory.Duplo,
  numbOfDetails: 85,
  sizeOfDetails: LegoSize.Large,
  interests : [Interest.Animals],
  description: 'Introduce preschoolers to European wildlife. Nature-loving children get to know the forest animals of Europe in their natural habitats as they build and play.',
  amountOnStock: 1,
  urlImage: ['../assets/img/41.png', '../assets/img/duplo.png'],
},
{
  id : 42,
  name: 'Number Train - Learn To Count',
  ageFrom: 2,
  price: 17.99,
  category: LegoCategory.Duplo,
  numbOfDetails: 1153,
  sizeOfDetails: LegoSize.Large,
  interests : [Interest.Trains],
  description: 'Play-and-learn Number Train playset. This push-along train introduces toddlers to colours and counting, while friendly characters boost social-emotional skills.',
  amountOnStock: 2,
  urlImage: ['../assets/img/42.png', '../assets/img/duplo.png'],
},
{ id : 43,
  name: 'Space Shuttle Mission',
  ageFrom: 2,
  price: 17.99,
  category: LegoCategory.Duplo,
  numbOfDetails: 23,
  sizeOfDetails: LegoSize.Large,
  interests : [Interest.Space, Interest.RealLifeHeroes],
  description: 'Launch into a universe of open-ended play. Space-loving toddlers will enjoy endless interplanetary missions with this engaging and versatile space shuttle playset.',
  amountOnStock: 5,
  urlImage: ['../assets/img/43.png', '../assets/img/duplo.png'],
},
{
  id : 44,
  name: 'Car Park and Car Wash',
  ageFrom: 2,
  price: 89.99,
  category: LegoCategory.Duplo,
  numbOfDetails: 112,
  sizeOfDetails: LegoSize.Large,
  interests : [Interest.Cars, Interest.Buildings],
  description: 'All-in-one car-care parking house. The ultimate feature-packed set for car-loving toddlers. Includes 3 vehicles – 1 with a Push&Go feature – and 4 figures.',
  amountOnStock: 7,
  urlImage: ['../assets/img/44.png', '../assets/img/duplo.png'],
},
{ id : 45,
  name: 'Fire Engine',
  ageFrom: 2,
  price: 24.99,
  category: LegoCategory.Duplo,
  numbOfDetails: 21,
  sizeOfDetails: LegoSize.Large,
  interests : [Interest.Cars, Interest.RealLifeHeroes, Interest.Animals],
  description: 'To the rescue! aboard the fire engine. Fun missions and developmental play with a feature-packed fire engine and a tree-climbing cat with a habit of getting stuck.',
  amountOnStock: 2,
  urlImage: ['../assets/img/45.png', '../assets/img/duplo.png'],
},
{
  id : 46,
  name: 'Santas Gingerbread House',
  ageFrom: 2,
  price: 29.99,
  category: LegoCategory.Duplo,
  numbOfDetails: 50,
  sizeOfDetails: LegoSize.Large,
  interests : [Interest.Buildings],
  description: 'Festive fun at the Gingerbread House. Share snowy adventures with your preschooler and introduce them to Santa Claus with this charming playset.',
  amountOnStock: 1,
  urlImage: ['../assets/img/46.png', '../assets/img/duplo.png'],
},
{ id : 47,
  name: 'Coding Express',
  ageFrom: 3,
  price: 219.99,
  category: LegoCategory.Duplo,
  numbOfDetails: 234,
  sizeOfDetails: LegoSize.Large,
  interests : [Interest.Cars, Interest.Trains],
  description: 'All aboard for an adventure in learning. It’s full STEAM ahead for purposeful play with LEGO® Education’s Coding Express.',
  amountOnStock: 2,
  urlImage: ['../assets/img/47.png', '../assets/img/duplo.png'],
},
{
  id : 48,
  name: 'Animal Train',
  ageFrom: 2,
  price: 17.99,
  category: LegoCategory.Duplo,
  numbOfDetails: 15,
  sizeOfDetails: LegoSize.Large,
  interests : [Interest.Animals, Interest.Trains],
  description: 'Versatile toy for little animal lovers. Toddlers’ play-and-learn train, with 4 buildable animals, 4 push-along carriages and actual-size images to aid construction.',
  amountOnStock: 4,
  urlImage: ['../assets/img/48.png', '../assets/img/duplo.png'],
},
{ id : 49,
  name: 'Wild Animals of the Ocean',
  ageFrom: 2,
  price: 17.99,
  category:LegoCategory.Duplo,
  numbOfDetails: 32,
  sizeOfDetails: LegoSize.Large,
  interests : [Interest.Animals],
  description: 'Introduce preschoolers to life under the sea. Meet sea creatures in their natural habitat and encourage a child’s passion for ocean wildlife with this underwater playset.',
  amountOnStock: 8,
  urlImage: ['../assets/img/49.png', '../assets/img/duplo.png'],
},
{
  id : 50,
  name: 'Truck & Tracked Excavator',
  ageFrom: 7,
  price: 17.99,
  category: LegoCategory.Duplo,
  numbOfDetails: 20,
  sizeOfDetails: LegoSize.Large,
  interests : [Interest.Cars],
  description: 'Construction-site vehicles and workers. Develop preschoolers’ fine motor skills and problem-solving abilities with this open-ended role-play toy.',
  amountOnStock: 2,
  urlImage: ['../assets/img/50.png', '../assets/img/duplo.png'],
},
];