const Reminders = require('../models/reminders');
const {Op} = require('sequelize');


const createReminder = async(req,res)=> {
    const {body} = req;

    // const data = await Reminders.findAll({})

    // body.id = data.length + 1

    const newReminder = await Reminders.create(body)

    return res.status(201).json(newReminder)
}

const getAllReminders = async(req,res)=> {
    const {user,after} = req.query

    

    let data = []

     if(user && after) {
        data = await Reminders.findAll({
            where: {
                [Op.and]: [{date: {[Op.gte]: new Date(Number(after)).toISOString()}},{user}]
            },
        })
    } 
    else if(user) {

        data = await Reminders.findAll({
            where: {
                user,
            },
        })

    }
    else if(after) {

        console.log()
        data = await Reminders.findAll({
            where: {
               date: {[Op.gte]: new Date(Number(after)).toISOString()},
            }

          

            
        })

        console.log(data)
    }
   
    else {
        data = await Reminders.findAll({
            order: [ ['id', 'ASC'],],
        })
    }
   

    return res.status(200).json(data)
}

const patchReminder = (req,res)=> {
    return res.status(405).send('you cannot modify this resource')


}

const getReminderById = async (req,res)=> {
    const id = req.params.id

    const data = await Reminders.findOne({id})

    if(!data) {
        return res.status(404).send(`ID not found`)
    }

    return res.status(200).json(data)
}


const putReminder = (req,res)=> {
    return res.status(405).send('you cannot modify this resource')


}


const deleteReminder = (req,res)=> {
    return res.status(405).send('you cannot modify this resource')


}

module.exports = {

    createReminder,
    getAllReminders,
    patchReminder,
    putReminder,
    deleteReminder,
    getReminderById
   
}
