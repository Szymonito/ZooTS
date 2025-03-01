import {promises as fs} from 'fs'
import path from 'path'
import {Animal} from "../models/animal"

const dataDir = path.join(__dirname, '../data')
const filePath = path.join(dataDir, "../zoo.json")

async function loadData(): Promise<Animal[]> {
    try{
        console.log('Load Data from' + filePath);
        const data = await fs.readFile(filePath, 'utf8')
        console.log(JSON.parse(data))
        return JSON.parse(data)
    }
    catch(err){
        if(err instanceof Error){
            throw new Error ("nie udalo sie zaladowac zoo.json" + err.message)
        }
        return[]
    }
}

async function saveData(animals: Animal[]){
    try{
        await fs.writeFile(filePath, JSON.stringify(animals, null, 2), 'utf8')
    }
    catch(err){
        if(err instanceof Error){
            throw new Error("nie udalo sie zapisac zoo.json" + err.message)
        }
    }
}

export const getAllAnimals = async (): Promise<Animal[]> => {
    return.await loadData()
}

export const getAnimalById = async (id:number): Promise<Animal | undefined> => {
    try{
        const animals = await loadData()
        return animals.find((animal) => animal.id === id)
    }
    catch(err){
        if(err instanceof Error){
            throw new Error("nie udalo sie wczytac z AnimalService.js (getAnimalById function):" + err.message)
        }
    }
}

export const getAnimalBySpecies = async (species:string) => {
    try{
        const animals = await loadData()
        return animals.filter(animal => animal.species.toLowerCase() === species.toLowerCase())
    }
    catch(err){
        if(err instanceof Error){
            throw new Error("nie udalo sie zaladowac AnimalService.js (getAnimalsBySpecies function):" + err.message)
        }
    }
}

export const addAnimal = async (animal: Omit<Animal, "id">) => {
    const animals = await loadData()
    const newAnimal = {
        id: animals.length > 0 ? animals[animals.length - 1].id +1 : 1,
        ...animal
    }
    animals.push(newAnimal)
    await saveData(animals)
    return newAnimal
}





