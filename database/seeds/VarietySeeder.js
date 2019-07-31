'use strict'

/*
|--------------------------------------------------------------------------
| VarietySeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');
const Variety = use('App/Models/Variety');
const varieties = [
  {variety_short: 'AB', variety: 'Apple Box'},
  {variety_short: 'ALF', variety: 'Alfalfa'},
  {variety_short: 'ALP', variety: 'Alpine Mix'},
  {variety_short: 'APP', variety: 'Apple / Angophora'},
  {variety_short: 'ASH', variety: 'Ash'},
  {variety_short: 'BB', variety: 'Brush Box'},
  {variety_short: 'BBX', variety: 'Black Box'},
  {variety_short: 'BBY', variety: 'Blue Berry'},
  {variety_short: 'BDB', variety: 'Budda Bush'},
  {variety_short: 'BG', variety: 'Blue Gum'},
  {variety_short: 'BGSA', variety: 'Blue Gum South Australian'},
  {variety_short: 'BK', variety: 'Banksia'},
  {variety_short: 'BKD', variety: 'Desert Banksia'},
  {variety_short: 'BKW', variety: 'Buck Wheat'},
  {variety_short: 'BLB', variety: 'Black But'},
  {variety_short: 'BLF', variety: 'Blue Flower'},
  {variety_short: 'BLIB', variety: 'Broad Leaf Iron Bark'},
  {variety_short: 'BLK', variety: 'Blackberry'},
  {variety_short: 'BLT', variety: 'Blue Top'},
  {variety_short: 'BLW', variety: 'Blue Weed'},
  {variety_short: 'BM', variety: 'Black Mallee'},
  {variety_short: 'BMB', variety: 'Bimble Box'},
  {variety_short: 'BMLE', variety: 'Black Mallee'},
  {variety_short: 'BRB', variety: 'Brown Box'},
  {variety_short: 'BTIB', variety: 'Blue Top I/B'},
  {variety_short: 'BUT', variety: 'Butter bush'},
  {variety_short: 'BW', variety: 'Bloodwood'},
  {variety_short: 'CAN', variety: 'Canola'},
  {variety_short: 'CAR', variety: 'Carrot'},
  {variety_short: 'CFT', variety: 'Crofton Weed'},
  {variety_short: 'CHG', variety: 'Chippy Gum'},
  {variety_short: 'CIB', variety: 'Caleys Iron Bark'},
  {variety_short: 'CIT', variety: 'Citrus'},
  {variety_short: 'CLO', variety: 'Clover'},
  {variety_short: 'CNE', variety: 'Cane'},
  {variety_short: 'CO', variety: 'Coolabah'},
  {variety_short: 'CPW', variety: 'Cape Weed'},
  {variety_short: 'CRA', variety: 'Crows Ash'},
  {variety_short: 'CUB', variety: 'Currant Bush'},
  {variety_short: 'CW', variety: 'Carpet Weed'},
  {variety_short: 'DDL', variety: 'Dandelion'},
  {variety_short: 'DGW', variety: 'Dogwood'},
  {variety_short: 'FLG', variety: 'Flooded Gum'},
  {variety_short: 'FLW', variety: 'Featherwood'},
  {variety_short: 'FUZ', variety: 'fuzzy box'},
  {variety_short: 'FW', variety: 'Fire Weed'},
  {variety_short: 'GB', variety: 'Grey Box'},
  {variety_short: 'GIB', variety: 'Grey Iron Bark'},
  {variety_short: 'GM', variety: 'Giant Mallee'},
  {variety_short: 'GRG', variety: 'Grey Gum'},
  {variety_short: 'GRM', variety: 'Green Mallee'},
  {variety_short: 'GTB', variety: 'Gum Top Box'},
  {variety_short: 'HE', variety: 'Heath'},
  {variety_short: 'HEB', variety: 'Heather Bush'},
  {variety_short: 'HG', variety: 'Hill Gum'},
  {variety_short: 'HOP', variety: 'Hop'},
  {variety_short: 'HSU', variety: 'honey suckle'},
  {variety_short: 'IB', variety: 'Iron Bark'},
  {variety_short: 'LIG', variety: 'Lignum'},
  {variety_short: 'LLB', variety: 'Long Leaf Box'},
  {variety_short: 'LTW', variety: 'Leatherwood'},
  {variety_short: 'LUC', variety: 'Lucerne'},
  {variety_short: 'LW', variety: 'Lincoln Weed'},
  {variety_short: 'MA', variety: 'Mountain Ash'},
  {variety_short: 'MAC', variety: 'Macadamia'},
  {variety_short: 'MAG', variety: 'Mangrove'},
  {variety_short: 'MAN', variety: 'MANUKA HONEY'},
  {variety_short: 'MBG', variety: 'Mountain Blue Gum'},
  {variety_short: 'MG', variety: 'Manna Gum'},
  {variety_short: 'MH', variety: 'Mahogany'},
  {variety_short: 'MIB', variety: 'Mugga Iron Bark'},
  {variety_short: 'MLE', variety: 'Mallee'},
  {variety_short: 'MM', variety: 'Messmate'},
  {variety_short: 'MTG', variety: 'Mountain Gum'},
  {variety_short: 'MTW', variety: 'Mintweed'},
  {variety_short: 'MX', variety: 'Mixed Honey'},
  {variety_short: 'NDW', variety: 'Needlewood'},
  {variety_short: 'NLIB', variety: 'Narrow Leaf Ironbark'},
  {variety_short: 'NOP', variety: 'Organic honey NOP Certified'},
  {variety_short: 'OB', variety: 'Orange Blossom'},
  {variety_short: 'OG', variety: 'Certified Organic honey'},
  {variety_short: 'OW', variety: 'Onion Weed'},
  {variety_short: 'PA', variety: 'Pink Ash'},
  {variety_short: 'PB', variety: 'Pink Box'},
  {variety_short: 'PEB', variety: 'Peach Bush'},
  {variety_short: 'PEP', variety: 'Peppermint'},
  {variety_short: 'PG', variety: 'Pink Gum'},
  {variety_short: 'PIT', variety: 'Pittosporum'},
  {variety_short: 'PLB', variety: 'Pilliga Box'},
  {variety_short: 'PP', variety: 'Prickly Pear'},
  {variety_short: 'PT', variety: 'Purple Top'},
  {variety_short: 'RA', variety: 'Red Ash'},
  {variety_short: 'RB', variety: 'Red Box'},
  {variety_short: 'RBG', variety: 'Ribbon Gum'},
  {variety_short: 'RED', variety: 'Reducer'},
  {variety_short: 'RG', variety: 'Red Gum'},
  {variety_short: 'RM', variety: 'Red Mallee'},
  {variety_short: 'RN', variety: 'Rainforest'},
  {variety_short: 'RRG', variety: 'River Red Gum'},
  {variety_short: 'SBK', variety: 'Stringy Bark'},
  {variety_short: 'SC', variety: 'Sugar Cane'},
  {variety_short: 'SCG', variety: 'Scribbly Gum'},
  {variety_short: 'SCL', variety: 'Strawberry Clover'},
  {variety_short: 'SDW', variety: 'Sandalwood'},
  {variety_short: 'SFL', variety: 'Sunflower'},
  {variety_short: 'SILASH', variety: 'Silver Ash'},
  {variety_short: 'SJ', variety: 'Salvation Jane'},
  {variety_short: 'SLIB', variety: 'Silver Leaf Ironbark'},
  {variety_short: 'SM', variety: 'Silver Myrtle'},
  {variety_short: 'SNG', variety: 'Snow Gum'},
  {variety_short: 'SPG', variety: 'Spotted Gum'},
  {variety_short: 'ST', variety: 'Silver top'},
  {variety_short: 'SUG', variety: 'Sugar Gum'},
  {variety_short: 'SWB', variety: 'Swamp Box'},
  {variety_short: 'SWG', variety: 'Swamp Gum'},
  {variety_short: 'THI', variety: 'Thistle'},
  {variety_short: 'TNW', variety: 'Turnip Weed'},
  {variety_short: 'TPT', variety: 'Turpentine'},
  {variety_short: 'TT', variety: 'Ti Tree Coastal Honey'},
  {variety_short: 'VCH', variety: 'Vetch'},
  {variety_short: 'WAALM', variety: 'WA Almond'},
  {variety_short: 'WAAVO', variety: 'WA AVOCADO'},
  {variety_short: 'WABB', variety: 'WA Black Butt'},
  {variety_short: 'WABK', variety: 'WA Banksia'},
  {variety_short: 'WABM', variety: 'WA Brown Mallet'},
  {variety_short: 'WABOB', variety: 'WA Bottle Brush'},
  {variety_short: 'WACAN', variety: 'WA Canola'},
  {variety_short: 'WACAW', variety: 'WA Cape Weed'},
  {variety_short: 'WACST', variety: 'WA Coastal'},
  {variety_short: 'WAFBK', variety: 'WA Fox Banksia'},
  {variety_short: 'WAFLG', variety: 'WA Flooded Gum'},
  {variety_short: 'WAGH', variety: 'WA Goldfield Honey'},
  {variety_short: 'WAJA', variety: 'WA Jarrah'},
  {variety_short: 'WAJAMX', variety: 'WA Jarrah Mix'},
  {variety_short: 'WAKAR', variety: 'WA Karri'},
  {variety_short: 'WAMLE', variety: 'WA Mallee'},
  {variety_short: 'WAMSE', variety: 'WA Mild Spring Eucalypt'},
  {variety_short: 'WAMX', variety: 'WA Mix Honey'},
  {variety_short: 'WAORGA', variety: 'WA Australian Organic'},
  {variety_short: 'WAORGKAR', variety: 'WA Organic Karri'},
  {variety_short: 'WAPABK', variety: 'WA PAPERBARK'},
  {variety_short: 'WAPAR', variety: 'WA parrot bush'},
  {variety_short: 'WAPBK', variety: 'WA Powder Bark'},
  {variety_short: 'WAPEP', variety: 'WA Peppermint'},
  {variety_short: 'WARB', variety: 'WA Red Bell'},
  {variety_short: 'WARG', variety: 'WA Red Gum'},
  {variety_short: 'WASJ', variety: 'WA Salvation Jane'},
  {variety_short: 'WASTR', variety: 'Stricklands gum'},
  {variety_short: 'WATAG', variety: 'WA TAGASASTE'},
  {variety_short: 'WAWD', variety: 'WA WANDOO'},
  {variety_short: 'WAWFL', variety: 'WA Wildflower'},
  {variety_short: 'WAWG', variety: 'WA White Gum'},
  {variety_short: 'WAYA', variety: 'WA Yate'},
  {variety_short: 'WAYG', variety: 'WA York Gum'},
  {variety_short: 'WB', variety: 'White Box'},
  {variety_short: 'WBT', variety: 'Woolly Butt'},
  {variety_short: 'WCL', variety: 'White Clover'},
  {variety_short: 'WF', variety: 'Wildflower Honey'},
  {variety_short: 'WHH', variety: 'White Mahogany'},
  {variety_short: 'WM', variety: 'White Mallee'},
  {variety_short: 'WMAG', variety: 'white mangrove'},
  {variety_short: 'XM', variety: 'Xmas Mallee'},
  {variety_short: 'YAP', variety: 'Yapunyah'},
  {variety_short: 'YB', variety: 'Yellow Box'},
  {variety_short: 'YG', variety: 'Yellow Gum'},
  {variety_short: 'YJ', variety: 'Yellow Jacket'},
  {variety_short: 'YLB', variety: 'Yellow Burr'},
  {variety_short: 'YM', variety: 'Yellow Mallee'}
];


class VarietySeeder {
  async run () {
    for(let i = 0; i < varieties.length; i++) {
      await await Variety.create(varieties[i]);
    }
  }
}

module.exports = VarietySeeder
