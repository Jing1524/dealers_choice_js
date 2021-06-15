
const Sequelize = require('sequelize');
const STRING = Sequelize.DataTypes.STRING;
const UUID = Sequelize.DataTypes.UUID;
const UUIDV4 = Sequelize.DataTypes.UUIDV4; // UUIDV4 is a function that generates the UUID
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres: //localhost/musicians_db');



const musicians = ['monk', 'davis', 'coltrane', 'duke'];
const albums = ['Ruby My Dear', 'Kind Of Blue', 'A Love Supreme', 'Money Jungle'];
const bios = [
    "Thelonious Sphere Monk was an American jazz pianist and composer.He had a unique improvisational style and made numerous contributions to the standard jazz repertoire, including Round Midnight, Blue Monk,Straight, No Chaser, Ruby, My Dear, In Walked Bud, and Well, You Needn't. Monk is the second-most-recorded jazz composer after Duke Ellington",
    "Miles Dewey Davis III  was an American trumpeter, bandleader, and composer. He is among the most influential and acclaimed figures in the history of jazz and 20th-century music. Davis adopted a variety of musical directions in a five-decade career that kept him at the forefront of many major stylistic developments in jazz.",
    "John William Coltrane  was an American jazz saxophonist and composer. Working in the bebop and hard bop idioms early in his career, Coltrane helped pioneer the use of modes and was at the forefront of free jazz. He led at least fifty recording sessions and appeared on many albums by other musicians, including trumpeter Miles Davis and pianist Thelonious Monk. Over the course of his career, Coltrane's music took on an increasingly spiritual dimension, as exemplified on his most acclaimed albums A Love Supreme (1965) and Ascension (1966). He remains one of the most influential saxophonists in music history. He received numerous posthumous awards, including a Pulitzer Prize in 2007, and was canonized by the African Orthodox Church.[1] His second wife was pianist and harpist Alice Coltrane. The couple had three children: John Jr. (1964–1982), a bassist; Ravi (born 1965), a saxophonist; and Oran (born 1967), also a saxophonist.",
    "Edward Kennedy Duke Ellington was an American composer, pianist, and leader of a jazz orchestra, which he led from 1923 until his death over a career spanning more than six decades.Born in Washington, D.C., Ellington was based in New York City from the mid-1920s onward and gained a national profile through his orchestra's appearances at the Cotton Club in Harlem. In the 1930s, his orchestra toured in Europe. Although widely considered a pivotal figure in the history of jazz, Ellington embraced the phrase beyond category as a liberating principle and referred to his music as part of the more general category of American Music."
];

const Musician = conn.define("musician", {
    id:{
        type:UUID,
        primaryKey: true,
        defaultValue:UUIDV4
    },

    name: {
        type: STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    }
});

const Album = conn.define("album",{
    id:{
        type:UUID,
        primaryKey: true,
        defaultValue: UUIDV4
    },

    name: {
        type:STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
});


const Bio = conn.define("bio",{
    id: {
        type:UUID,
        primaryKey: true,
        defaultValue: UUIDV4
    },
    text:{
        type:STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
})

Album.belongsTo(Musician);
Bio.belongsTo(Musician);

const syncAndSeed = async()=> {
    await conn.sync({force:true});
    const [monk, davis, coltrane, duke] = await Promise.all (musicians.map(name => Musician.create( {name})));
  
    const [RubyMyDear, KindOfBlue, ALoveSupreme, MoneyJungle] = 
    await Promise.all (albums.map(album_name => Facility.create( {album_name})));

    //for bio

    // await Promise.all(bio.map(text=> Bio.create({text}))); //??

}


module.exports = {
    syncAndSeed,
    models: {
        Musician,
        Album,
        Bio
    }
}