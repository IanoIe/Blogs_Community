-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Blogs_Community
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema Blogs_Community
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Blogs_Community` DEFAULT CHARACTER SET utf8 ;
USE `Blogs_Community` ;

-- -----------------------------------------------------
-- Table `Blogs_Community`.`Utilizador`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Blogs_Community`.`Utilizador` (
  `idUtilizador` INT NOT NULL AUTO_INCREMENT,
  `nomeUtilizador` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `senha` VARCHAR(45) NULL,
  PRIMARY KEY (`idUtilizador`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Blogs_Community`.`Post`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Blogs_Community`.`Post` (
  `idPost` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(45) NULL,
  `texto` VARCHAR(200) NULL,
  `dataCriacaoPost` DATETIME(6) NULL,
  `Utilizador_idUtilizador` INT NOT NULL,
  PRIMARY KEY (`idPost`, `Utilizador_idUtilizador`),
  INDEX `fk_Post_Utilizador_idx` (`Utilizador_idUtilizador` ASC) VISIBLE,
  CONSTRAINT `fk_Post_Utilizador`
    FOREIGN KEY (`Utilizador_idUtilizador`)
    REFERENCES `Blogs_Community`.`Utilizador` (`idUtilizador`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Blogs_Community`.`Comentarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Blogs_Community`.`Comentarios` (
  `idComentarios` INT NOT NULL AUTO_INCREMENT,
  `comentario` VARCHAR(200) NULL,
  `dataComentario` TIMESTAMP(6) NULL,
  `Utilizador_idUtilizador` INT NOT NULL,
  `Post_idPost` INT NOT NULL,
  PRIMARY KEY (`idComentarios`, `Utilizador_idUtilizador`, `Post_idPost`),
  INDEX `fk_Comentarios_Utilizador1_idx` (`Utilizador_idUtilizador` ASC) VISIBLE,
  INDEX `fk_Comentarios_Post1_idx` (`Post_idPost` ASC) VISIBLE,
  CONSTRAINT `fk_Comentarios_Utilizador1`
    FOREIGN KEY (`Utilizador_idUtilizador`)
    REFERENCES `Blogs_Community`.`Utilizador` (`idUtilizador`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Comentarios_Post1`
    FOREIGN KEY (`Post_idPost`)
    REFERENCES `Blogs_Community`.`Post` (`idPost`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Blogs_Community`.`Galeria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Blogs_Community`.`Galeria` (
  `idGaleria` INT NOT NULL AUTO_INCREMENT,
  `descricao` VARCHAR(250) NULL,
  `dataCriacaoGaleria` TIMESTAMP(6) NULL,
  PRIMARY KEY (`idGaleria`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Imagem`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Blogs_Community`.`Imagem` (
  `idImagem` INT NOT NULL AUTO_INCREMENT,
  `nomeImagem` VARCHAR(45) NULL,
  `urlImagem` VARCHAR(200) NULL,
  `dataCriacaoImagem` TIMESTAMP(6) NULL,
  `Post_idPost` INT NOT NULL,
  PRIMARY KEY (`idImagem`, `Post_idPost`),
  INDEX `fk_Imagem_Post1_idx` (`Post_idPost` ASC) VISIBLE,
  CONSTRAINT `fk_Imagem_Post1`
    FOREIGN KEY (`Post_idPost`)
    REFERENCES `Blogs_Community`.`Post` (`idPost`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Blogs_Community`.`Utilizador_Galeria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Blogs_Community`.`Utilizador_Galeria` (
  `Utilizador_idUtilizador` INT NOT NULL AUTO_INCREMENT,
  `Galeria_idGaleria` INT NOT NULL,
  PRIMARY KEY (`Utilizador_idUtilizador`, `Galeria_idGaleria`),
  INDEX `fk_Utilizador_Galeria_Galeria1_idx` (`Galeria_idGaleria` ASC) VISIBLE,
  INDEX `fk_Utilizador_Galeria_Utilizador1_idx` (`Utilizador_idUtilizador` ASC) VISIBLE,
  CONSTRAINT `fk_Utilizador_Galeria_Utilizador1`
    FOREIGN KEY (`Utilizador_idUtilizador`)
    REFERENCES `Blogs_Community`.`Utilizador` (`idUtilizador`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Utilizador_Galeria_Galeria1`
    FOREIGN KEY (`Galeria_idGaleria`)
    REFERENCES `Blogs_Community`.`Galeria` (`idGaleria`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Blogs_Community`.`Galeria_Imagem`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Blogs_Community`.`Galeria_Imagem` (
  `Galeria_idGaleria` INT NOT NULL AUTO_INCREMENT,
  `Imagem_idImagem` INT NOT NULL,
  PRIMARY KEY (`Galeria_idGaleria`, `Imagem_idImagem`),
  INDEX `fk_Galaria_Imagem_Imagem1_idx` (`Imagem_idImagem` ASC) VISIBLE,
  INDEX `fk_Galeria_Imagem_Galeria1_idx` (`Galeria_idGaleria` ASC) VISIBLE,
  CONSTRAINT `fk_Galeria_Imagem_Galeria1`
    FOREIGN KEY (`Galeria_idGaleria`)
    REFERENCES `Blogs_Community`.`Galeria` (`idGaleria`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Galeria_Imagem_Imagem1`
    FOREIGN KEY (`Imagem_idImagem`)
    REFERENCES `Blogs_Community`.`Imagem` (`idImagem`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

