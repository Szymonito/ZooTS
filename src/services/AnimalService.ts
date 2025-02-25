import {promises as fs} from 'fs'
import path from 'path'
import {Animal} from "../models/animal"

const dataDir = path.join(__dirname, '../data')
const filePath = path.join(dataDir, "../zoo.json")