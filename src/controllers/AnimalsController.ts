import * as AnimalService from "./services/AnimalsService.js";

export const getAllAnimals = async (req, res) => {
    try {
        const animals = await AnimalService.getAllAnimals()
        res.json(animals)
    }
    catch (error) {
        res.status(500).json({error: "sadasdasdas" + error.message})
    }
}

export const getAnimalById = async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const animal = await AnimalService.getAnimalById(id)
    }
    catch (error) {
        res.status(500).json({error: "dsada" +error.message})
    }
}

export const getEndangeredAnimals = async (req, res) => {
    console.log("ladowanie z xyz")
    try {
        const animals = await AnimalService.getEndangeredAnimals()
        res.json(animals)
    }
    catch (error) {
        res.status(500).json({error: "dsaieasd" + error.message})
    }
}

export const getAnimalsByHabitat = async (req, res) => {
    try {
        const habitat = req.params.habitat
        const animals = await AnimalService.getAnimalsByHabitat(habitat)
        res.json(animals)
    }
    catch (error) {
        res.status(500).json({error: "dsadasdas" + error.message})
    }
}

export const getAnimalsBySpecies = async (req, res) => {
    try {
        const species = req.params.species
        const animals = await AnimalService.getAnimalsBySpecies(species)
        res.json(animals)
    }
    catch (error) {
        res.status(500).json({error: "dsadasdsa" + error.message})
    }
}

export const addAnimal = async (req, res) => {
    try {
        const animalData = req.body
        const  newAnimal = await AnimalService.addAnimal(animalData)
        res.status(201).json(newAnimal)
    }
    catch (error) {
        res.status(500).json({error: "dsadasdsa" + error.message})
    }
}

export const updateAnimal = async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const animalData = req.body
        const updatedAnimal = await AnimalService.updateAnimal(id. animalData)
        if(!updatedAnimal) {
            res.status(404).json({error: "csaidjais  (updateAnimal function)"})
        }
    }
    catch (error) {
        res.status(500).json({error: "cos tam cos tam" + error.message})
    }
}

export const deleteAnimal = async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const deleted = await AnimalService.deleteAnimal(id)
        if(!deleted) {
            res.status(404).json({error: "cos tam cos tam" + error.message})
        }
        res.status(204).json(deleted)
    }
    catch (error) {
        res.status(500).json({error: "cos tam cos tam" + error.message})
    }

}