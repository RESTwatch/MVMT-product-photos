CREATE KEYSPACE IF NOT EXISTS watches WITH REPLICATION = {'class':'SimpleStrategy', 'replication_factor':1};
USE watches;
CREATE TABLE IF NOT EXISTS watches.photos (
    id bigint,
    name ascii,
    frontImg ascii,
    sideImg ascii,
    backImg ascii,
    box ascii,
    styleImg ascii,
    PRIMARY KEY (id));
CREATE INDEX photos_name ON watches.photos (name);