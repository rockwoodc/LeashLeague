DROP TABLE IF EXISTS small_dogs;
DROP TABLE IF EXISTS medium_dogs;
DROP TABLE IF EXISTS large_dogs;
DROP TABLE IF EXISTS calm_dogs;
DROP TABLE IF EXISTS energetic_dogs;
DROP TABLE IF EXISTS hypoallergenic_dogs;
DROP TABLE IF EXISTS family_dogs;
DROP TABLE IF EXISTS guard_dogs;

CREATE TABLE small_dogs (
    breed VARCHAR(30) NOT NULL
)

CREATE TABLE medium_dogs (
    breed VARCHAR(30) NOT NULL
)

CREATE TABLE large_dogs (
    breed VARCHAR(30) NOT NULL
)

CREATE TABLE calm_dogs (
    breed VARCHAR(30) NOT NULL
)

CREATE TABLE energetic_dogs (
    breed VARCHAR(30) NOT NULL
)

CREATE TABLE hypoallergenic_dogs (
    breed VARCHAR(30) NOT NULL
)

CREATE TABLE family_dogs (
    breed VARCHAR(30) NOT NULL
)

CREATE TABLE guard_dogs (
    breed VARCHAR(30) NOT NULL
)
