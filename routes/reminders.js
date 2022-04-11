const router = require('express').Router();
const controller = require('../controllers/reminders');

router.post('/',controller.createReminder)
router.get('/',controller.getAllReminders)
router.get('/:id',controller.getReminderById)
router.patch('/:id',controller.patchReminder)
router.put('/:id',controller.putReminder)
router.delete('/:id',controller.deleteReminder)


module.exports = router;
