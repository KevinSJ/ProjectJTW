-- Table: public."Relations"

-- DROP TABLE public."Relations";

CREATE TABLE public."Relations"
(
  relation character varying,
  source integer,
  target integer,
  id integer NOT NULL,
  CONSTRAINT "Relations_pkey" PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE public."Relations"
  OWNER TO postgres;
