DROP TABLE IF EXISTS musicians;

CREATE TABLE musicians (
    id SERIAL PRIMARY KEY,
    name VARCHAR (30) NOT NULL,
    albums VARCHAR (100) NOT NULL,
    age INTEGER NOT NULL
);


INSERT INTO musicians (name, albums, age) VALUES ('John Coltrane','A Love Supreme', '41');
INSERT INTO musicians (name, albums, age) VALUES ('Thelonious Monk', 'Straight No Chaser', '64');
INSERT INTO musicians (name, albums, age) VALUES ('Miles Davis', 'Kind Of Blue', '65');
INSERT INTO musicians (name, albums, age) VALUES ('Duke Ellington', 'Money Jungle', '75');
INSERT INTO musicians (name, albums, age) VALUES ('Charles Mingus', 'Tonight at Noon', '56');
INSERT INTO musicians (name, albums, age) VALUES ('Sonny Rollins', 'Way Out West', '90');