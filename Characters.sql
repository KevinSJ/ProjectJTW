-- Table: public."Characters"

-- DROP TABLE public."Characters";

CREATE TABLE public."Characters"
(
  "Name" character varying,
  "Trait" character varying,
  "Image" character varying,
  "Description" character varying,
  "Importance" character varying,
  "ID" integer NOT NULL,
  CONSTRAINT "Characters_pkey" PRIMARY KEY ("ID")
)
WITH (
  OIDS=FALSE
);
ALTER TABLE public."Characters"
  OWNER TO postgres;
