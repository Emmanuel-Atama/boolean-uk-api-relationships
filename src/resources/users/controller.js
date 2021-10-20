const prisma = require("../../utils/database")

async function getAll (req, res) {
    try {
        const user = await prisma.user.findMany()
        res.json({ data: user })
 } catch (error) {
   console.error({error})  
 
   res.status(500).json({ error: error.message})
 }
}
module.exports = { getAll }