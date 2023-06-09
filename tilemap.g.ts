// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000001000000000000000000000000000000010000000000000000000000000000000100000000000000000000000000000001000000000000000000000000000000010000000000000000000000000000000100000000000000000000000000000501000000000000000000000000000000010000000000000200000000000000000100000000000000000000000000000001000000000000000000000000000005010000000000000000000000000000000100000000000000000000000000000001000000000000000000000000000000010000000000000000000000000000000100000003040304030403040304030403040304`, img`
. . . . . . . . . . . . 2 . . . 
. . . . . . . . . . . . 2 . . . 
. . . . . . . . . . . . 2 . . . 
. . . . . . . . . . . . 2 . . . 
. . . . . . . . . . . . 2 . . . 
. . . . . . . . . . . . 2 . . . 
. . . . . . . . . . . . 2 . . . 
. . . . . . . . . . . . 2 . . . 
. . . . . . . . . . . . 2 . . . 
. . . 2 . . . . . . . . 2 . . . 
. . . . . . . . . . . . 2 . . . 
. . . . . . . . . . . . 2 . . . 
. . . . . . . . . . . . 2 . . . 
. . . . . . . . . . . . 2 . . . 
. . . . . . . . . . . . 2 . . . 
. . . . . . . . . . . . 2 . . . 
`, [myTiles.transparency16,sprites.builtin.brick,sprites.dungeon.collectibleInsignia,sprites.dungeon.hazardLava0,sprites.dungeon.hazardLava1,myTiles.tile1], TileScale.Sixteen);
            case "level0":
            case "level3":return tiles.createTilemap(hex`1000100000000000000000000000000001000000000000000000000000000000010000000000000000000000000000000100000000000000000000000000000601000000000000000000000000000000010000000000000000000000000000000100000000000000000000000000000501000000000000000000000000000000010000000000000200000000000000000100000000000000000000000000000001000000000000000000000000000000010000000000000000000000000000000100000000000000000000000000000501000000000000000000000000000000010000000000000000000000000000000100000003040304030403040304030403040304`, img`
. . . . . . . . . . . . 2 . . . 
. . . . . . . . . . . . 2 . . . 
. . . . . . . . . . . . 2 . . . 
. . . . . . . . . . . 2 2 . . . 
. . . . . . . . . . . . 2 . . . 
. . . . . . . . . . . . 2 . . . 
. . . . . . . . . . . . 2 . . . 
. . . . . . . . . . . 2 2 . . . 
. . . . . . . . . . . . 2 . . . 
. . . 2 . . . . . . . . 2 . . . 
. . . . . . . . . . . . 2 . . . 
. . . . . . . . . . . . 2 . . . 
. . . . . . . . . . . . 2 . . . 
. . . . . . . . . . . 2 2 . . . 
. . . . . . . . . . . . 2 . . . 
. . . . . . . . . . . . 2 . . . 
`, [myTiles.transparency16,sprites.builtin.brick,sprites.dungeon.collectibleInsignia,sprites.dungeon.hazardLava0,sprites.dungeon.hazardLava1,myTiles.tile1,myTiles.tile2], TileScale.Sixteen);
            case "level4":
            case "level4":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004040404040404040404040404040404`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.hazardLava0], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000400000000000000000000000000000004000000000000000000000000000000040000000000000000000000000000000400000000000000000000000000000004000000000000000000000000000000040000000000000000000000000000000400000000000000050000000000000104000000000000000000000000000000040000000000000000000004000000000400000000000000000000040000000004000000000000000000000400000000040000000000000000000004000000000400000000000000000000000000000004000000000000000000000000000000040000000003020302030203020302030203020302`, img`
. . . . . . . . . . . 2 . . . . 
. . . . . . . . . . . 2 . . . . 
. . . . . . . . . . . 2 . . . . 
. . . . . . . . . . . 2 . . . . 
. . . . . . . . . . . 2 . . . . 
. . . . . . . . . . . 2 . . . . 
. . . . . . . . . . . 2 . . . . 
. . . . . . . . . . . 2 . . . . 
. . . 2 . . . . . . . 2 . . . . 
. . . . . . 2 . . . . 2 . . . . 
. . . . . . 2 . . . . 2 . . . . 
. . . . . . 2 . . . . 2 . . . . 
. . . . . . 2 . . . . 2 . . . . 
. . . . . . . . . . . 2 . . . . 
. . . . . . . . . . . 2 . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile1,sprites.dungeon.hazardLava0,sprites.dungeon.hazardLava1,sprites.builtin.brick,sprites.dungeon.collectibleInsignia], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
